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
 * @property string $defaultValue The value of the "default value" attribute.
 * @property string $placeholder The value of the "placeholder" attribute.
 */
class TextareaInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The value of the "default value" attribute.
     * @param string $placeholder The value of the "placeholder" attribute.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        string $placeholder = '',
    )
    {
        $this->set(self::DEFAULT_VALUE, $defaultValue);
        $this->set(self::PLACEHOLDER, $placeholder);

        parent::__construct(InputTypeEnum::TEXTAREA->value);
    }

    #endregion

    #region CONSTANTS

    /**
     * The name of the "placeholder" attribute.
     *
     * @var string
     */
    public const PLACEHOLDER = 'placeholder';

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public static function getInputForm(?string $prefix = null): array
    {
        return [
            new FieldData(
                id: self::DEFAULT_VALUE,
                prefix: $prefix,
                input: new TextInputData(),
            ),
            new FieldData(
                id: self::PLACEHOLDER,
                prefix: $prefix,
                input: new TextInputData(),
            ),
        ];
    }

    #endregion
}
