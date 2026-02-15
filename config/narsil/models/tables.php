<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Model Tables
    |--------------------------------------------------------------------------
    |
    | Mapping between model tables and their tables.
    |
    */

    \Narsil\Base\Models\Policies\Permission::TABLE => \Narsil\Base\Implementations\Tables\PermissionTable::class,
    \Narsil\Base\Models\Policies\Role::TABLE => \Narsil\Base\Implementations\Tables\RoleTable::class,
    \Narsil\Base\Models\User::TABLE => \Narsil\Base\Implementations\Tables\UserTable::class,
];
