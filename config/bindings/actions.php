<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Action Bindings
    |--------------------------------------------------------------------------
    |
    | Mapping between form contracts and their implementations.
    |
    */

    \Narsil\Base\Contracts\Actions\Roles\ReplicateRole::class => \Narsil\Base\Implementations\Actions\Roles\ReplicateRole::class,
    \Narsil\Base\Contracts\Actions\Roles\SyncRolePermissions::class => \Narsil\Base\Implementations\Actions\Roles\SyncRolePermissions::class,
    \Narsil\Base\Contracts\Actions\Users\SyncUserRoles::class => \Narsil\Base\Implementations\Actions\Users\SyncUserRoles::class,
    \Narsil\Base\Contracts\Actions\Users\SyncUserPermissions::class => \Narsil\Base\Implementations\Actions\Users\SyncUserPermissions::class,
];
