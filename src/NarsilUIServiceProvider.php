<?php

namespace Narsil\NarsilFramework;

#region USE

use Illuminate\Support\ServiceProvider;

#endregion

/**
 * @version 1.0.0
 *
 * @author Jonathan Rigaux
 */
final class NarsilUIServiceProvider extends ServiceProvider
{
    #region PUBLIC METHODS

    /**
     * @return void
     */
    public function boot(): void
    {
        $this->bootPublishes();
        $this->bootTranslations();
    }

    #endregion

    #region PRIVATE METHODS

    /**
     * @return void
     */
    private function bootPublishes(): void
    {
        $this->publishes([
            __DIR__ . '../resources/js/Components' => resource_path('js/Components/ui'),
        ], 'ui');
    }

    /**
     * @return void
     */
    private function bootTranslations(): void
    {
        $this->loadJsonTranslationsFrom(__DIR__ . '/../lang', 'ui');
    }

    #endregion
}
