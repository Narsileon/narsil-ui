<?php

#region USE

use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;

#endregion

return [
    Permission::TABLE => [
        Permission::LABEL => 'The display label shown to users.',
        Permission::NAME => 'The internal name for the permission.',
    ],
    Role::TABLE => [
        Role::LABEL => 'The display label shown to users.',
        Role::NAME => 'The internal name for the role.',
    ],
];
