<?php

#region USE

use Illuminate\Support\Facades\Route;
use Narsil\Base\Http\Controllers\TanStackTables\TanStackTableDestroyController;
use Narsil\Base\Http\Controllers\TanStackTables\TanStackTableLoadController;
use Narsil\Base\Http\Controllers\TanStackTables\TanStackTableSaveController;

#endregion

Route::middleware([
    'web',
    'auth',
    'verified',
])->group(function ()
{
    Route::post('/narsil/data-tables/load', TanStackTableLoadController::class)
        ->name('narsil.data-tables.load');
    Route::post('/narsil/data-tables/save', TanStackTableSaveController::class)
        ->name('narsil.data-tables.save');
    Route::post('/narsil/data-tables/destroy', TanStackTableDestroyController::class)
        ->name('narsil.data-tables.destroy');
});
