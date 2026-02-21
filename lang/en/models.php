<?php

#region USE

use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;
use Narsil\Base\Models\User;
use Narsil\Base\Models\Users\UserConfiguration;

#endregion

return [
    Permission::TABLE => 'permission|permissions',
    Role::TABLE => 'role|roles',
    User::TABLE => 'user|users',
    UserConfiguration::TABLE => 'settings|settings',
];
