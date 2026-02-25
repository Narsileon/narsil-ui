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
 * @property FieldData[] $columns The value of the "columns" attribute.
 */
class TableInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param array $defaultValue The value of the "default value" attribute.
     * @param FieldData[] $columns The value of the "columns" attribute.
     *
     * @return void
     */
    public function __construct(
        array $defaultValue = [],
        array $columns = [],
    )
    {
        $this->set(self::COLUMNS, $columns);
        $this->set(self::DEFAULT_VALUE, $defaultValue);

        parent::__construct(InputTypeEnum::TABLE->value);
    }

    #endregion

    #region CONSTANTS

    /**
     * The name of the "columns" attribute.
     *
     * @var string
     */
    public const COLUMNS = 'columns';

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
