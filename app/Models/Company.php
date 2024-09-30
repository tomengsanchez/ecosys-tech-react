<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'company_code',
    ];

    public function saveCompany($requestInput = []){
        foreach($requestInput as $in=>$val){
            $this->{$in} = $val;
        }
        $this->save();
    }
    public static function getAllCompanies($perPage = 10,$columns = ['*'],$pageName = '',$page = 1){
        return parent::paginate(2,['*'],'',1);
        
    }
}
