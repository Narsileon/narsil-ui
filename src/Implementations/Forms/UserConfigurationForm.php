<?php

namespace Narsil\Base\Implementations\Forms;

#region USE

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;
use Locale;
use Narsil\Base\Contracts\Forms\UserConfigurationForm as Contract;
use Narsil\Base\Enums\ColorEnum;
use Narsil\Base\Enums\RequestMethodEnum;
use Narsil\Base\Http\Data\Forms\FieldData;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\Inputs\RangeInputData;
use Narsil\Base\Http\Data\Forms\Inputs\SelectInputData;
use Narsil\Base\Http\Data\OptionData;
use Narsil\Base\Implementations\Form;
use Narsil\Base\Models\Users\UserConfiguration;
use ResourceBundle;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class UserConfigurationForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * {@inheritDoc}
     */
    public function __construct(?Model $model = null)
    {
        parent::__construct($model);

        $this
            ->action(route('user-configurations.update'))
            ->method(RequestMethodEnum::PUT->value)
            ->submitLabel(trans('narsil::ui.save'));
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * {@inheritDoc}
     */
    protected function getSteps(): array
    {
        $localeOptions = static::getLocaleOptions();

        return [
            new FormStepData(
                elements: [
                    new FieldData(
                        id: UserConfiguration::LANGUAGE,
                        required: true,
                        input: new SelectInputData(
                            defaultValue: App::getLocale(),
                            options: $localeOptions,
                        ),
                    ),
                    new FieldData(
                        id: UserConfiguration::COLOR,
                        required: true,
                        input: new SelectInputData(
                            defaultValue: ColorEnum::GRAY->value,
                            options: ColorEnum::options(),
                        ),
                    ),
                    new FieldData(
                        id: UserConfiguration::RADIUS,
                        required: true,
                        input: new RangeInputData(
                            defaultValue: 0.25,
                            max: 1,
                            min: 0,
                            step: 0.05
                        ),
                    ),
                ],
            ),
        ];
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * Get the locale select options.
     *
     * @return OptionData[]
     */
    protected static function getLocaleOptions(): array
    {
        $locales = ResourceBundle::getLocales('');

        $allowedLocales = Config::get('narsil.locales', []);

        $options = [];

        foreach ($locales as $locale)
        {
            if (!in_array($locale, $allowedLocales))
            {
                continue;
            }

            $label = Str::ucfirst(Locale::getDisplayName($locale, App::getLocale()));

            $options[] = new OptionData(
                label: $label,
                value: $locale
            );
        }

        usort($options, function ($a, $b)
        {
            return strcmp($a->label, $b->label);
        });

        return $options;
    }

    #endregion
}
