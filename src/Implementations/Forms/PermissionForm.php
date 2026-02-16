<?php

namespace Narsil\Base\Implementations\Forms;

#region USE

use Illuminate\Database\Eloquent\Model;
use Narsil\Base\Contracts\Forms\PermissionForm as Contract;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Services\ModelService;
use Narsil\Base\Services\RouteService;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class PermissionForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * {@inheritDoc}
     */
    public function __construct(?Model $model = null)
    {
        parent::__construct($model);

        $this->routes(RouteService::getNames(Permission::TABLE));
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
                        description: ModelService::getAttributeDescription(Permission::TABLE, Permission::NAME),
                        handle: Permission::NAME,
                        readonly: true,
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        description: ModelService::getAttributeDescription(Permission::TABLE, Permission::LABEL),
                        handle: Permission::LABEL,
                        readonly: true,
                        required: true,
                        translatable: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
