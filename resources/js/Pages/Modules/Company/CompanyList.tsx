import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function CompanyList({ mustVerifyEmail, status, className = '', data_ }: { mustVerifyEmail: boolean, status?: string, className?: string, data_: any }) {
    // Access the company data
    const companies = data_.data || []; // Ensure we have an array to map over

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company</h2>}
        >
            <Head title="Dashboard" />
            <a
                type="button"
                href={route('company.create')}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Add New Company
            </a>
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
                        {companies.length > 0 ? (
                            companies.map((company: { id: number; company_name: string; company_code: string }) => (
                                <tr key={company.id}>
                                    <td className='content-center'>{company.company_name}</td>
                                    <td>{company.company_code}</td>
                                    <td>
                                        <a href={route('company.edit', company.id)} className="text-blue-600 hover:underline">Edit</a>
                                        {/* Add delete or view buttons as needed */}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center py-4">No companies found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
