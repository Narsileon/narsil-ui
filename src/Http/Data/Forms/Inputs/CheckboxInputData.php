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
 * @property boolean $defaultValue The "default value" attribute of the input.
 * @property OptionData[]|null $options The "options" attribute of the input.
 */
class CheckboxInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param boolean $defaultValue The "default value" attribute of the input.
     * @param OptionData[]|null $options The "options" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        bool $defaultValue = false,
        ?array $options = null,
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('options', $options);

        parent::__construct(InputTypeEnum::CHECKBOX->value);
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
                input: new CheckboxInputData(),
            ),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public static function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil::ui.all');
    }

    #endregion
}
