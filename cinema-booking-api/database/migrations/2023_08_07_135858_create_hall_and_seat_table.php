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
        Schema::create('hall_and_seat', function (Blueprint $table) {
            $table->id();
            $table->string('cinema_hall_id');
            $table->string('seat_number');
            $table->foreign('cinema_hall_id')->references('cinema_hall_id')->on('cinema_hall')->onDelete('cascade');
            $table->foreign('seat_number')->references('seat_number')->on('cinema_seat')->onDelete('cascade');
            $table->string('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hall_and_seat');
    }
};
