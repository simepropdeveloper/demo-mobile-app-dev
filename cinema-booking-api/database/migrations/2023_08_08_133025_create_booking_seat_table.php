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
        Schema::create('booking_seat', function (Blueprint $table) {
            $table->id();
            $table->string('booking_id');
            $table->string('seat_number');
            $table->foreign('booking_id')->references('booking_id')
            ->on('booking_movie')->onDelete('cascade');
            $table->foreign('seat_number')->references('seat_number')
            ->on('cinema_seat')->onDelete('cascade');
            $table->string('cinema_id');
            $table->foreign('cinema_id')->references('cinema_id')
            ->on('cinema')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_seat');
    }
};
