<?php

namespace Narsil\Base\Providers;

#region USE

use Exception;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class MorphServiceProvider extends ServiceProvider
{
    #region PUBLIC METHODS

    /**
     * Boot any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        try
        {
            $this->bootMorphMap();
        }
        catch (Exception $exception)
        {
            Log::error($exception);
        }
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * Boot the morph map.
     *
     * @return void
     */
    protected function bootMorphMap(): void
    {
        $config = Config::get('narsil.models.morphs', []);

        $map = [];

        foreach ($config as $class => $table)
        {
            $map[$table] = $class;
        }

        Relation::enforceMorphMap($map);
    }

    #endregion
}
