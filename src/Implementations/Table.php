<?php

namespace Narsil\Base\Implementations;

#region USE

use Narsil\Base\Contracts\Table as Contract;
use Narsil\Base\Services\RouteService;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
abstract class Table implements Contract
{
    #region CONSTRUCTOR

    /**
     * @param string $table
     *
     * @return void
     */
    public function __construct(string $table)
    {
        $this->name = $table;
    }

    #endregion

    #region PROPERTIES

    /**
     * @var string The name of the table.
     */
    public readonly string $name;

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    abstract public function columns(): array;

    /**
     * {@inheritDoc}
     */
    public function columnOrder(array $columns): array
    {
        $columnOrder = [];

        foreach ($columns as $column)
        {
            $columnOrder[] = $column->id;
        }

        return $columnOrder;
    }

    /**
     * {@inheritDoc}
     */
    public function columnVisibility(array $columns): array
    {
        $columnVisibility = [];

        foreach ($columns as $column)
        {
            $columnVisibility[$column->id] = $column->visibility;
        }

        return $columnVisibility;
    }

    /**
     * {@inheritDoc}
     */
    public function routes(): array
    {
        return RouteService::getNames($this->name);
    }

    #endregion
}
