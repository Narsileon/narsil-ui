<?php

namespace Narsil\Base\Http\Data\Forms\Inputs;

#region USE

use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Enums\RichTextEditorEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Support\TranslationsBag;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $defaultValue The "default value" attribute of the input.
 * @property string $placeholder The "placeholder" attribute of the input.
 * @property array $modules The "modules" attribute of the input.
 */
class RichTextInputData extends InputData
{
       #region CONSTRUCTOR

    /**
     * @param string $defaultValue The "default value" attribute of the input.
     * @param string $placeholder The "placeholder" attribute of the input.
     * @param array $modules The "modules" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        string $placeholder = '',
        array $modules = [],
    )
    {
        $this->set('defaultValue', $defaultValue);
        $this->set('placeholder', $placeholder);
        $this->set('modules', $modules);

        parent::__construct(InputTypeEnum::RICH_TEXT_EDITOR->value);
    }

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public static function form(?string $prefix = null): array
    {
        return [
            new FieldData(
                id: 'defaultValue',
                prefix: $prefix,
                input: new RichTextInputData(),
            ),
            new FieldData(
                id: 'placeholder',
                prefix: $prefix,
                input: new TextInputData(),
            ),
            new FieldData(
                id: 'modules',
                prefix: $prefix,
                input: new SelectInputData(
                    options: RichTextEditorEnum::options(),
                ),
            ),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public static function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil::rich-text-editor.align_center')
            ->add('narsil::rich-text-editor.align_justify')
            ->add('narsil::rich-text-editor.align_left')
            ->add('narsil::rich-text-editor.align_right')
            ->add('narsil::rich-text-editor.bold')
            ->add('narsil::rich-text-editor.bullet_list')
            ->add('narsil::rich-text-editor.heading_1')
            ->add('narsil::rich-text-editor.heading_2')
            ->add('narsil::rich-text-editor.heading_3')
            ->add('narsil::rich-text-editor.heading_4')
            ->add('narsil::rich-text-editor.heading_5')
            ->add('narsil::rich-text-editor.heading_6')
            ->add('narsil::rich-text-editor.headings')
            ->add('narsil::rich-text-editor.italic')
            ->add('narsil::rich-text-editor.ordered_list')
            ->add('narsil::rich-text-editor.redo')
            ->add('narsil::rich-text-editor.strike')
            ->add('narsil::rich-text-editor.subscript')
            ->add('narsil::rich-text-editor.superscript')
            ->add('narsil::rich-text-editor.underline')
            ->add('narsil::rich-text-editor.undo');
    }

    #endregion
}
