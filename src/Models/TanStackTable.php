<?php

namespace Narsil\Ui\Models;

#region USE

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Config;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class TanStackTable extends Model
{
    use HasUuids;

    #region CONSTRUCTOR

    /**
     * {@inheritDoc}
     */
    public function __construct(array $attributes = [])
    {
        $this->table = self::TABLE;

        $this->primaryKey = self::UUID;

        $this->mergeGuarded([
            self::UUID,
        ]);

        parent::__construct($attributes);
    }

    #endregion

    #region CONSTANTS

    /**
     * The table associated with the model.
     *
     * @var string
     */
    final public const TABLE = 'tan_stack_tables';

    #region • COLUMNS

    /**
     * The name of the "column order" column.
     *
     * @var string
     */
    final public const COLUMN_ORDER = 'column_order';

    /**
     * The name of the "column sizing" column.
     *
     * @var string
     */
    final public const COLUMN_SIZING = 'column_sizing';

    /**
     * The name of the "column visibility" column.
     *
     * @var string
     */
    final public const COLUMN_VISIBILITY = 'column_visibility';

    /**
     * The name of the "global filter" column.
     *
     * @var string
     */
    final public const GLOBAL_FILTER = 'global_filter';

    /**
     * The name of the "name" column.
     *
     * @var string
     */
    final public const NAME = 'name';

    /**
     * The name of the "pagination" column.
     *
     * @var string
     */
    final public const PAGINATION = 'pagination';

    /**
     * The name of the "row selection" column.
     *
     * @var string
     */
    final public const ROW_SELECTION = 'row_selection';

    /**
     * The name of the "sorting" column.
     *
     * @var string
     */
    final public const SORTING = 'sorting';

    /**
     * The name of the "table id" column.
     *
     * @var string
     */
    final public const TABLE_ID = 'table_id';

    /**
     * The name of the "user id" column.
     *
     * @var string
     */
    final public const USER_ID = 'user_id';

    /**
     * The name of the "uuid" column.
     *
     * @var string
     */
    final public const UUID = 'uuid';

    #endregion

    #region • RELATIONS

    /**
     * The name of the "user" relation.
     *
     * @var string
     */
    final public const RELATION_USER = 'user';

    #endregion

    #endregion

    #region PUBLIC METHODS

    #region • RELATIONSHIPS

    /**
     * Get the associated user.
     *
     * @return BelongsTo
     */
    final public function user(): BelongsTo
    {
        return $this
            ->belongsTo(
                Config::get('auth.providers.users.model'),
                self::USER_ID,
            );
    }

    #endregion

    #endregion
}
