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
 * @property string $defaultValue The value of the "default value" attribute.
 * @property string $accept The value of the "accept" attribute.
 */
class FileInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The value of the "default value" attribute.
     * @param string $accept The value of the "accept" attribute.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        string $accept = '*',
    )
    {
        $this->set(self::ACCEPT, $accept);
        $this->set(self::DEFAULT_VALUE, $defaultValue);

        parent::__construct(InputTypeEnum::FILE->value);
    }

    #endregion

    #region CONSTANTS

    /**
     * The name of the "accept" attribute.
     *
     * @var string
     */
    public const ACCEPT = 'accept';

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public static function getInputForm(?string $prefix = null): array
    {
        return [
            new FieldData(
                id: self::ACCEPT,
                prefix: $prefix,
                input: new TextInputData(),
            ),
        ];
    }

    #endregion
}
