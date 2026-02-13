<?php

namespace Narsil\Base;

#region USE

use Illuminate\Support\ServiceProvider as BaseServiceProvider;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class ServiceProvider extends BaseServiceProvider
{
    #region PUBLIC METHODS

    /**
     * Boot any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->bootMigrations();
        $this->bootTranslations();
        $this->bootViews();
    }

    /**
     * {@inheritDoc}
     */
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/narsil/bindings/requests.php', 'narsil.bindings.requests');

        $this->mergeConfigFrom(__DIR__ . '/../config/narsil/models/morphs.php', 'narsil.models.morphs');
        $this->mergeConfigFrom(__DIR__ . '/../config/narsil/models/policies.php', 'narsil.models.policies');
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * Boot the migrations.
     *
     * @return void
     */
    protected function bootMigrations(): void
    {
        $this->loadMigrationsFrom([
            __DIR__ . '/../database/migrations',
        ]);
    }

    /**
     * Boot the translations.
     *
     * @return void
     */
    protected function bootTranslations(): void
    {
        $this->loadTranslationsFrom(__DIR__ . '/../lang', 'narsil-ui');
    }

    /**
     * Boot the views.
     *
     * @return void
     */
    protected function bootViews(): void
    {
        $this->loadViewsFrom([
            __DIR__ . '/../resources/views',
        ], 'narsil-ui');
    }

    #endregion
}
