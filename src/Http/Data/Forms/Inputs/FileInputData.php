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
 * @property string $defaultValue The "default value" attribute of the input.
 * @property string|null $accept The "accept" attribute of the input.
 */
class FileInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The "default value" attribute of the input.
     * @param string|null $accept The "accept" attribute of the input.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        ?string $accept = null,
    )
    {
        $this->set('accept', $accept);
        $this->set('defaultValue', $defaultValue);

        parent::__construct(InputTypeEnum::FILE->value);
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
                id: 'accept',
                prefix: $prefix,
                input: new TextInputData(),
            ),
        ];
    }

    #endregion
}
