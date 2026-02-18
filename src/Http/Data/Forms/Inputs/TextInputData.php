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
 * @property integer $maxLength The "max length" attribute of the input.
 * @property integer $minLength The "min length" attribute of the input.
 * @property string $placeholder The "placeholder" attribute of the input.
 * @property integer|null $autoComplete The "auto complete" attribute of the input.
 */
class TextInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The "default value" attribute of the input.
     * @param integer $maxLength The "max length" attribute of the input.
     * @param integer $minLength The "min length" attribute of the input.
     * @param string $placeholder The "placeholder" attribute of the input.
     * @param integer|null $autoComplete The "auto complete" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        int $maxLength = 255,
        int $minLength = 0,
        string $placeholder = '',
        ?string $autoComplete = null,
    )
    {
        $this->set('autoComplete', $autoComplete);
        $this->set('defaultValue', $defaultValue);
        $this->set('maxLength', $maxLength);
        $this->set('minLength', $minLength);
        $this->set('placeholder', $placeholder);

        parent::__construct(InputTypeEnum::TEXT->value);
    }

    #endregion
}
