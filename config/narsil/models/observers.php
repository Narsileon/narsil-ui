<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Model Observers
    |--------------------------------------------------------------------------
    |
    | Mapping between model classes and their obervers.
    |
    */

    \Narsil\Base\Models\User::class => \Narsil\Base\Observers\UserObserver::class,
];
