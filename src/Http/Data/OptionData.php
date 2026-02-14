<?php

namespace Narsil\Base\Http\Data;

#region USE

use Illuminate\Support\Fluent;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $label The label of the option.
 * @property string $value The value of the option.
 */
class OptionData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string $label
     * @param mixed $value
     *
     * @return void
     */
    public function __construct(
        string $label,
        mixed $value,
    )
    {
        $this->set('label', $label);
        $this->set('value', $value);
    }

    #endregion
}
