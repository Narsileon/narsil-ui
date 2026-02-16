<?php

namespace Narsil\Base\Implementations\Forms\Fortify;

#region USE

use Narsil\Base\Contracts\Forms\Fortify\ProfileForm as Contract;
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
class ProfileForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this
            ->action(route('user-profile-information.update'))
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
                        autoComplete: AutoCompleteEnum::FAMILY_NAME->value,
                        handle: User::LAST_NAME,
                        icon: 'circle-user',
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::GIVEN_NAME->value,
                        handle: User::FIRST_NAME,
                        icon: 'circle-user',
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        accept: 'image/*',
                        handle: User::AVATAR,
                        icon: 'image',
                        type: InputTypeEnum::FILE->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
