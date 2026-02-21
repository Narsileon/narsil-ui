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
        $languages = Config::get('narsil.locales', [$defaultLanguage]);

        $this
            ->defaultLanguage($defaultLanguage)
            ->languages($languages)
            ->steps($this->getSteps())
            ->submitLabel(trans('narsil::ui.save'));

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
        $options = [];

        foreach ($locales as $locale)
        {
            $label = Str::ucfirst(Locale::getDisplayName($locale, App::getLocale()));

            $options[] = new OptionData(
                label: $label,
                value: $locale
            );
        }

        $this->set('languages', $options);

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
            ->add('narsil::blame.by')
            ->add('narsil::blame.created')
            ->add('narsil::blame.updated')
            ->add('narsil::ui.continue')
            ->add('narsil::ui.create_another')
            ->add('narsil::ui.default')
            ->add('narsil::ui.delete')
            ->add('narsil::ui.publish')
            ->add('narsil::ui.save_as_new')
            ->add('narsil::ui.translations')
            ->add('narsil::ui.unpublish');
    }

    /**
     * @return FieldStepData[]
     */
    abstract protected function getSteps(): array;

    #endregion
}
