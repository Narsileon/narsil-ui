<?php

#region USE

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Narsil\Base\Models\TanStackTable;

#endregion

return new class extends Migration
{
    #region PUBLIC METHODS

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        if (!Schema::hasTable(TanStackTable::TABLE))
        {
            $this->createTanSTackTablesTable();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(TanStackTable::TABLE);
    }

    #endregion

    #region PRIVATE METHODS

    /**
     * Create the TanStack tables table.
     *
     * @return void
     */
    private function createTanSTackTablesTable(): void
    {
        Schema::create(TanStackTable::TABLE, function (Blueprint $blueprint)
        {
            $blueprint
                ->uuid(TanStackTable::UUID)
                ->primary();
            $blueprint
                ->bigInteger(TanStackTable::USER_ID);
            $blueprint
                ->string(TanStackTable::TABLE_ID)
                ->index();
            $blueprint
                ->string(TanStackTable::NAME)
                ->nullable()
                ->index();
            $blueprint
                ->string(TanStackTable::GLOBAL_FILTER)
                ->nullable();
            $blueprint
                ->json(TanStackTable::FILTERS)
                ->nullable();
            $blueprint
                ->json(TanStackTable::COLUMN_ORDER)
                ->nullable();
            $blueprint
                ->json(TanStackTable::COLUMN_SIZING)
                ->nullable();
            $blueprint
                ->json(TanStackTable::COLUMN_VISIBILITY)
                ->nullable();
            $blueprint
                ->json(TanStackTable::PAGINATION)
                ->nullable();
            $blueprint
                ->json(TanStackTable::ROW_SELECTION)
                ->nullable();
            $blueprint
                ->json(TanStackTable::SORTING)
                ->nullable();
            $blueprint
                ->timestamps();
        });
    }

    #endregion
};
