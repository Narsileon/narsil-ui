<?php

namespace Narsil\Base\Providers;

#region USE

use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

#endregion

/**
 * @author Jonathan Rigaux
 */
final class ActionServiceProvider extends ServiceProvider
{
    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public function register(): void
    {
        $this->registerActions();
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * Register the configured form actions as singletons.
     *
     * @return void
     */
    protected function registerActions(): void
    {
        $config = Config::get('narsil.bindings.actions', []);

        foreach ($config as $abstract => $concrete)
        {
            $this->app->singleton($abstract, $concrete);
        }
    }

    #endregion
}
