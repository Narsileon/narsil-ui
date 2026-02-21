<?php

#region USE

use Narsil\Base\Enums\InputTypeEnum;

#endregion

return [
    InputTypeEnum::ARRAY->value => 'Array',
    InputTypeEnum::CHECKBOX->value => 'Checkbox',
    InputTypeEnum::COLOR->value => 'Color',
    InputTypeEnum::DATE->value => 'Date',
    InputTypeEnum::DATETIME->value => 'Datetime',
    InputTypeEnum::EMAIL->value => 'Email',
    InputTypeEnum::FILE->value => 'File',
    InputTypeEnum::NUMBER->value => 'Number',
    InputTypeEnum::PASSWORD->value => 'Password',
    InputTypeEnum::RADIO->value => 'Radio',
    InputTypeEnum::RANGE->value => 'Range',
    InputTypeEnum::SELECT->value => 'Select',
    InputTypeEnum::SWITCH->value => 'Switch',
    InputTypeEnum::TABLE->value => 'Table',
    InputTypeEnum::TEXT->value => 'Text',
    InputTypeEnum::TEXTAREA->value => 'Textarea',
    InputTypeEnum::TIME->value => 'Time',
];
