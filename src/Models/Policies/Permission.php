<?php

namespace Narsil\Base\Models\Policies;

#region USE

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Relation;
use Narsil\Base\Models\User;
use Narsil\Base\Traits\AuditLoggable;
use Narsil\Base\Traits\Blameable;
use Narsil\Base\Traits\HasRoles;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class Permission extends Model
{
    use AuditLoggable;
    use Blameable;
    use HasRoles;

    #region CONSTRUCTOR

    /**
     * {@inheritDoc}
     */
    public function __construct(array $attributes = [])
    {
        $this->table = self::TABLE;

        $this->mergeGuarded([
            self::ID,
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
    final public const TABLE = 'permissions';

    #region • COLUMNS

    /**
     * The name of the "id" column.
     *
     * @var string
     */
    final public const ID = 'id';

    /**
     * The name of the "label" column.
     *
     * @var string
     */
    final public const LABEL = 'label';

    /**
     * The name of the "name" column.
     *
     * @var string
     */
    final public const NAME = 'name';

    #endregion

    #region • COUNTS

    /**
     * The name of the "users" count.
     *
     * @var string
     */
    final public const COUNT_USERS = 'users_count';

    #endregion

    #region • RELATIONS

    /**
     * The name of the "users" relation.
     *
     * @var string
     */
    final public const RELATION_USERS = 'users';

    #endregion

    #endregion

    #region PUBLIC METHODS

    #region • RELATIONSHIPS

    /**
     * {@inheritDoc}
     */
    final public function roles(): BelongsToMany
    {
        return $this
            ->belongsToMany(
                Relation::getMorphedModel(Role::TABLE),
                RolePermission::TABLE,
                RolePermission::PERMISSION_ID,
                RolePermission::ROLE_ID,
            )
            ->using(RolePermission::class);
    }

    /**
     * Get the associated users.
     *
     * @return BelongsToMany
     */
    final public function users(): BelongsToMany
    {
        return $this
            ->belongsToMany(
                Relation::getMorphedModel(User::TABLE),
                UserPermission::TABLE,
                UserPermission::PERMISSION_ID,
                UserPermission::USER_ID,
            )
            ->using(UserPermission::class);
    }

    #endregion

    #endregion
}
