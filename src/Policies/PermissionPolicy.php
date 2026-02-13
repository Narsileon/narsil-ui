<?php

namespace Narsil\Base\Policies;

#region USE

use Narsil\Base\Traits\Policies\IsUpdatable;
use Narsil\Base\Traits\Policies\IsViewable;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class PermissionPolicy
{
    use IsUpdatable;
    use IsViewable;
}
