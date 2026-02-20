<?php

namespace Narsil\Base\Http\Data\Forms\Inputs;

#region USE

use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\InputData;

#endregionx

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 *
 * @property FieldData[] $form The "form" attribute of the input.
 * @property string $labelKey The "labelKey" attribute of the input.
 */
class ArrayInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param FieldData[] $form The "form" attribute of the input.
     * @param string $labelKey The "labelKey" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        array $form,
        string $labelKey,
    )
    {
        $this->set('form', $form);
        $this->set('labelKey', $labelKey);

        parent::__construct(InputTypeEnum::ARRAY->value);
    }

    #endregion
}
