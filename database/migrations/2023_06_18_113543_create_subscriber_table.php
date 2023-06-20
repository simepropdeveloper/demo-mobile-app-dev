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
        Schema::create('booking_subscriber', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->default(null)->nullable();
            $table->integer('movie_id')->default(null)->nullable();
            $table->integer('has_order')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_subscriber');
    }
};
