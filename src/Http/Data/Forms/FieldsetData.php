<?php

namespace Narsil\Base\Http\Data\Forms;

#region USE

use Illuminate\Support\Fluent;
use Illuminate\Support\Str;
use Narsil\Base\Http\Data\ConditionData;
use Narsil\Base\Http\Data\Forms\FieldData;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 *
 * @property string|null $id The handle of the fieldset.
 * @property string|null $label The label of the fieldset.
 * @property string|null $description The description of the fieldset.
 * @property array<FieldsetData|FieldData> $elements The elements of the fieldset.
 * @property ConditionData[] $conditions The conditions of the fieldset.
 */
class FieldsetData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string|null $id
     * @param string|null $label
     * @param string|null $description
     * @param array<FieldsetData|InputData> $elements
     * @param ConditionData[] $conditions
     *
     * @return void
     */
    public function __construct(
        public ?string $id = null,
        public ?string $label = null,
        public ?string $description = null,
        public array $elements = [],
        public array $conditions = [],
    )
    {
        $this->set('id', $id);
        $this->set('label', Str::ucfirst($label));
        $this->set('description', $description);
        $this->set('elements', $elements);
        $this->set('conditions', $conditions);
    }

    #endregion
}
