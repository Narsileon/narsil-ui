<?php

namespace Narsil\Base\Http\Data\TanStackTables;

#region USE

use Illuminate\Support\Fluent;
use Illuminate\Support\Str;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Enums\OperatorEnum;
use Narsil\Base\Helpers\Translator;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $accessorKey The accessor key of the column.
 * @property string $header The header of the column.
 * @property string $id The id of the column.
 * @property string $type The type of the column.
 * @property boolean $visibility The visibility of the column.
 */
class ColumnDefData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string $id
     * @param InputTypeEnum $type
     * @param string|null $accessorKey
     * @param boolean $enableColumnFilter
     * @param string|null $header
     * @param boolean $visibility
     *
     * @return void
     */
    public function __construct(
        string $id,
        InputTypeEnum $type,
        ?string $accessorKey = null,
        ?bool $enableColumnFilter = true,
        ?string $header = null,
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
            'operators' => $this->getOperators($type->value),
            'type' => $type->value,
        ]);
    }

    #endregion

    #region PUBLIC METHODS

    /**
     * @param string $column
     *
     * @return string
     */
    public function getHeader(string $column): string
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
    public function getOperators(string $type): array
    {
        $operators = [];

        switch ($type)
        {
            case InputTypeEnum::CHECKBOX->value:
                $operators = [
                    OperatorEnum::option(OperatorEnum::EQUALS),
                    OperatorEnum::option(OperatorEnum::NOT_EQUALS),
                ];
                break;
            case InputTypeEnum::DATE->value:
            case InputTypeEnum::DATETIME->value:
            case InputTypeEnum::TIME->value:
                $operators = [
                    OperatorEnum::option(OperatorEnum::EQUALS),
                    OperatorEnum::option(OperatorEnum::NOT_EQUALS),
                    OperatorEnum::option(OperatorEnum::BEFORE),
                    OperatorEnum::option(OperatorEnum::BEFORE_OR_EQUAL),
                    OperatorEnum::option(OperatorEnum::AFTER),
                    OperatorEnum::option(OperatorEnum::AFTER_OR_EQUAL),
                ];
                break;
            case InputTypeEnum::NUMBER->value:
                $operators = [
                    OperatorEnum::option(OperatorEnum::EQUALS),
                    OperatorEnum::option(OperatorEnum::NOT_EQUALS),
                    OperatorEnum::option(OperatorEnum::GREATER_THAN),
                    OperatorEnum::option(OperatorEnum::GREATER_THAN_OR_EQUAL),
                    OperatorEnum::option(OperatorEnum::LESS_THAN),
                    OperatorEnum::option(OperatorEnum::LESS_THAN_OR_EQUAL),

                ];
                break;
            case InputTypeEnum::TEXT->value:
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
