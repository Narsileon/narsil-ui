<?php

namespace Narsil\Base\Traits;

#region USE

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Narsil\Base\Models\Users\UserConfiguration;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
trait HasSchemas
{
    #region PROTECTED METHODS

    /**
     * @return string
     */
    protected function getCurrentSchema(): string
    {
        $defaultSchema = $this->getDefaultSchema();

        return Session::get(UserConfiguration::SCHEMA, $defaultSchema);
    }

    /**
     * @return string
     */
    protected function getDefaultSchema(): string
    {
        return Config::get('database.connections.pgsql.search_path', 'public');
    }

    /**
     * @return array
     */
    protected function getSchemas(): array
    {
        return Config::get('narsil.schemas', []);
    }

    /**
     * @param string $schema
     *
     * @return void
     */
    protected function setSearchPath(string $schema): void
    {
        $defaultSchema = $this->getDefaultSchema();

        $schemas = $this->getSchemas();

        if (!in_array($schema, $schemas))
        {
            $schema = $defaultSchema;
        }

        DB::statement("SET search_path TO $schema, $defaultSchema");

        Session::put(UserConfiguration::SCHEMA, $schema);
    }

    #endregion
}
