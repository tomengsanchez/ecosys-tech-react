import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';



export default function CompanyCreate() {
    // alert(1);
    const { data, setData, errors,  post, reset, processing, recentlySuccessful } = useForm({
        company_name :'',
        company_code:''
    });
    const addCompany:FormEventHandler = (e) =>{
        e.preventDefault();
       
    
        post(route('company.store'), {
            preserveScroll: true,
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (errors) => {
                console.log(errors)
            },
        });
    }
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company Create</h2>}
        >
            <Head title="Dashboard" />
            <form action="" onSubmit={addCompany}>
                <InputLabel>Company Name</InputLabel><InputError message={errors.company_name} className="mt-2" />
                <TextInput
                    id="company_name"
                    name="company_name"
                    onChange={(e) => setData('company_name', e.target.value)}
                    className="mt-1 block w-full"
                ></TextInput>

                
                <InputLabel>Company Code</InputLabel>
                <InputError message={errors.company_code} className="mt-2" />
                <TextInput
                    id="company_code"
                    name="company_code"
                    onChange={(e) => setData('company_code', e.target.value)}
                    className="mt-1 block w-full"
                ></TextInput>
                
                <br />
                <PrimaryButton>Save</PrimaryButton>
            </form>


        </AuthenticatedLayout>
    );
}