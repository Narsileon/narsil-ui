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
 * @property FieldData[] $columns The "columns" attribute of the input.
 * @property array $defaultValue The "default value" attribute of the input.
 */
class TableInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param FieldData[] $columns The "columns" attribute of the input.
     * @param array $defaultValue The "default value" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        array $columns,
        array $defaultValue = [],
    )
    {
        $this->set('columns', $columns);
        $this->set('defaultValue', $defaultValue);

        parent::__construct(InputTypeEnum::TABLE->value);
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
            ->add('narsil::ui.delete')
            ->add('narsil::ui.move_down')
            ->add('narsil::ui.move_up');
    }

    #endregion
}
