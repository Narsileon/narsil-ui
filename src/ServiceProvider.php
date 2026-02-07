<?php

namespace Narsil\Ui;

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
        $this->bootTranslations();
        $this->bootViews();
    }

    #endregion

    #region PROTECTED METHODS

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
