<?php

#region USE

use Illuminate\Support\Facades\Route;
use Laravel\Nightwatch\Types\Str;
use Narsil\Base\Http\Controllers\Users\Bookmarks\UserBookmarkDestroyController;
use Narsil\Base\Http\Controllers\Users\Bookmarks\UserBookmarkIndexController;
use Narsil\Base\Http\Controllers\Users\Bookmarks\UserBookmarkStoreController;
use Narsil\Base\Http\Controllers\Users\Bookmarks\UserBookmarkUpdateController;
use Narsil\Base\Http\Controllers\Users\Configurations\UserConfigurationEditController;
use Narsil\Base\Http\Controllers\Users\Configurations\UserConfigurationUpdateController;
use Narsil\Base\Http\Controllers\Users\Sessions\SessionController;
use Narsil\Base\Http\Controllers\Users\UserCreateController;
use Narsil\Base\Http\Controllers\Users\UserDestroyController;
use Narsil\Base\Http\Controllers\Users\UserDestroyManyController;
use Narsil\Base\Http\Controllers\Users\UserEditController;
use Narsil\Base\Http\Controllers\Users\UserIndexController;
use Narsil\Base\Http\Controllers\Users\UserStoreController;
use Narsil\Base\Http\Controllers\Users\UserUpdateController;
use Narsil\Base\Models\User;
use Narsil\Base\Models\Users\UserBookmark;
use Narsil\Base\Models\Users\UserConfiguration;

#endregion

Route::middleware([
    'auth',
    'verified',
])->group(
    function ()
    {
        Route::prefix(User::TABLE)->name(User::TABLE . '.')->group(function ()
        {
            Route::get('/', UserIndexController::class)
                ->name('index');
            Route::get('/create', UserCreateController::class)
                ->name('create');
            Route::post('/', UserStoreController::class)
                ->name('store');
            Route::get('/{user}/edit', UserEditController::class)
                ->name('edit');
            Route::patch('/{user}', UserUpdateController::class)
                ->name('update');
            Route::delete('/{user}', UserDestroyController::class)
                ->name('destroy');
            Route::delete('/', UserDestroyManyController::class)
                ->name('destroy-many');
        });

        Route::prefix(Str::slug(UserBookmark::TABLE))->name(Str::slug(UserBookmark::TABLE) . '.')->group(function ()
        {
            Route::get('/', UserBookmarkIndexController::class)
                ->name('index');
            Route::post('/', UserBookmarkStoreController::class)
                ->name('store');
            Route::patch('/{userBookmark}', UserBookmarkUpdateController::class)
                ->name('update');
            Route::delete('/{userBookmark}', UserBookmarkDestroyController::class)
                ->name('destroy');
        });

        Route::delete('/sessions', SessionController::class)
            ->name('sessions.delete');
    }
);

Route::prefix(Str::slug(UserConfiguration::TABLE))->name(Str::slug(UserConfiguration::TABLE) . '.')->group(function ()
{
    Route::get('/', UserConfigurationEditController::class)
        ->name('edit');
    Route::post('/', UserConfigurationUpdateController::class)
        ->name('update');
});
