<?php

#region USE

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Narsil\Ui\Models\TanStackTable;

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
                ->index();
            $blueprint
                ->string(TanStackTable::GLOBAL_FILTER);
            $blueprint
                ->jsonb(TanStackTable::COLUMN_ORDER);
            $blueprint
                ->jsonb(TanStackTable::COLUMN_SIZING);
            $blueprint
                ->jsonb(TanStackTable::COLUMN_VISIBILITY);
            $blueprint
                ->jsonb(TanStackTable::PAGINATION);
            $blueprint
                ->jsonb(TanStackTable::ROW_SELECTION);
            $blueprint
                ->jsonb(TanStackTable::SORTING);
            $blueprint
                ->timestamps();
        });
    }

    #endregion
};
