<?php

namespace Narsil\Base\Contracts;

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
interface Table
{
    #region PUBLIC METHODS

    /**
     * Get the columns of the table.
     *
     * @return array
     */
    public function getColumns(): array;

    /**
     * Get the order of the columns.
     *
     * @return array
     */
    public function getColumnOrder(): array;

    /**
     * Get the visibility of the columns.
     *
     * @return array
     */
    public function getColumnVisibility(): array;

    /**
     * Get the routes associated with the table.
     *
     * @return array
     */
    public function getRoutes(): array;

    #endregion
}
