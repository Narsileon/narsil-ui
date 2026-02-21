<?php

namespace Narsil\Base\Implementations\Forms;

#region USE

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Narsil\Base\Contracts\Forms\RoleForm as Contract;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\Inputs\CheckboxInputData;
use Narsil\Base\Http\Data\Forms\Inputs\TextInputData;
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
            $key = Str::beforeLast($option->{Permission::NAME}, '_');

            return ModelService::getTableLabel($key);
        });

        return $groupedPermissionOptions
            ->sortBy(function ($options, $group)
            {
                return $group;
            })
            ->map(function ($options, $group)
            {
                return new FieldData(
                    id: Role::RELATION_PERMISSIONS,
                    label: $group,
                    input: new CheckboxInputData(
                        options: $options->toArray(),
                    ),
                );
            })
            ->values()
            ->toArray();
    }

    /**
     * {@inheritDoc}
     */
    protected function getSteps(): array
    {
        $permissionElements = $this->getPermissionElements();

        return [
            new FormStepData(
                id: 'definition',
                label: trans('narsil-ui::ui.definition'),
                elements: [
                    new FieldData(
                        description: ModelService::getAttributeDescription(Role::TABLE, Role::NAME),
                        id: Role::NAME,
                        required: true,
                        input: new TextInputData(),
                    ),
                    new FieldData(
                        description: ModelService::getAttributeDescription(Role::TABLE, Role::LABEL),
                        id: Role::LABEL,
                        required: true,
                        translatable: true,
                        input: new TextInputData(),
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
