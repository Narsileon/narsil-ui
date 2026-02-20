<?php

#region USE

use Narsil\Base\Models\Policies\Permission;
use Narsil\Base\Models\Policies\Role;
use Narsil\Base\Models\User;
use Narsil\Base\Models\Users\UserConfiguration;

#endregion

return [
    Permission::TABLE => 'Berechtigung|Berechtigungen',
    Role::TABLE => 'Rolle|Rollen',
    User::TABLE => 'Benutzer|Benutzer',
    UserConfiguration::TABLE => 'Einstellungen',
];
