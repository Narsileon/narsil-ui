<?php

namespace Narsil\Base\Http\Controllers\Policies\Roles;

#region USE

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Narsil\Base\Enums\AbilityEnum;
use Narsil\Base\Enums\ModelEventEnum;
use Narsil\Base\Http\Controllers\RedirectController;
use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;
use Narsil\Base\Services\DatabaseService;
use Narsil\Base\Services\ModelService;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class RoleReplicateController extends RedirectController
{
    #region PUBLIC METHODS

    /**
     * @param Request $request
     * @param Role $role
     *
     * @return RedirectResponse
     */
    public function __invoke(Request $request, Role $role): RedirectResponse
    {
        $this->authorize(AbilityEnum::CREATE, Role::class);

        static::replicate($role);

        return back()
            ->with('success', ModelService::getSuccessMessage(Role::TABLE, ModelEventEnum::REPLICATED));
    }

    /**
     * @param Role $role
     *
     * @return void
     */
    public static function replicate(Role $role): void
    {
        $replicated = $role->replicate();

        $replicated
            ->fill([
                Role::NAME => DatabaseService::generateUniqueValue($replicated, Role::NAME, $role->{Role::NAME}),
            ])
            ->save();

        $replicated->permissions()->sync($role->{Role::RELATION_PERMISSIONS}->pluck(Permission::ID)->toArray());
    }


    #endregion
}
