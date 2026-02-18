<?php

namespace Narsil\Base\Implementations\Forms;

#region USE

use Illuminate\Database\Eloquent\Model;
use Narsil\Base\Contracts\Forms\UserForm as Contract;
use Narsil\Base\Enums\AutoCompleteEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\Inputs\CheckboxInputData;
use Narsil\Base\Http\Data\Forms\Inputs\EmailInputData;
use Narsil\Base\Http\Data\Forms\Inputs\FileInputData;
use Narsil\Base\Http\Data\Forms\Inputs\PasswordInputData;
use Narsil\Base\Http\Data\Forms\Inputs\TextInputData;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\Policies\Role;
use Narsil\Base\Models\User;
use Narsil\Base\Services\ModelService;
use Narsil\Base\Services\RouteService;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class UserForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * {@inheritDoc}
     */
    public function __construct(?Model $model = null)
    {
        parent::__construct($model);

        $this->routes(RouteService::getNames(User::TABLE));
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
                id: 'account',
                label: trans('narsil-ui::ui.account'),
                elements: [
                    new FieldData(
                        icon: 'email',
                        id: User::EMAIL,
                        required: true,
                        input: new EmailInputData(),
                    ),
                    new FieldData(
                        id: User::PASSWORD,
                        required: !$this->model,
                        input: new PasswordInputData(
                            autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        ),
                    ),
                    new FieldData(
                        id: User::ATTRIBUTE_PASSWORD_CONFIRMATION,
                        required: !$this->model,
                        input: new PasswordInputData(
                            autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        ),
                    ),
                ],
            ),
            new FormStepData(
                id: 'profile',
                label: trans('narsil-ui::ui.profile'),
                elements: [
                    new FieldData(
                        icon: 'circle-user',
                        id: User::LAST_NAME,
                        required: true,
                        input: new TextInputData(
                            autoComplete: AutoCompleteEnum::FAMILY_NAME->value,
                        ),
                    ),
                    new FieldData(
                        icon: 'circle-user',
                        id: User::FIRST_NAME,
                        required: true,
                        input: new TextInputData(
                            autoComplete: AutoCompleteEnum::GIVEN_NAME->value,
                        ),
                    ),
                    new FieldData(
                        icon: 'image',
                        id: User::AVATAR,
                        input: new FileInputData(
                            accept: 'image/*',
                        ),
                    ),
                ],
            ),
            new FormStepData(
                id: User::RELATION_ROLES,
                label: ModelService::getTableLabel(Role::TABLE),
                elements: [
                    new FieldData(
                        id: Role::RELATION_PERMISSIONS,
                        input: new CheckboxInputData(
                            options: Role::options(),
                        ),
                    ),
                ],
            ),
        ];
    }

    #endregion
}
