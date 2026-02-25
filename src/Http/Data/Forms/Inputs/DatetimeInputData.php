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
 * @property string $max The value of the "max" attribute.
 * @property string $min The value of the "min" attribute.
 */
class DatetimeInputData extends InputData
{
    #region CONSTRUCTOR

    /**
     * @param string $defaultValue The value of the "default value" attribute.
     * @param string $max The value of the "max" attribute.
     * @param string $min The value of the "min" attribute.
     *
     * @return void
     */
    public function __construct(
        string $defaultValue = '',
        string $max = '',
        string $min = '',
    )
    {
        $this->set(self::DEFAULT_VALUE, $defaultValue);
        $this->set(self::MAX, $max);
        $this->set(self::MIN, $min);

        parent::__construct(InputTypeEnum::DATETIME->value);
    }

    #endregion

    #region CONSTANTS

    /**
     * The name of the "max" attribute.
     *
     * @var string
     */
    public const MAX = 'max';

    /**
     * The name of the "min" attribute.
     *
     * @var string
     */
    public const MIN = 'min';

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public static function getInputForm(?string $prefix = null): array
    {
        return [
            new FieldData(
                id: self::DEFAULT_VALUE,
                prefix: $prefix,
                input: new DatetimeInputData(),
            ),
            new FieldData(
                id: self::MIN,
                prefix: $prefix,
                input: new DatetimeInputData(),
            ),
            new FieldData(
                id: self::MAX,
                prefix: $prefix,
                input: new DatetimeInputData(),
            ),
        ];
    }

    #endregion
}
