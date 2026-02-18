<?php

namespace Narsil\Base\Http\Data\Forms;

#region USE

use Illuminate\Support\Fluent;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property string $type The type of the input.
 */
abstract class InputData extends Fluent
{
    #region CONSTRUCTOR

    /**
     * @param string $type The type of the input.
     *
     * @return void
     */
    public function __construct(string $type)
    {
        $this->set('type', $type);
    }

    #endregion
}
