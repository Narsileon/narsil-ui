<?php

namespace Narsil\Base\Enums;

#region USE

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
    case TEXT = 'text';
    case TEXTAREA = 'textarea';
    case TIME = 'time';
}
