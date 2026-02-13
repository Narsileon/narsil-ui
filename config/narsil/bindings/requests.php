<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Request Bindings
    |--------------------------------------------------------------------------
    |
    | Mapping between request contracts and their implementations.
    |
    */

    \Narsil\Base\Contracts\Requests\PermissionFormRequest::class => \Narsil\Base\Implementations\Requests\PermissionFormRequest::class,
    \Narsil\Base\Contracts\Requests\RoleFormRequest::class => \Narsil\Base\Implementations\Requests\RoleFormRequest::class,
    \Narsil\Base\Contracts\Requests\UserConfigurationFormRequest::class => \Narsil\Base\Implementations\Requests\UserConfigurationFormRequest::class,
    \Narsil\Base\Contracts\Requests\UserFormRequest::class => \Narsil\Base\Implementations\Requests\UserFormRequest::class,

    /*
    |--------------------------------------------------------------------------
    | Fortify
    |--------------------------------------------------------------------------
    |
    | Mapping between request contracts and their implementations.
    |
    */

    \Narsil\Base\Contracts\Requests\Fortify\CreateNewUserFormRequest::class => \Narsil\Base\Implementations\Requests\Fortify\CreateNewUserFormRequest::class,
    \Narsil\Base\Contracts\Requests\Fortify\ResetUserPasswordFormRequest::class => \Narsil\Base\Implementations\Requests\Fortify\ResetUserPasswordFormRequest::class,
    \Narsil\Base\Contracts\Requests\Fortify\UpdateUserPasswordFormRequest::class => \Narsil\Base\Implementations\Requests\Fortify\UpdateUserPasswordFormRequest::class,
    \Narsil\Base\Contracts\Requests\Fortify\UpdateUserProfileInformationFormRequest::class => \Narsil\Base\Implementations\Requests\Fortify\UpdateUserProfileInformationFormRequest::class,

    /*
    |--------------------------------------------------------------------------
    | UI
    |--------------------------------------------------------------------------
    |
    | Mapping between request contracts and their implementations.
    |
    */

    \Narsil\Base\Contracts\Requests\TanStackTableFormRequest::class => \Narsil\Base\Implementations\Requests\TanStackTableFormRequest::class,
];
