<?php

namespace Narsil\Base\Http\Data\Forms;

#region USE

use Illuminate\Support\Fluent;
use Narsil\Base\Helpers\Translator;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $description The description of the step.
 * @property string $handle The handle of the step.
 * @property string $label The label of the step.
 * @property FormElementData[] $elements The elements of the step.
 */
class InputData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string|null $accept
     * @param string|null $icon
     * @param boolean $readonly
     * @param boolean $required
     * @param boolean $translatable
     * @param string|null $autoComplete
     * @param string|null $className
     * @param string $handle
     * @param string $description
     * @param string|null $label
     * @param string $placeholder
     * @param string $type
     * @param integer $width
     * @param OptionData[] $options
     * @param array<string,mixed> $props
     *
     * @return void
     */
    public function __construct(
        public ?string $accept = null,
        public ?string $append = null,
        public ?string $autoComplete = null,
        public ?string $className = null,
        public ?string $icon = null,
        public ?string $label = null,
        public bool $readonly = false,
        public bool $required = false,
        public bool $translatable = false,
        public int $width = 100,
        public string $description = '',
        public string $handle,
        public string $placeholder = '',
        public string $type = 'text',
        public ?array $options = [],
        public ?array $props = [],
    )
    {
        $this->set('append', $append);
        $this->set('className', $className);
        $this->set('description', $description);
        $this->set('icon', $icon);
        $this->set('label', $label ?? Translator::trans("validation.attributes.$handle"));
        $this->set('width', $width);
        $this->set('options', $options);
        $this->set('translatable', $translatable);
        $this->set('props', [
            'accept' => $accept,
            'autoComplete' => $autoComplete,
            'id' => $handle,
            'placeholder' => $placeholder,
            'readonly' => $readonly,
            'required' => $required,
            'type' => $type,
        ]);
    }

    #endregion
}
