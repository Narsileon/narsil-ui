<?php

namespace Narsil\Base\Contracts;

#region USE

use Narsil\Base\Http\Data\TanStackTables\ColumnDefData;

#endregion

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
     * @return ColumnDefData[]
     */
    public function columns(): array;

    /**
     * Get the order of the columns.
     *
     * @param ColumnDefData[] $columns
     *
     * @return array
     */
    public function columnOrder(array $columns): array;

    /**
     * Get the visibility of the columns.
     *
     * @param ColumnDefData[] $columns
     *
     * @return array
     */
    public function columnVisibility(array $columns): array;

    /**
     * Get the routes associated with the table.
     *
     * @return array
     */
    public function routes(): array;

    #endregion
}
