<?php

namespace Narsil\Base\Implementations\Forms\Fortify;

#region USE

use Narsil\Base\Contracts\Forms\Fortify\TwoFactorChallengeForm as Contract;
use Narsil\Base\Enums\AutoCompleteEnum;
use Narsil\Base\Enums\InputTypeEnum;
use Narsil\Base\Enums\RequestMethodEnum;
use Narsil\Base\Http\Data\Forms\FormStepData;
use Narsil\Base\Http\Data\Forms\InputData;
use Narsil\Base\Implementations\Form;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class TwoFactorChallengeForm extends Form implements Contract
{
    #region CONSTRUCTOR

    /**
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this
            ->action(route('two-factor.login'))
            ->method(RequestMethodEnum::POST->value)
            ->submitLabel(trans('narsil-ui::ui.confirm'));
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * {@inheritDoc}
     */
    protected function steps(): array
    {
        return [
            new FormStepData(
                elements: [
                    new InputData(
                        autoComplete: AutoCompleteEnum::ONE_TIME_CODE->value,
                        handle: 'code',
                        icon: 'circle-check',
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                    new InputData(
                        autoComplete: AutoCompleteEnum::ONE_TIME_CODE->value,
                        handle: 'recovery_code',
                        icon: 'circle-check',
                        required: true,
                        type: InputTypeEnum::TEXT->value,
                    ),
                ],
            ),
        ];
    }

    #endregion
}
