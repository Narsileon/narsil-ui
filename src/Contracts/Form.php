<?php

namespace Narsil\Base\Contracts;

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
interface Form
{
    #region PUBLIC METHODS

    /**
     * Set the "action" attribute of the form.
     *
     * @param string $action
     *
     * @return static
     */
    public function action(string $action): static;

    /**
     * Set the default language of the form.
     *
     * @param string $defaultLanguage
     *
     * @return static
     */
    public function defaultLanguage(string $defaultLanguage): static;

    /**
     * Set the identifier of the form.
     *
     * @param string $id
     *
     * @return static
     */
    public function id(string $id): static;

    /**
     * Set the language options of the form.
     *
     * @param array $locales
     *
     * @return static
     */
    public function languages(array $locales): static;

    /**
     * Set the method of the form.
     *
     * @param string $method
     *
     * @return static
     */
    public function method(string $method): static;

    /**
     * Set the routes associated with the form.
     *
     * @param array $routes
     *
     * @return static
     */
    public function routes(array $routes): static;

    /**
     * Set the icon of the submit button.
     *
     * @param ?string $submitIcon
     *
     * @return static
     */
    public function submitIcon(?string $submitIcon): static;

    /**
     * Set the label of the submit button.
     *
     * @param string $submitLabel
     *
     * @return static
     */
    public function submitLabel(string $submitLabel): static;

    #endregion
}
