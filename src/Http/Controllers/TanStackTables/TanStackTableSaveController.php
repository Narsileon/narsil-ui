<?php

namespace Narsil\Base\Http\Controllers\TanStackTables;

#region USE

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Narsil\Base\Contracts\Requests\TanStackTableFormRequest;
use Narsil\Base\Models\Users\TanStackTable;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class TanStackTableSaveController
{
    #region PUBLIC METHODS

    /**
     * @param Request $request
     *
     * @return RedirectResponse
     */
    public function __invoke(TanStackTableFormRequest $request): RedirectResponse
    {
        $attributes = $request->validated();

        TanStackTable::updateOrCreate(
            [
                TanStackTable::NAME => Arr::get($attributes, TanStackTable::NAME),
                TanStackTable::TABLE_ID => Arr::get($attributes, TanStackTable::TABLE_ID),
                TanStackTable::USER_ID => Auth::id(),
            ],
            $attributes
        );

        return back();
    }

    #endregion
}
