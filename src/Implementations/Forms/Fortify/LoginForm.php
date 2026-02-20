<?php

namespace Narsil\Base\Implementations\Forms\Fortify;

#region USE

use Narsil\Base\Contracts\Forms\Fortify\LoginForm as Contract;
use Narsil\Base\Enums\AutoCompleteEnum;
use Narsil\Base\Enums\RequestMethodEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\Inputs\CheckboxInputData;
use Narsil\Base\Http\Data\Forms\Inputs\EmailInputData;
use Narsil\Base\Http\Data\Forms\Inputs\PasswordInputData;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\User;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class LoginForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this
            ->action(route('login'))
            ->method(RequestMethodEnum::POST->value)
            ->submitLabel(trans('narsil-ui::ui.log_in'));
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * {@inheritDoc}
     */
    protected function getSteps(): array
    {
        return [
            new FormStepData(
                elements: [
                    new FieldData(
                        icon: 'email',
                        id: User::EMAIL,
                        required: true,
                        input: new EmailInputData(
                            autoComplete: AutoCompleteEnum::EMAIL->value,
                            placeholder: 'email@example.com',
                        )

                    ),
                    new FieldData(
                        id: User::PASSWORD,
                        required: true,
                        input: new PasswordInputData(
                            autoComplete: AutoCompleteEnum::CURRENT_PASSWORD->value,
                            href: route('password.request'),
                        )
                    ),
                    new FieldData(
                        className: 'flex-row-reverse justify-end',
                        id: User::REMEMBER,
                        input: new CheckboxInputData()
                    ),
                ],
            ),
        ];
    }

    #endregion
}
