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
 * @property string $defaultValue The "default value" attribute of the input.
 * @property bool $multiple The "multiple" attribute of the input.
 * @property string $placeholder The "placeholder" attribute of the input.
 * @property string|null $autoComplete The "auto complete" attribute of the input.
 */
class EmailInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The "default value" attribute of the input.
     * @param bool $multiple The "multiple" attribute of the input.
     * @param string $placeholder The "placeholder" attribute of the input.
     * @param string|null $autoComplete The "auto complete" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        bool $multiple = false,
        string $placeholder = '',
        ?string $autoComplete = null,
    )
    {
        $this->set('autoComplete', $autoComplete);
        $this->set('defaultValue', $defaultValue);
        $this->set('multiple', $multiple);
        $this->set('placeholder', $placeholder);

        parent::__construct(InputTypeEnum::EMAIL->value);
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
                input: new EmailInputData(),
            ),
            new FieldData(
                id: 'placeholder',
                prefix: $prefix,
                input: new TextInputData(),
            ),
            new FieldData(
                id: 'autoComplete',
                prefix: $prefix,
                input: new TextInputData(),
            ),
            new FieldData(
                id: 'multiple',
                prefix: $prefix,
                input: new SwitchInputData(),
            ),
        ];
    }

    #endregion
}
