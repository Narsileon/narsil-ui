<?php

namespace Narsil\Base\Traits;

#region USE

use Illuminate\Database\Eloquent\Concerns\HasUuids;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
trait HasUuidPrimaryKey
{
    use HasUuids;

    #region CONSTANTS

    /**
     * The name of the "uuid" column.
     *
     * @var string
     */
    final public const UUID = 'uuid';

    #endregion

    #region PUBLIC METHODS

    /**
     * @return void
     */
    final public function initializeHasUuidPrimaryKey(): void
    {
        $this->primaryKey = self::UUID;

        $this->mergeGuarded([
            self::UUID,
        ]);
    }

    #endregion
}
