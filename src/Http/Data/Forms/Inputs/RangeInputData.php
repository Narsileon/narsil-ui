<?php

namespace Narsil\Base\Http\Data\Forms\Inputs;

#region USE

use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\InputData;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property integer $defaultValue The "default value" attribute of the input.
 * @property integer $max The "max" attribute of the input.
 * @property integer $min The "min" attribute of the input.
 * @property float $step The "step" attribute of the input.
 */
class RangeInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param integer $defaultValue The "default value" attribute of the input.
     * @param integer $max The "max" attribute of the input.
     * @param integer $min The "min" attribute of the input.
     * @param float $step The "step" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        int $defaultValue = 0,
        int $max = 100,
        int $min = 0,
        float $step = 1,
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('max', $max);
        $this->set('min', $min);
        $this->set('step', $step);

        parent::__construct(InputTypeEnum::RANGE->value);
    }

    #endregion
}
