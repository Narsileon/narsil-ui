<?php

namespace Narsil\Ui\Enums;

#region USE

use Narsil\Ui\Http\Data\OptionData;

#endregion

/**
 * Enumeration of Tailwind CSS colors.
 *
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
enum ColorEnum: string
{
    case GRAY = 'gray';
    case RED = 'red';
    case ORANGE  = 'orange';
    case AMBER = 'amber';
    case YELLOW = 'yellow';
    case LIME = 'lime';
    case GREEN = 'green';
    case EMERALD = 'emerald';
    case TEAL = 'teal';
    case CYAN = 'cyan';
    case SKY = 'sky';
    case BLUE = 'blue';
    case INDIGO = 'indigo';
    case VIOLET = 'violet';
    case PURPLE = 'purple';
    case FUCHSIA = 'fuchsia';
    case PINK = 'pink';
    case ROSE = 'rose';

    #region PUBLIC METHODS

    /**
     * Get the enum as options.
     *
     * @return OptionData[]
     */
    public static function options(): array
    {
        $options = [];

        foreach (self::values() as $value)
        {
            $label = view('narsil-ui::components.color-label', [
                'color' => $value,
                'label' => trans("narsil-ui::colors.$value"),
            ])->render();

            $options[] = new OptionData(
                label: $label,
                value: $value
            );
        }

        return $options;
    }

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
