<?php

namespace Narsil\Base\Http\Collections;

#region USE

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use JsonSerializable;
use Narsil\Base\Contracts\Table;
use Narsil\Base\Enums\OperatorEnum;
use Narsil\Base\Http\Data\TanStackTables\TableData;
use Narsil\Base\Models\Users\TanStackTable;
use Narsil\Base\Support\TranslationsBag;

#endregion

/**
 * @version 1.0.0
 * @author Jonathan Rigaux
 */
class DataTableCollection extends ResourceCollection
{
    #region CONSTUCTORS

    /**
     * @param Builder $query
     * @param string $table
     *
     * @return void
     */
    public function __construct(
        Builder $query,
        string $table,
    )
    {
        $template = app()->bound("tables.$table")
            ? app()->make("tables.$table", [
                'table' => $table,
            ])
            : app()->make('tables.entities', [
                'table' => $table,
            ]);

        $this->table = $template;

        $tanStackTable = TanStackTable::query()
            ->where(TanStackTable::USER_ID, Auth::id())
            ->where(TanStackTable::TABLE_NAME, $table)
            ->first();

        if ($tanStackTable)
        {
            $this->tableData = TableData::fromModel($tanStackTable);
        }
        else
        {
            $this->tableData = new TableData(
                tableName: $table,
            );
        }

        $this->tableData->applyGlobalFilter($query);
        $this->tableData->applyColumnFilters($query);
        $this->tableData->applySorting($query);

        $paginated = $query->paginate(
            perPage: $this->tanStackTable->{TanStackTable::PAGE_SIZE} ?? 10,
            page: request(self::PAGE, 1),
        );

        parent::__construct($paginated);

        $this->registerTranslations();
    }

    #endregion

    #region CONSTANTS

    /**
     * @var string
     */
    public const PAGE = 'page';

    #endregion

    #region PROPERTIES

    /**
     * @var Table
     */
    protected readonly Table $table;

    /**
     * @var TableData
     */
    protected readonly TableData $tableData;

    /**
     * @var array<string,mixed>
     */
    protected array $options = [];

    #endregion

    #region PUBLIC METHODS

    /**
     * {@inheritDoc}
     */
    public function toArray(Request $request): JsonSerializable
    {
        return $this->collection->map(function ($item)
        {
            return $item->toArray();
        });
    }

    /**
     * {@inheritDoc}
     */
    public function with($request): array
    {
        $columns = $this->table->columns();

        return [
            'meta' => [
                'columns' => $columns,
                'routes' => $this->table->routes(),
                'tableData' => $this->tableData,
            ],
        ];
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * @return void
     */
    protected function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil::data-table.columns')
            ->add('narsil::data-table.delete_selected')
            ->add('narsil::data-table.deselect_all')
            ->add('narsil::data-table.duplicate_selected')
            ->add('narsil::data-table.filters')
            ->add('narsil::data-table.pagination')
            ->add('narsil::data-table.results_empty')
            ->add('narsil::data-table.results')
            ->add('narsil::data-table.select_all')
            ->add('narsil::data-table.selection_empty')
            ->add('narsil::data-table.selection')
            ->add('narsil::dialogs.descriptions.delete')
            ->add('narsil::dialogs.titles.delete')
            ->add('narsil::pagination.first_page')
            ->add('narsil::pagination.last_page')
            ->add('narsil::pagination.more')
            ->add('narsil::pagination.next_page')
            ->add('narsil::pagination.previous_page')
            ->add('narsil::placeholders.choose')
            ->add('narsil::placeholders.search')
            ->add('narsil::ui.cancel')
            ->add('narsil::ui.confirm')
            ->add('narsil::ui.create')
            ->add('narsil::ui.delete')
            ->add('narsil::ui.duplicate')
            ->add('narsil::ui.edit')
            ->add('narsil::ui.hide')
            ->add('narsil::ui.menu')
            ->add('narsil::ui.move')
            ->add('narsil::ui.reset')
            ->add('narsil::ui.settings')
            ->add('narsil::ui.show')
            ->add('narsil::ui.sort');

        foreach (OperatorEnum::values() as $value)
        {
            app(TranslationsBag::class)
                ->add('narsil::operators.' . $value);
        }
    }

    #endregion
}
