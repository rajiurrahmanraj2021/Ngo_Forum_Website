<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    protected $fillable = ['job_tatile', 'Type', 'Location', 'Salary', 'Deadline', 'link'];
}
