<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Model Policies
    |--------------------------------------------------------------------------
    |
    | Mapping between model classes and their policies.
    |
    */

    \Narsil\Base\Models\Policies\Permission::class => \Narsil\Base\Policies\PermissionPolicy::class,
    \Narsil\Base\Models\Policies\Role::class => \Narsil\Base\Policies\RolePolicy::class,
    \Narsil\Base\Models\User::class => \Narsil\Base\Policies\UserPolicy::class,
];
