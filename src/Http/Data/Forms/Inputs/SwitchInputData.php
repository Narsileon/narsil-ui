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
 * @property boolean $defaultValue The "default value" attribute of the input.
 */
class SwitchInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param boolean $defaultValue The "default value" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        bool $defaultValue = false,
    )
    {
        $this->set('defaultValue', $defaultValue);

        parent::__construct(InputTypeEnum::SWITCH->value);
    }

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public static function form(?string $prefix = null): array
    {
        return [
            new FieldData(
                id: 'defaultValue',
                prefix: $prefix,
                input: new SwitchInputData(),
            ),
        ];
    }

    #endregion
}
