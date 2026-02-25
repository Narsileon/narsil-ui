<?php

namespace Narsil\Base\Http\Data\Forms\Inputs;

#region USE

use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Http\Data\OptionData;
use Narsil\Base\Support\TranslationsBag;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $defaultValue The value of the "default value" attribute.
 * @property boolean $multiple The value of the "multiple" attribute.
 * @property string $placeholder The value of the "placeholder" attribute.
 * @property OptionData $options The value of the "options" attribute.
 */
class SelectInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The value of the "default value" attribute.
     * @param boolean $multiple The value of the "multiple" attribute.
     * @param string $placeholder The value of the "placeholder" attribute.
     * @param OptionData $options The value of the "options" attribute.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        bool $multiple = false,
        string $placeholder = '',
        array $options = []
    )
    {
        $this->set(self::DEFAULT_VALUE, $defaultValue);
        $this->set(self::MULTIPLE, $multiple);
        $this->set(self::OPTIONS, $options);
        $this->set(self::PLACEHOLDER, $placeholder);

        parent::__construct(InputTypeEnum::SELECT->value);
    }

    #endregion

    #region CONSTANTS

    /**
     * The name of the "multiple" attribute.
     *
     * @var string
     */
    public const MULTIPLE = 'multiple';

    /**
     * The name of the "options" attribute.
     *
     * @var string
     */
    public const OPTIONS = 'options';

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
                id: self::MULTIPLE,
                prefix: $prefix,
                input: new SwitchInputData(),
            ),
            new FieldData(
                id: self::OPTIONS,
                input: new TableInputData(
                    columns: [
                        new FieldData(
                            id: OptionData::VALUE,
                            required: true,
                            input: new TextInputData(),
                        ),
                        new FieldData(
                            id: OptionData::LABEL,
                            required: true,
                            translatable: true,
                            input: new TextInputData(),
                        ),
                    ],
                ),
            ),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public static function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil::placeholders.choose')
            ->add('narsil::placeholders.search');
    }

    #endregion
}
