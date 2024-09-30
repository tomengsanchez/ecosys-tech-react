<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $Company = new Company();
        $search_value = $request->input('s');
        $perPage = $request->input('perPage') ?? 2;
        $page = $request->input('page') ?? 1;
        $Company->where('','like',"%" . $search_value . "%");
        $companyData = $Company->paginate(3,['*'],'',1);
        

        return Inertia::render('Modules/Company/CompanyList', [
            'status' => session('status'),
            'data'=>$companyData,
            'request'=>$request
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Modules/Company/CompanyCreate', [
            'status' => session('status'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompanyRequest $request)
    {
        
        $Company = new Company();
        $Company->saveCompany($request->input());

        return Inertia::render('Modules/Company/CompanyList', [
            'newly_added'=>$request->input(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCompanyRequest $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        //
    }
    public function des(){
        
    }
}
