<?php

namespace Narsil\Base\Models\Policies;

#region USE

use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Cache;
use Narsil\Base\Http\Data\OptionData;
use Narsil\Base\Models\User;
use Narsil\Base\Observers\ModelObserver;
use Narsil\Base\Traits\AuditLoggable;
use Narsil\Base\Traits\Blameable;
use Narsil\Base\Traits\HasRoles;
use Narsil\Base\Traits\HasTranslations;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
#[ObservedBy([ModelObserver::class])]
class Permission extends Model
{
    use AuditLoggable;
    use Blameable;
    use HasRoles;
    use HasTranslations;

    #region CONSTRUCTOR

    /**
     * {@inheritDoc}
     */
    public function __construct(array $attributes = [])
    {
        $this->table = self::TABLE;

        $this->translatable = [
            self::LABEL,
        ];

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

        #region PUBLIC METHODS

    /**
     * Get the permissions as options.
     *
     * @return OptionData[]
     */
    public static function options(): array
    {
        return Cache::tags([self::TABLE])
            ->rememberForever('options', function ()
            {
                return self::all()
                    ->map(function (Permission $permission)
                    {
                        return new OptionData(
                            label: $permission->{self::LABEL},
                            value: $permission->{self::ID},
                        );
                    })
                    ->all();
            });
    }

    #endregion

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
