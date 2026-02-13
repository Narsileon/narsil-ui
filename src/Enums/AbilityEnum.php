<?php

namespace Narsil\Base\Enums;

#region USE

use Narsil\Base\Traits\Enumerable;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
enum AbilityEnum: string
{
    use Enumerable;

    case CREATE     = 'create';
    case DELETE     = 'delete';
    case DELETE_ANY = 'deleteAny';
    case UPDATE     = 'update';
    case VIEW       = 'view';
    case VIEW_ANY   = 'viewAny';
}
