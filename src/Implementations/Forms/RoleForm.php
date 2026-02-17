<?php

namespace Narsil\Base\Implementations\Forms;

#region USE

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Narsil\Base\Contracts\Forms\RoleForm as Contract;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Http\Data\OptionData;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;
use Narsil\Base\Services\ModelService;
use Narsil\Base\Services\RouteService;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class RoleForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * {@inheritDoc}
     */
    public function __construct(?Model $model = null)
    {
        parent::__construct($model);

        $this->routes(RouteService::getNames(Role::TABLE));
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * @return array
     */
    protected function getPermissionElements(): array
    {
        $permissionOptions = Permission::options();

        $groupedPermissionOptions = collect($permissionOptions)->groupBy(function (OptionData $option)
        {
            $key = Str::beforeLast($option->value, '_');

            return ModelService::getTableLabel($key);
        });

        return $groupedPermissionOptions
            ->sortBy(function ($options, $group)
            {
                return $group;
            })
            ->map(function ($options, $group)
            {
                return new InputData(
                    id: Role::RELATION_PERMISSIONS,
                    label: $group,
                    options: $options->toArray(),
                    type: InputTypeEnum::CHECKBOX->value,
                );
            })
            ->values()
            ->toArray();
    }

    /**
     * {@inheritDoc}
     */
    protected function steps(): array
    {
        $permissionElements = $this->getPermissionElements();

        return [
            new FormStepData(
                id: 'definition',
                label: trans('narsil-ui::ui.definition'),
                elements: [
                    new InputData(
                        description: ModelService::getAttributeDescription(Role::TABLE, Role::NAME),
                        id: Role::NAME,
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        description: ModelService::getAttributeDescription(Role::TABLE, Role::LABEL),
                        id: Role::LABEL,
                        required: true,
                        translatable: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                ],
            ),
            new FormStepData(
                id: Role::RELATION_PERMISSIONS,
                label: ModelService::getTableLabel(Permission::TABLE),
                elements: $permissionElements,
            ),
        ];
    }

    #endregion
}
