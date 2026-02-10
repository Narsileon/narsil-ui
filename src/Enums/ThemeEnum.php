<?php

namespace Narsil\Base\Enums;

#region USE

use Narsil\Base\Traits\Enumerable;

#endregion

/**
 * Enumeration of browser themes.
 *
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
enum ThemeEnum: string
{
    use Enumerable;

    case SYSTEM = 'system';
    case LIGHT = 'light';
    case DARK = 'dark';
}
