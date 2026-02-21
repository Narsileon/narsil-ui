<?php

namespace Narsil\Base\Http\Data\Forms\Inputs;

#region USE

use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\InputData;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string|null $defaultValue The "default value" attribute of the input.
 * @property string|null $max The "max" attribute of the input.
 * @property string|null $min The "min" attribute of the input.
 */
class DatetimeInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string|null $defaultValue The "default value" attribute of the input.
     * @param string|null $max The "max" attribute of the input.
     * @param string|null $min The "min" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        ?string $defaultValue = null,
        ?string $max = null,
        ?string $min = null,
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('max', $max);
        $this->set('min', $min);

        parent::__construct(InputTypeEnum::DATETIME->value);
    }

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public static function form(?string $prefix = null): array
    {
        return [
            new FieldData(
                id: 'defaultValue',
                prefix: $prefix,
                input: new DatetimeInputData(),
            ),
            new FieldData(
                id: 'min',
                prefix: $prefix,
                input: new DatetimeInputData(),
            ),
            new FieldData(
                id: 'max',
                prefix: $prefix,
                input: new DatetimeInputData(),
            ),
        ];
    }

    #endregion
}
