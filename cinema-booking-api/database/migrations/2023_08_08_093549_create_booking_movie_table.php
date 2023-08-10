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
        Schema::create('booking_movie', function (Blueprint $table) {
            $table->string('booking_id')->primary();
            $table->string('movie_show_id');
            $table->foreign('movie_show_id')->references('movie_show_id')->on('movie_show')->onDelete('cascade');
            $table->string('user_id');
            $table->foreign('user_id')->references('user_id')->on('user_cinema')->onDelete('cascade');
            $table->timestamp('created_at')->useCurrent()->useCurrentOnUpdate();;
            $table->integer('number_of_seats');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_movie');
    }
};
