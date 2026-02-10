<?php

namespace Narsil\Base\Enums;

/**
 * Enumeration of browser themes.
 *
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
enum ThemeEnum: string
{
    case SYSTEM = 'system';
    case LIGHT = 'light';
    case DARK = 'dark';

    #region PUBLIC METHODS

    /**
     * Get the values of the enum.
     *
     * @return string[]
     */
    public static function values(): array
    {
        return array_map(function ($case)
        {
            return $case->value;
        }, self::cases());
    }

    #endregion
}
