<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Model Morphs
    |--------------------------------------------------------------------------
    |
    | Mapping between model classes and their morphs.
    |
    */

    \Narsil\Base\Models\Policies\Permission::class => \Narsil\Base\Models\Policies\Permission::TABLE,
    \Narsil\Base\Models\Policies\Role::class => \Narsil\Base\Models\Policies\Role::TABLE,
    \Narsil\Base\Models\User::class => \Narsil\Base\Models\User::TABLE,
];
