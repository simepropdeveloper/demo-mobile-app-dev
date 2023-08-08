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
        Schema::create('cinema_and_hall', function (Blueprint $table) {
            $table->id();
            $table->string('cinema_id');
            $table->string('cinema_hall_id');
            $table->foreign('cinema_id')->references('cinema_id')
            ->on('cinema')->onDelete('cascade');
            $table->foreign('cinema_hall_id')->references('cinema_hall_id')
            ->on('cinema_hall')->onDelete('cascade');
        });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cinema_and_hall');
    }
};
