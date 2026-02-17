<?php

namespace Narsil\Base\Implementations\Forms;

#region USE

use Illuminate\Database\Eloquent\Model;
use Narsil\Base\Contracts\Forms\UserForm as Contract;
use Narsil\Base\Enums\AutoCompleteEnum;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\InputData;
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
    protected function steps(): array
    {
        return [
            new FormStepData(
                id: 'account',
                label: trans('narsil-ui::ui.account'),
                elements: [
                    new InputData(
                        icon: 'email',
                        id: User::EMAIL,
                        required: true,
                        type: InputTypeEnum::EMAIL->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        id: User::PASSWORD,
                        required: !$this->model,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::NEW_PASSWORD->value,
                        id: User::ATTRIBUTE_PASSWORD_CONFIRMATION,
                        required: !$this->model,
                        type: InputTypeEnum::PASSWORD->value,
                    ),
                ],
            ),
            new FormStepData(
                id: 'profile',
                label: trans('narsil-ui::ui.profile'),
                elements: [
                    new InputData(
                        autoComplete: AutoCompleteEnum::FAMILY_NAME->value,
                        icon: 'circle-user',
                        id: User::LAST_NAME,
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::GIVEN_NAME->value,
                        icon: 'circle-user',
                        id: User::FIRST_NAME,
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        accept: 'image/*',
                        icon: 'image',
                        id: User::AVATAR,
                        type: InputTypeEnum::FILE->value,
                    ),
                ],
            ),
            new FormStepData(
                id: User::RELATION_ROLES,
                label: ModelService::getTableLabel(Role::TABLE),
                elements: [
                    new InputData(
                        id: Role::RELATION_PERMISSIONS,
                        options: Role::options(),
                        type: InputTypeEnum::CHECKBOX->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
