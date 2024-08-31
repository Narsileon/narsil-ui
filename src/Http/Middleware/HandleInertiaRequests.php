<?php

namespace Narsil\UI\Http\Middleware;

#region USE

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Narsil\Localization\Models\Language;
use Narsil\Localization\Services\LocalizationService;
use Tighten\Ziggy\Ziggy;

#endregion

/**
 * @version 1.0.0
 *
 * @author Jonathan Rigaux
 */
abstract class HandleInertiaRequests extends Middleware
{
    #region CONSTRUCTOR

    public function __construct()
    {
        $this->rootView = 'app';
    }

    #endregion

    #region PUBLIC METHODS

    public function share(Request $request): array
    {
        $shared = $this->getShared($request);

        return array_merge(parent::share($request), compact(
            'shared',
        ));
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * @return array
     */
    abstract protected function getApp(): array;

    /**
     * @param Request $request
     *
     * @return array
     */
    protected function getShared(Request $request): array
    {
        $app = $this->getApp();
        $localization = $this->getLocalization();
        $redirect = $this->getRedirect();
        $ziggy = $this->getZiggy();

        return compact(
            'app',
            'localization',
            'redirect',
            'ziggy',
        );
    }

    #endregion

    #region PRIVATE METHODS

    /**
     * @return array
     */
    private function getLocalization(): array
    {
        $isFullReload = !request()->header('X-Inertia');

        $locale = App::getLocale();
        $languages = Language::options()->get();
        $translations = LocalizationService::getTranslations();

        return compact(
            'locale',
            'languages',
            'translations',
        );
    }

    /**
     * @return array
     */
    private function getRedirect(): array
    {
        $error = Session::get('error');
        $success = Session::get('success');

        return compact(
            'error',
            'success',
        );
    }

    /**
     * @return array
     */
    private function getZiggy(): array
    {
        $ziggy = new Ziggy(
            url: url()->current()
        );

        return $ziggy->toArray();
    }

    #endregion
}
