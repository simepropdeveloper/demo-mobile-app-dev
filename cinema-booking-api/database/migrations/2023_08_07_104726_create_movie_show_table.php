<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movie_show', function (Blueprint $table) {
            $table->string('movie_show_id')->primary();
            $table->string('cinema_hall_id');
            $table->foreign('cinema_hall_id')->references('cinema_hall_id')->on('cinema_hall')->onDelete('cascade');
            $table->string('movie_id');
            $table->string('date');
            $table->string('start_time');
            $table->string('end_time');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movie_show');
    }
};
