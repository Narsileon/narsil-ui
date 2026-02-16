<?php

#region USE

use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;

#endregion

return [
    Permission::TABLE => [
        Permission::LABEL => 'Le libellé affiché aux utilisateurs.',
        Permission::NAME => 'Le nom interne de la permission.',
    ],
    Role::TABLE => [
        Role::LABEL => 'Le libellé affiché aux utilisateurs.',
        Role::NAME => 'Le nom interne du rôle.',
    ],
];
