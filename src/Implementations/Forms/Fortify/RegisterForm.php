<?php

namespace Narsil\Base\Implementations\Forms\Fortify;

#region USE

use Narsil\Base\Contracts\Forms\Fortify\RegisterForm as Contract;
use Narsil\Base\Enums\AutoCompleteEnum;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Enums\RequestMethodEnum;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\User;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class RegisterForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this
            ->action(route('register'))
            ->method(RequestMethodEnum::POST->value)
            ->submitLabel(trans('narsil-ui::ui.register'));
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
                        handle: User::EMAIL,
                        icon: 'email',
                        required: true,
                        type: InputTypeEnum::EMAIL->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        className: 'col-span-6',
                        handle: User::PASSWORD,
                        required: true,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        className: 'col-span-6',
                        handle: User::ATTRIBUTE_PASSWORD_CONFIRMATION,
                        required: true,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::GIVEN_NAME->value,
                        className: 'col-span-6',
                        handle: User::FIRST_NAME,
                        icon: 'circle-user',
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::FAMILY_NAME->value,
                        className: 'col-span-6',
                        handle: User::LAST_NAME,
                        icon: 'circle-user',
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
