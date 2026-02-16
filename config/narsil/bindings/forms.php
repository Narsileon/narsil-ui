<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Form Bindings
    |--------------------------------------------------------------------------
    |
    | Mapping between form contracts and their implementations.
    |
    */

    \Narsil\Base\Contracts\Forms\PermissionForm::class => \Narsil\Base\Implementations\Forms\PermissionForm::class,
    \Narsil\Base\Contracts\Forms\RoleForm::class => \Narsil\Base\Implementations\Forms\RoleForm::class,
    \Narsil\Base\Contracts\Forms\UserForm::class => \Narsil\Base\Implementations\Forms\UserForm::class,

    /*
    |--------------------------------------------------------------------------
    | Fortify
    |--------------------------------------------------------------------------
    |
    | Mapping between form contracts and their implementations.
    |
    */

    \Narsil\Base\Contracts\Forms\Fortify\ConfirmPasswordForm::class => \Narsil\Base\Implementations\Forms\Fortify\ConfirmPasswordForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\ForgotPasswordForm::class => \Narsil\Base\Implementations\Forms\Fortify\ForgotPasswordForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\LoginForm::class => \Narsil\Base\Implementations\Forms\Fortify\LoginForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\ProfileForm::class => \Narsil\Base\Implementations\Forms\Fortify\ProfileForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\RegisterForm::class => \Narsil\Base\Implementations\Forms\Fortify\RegisterForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\ResetPasswordForm::class => \Narsil\Base\Implementations\Forms\Fortify\ResetPasswordForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\TwoFactorChallengeForm::class => \Narsil\Base\Implementations\Forms\Fortify\TwoFactorChallengeForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\TwoFactorForm::class => \Narsil\Base\Implementations\Forms\Fortify\TwoFactorForm::class,
    \Narsil\Base\Contracts\Forms\Fortify\UpdatePasswordForm::class => \Narsil\Base\Implementations\Forms\Fortify\UpdatePasswordForm::class,
];
