<?php

namespace Narsil\Base\Implementations\Forms\Fortify;

#region USE

use Narsil\Base\Contracts\Forms\Fortify\TwoFactorForm as Contract;
use Narsil\Base\Enums\AutoCompleteEnum;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Enums\RequestMethodEnum;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\User;
use Narsil\Base\Services\ModelService;
use Narsil\Base\Support\TranslationsBag;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class TwoFactorForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this
            ->action(route('two-factor.confirm'))
            ->method(RequestMethodEnum::POST->value)
            ->submitLabel(trans('narsil-ui::ui.confirm'));

        app(TranslationsBag::class)
            ->add('narsil-ui::descriptions.users.recovery_codes')
            ->add('narsil-ui::ui.recovery_codes')
            ->add('narsil-ui::ui.two_factor')
            ->add('narsil-ui::validation.custom.code.invalid');
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * {@inheritDoc}
     */
    protected function steps(): array
    {
        return [
            new FormStepData(
                elements: [
                    new InputData(
                        autoComplete: AutoCompleteEnum::ONE_TIME_CODE->value,
                        description: ModelService::getAttributeDescription(User::TABLE, 'code'),
                        icon: 'circle-check',
                        id: 'code',
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
