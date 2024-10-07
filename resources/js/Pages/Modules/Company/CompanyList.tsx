import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, useForm } from '@inertiajs/react';
import { table } from 'console';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
// import CompanyListTableRow from './CompanyListTableRow';

export default function CompanyList({ mustVerifyEmail, status, className = '',data_,company_data}: { mustVerifyEmail: boolean, status?: string, className?: string,data_:object,company_data?:object}) {
    // const data = usePage().props.data;
    
    console.log(data_);
    
    const td = data_;
    // console.log(td);
    
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company</h2>}
        >
            <Head title="Dashboard" />
            <a type="button" href={route('company.create')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New Company</a>
            <br /><br />
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Company Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            td.map((t: {
                                [x: string]: ReactNode;}) =>(
                                <tr>
                                    <td className='content-center'>{t.company_name}</td>
                                    <td>{t.company_code}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    );
}