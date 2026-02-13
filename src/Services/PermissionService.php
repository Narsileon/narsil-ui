<?php

namespace Narsil\Base\Services;

#region USE

use Narsil\Base\Enums\AbilityEnum;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
abstract class PermissionService
{
    #region PUBLIC METHODS

    /**
     * @param string $table
     * @param string $permission
     * @param string|null $locale
     *
     * @return string
     */
    public static function getLabel(string $table, string $permission, ?string $locale = null): string
    {
        return trans("narsil-ui::abilities.$permission", [
            'model' => ModelService::getModelLabel($table, false, $locale),
            'table' => ModelService::getTableLabel($table, false, $locale),
        ], $locale);
    }

    /**
     * @param string $table
     * @param AbilityEnum $ability
     *
     * @return string
     */
    public static function getName(string $table, AbilityEnum $ability): string
    {
        return $table . '_' . $ability->value;
    }

    #endregion
}
