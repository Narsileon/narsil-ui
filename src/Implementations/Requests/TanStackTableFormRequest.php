<?php

namespace Narsil\Base\Http\Requests;

#region USE

use Illuminate\Foundation\Http\FormRequest;
use Narsil\Base\Models\Users\TanStackTable;
use Narsil\Base\Validation\FormRule;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class TanStackTableFormRequest extends FormRequest
{
    #region PUBLIC METHODS

    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            TanStackTable::COLUMN_ORDER => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::COLUMN_SIZING => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::COLUMN_VISIBILITY => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::FILTERS => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::GLOBAL_FILTER => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::NAME => [
                FormRule::STRING,
                FormRule::SOMETIMES,
            ],
            TanStackTable::PAGINATION => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::ROW_SELECTION => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::SORTING => [
                FormRule::ARRAY,
                FormRule::SOMETIMES,
                FormRule::NULLABLE,
            ],
            TanStackTable::TABLE_ID => [
                FormRule::STRING,
            ],
        ];
    }

    #endregion
}
