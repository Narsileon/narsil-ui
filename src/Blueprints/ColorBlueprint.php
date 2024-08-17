<?php

namespace Narsil\UI\Blueprints;

#region USE

use Illuminate\Database\Schema\Blueprint;

#endregion

/**
 * @version 1.0.0
 *
 * @author Jonathan Rigaux
 */
final class ColorBlueprint
{
    #region PUBLIC METHODS

    /**
     * @param Blueprint $table
     * @param string $column
     *
     * @return void
     */
    public static function define(Blueprint $table, string $column): void
    {
        $table
            ->string($column, 9)
            ->nullable()
            ->comment('color');
    }

    #endregion
}
