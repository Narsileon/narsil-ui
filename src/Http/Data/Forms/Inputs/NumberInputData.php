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
 * @property integer $defaultValue The "default value" attribute of the input.
 * @property float $step The "step" attribute of the input.
 * @property integer|null $max The "max" attribute of the input.
 * @property integer|null $min The "min" attribute of the input.
 */
class NumberInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param integer $defaultValue The "default value" attribute of the input.
     * @param float $step The "step" attribute of the input.
     * @param integer|null $max The "max" attribute of the input.
     * @param integer|null $min The "min" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        int $defaultValue = 0,
        float $step = 1,
        ?int $max = null,
        ?int $min = null,
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('max', $max);
        $this->set('min', $min);
        $this->set('step', $step);

        parent::__construct(InputTypeEnum::NUMBER->value);
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
                input: new NumberInputData(),
            ),
            new FieldData(
                id: 'min',
                prefix: $prefix,
                input: new NumberInputData(),
            ),
            new FieldData(
                id: 'max',
                prefix: $prefix,
                input: new NumberInputData(),
            ),
            new FieldData(
                id: 'step',
                prefix: $prefix,
                input: new NumberInputData(),
            ),
        ];
    }

    #endregion
}
