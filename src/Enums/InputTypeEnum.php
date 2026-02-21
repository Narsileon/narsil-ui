<?php

namespace Narsil\Base\Enums;

#region USE

use Narsil\Base\Http\Data\OptionData;
use Narsil\Base\Traits\Enumerable;

#endregion

/**
 * Enumeration of input types.
 *
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
enum InputTypeEnum: string
{
    use Enumerable;

    case ARRAY = 'array';
    case CHECKBOX = 'checkbox';
    case COLOR = 'color';
    case DATE = 'date';
    case DATETIME = 'datetime-local';
    case EMAIL = 'email';
    case FILE = 'file';
    case NUMBER = 'number';
    case PASSWORD = 'password';
    case RADIO = 'radio';
    case RANGE = 'range';
    case SELECT = 'select';
    case SWITCH = 'switch';
    case TABLE = 'table';
    case TEXT = 'text';
    case TEXTAREA = 'textarea';
    case TIME = 'time';

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
            label: trans('narsil::inputs.' . $case->value),
            value: $case->value
        );
    }

    #endregion
}
