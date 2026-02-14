<?php

namespace Narsil\Base\Services;

#region USE

use Illuminate\Support\Str;
use Narsil\Base\Helpers\Translator;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
abstract class ModelService
{
    #region PUBLIC METHODS

    /**
     * Get the label of the model based on the name of the table.
     *
     * @param string $table
     * @param boolean $ucFirst
     * @param string|null $locale
     *
     * @return string
     */
    final public static function getModelLabel(string $table, bool $ucFirst = true, ?string $locale = null): string
    {
        $key = "models.$table";

        $label = Translator::transChoice($key, 1, [], $locale);

        if ($label === $key)
        {
            $label = $table;
        }

        if ($ucFirst)
        {
            $label = Str::ucfirst($label);
        }

        return $label;
    }

    /**
     * Get the label of the table based on the name of the table.
     *
     * @param string $table
     * @param boolean $ucFirst
     * @param string|null $locale
     *
     * @return string
     */
    final public static function getTableLabel(string $table, bool $ucFirst = true, ?string $locale = null): string
    {
        $key = "models.$table";

        $label = Translator::transChoice($key, 2, [], $locale);

        if ($label === $key)
        {
            $label = $table;
        }

        if ($ucFirst)
        {
            $label = Str::ucfirst($label);
        }

        return $label;
    }
}
