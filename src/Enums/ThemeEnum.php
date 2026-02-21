<?php

namespace Narsil\Base\Enums;

#region USE

use Narsil\Base\Http\Data\OptionData;
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

    #region PUBLIC METHODS

    /**
     * Get the enum value as an option.
     *
     * @param OperatorEnum $case
     *
     * @return OptionData
     */
    public static function option(OperatorEnum $case): OptionData
    {
        return new OptionData(
            label: trans('narsil::themes.' . $case->value),
            value: $case->value
        );
    }

    #endregion
}
