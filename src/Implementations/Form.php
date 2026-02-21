<?php

namespace Narsil\Base\Implementations;

#region USE

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Fluent;
use Illuminate\Support\Str;
use Locale;
use Narsil\Base\Contracts\Form as Contract;
use Narsil\Base\Http\Data\Forms\FieldStepData;
use Narsil\Base\Http\Data\OptionData;
use Narsil\Base\Support\TranslationsBag;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
abstract class Form extends Fluent implements Contract
{
    #region CONSTRUCTOR

    /**
     * @param Model|null $model
     *
     * @return void
     */
    public function __construct(?Model $model = null)
    {
        $this->set('model', $model);

        $defaultLanguage = Config::get('app.locale', 'en');

        $this
            ->defaultLanguage($defaultLanguage)
            ->steps($this->getSteps())
            ->submitLabel(trans('narsil-ui::ui.save'));

        static::registerTranslations();
    }

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public function action(string $action): static
    {
        $this->set('action', $action);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function defaultLanguage(string $defaultLanguage): static
    {
        $this->set('defaultLanguage', $defaultLanguage);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function id(string $id): static
    {
        $this->set('id', $id);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function languages(array $locales): static
    {
        $languageOptions = [];

        foreach ($locales as $locale)
        {
            $label = Str::ucfirst(Locale::getDisplayName($locale, App::getLocale()));

            $languageOptions[] = new OptionData(
                label: $label,
                value: $locale
            );
        }

        $this->set('languageOptions', $languageOptions);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function method(string $method): static
    {
        $this->set('method', $method);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function routes(array $routes): static
    {
        $this->set('routes', $routes);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function submitIcon(?string $submitIcon): static
    {
        $this->set('submitIcon', $submitIcon);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function submitLabel(string $submitLabel): static
    {
        $this->set('submitLabel', $submitLabel);

        return $this;
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * @return void
     */
    protected static function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil-ui::blame.by')
            ->add('narsil-ui::blame.created')
            ->add('narsil-ui::blame.updated');
    }

    /**
     * @return FieldStepData[]
     */
    abstract protected function getSteps(): array;

    #endregion
}
