<?php

namespace Narsil\Base\Http\Middleware;

#region USE

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

#endregion

/**
 * @author Jonathan Rigaux
 */
class WithoutSsrMiddleware
{
    #region PUBLIC METHODS

    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next): mixed
    {
        Config::set('inertia.ssr.enabled', false);

        return $next($request);
    }

    #endregion
}
