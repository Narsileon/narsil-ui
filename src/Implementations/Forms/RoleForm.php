<?php

namespace Narsil\Base\Implementations\Forms;

#region USE

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;
use Narsil\Base\Services\RouteService;
use Narsil\Cms\Contracts\Fields\CheckboxField;
use Narsil\Base\Contracts\Forms\RoleForm as Contract;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Cms\Models\Collections\Field;
use Narsil\Cms\Models\Collections\FieldOption;
use Narsil\Cms\Models\Collections\TemplateTab;
use Narsil\Cms\Models\Collections\TemplateTabElement;
use Narsil\Cms\Services\ModelService;
use Narsil\Cms\Support\SelectOption;

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
     * {@inheritDoc}
     */
    protected function steps(): array
    {
        $permissionSelectOptions = static::getPermissionSelectOptions();

        $permissionElements = $permissionSelectOptions
            ->sortBy(function ($options, $group)
            {
                return $group;
            })
            ->map(function ($options, $group)
            {
                return [
                    TemplateTabElement::HANDLE => Role::RELATION_PERMISSIONS,
                    TemplateTabElement::LABEL => $group,
                    TemplateTabElement::RELATION_BASE => [
                        Field::TYPE => CheckboxField::class,
                        Field::SETTINGS => app(CheckboxField::class),
                        Field::RELATION_OPTIONS => $options,
                    ],
                ];
            })
            ->values()
            ->toArray();

        return [
            new FormStepData(
                handle: 'definition',
                label: trans('narsil-ui::ui.definition'),
                elements: [
                    new InputData(
                        description: ModelService::getAttributeDescription(Role::TABLE, Role::NAME),
                        handle: Role::NAME,
                        readonly: true,
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        description: ModelService::getAttributeDescription(Role::TABLE, Role::LABEL),
                        handle: Role::LABEL,
                        readonly: true,
                        required: true,
                        translatable: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                ],
            ),


            [
                TemplateTab::HANDLE => Role::RELATION_PERMISSIONS,
                TemplateTab::LABEL => ModelService::getTableLabel(Permission::TABLE),
                TemplateTab::RELATION_ELEMENTS => $permissionElements,
            ],
        ];
    }

    /**
     * @return Collection<string,array<SelectOption>>
     */
    protected static function getPermissionSelectOptions(): Collection
    {
        return Permission::query()
            ->get()
            ->groupBy(function (Permission $permission)
            {
                $key = Str::beforeLast($permission->{Permission::NAME}, '_');

                return ModelService::getTableLabel($key);
            })
            ->map(function ($permissions)
            {
                return $permissions->map(function (Permission $permission)
                {
                    return [
                        FieldOption::LABEL => $permission->{Permission::LABEL},
                        FieldOption::VALUE => $permission->{Permission::ID},
                    ];
                })->toArray();
            });
    }

    #endregion
}
