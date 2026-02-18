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
 * @property string $defaultValue The "default value" attribute of the input.
 * @property string $placeholder The "placeholder" attribute of the input.
 */
class SelectInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The "default value" attribute of the input.
     * @param string $placeholder The "placeholder" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        string $placeholder = '',
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('placeholder', $placeholder);

        parent::__construct(InputTypeEnum::SELECT->value);
    }

    #endregion
}
