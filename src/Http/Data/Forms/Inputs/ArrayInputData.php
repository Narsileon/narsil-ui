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
 * @property array $defaultValue The value of the "default value" attribute.
 * @property string $labelPath The value of the "label path" attribute.
 * @property array<FieldsetData|FieldData> $elements The value of the "elements" attribute.
 */
class ArrayInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param array $defaultValue The value of the "default value" attribute.
     * @param string $labelPath The value of the "label path" attribute.
     * @param array<FieldsetData|FieldData> $elements The value of the "elements" attribute.
     *
     * @return void
     */
    public function __construct(
        array $defaultValue = [],
        string $labelPath = 'label',
        array $elements = [],
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('elements', $elements);
        $this->set('labelPath', $labelPath);

        parent::__construct(InputTypeEnum::ARRAY->value);
    }

    #endregion

    #region CONSTANTS

    /**
     * The name of the "elements" attribute.
     *
     * @var string
     */
    public const ELEMENTS = 'elements';

    /**
     * The name of the "options" attribute.
     *
     * @var string
     */
    public const LABEL_PATH = 'labelPath';

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
