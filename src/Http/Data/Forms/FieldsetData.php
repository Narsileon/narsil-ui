<?php

namespace Narsil\Base\Http\Data\Forms;

#region USE

use Illuminate\Support\Fluent;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * 
 * @property string|null $handle The handle of the fieldset.
 * @property string|null $label The label of the fieldset.
 * @property string|null $description The description of the fieldset.
 * @property array<FieldsetData|InputData> $elements The elements of the fieldset.
 */
class FieldsetData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string|null $handle
     * @param string|null $label
     * @param string|null $description
     * @param array<FieldsetData|InputData> $elements
     *
     * @return void
     */
    public function __construct(
        public ?string $label = null,
        public ?string $description = null,
        public ?string $handle = null,
        public array $elements = [],
    )
    {

        $this->set('label', $label);
        $this->set('description', $description);
        $this->set('handle', $handle);
        $this->set('elements', $elements);
    }

    #endregion
}
