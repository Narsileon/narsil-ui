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
 * @property FieldData[] $form The "form" attribute of the input.
 * @property array $defaultValue The "default value" attribute of the input.
 * @property string $labelKey The "labelKey" attribute of the input.
 */
class ArrayInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param FieldData[] $form The "form" attribute of the input.
     * @param array $defaultValue The "default value" attribute of the input.
     * @param string $labelKey The "labelKey" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        array $form,
        array $defaultValue = [],
        string $labelKey = 'label',
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('form', $form);
        $this->set('labelKey', $labelKey);

        parent::__construct(InputTypeEnum::ARRAY->value);
    }

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritdoc}
     */
    public static function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil::ui.add')
            ->add('narsil::ui.collapse')
            ->add('narsil::ui.delete')
            ->add('narsil::ui.expand')
            ->add('narsil::ui.move_down')
            ->add('narsil::ui.move_up');
    }

    #endregion
}
