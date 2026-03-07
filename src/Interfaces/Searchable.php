<?php

namespace Narsil\Base\Interfaces;

#region USE

use Illuminate\Database\Eloquent\Casts\Attribute;
use Narsil\Base\Http\Data\OptionData;
use Narsil\Base\Traits\HasIdentifier;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
interface Searchable
{
    #region PUBLIC METHODS

    /**
     * @return OptionData
     */
    public function toOption(): OptionData;

    #endregion
}
