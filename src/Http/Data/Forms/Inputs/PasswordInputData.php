<?php

namespace Narsil\Base\Http\Data\Forms\Inputs;

#region USE

use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Support\TranslationsBag;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $defaultValue The "default value" attribute of the input.
 * @property integer $minLength The "min length" attribute of the input.
 * @property integer|null $autoComplete The "auto complete" attribute of the input.
 * @property integer|null $href The "href" attribute of the input.
 * @property integer|null $maxLength The "max length" attribute of the input.
 */
class PasswordInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The "default value" attribute of the input.
     * @param integer $minLength The "min length" attribute of the input.
     * @param integer|null $autoComplete The "auto complete" attribute of the input.
     * @param integer|null $href The "href" attribute of the input.
     * @param integer|null $maxLength The "max length" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        int $minLength = 8,
        ?string $autoComplete = null,
        ?string $href = null,
        ?int $maxLength = null,
    )
    {
        $this->set('autoComplete', $autoComplete);
        $this->set('defaultValue', $defaultValue);
        $this->set('href', $href);
        $this->set('max', $maxLength);
        $this->set('min', $minLength);

        parent::__construct(InputTypeEnum::PASSWORD->value);
    }

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritdoc}
     */
    public static function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil::ui.forgot_password')
            ->add('narsil::ui.hide')
            ->add('narsil::ui.show');
    }

    #endregion
}
