<?php

namespace Narsil\Base\Http\Data\TanStackTables;

#region USE

use Illuminate\Support\Fluent;
use Illuminate\Support\Str;
use Narsil\Base\Enums\OperatorEnum;
use Narsil\Base\Helpers\Translator;
use Narsil\Base\Http\Data\Forms\Inputs\CheckboxInputData;
use Narsil\Base\Http\Data\Forms\Inputs\DateInputData;
use Narsil\Base\Http\Data\Forms\Inputs\DatetimeInputData;
use Narsil\Base\Http\Data\Forms\Inputs\MonthInputData;
use Narsil\Base\Http\Data\Forms\Inputs\NumberInputData;
use Narsil\Base\Http\Data\Forms\Inputs\RangeInputData;
use Narsil\Base\Http\Data\Forms\Inputs\SwitchInputData;
use Narsil\Base\Http\Data\Forms\Inputs\TimeInputData;
use Narsil\Base\Http\Data\Forms\Inputs\WeekInputData;

#endregion

/**
 * @author Jonathan Rigaux
 *
 * @property string $id The id of the column.
 * @property string $type The type of the column.
 * @property string|null $accessorKey The accessor key of the column.
 * @property string|null $header The header of the column.
 * @property boolean $enableColumnFilter The filterability of the column.
 * @property boolean $visibility The visibility of the column.
 */
class ColumnDefData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string $id
     * @param string $type
     * @param string|null $accessorKey
     * @param string|null $header
     * @param boolean $enableColumnFilter
     * @param boolean $visibility
     *
     * @return void
     */
    public function __construct(
        string $id,
        string $type,
        ?string $accessorKey = null,
        ?string $header = null,
        bool $enableColumnFilter = true,
        bool $visibility = false,
    )
    {
        if (empty($accessorKey))
        {
            $accessorKey = $id;
        }

        if (empty($header))
        {
            $header = $this->getHeader($id);
        }

        $this->set('accessorKey', $accessorKey);
        $this->set('enableColumnFilter', $enableColumnFilter);
        $this->set('header', $header);
        $this->set('id', $id);
        $this->set('visibility', $visibility);

        $this->set('meta', [
            'operators' => $this->getOperators($type),
            'type' => $type,
        ]);
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * Get the header of the column.
     *
     * @param string $column
     *
     * @return string
     */
    protected function getHeader(string $column): string
    {
        if (Str::endsWith($column, '_id'))
        {
            $column = Str::replace('_id', '', $column);
        }

        $key = "validation.attributes.$column";

        $translation = Translator::trans($key);

        if ($translation === $key)
        {
            $translation = $column;
        }
        else
        {
            $translation = Str::ucfirst($translation);
        }

        return $translation;
    }

    /**
     * Get the operators of the column.
     *
     * @param string $type The type of the column.
     *
     * @return array
     */
    protected function getOperators(string $type): array
    {
        $operators = [];

        switch ($type)
        {
            case CheckboxInputData::TYPE:
            case SwitchInputData::TYPE:
                $operators = [
                    OperatorEnum::option(OperatorEnum::EQUALS),
                    OperatorEnum::option(OperatorEnum::NOT_EQUALS),
                ];
                break;
            case DateInputData::TYPE:
            case DatetimeInputData::TYPE:
            case MonthInputData::TYPE:
            case TimeInputData::TYPE:
            case WeekInputData::TYPE:
                $operators = [
                    OperatorEnum::option(OperatorEnum::EQUALS),
                    OperatorEnum::option(OperatorEnum::NOT_EQUALS),
                    OperatorEnum::option(OperatorEnum::BEFORE),
                    OperatorEnum::option(OperatorEnum::BEFORE_OR_EQUAL),
                    OperatorEnum::option(OperatorEnum::AFTER),
                    OperatorEnum::option(OperatorEnum::AFTER_OR_EQUAL),
                ];
                break;
            case NumberInputData::TYPE:
            case RangeInputData::TYPE:
                $operators = [
                    OperatorEnum::option(OperatorEnum::EQUALS),
                    OperatorEnum::option(OperatorEnum::NOT_EQUALS),
                    OperatorEnum::option(OperatorEnum::GREATER_THAN),
                    OperatorEnum::option(OperatorEnum::GREATER_THAN_OR_EQUAL),
                    OperatorEnum::option(OperatorEnum::LESS_THAN),
                    OperatorEnum::option(OperatorEnum::LESS_THAN_OR_EQUAL),

                ];
                break;
            default:
                $operators = [
                    OperatorEnum::option(OperatorEnum::EQUALS),
                    OperatorEnum::option(OperatorEnum::NOT_EQUALS),
                    OperatorEnum::option(OperatorEnum::CONTAINS),
                    OperatorEnum::option(OperatorEnum::NOT_CONTAINS),
                    OperatorEnum::option(OperatorEnum::STARTS_WITH),
                    OperatorEnum::option(OperatorEnum::ENDS_WITH),
                    OperatorEnum::option(OperatorEnum::DOESNT_START_WITH),
                    OperatorEnum::option(OperatorEnum::DOESNT_END_WITH),
                ];
                break;
        };

        return $operators;
    }

    #endregion
}
