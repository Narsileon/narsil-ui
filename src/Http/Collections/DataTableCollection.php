<?php

namespace Narsil\Base\Http\Collections;

#region USE

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
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

        $this->id = Str::slug($table);

        $tanStackTable = TanStackTable::query()
            ->where(TanStackTable::USER_ID, Auth::id())
            ->where(TanStackTable::TABLE_NAME, $this->id)
            ->first();

        if ($tanStackTable)
        {
            $this->tableData = TableData::fromModel($tanStackTable);
        }
        else
        {
            $this->tableData = new TableData(
                tableName: $this->id,
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
     * @var string
     */
    protected readonly string $id;

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
        $meta = $this->getMeta();

        return array_merge([
            'columns' => $this->table->getColumns(),
            'columnOrder' => $this->table->getColumnOrder(),
            'columnVisibility' => $this->table->getColumnVisibility(),
            'meta' => $meta,
        ]);
    }

    #endregion

    #region PROTECTED METHODS

    /**
     * @return array<string,mixed>
     */
    protected function getMeta(): array
    {
        return array_merge($this->options, [
            'id'     => $this->id,
            'routes' => $this->table->getRoutes(),
            'tableData' => $this->tableData,
        ]);
    }

    /**
     * @return void
     */
    protected function registerTranslations(): void
    {
        app(TranslationsBag::class)
            ->add('narsil-ui::data-table.columns')
            ->add('narsil-ui::data-table.delete_selected')
            ->add('narsil-ui::data-table.deselect_all')
            ->add('narsil-ui::data-table.duplicate_selected')
            ->add('narsil-ui::data-table.filters')
            ->add('narsil-ui::data-table.pagination')
            ->add('narsil-ui::data-table.results_empty')
            ->add('narsil-ui::data-table.results')
            ->add('narsil-ui::data-table.select_all')
            ->add('narsil-ui::data-table.selection_empty')
            ->add('narsil-ui::data-table.selection')
            ->add('narsil-ui::dialogs.descriptions.delete')
            ->add('narsil-ui::dialogs.titles.delete')
            ->add('narsil-ui::pagination.first_page')
            ->add('narsil-ui::pagination.last_page')
            ->add('narsil-ui::pagination.more')
            ->add('narsil-ui::pagination.next_page')
            ->add('narsil-ui::pagination.previous_page')
            ->add('narsil-ui::placeholders.choose')
            ->add('narsil-ui::placeholders.search')
            ->add('narsil-ui::tooltips.hide')
            ->add('narsil-ui::tooltips.menu')
            ->add('narsil-ui::tooltips.move')
            ->add('narsil-ui::tooltips.show')
            ->add('narsil-ui::tooltips.sort')
            ->add('narsil-ui::ui.cancel')
            ->add('narsil-ui::ui.confirm')
            ->add('narsil-ui::ui.create')
            ->add('narsil-ui::ui.delete')
            ->add('narsil-ui::ui.duplicate')
            ->add('narsil-ui::ui.edit')
            ->add('narsil-ui::ui.reset')
            ->add('narsil-ui::ui.settings');

        foreach (OperatorEnum::values() as $value)
        {
            app(TranslationsBag::class)
                ->add('narsil-ui::operators.' . $value);
        }
    }

    #endregion
}
