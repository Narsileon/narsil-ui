<?php

namespace Narsil\Base\Implementations\Requests;

#region USE

use Narsil\Base\Contracts\Requests\AssetFormRequest as Contract;
use Narsil\Base\Implementations\FormRequest;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class AssetFormRequest extends FormRequest implements Contract
{
    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public function rules(): array
    {
        return [
            //
        ];
    }

    #endregion
}
