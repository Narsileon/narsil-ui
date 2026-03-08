<?php

namespace Narsil\Base\Policies;

#region USE

use Narsil\Base\Traits\Policies\IsUpdatable;
use Narsil\Base\Traits\Policies\IsViewable;

#endregion

/**
 * @author Jonathan Rigaux
 */
class PermissionPolicy
{
    use IsUpdatable;
    use IsViewable;
}
