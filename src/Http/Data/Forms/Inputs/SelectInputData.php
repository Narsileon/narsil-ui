<?php

namespace Narsil\Base\Http\Data\Forms\Inputs;

#region USE

use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Support\TranslationsBag;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $defaultValue The "default value" attribute of the input.
 * @property string $placeholder The "placeholder" attribute of the input.
 * @property OptionData $options The "options" attribute of the input.
 */
class SelectInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The "default value" attribute of the input.
     * @param string $placeholder The "placeholder" attribute of the input.
     * @param OptionData $options The "options" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        string $placeholder = '',
        array $options = []
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('options', $options);
        $this->set('placeholder', $placeholder);

        parent::__construct(InputTypeEnum::SELECT->value);
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
                id: 'options',
                input: new TableInputData(
                    columns: [
                        new FieldData(
                            id: 'value',
                            required: true,
                            input: new TextInputData(),
                        ),
                        new FieldData(
                            id: 'label',
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
