<?php

#region USE

use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;

#endregion

return [
    Permission::TABLE => [
        Permission::LABEL => 'Die den Benutzern angezeigte Bezeichnung.',
        Permission::NAME => 'Der interne Name für die Berechtigung.',
    ],
    Role::TABLE => [
        Role::LABEL => 'Die den Benutzern angezeigte Bezeichnung.',
        Role::NAME => 'Der interne Name für die Rolle.',
    ],
];
