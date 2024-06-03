<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Fransisca Fidelis',
            'email' => 'joshuajayrous@gmail.com',
            'location' => 'Arusha',
            'user_type' =>'farmer',
            'phone' =>'+255 777 888 9999',
            'password'=>bcrypt('password'),
        ]);
        User::factory(7)->create();

    }
}