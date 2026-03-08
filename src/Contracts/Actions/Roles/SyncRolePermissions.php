<?php

namespace Narsil\Base\Contracts\Actions\Roles;

#region USE

use Narsil\Base\Contracts\Action;
use Narsil\Base\Models\Policies\Role;

#endregion

/**
 * @author Jonathan Rigaux
 */
interface SyncRolePermissions extends Action
{
    #region PUBLIC METHODS

    /**
     * @param Role $role
     * @param integer[] $permissions
     *
     * @return Role
     */
    public function run(Role $role, array $permissions): Role;

    #endregion
}
