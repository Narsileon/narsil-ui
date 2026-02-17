<?php

namespace Narsil\Base\Http\Data\Forms;

#region USE

use Illuminate\Support\Fluent;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string|null $id The id of the step.
 * @property string|null $label The label of the step.
 * @property string|null $description The description of the step.
 * @property array<FieldsetData|InputData> $elements The elements of the step.
 */
class FormStepData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string|null $id
     * @param string|null $label
     * @param string|null $description
     * @param array<FieldsetData|InputData> $elements
     *
     * @return void
     */
    public function __construct(
        public ?string $id = null,
        public ?string $label = null,
        public ?string $description = null,
        public array $elements = [],
    )
    {
        $this->set('id', $id);
        $this->set('label', $label);
        $this->set('description', $description);
        $this->set('elements', $elements);
    }

    #endregion
}
