<?php

namespace Narsil\Base\Implementations\Forms\Fortify;

#region USE

use Narsil\Base\Contracts\Forms\Fortify\UpdatePasswordForm as Contract;
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
class UpdatePasswordForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this
            ->action(route('user-password.update'))
            ->method(RequestMethodEnum::PUT->value)
            ->submitIcon('save')
            ->submitLabel(trans('narsil-cms::ui.save'));
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
                        autoComplete: AutoCompleteEnum::CURRENT_PASSWORD->value,
                        handle: User::ATTRIBUTE_CURRENT_PASSWORD,
                        required: true,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        handle: User::PASSWORD,
                        required: true,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        handle: User::ATTRIBUTE_PASSWORD_CONFIRMATION,
                        required: true,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
