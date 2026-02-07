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
        $this->loadTranslationsFrom(__DIR__ . '/../lang', 'narsil-ui');
    }

    #endregion
}
