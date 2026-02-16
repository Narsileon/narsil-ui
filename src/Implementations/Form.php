<?php

namespace Narsil\Base\Implementations;

#region USE

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Fluent;
use Narsil\Base\Contracts\Form as Contract;
use Narsil\Base\Http\Data\Forms\FieldStepData;

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
        $languageOptions = Config::get('narsil.locales', []);

        $id = $this->getDefaultId();

        $this
            ->defaultLanguage($defaultLanguage)
            ->id($id)
            ->languageOptions($languageOptions)
            ->submitLabel(trans('narsil-cms::ui.save'));
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
     * @return FieldStepData[]
     */
    abstract protected function steps(): array;

    #endregion
}
