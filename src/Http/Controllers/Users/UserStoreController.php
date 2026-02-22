<?php

namespace Narsil\Base\Http\Controllers\Users;

#region USE

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Arr;
use Narsil\Base\Contracts\Requests\UserFormRequest;
use Narsil\Base\Enums\ModelEventEnum;
use Narsil\Base\Http\Controllers\RedirectController;
use Narsil\Base\Models\User;
use Narsil\Base\Services\ModelService;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class UserStoreController extends RedirectController
{
    #region PUBLIC METHODS

    /**
     * @param UserFormRequest $request
     *
     * @return RedirectResponse
     */
    public function __invoke(UserFormRequest $request): RedirectResponse
    {
        $attributes = $request->validated();


        $user = User::create($attributes);

        $user
            ->roles()
            ->sync(Arr::get($attributes, User::RELATION_ROLES, []));

        return $this
            ->redirect(route('users.index'))
            ->with('success', ModelService::getSuccessMessage(User::TABLE, ModelEventEnum::CREATED));
    }

    #endregion
}
