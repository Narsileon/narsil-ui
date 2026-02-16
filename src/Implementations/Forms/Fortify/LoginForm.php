<?php

namespace Narsil\Base\Implementations\Forms\Fortify;

#region USE

use Narsil\Base\Contracts\Forms\Fortify\LoginForm as Contract;
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
    protected function steps(): array
    {
        return [
            new FormStepData(
                elements: [
                    new InputData(
                        autoComplete: AutoCompleteEnum::EMAIL->value,
                        handle: User::EMAIL,
                        icon: 'email',
                        required: true,
                        placeholder: 'email@example.com',
                        type: InputTypeEnum::EMAIL->value,
                    ),
                    new InputData(
                        append: view('narsil-cms::components.link', [
                            'label' => trans('narsil-cms::passwords.link'),
                            'route' => route('password.request'),
                        ])->render(),
                        autoComplete: AutoCompleteEnum::CURRENT_PASSWORD->value,
                        handle: User::PASSWORD,
                        required: true,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                    new InputData(
                        className: 'flex-row-reverse justify-end',
                        handle: User::REMEMBER,
                        type: InputTypeEnum::CHECKBOX->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
