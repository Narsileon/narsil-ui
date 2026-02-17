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
 * @property string $id The id of the input.
 * @property string|null $label The label of the input.
 * @property string|null $description The description of the input.
 * @property string|null $append The append of the input.
 * @property string|null $icon The icon of the input.
 * @property boolean $translatable The translatability of the input.
 * @property int $width The width of the input.
 * @property string|null $accept The accept attribute of the input.
 * @property string|null $autoComplete The autoComplete attribute of the input.
 * @property string|null $className The className attribute of the input.
 * @property string|null $placeholder The placeholder attribute of the input.
 * @property boolean $readonly The readonly attribute of the input.
 * @property boolean $required The required attribute of the input.
 * @property string $type The type attribute of the input.
 * @property OptionData[] $options The options of the input.
 * @property array<string,mixed> $props The props of the input.
 */
class InputData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string $id
     * @param string|null $label
     * @param string|null $description
     * @param string|null $append
     * @param string|null $icon
     * @param boolean $translatable
     * @param integer $width
     * @param string|null $accept
     * @param string|null $autoComplete
     * @param string|null $className
     * @param string|null $placeholder
     * @param boolean $readonly
     * @param boolean $required
     * @param string $type
     * @param OptionData[] $options
     * @param array<string,mixed> $props
     *
     * @return void
     */
    public function __construct(
        public string $id,
        public ?string $label = null,
        public ?string $description = null,
        public ?string $append = null,
        public ?string $icon = null,
        public bool $translatable = false,
        public int $width = 100,
        public ?string $accept = null,
        public ?string $autoComplete = null,
        public ?string $className = null,
        public ?string $placeholder = null,
        public bool $readonly = false,
        public bool $required = false,
        public string $type = 'text',
        public ?array $options = [],
        public ?array $props = [],
    )
    {
        $this->set('label', $label ?? Translator::trans("validation.attributes.$id"));
        $this->set('description', $description);
        $this->set('append', $append);
        $this->set('icon', $icon);
        $this->set('translatable', $translatable);
        $this->set('width', $width);
        $this->set('options', $options);
        $this->set('props', [
            'accept' => $accept,
            'autoComplete' => $autoComplete,
            'className' => $className,
            'id' => $id,
            'placeholder' => $placeholder,
            'readonly' => $readonly,
            'required' => $required,
            'type' => $type,
            ...$this->props,
        ]);
    }

    #endregion
}
