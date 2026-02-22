<?php

#region USE

use Narsil\Base\Enums\InputTypeEnum;

#endregion

return [
    InputTypeEnum::ARRAY->value => 'Array',
    InputTypeEnum::CHECKBOX->value => 'Kontrollkästchen',
    InputTypeEnum::COLOR->value => 'Farbe',
    InputTypeEnum::DATE->value => 'Datum',
    InputTypeEnum::DATETIME->value => 'Datum & Uhrzeit',
    InputTypeEnum::EMAIL->value => 'E-Mail',
    InputTypeEnum::FILE->value => 'Datei',
    InputTypeEnum::NUMBER->value => 'Zahl',
    InputTypeEnum::PASSWORD->value => 'Passwort',
    InputTypeEnum::RADIO->value => 'Optionsfeld',
    InputTypeEnum::RANGE->value => 'Bereich',
    InputTypeEnum::RICH_TEXT_EDITOR->value => 'Rich Text Editor',
    InputTypeEnum::SELECT->value => 'Auswahl',
    InputTypeEnum::SWITCH->value => 'Schalter',
    InputTypeEnum::TABLE->value => 'Tabelle',
    InputTypeEnum::TEXT->value => 'Text',
    InputTypeEnum::TEXTAREA->value => 'Textbereich',
    InputTypeEnum::TIME->value => 'Uhrzeit',
];
