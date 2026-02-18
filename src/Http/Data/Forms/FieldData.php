<?php

namespace Narsil\Base\Http\Data\Forms;

#region USE

use Illuminate\Support\Fluent;
use Narsil\Base\Helpers\Translator;
use Narsil\Base\Http\Data\ConditionData;
use Narsil\Base\Http\Data\Forms\InputData;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $id The id of the field.
 * @property InputData $input The input associated to the field.
 * @property boolean $readonly The readability of the field.
 * @property boolean $required The requirability of the field.
 * @property boolean $translatable The translatability of the field.
 * @property integer $width The width of the field.
 * @property string|null $append The append associated to the field.
 * @property string|null $className The className associated to the field.
 * @property string|null $label The label associated to the field.
 * @property string|null $description The description associated to the field.
 * @property string|null $icon The icon associated to the field.
 * @property ConditionData[] $conditions The conditions associated to the field.
 */
class FieldData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string $id The id of the field.
     * @param InputData $input The input associated to the field.
     * @param boolean $readOnly The readability of the field.
     * @param boolean $required The requirability of the field.
     * @param boolean $translatable The translatability of the field.
     * @param integer $width The width of the field.
     * @param string|null $append The append associated to the field.
     * @param string|null $className The className associated to the field.
     * @param string|null $description The description associated to the field.
     * @param string|null $icon The icon associated to the field.
     * @param string|null $label The label associated to the field.
     * @param ConditionData[] $conditions The conditions associated to the field.
     *
     * @return void
     */
    public function __construct(
        string $id,
        InputData $input,
        bool $readOnly = false,
        bool $required = false,
        bool $translatable = false,
        int $width = 100,
        ?string $append = null,
        ?string $className = null,
        ?string $description = null,
        ?string $icon = null,
        ?string $label = null,
        ?array $conditions = [],
    )
    {
        $this->set('append', $append);
        $this->set('className', $className);
        $this->set('conditions', $conditions);
        $this->set('description', $description);
        $this->set('icon', $icon);
        $this->set('id', $id);
        $this->set('input', $input);
        $this->set('label', $label ?? Translator::trans("validation.attributes.$id"));
        $this->set('readOnly', $readOnly);
        $this->set('required', $required);
        $this->set('translatable', $translatable);
        $this->set('width', $width);
    }

    #endregion
}
