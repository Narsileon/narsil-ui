<?php

#region USE

use Narsil\Base\Enums\InputTypeEnum;

#endregion

return [
    InputTypeEnum::ARRAY->value => 'Tableau',
    InputTypeEnum::CHECKBOX->value => 'Case à cocher',
    InputTypeEnum::COLOR->value => 'Couleur',
    InputTypeEnum::DATE->value => 'Date',
    InputTypeEnum::DATETIME->value => 'Date et heure',
    InputTypeEnum::EMAIL->value => 'E-mail',
    InputTypeEnum::FILE->value => 'Fichier',
    InputTypeEnum::NUMBER->value => 'Nombre',
    InputTypeEnum::PASSWORD->value => 'Mot de passe',
    InputTypeEnum::RADIO->value => 'Bouton radio',
    InputTypeEnum::RANGE->value => 'Plage',
    InputTypeEnum::RICH_TEXT_EDITOR->value => 'Editeur de texte enrichi',
    InputTypeEnum::SELECT->value => 'Sélection',
    InputTypeEnum::SWITCH->value => 'Interrupteur',
    InputTypeEnum::TABLE->value => 'Table',
    InputTypeEnum::TEXT->value => 'Texte',
    InputTypeEnum::TEXTAREA->value => 'Zone de texte',
    InputTypeEnum::TIME->value => 'Heure',
];
