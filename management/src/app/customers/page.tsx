'use client';

import { useState } from 'react';
import {
  PlusIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import Modal from '@/components/ui/Modal';
import CustomerForm from '@/components/customers/CustomerForm';
import CustomerDetail from '@/components/customers/CustomerDetail';

interface Customer {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  projectCount: number;
  totalValue: string;
  lastProject: string;
  status: string;
}

const initialCustomers: Customer[] = [
  {
    id: 1,
    name: "ABC Sanayi A.Ş.",
    contactPerson: "Mehmet Yılmaz",
    email: "mehmet@abcsanayi.com",
    phone: "+90 212 555 0101",
    address: "Organize Sanayi Bölgesi, İstanbul",
    projectCount: 3,
    totalValue: "8.500.000 ₺",
    lastProject: "Endüstriyel Fabrika Çelik Konstrüksiyon",
    status: "Aktif",
  },
  {
    id: 2,
    name: "XYZ Lojistik Ltd.",
    contactPerson: "Ayşe Kara",
    email: "ayse@xyzlojistik.com",
    phone: "+90 312 555 0202",
    address: "Lojistik Merkezi, Ankara",
    projectCount: 2,
    totalValue: "3.200.000 ₺",
    lastProject: "Lojistik Depo Binası",
    status: "Aktif",
  },
  {
    id: 3,
    name: "DEF Havacılık",
    contactPerson: "Ali Demir",
    email: "ali@defhavacilik.com",
    phone: "+90 232 555 0303",
    address: "Havaalanı Bölgesi, İzmir",
    projectCount: 1,
    totalValue: "4.200.000 ₺",
    lastProject: "Havacılık Hangarı",
    status: "Potansiyel",
  },
  {
    id: 4,
    name: "GHI İnşaat",
    contactPerson: "Fatma Öz",
    email: "fatma@ghiinsaat.com",
    phone: "+90 216 555 0404",
    address: "İş Merkezi, İstanbul",
    projectCount: 0,
    totalValue: "0 ₺",
    lastProject: "-",
    status: "Pasif",
  },
];

const statusColors = {
  Aktif: "bg-green-100 text-green-800",
  Potansiyel: "bg-yellow-100 text-yellow-800",
  Pasif: "bg-gray-100 text-gray-800",
};

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateCustomer = async (customerData: Customer) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newCustomer: Customer = {
        ...customerData,
        id: Math.max(...customers.map(c => c.id), 0) + 1
      };
      
      setCustomers(prev => [...prev, newCustomer]);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Error creating customer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditCustomer = async (customerData: Customer) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCustomers(prev => prev.map(c => c.id === customerData.id ? customerData : c));
      setIsEditModalOpen(false);
      setSelectedCustomer(null);
    } catch (error) {
      console.error('Error updating customer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCustomer = async (customerId: number) => {
    if (window.confirm('Bu müşteriyi silmek istediğinizden emin misiniz?')) {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setCustomers(prev => prev.filter(c => c.id !== customerId));
        setIsDetailModalOpen(false);
        setSelectedCustomer(null);
      } catch (error) {
        console.error('Error deleting customer:', error);
      }
    }
  };

  const openCreateModal = () => {
    setSelectedCustomer(null);
    setIsCreateModalOpen(true);
  };

  const openEditModal = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const openDetailModal = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsDetailModalOpen(true);
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            Müşteriler
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Müşteri bilgilerinizi yönetin ve iletişim detaylarını takip edin.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={openCreateModal}
            className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon className="h-4 w-4" />
            Yeni Müşteri
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Toplam Müşteri
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {customers.length}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Aktif Müşteri
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {customers.filter((c) => c.status === "Aktif").length}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Potansiyel Müşteri
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {customers.filter((c) => c.status === "Potansiyel").length}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Toplam Değer
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {(
              customers.reduce(
                (sum, c) =>
                  sum + parseFloat(c.totalValue.replace(/[^\d]/g, "")),
                0
              ) / 1000000
            ).toFixed(1)}
            M ₺
          </dd>
        </div>
      </div>

      {/* Customers List */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Müşteri
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      İletişim
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Projeler
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Toplam Değer
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Durum
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">İşlemler</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                              <BuildingOfficeIcon className="h-6 w-6 text-gray-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {customer.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {customer.contactPerson}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <EnvelopeIcon className="h-4 w-4 mr-1" />
                            {customer.email}
                          </div>
                          <div className="flex items-center">
                            <PhoneIcon className="h-4 w-4 mr-1" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {customer.projectCount} proje
                          </div>
                          <div className="text-sm text-gray-500">
                            {customer.lastProject}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {customer.totalValue}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            statusColors[
                              customer.status as keyof typeof statusColors
                            ]
                          }`}
                        >
                          {customer.status}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button 
                          onClick={() => openDetailModal(customer)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Görüntüle
                        </button>
                        <button 
                          onClick={() => openEditModal(customer)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Düzenle
                        </button>
                        <button 
                          onClick={() => handleDeleteCustomer(customer.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Create Customer Modal */}
      <Modal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Yeni Müşteri Oluştur"
        size="lg"
      >
        <CustomerForm
          onSubmit={handleCreateCustomer}
          onCancel={() => setIsCreateModalOpen(false)}
          isLoading={isLoading}
        />
      </Modal>

      {/* Edit Customer Modal */}
      <Modal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Müşteriyi Düzenle"
        size="lg"
      >
        {selectedCustomer && (
          <CustomerForm
            customer={selectedCustomer}
            onSubmit={handleEditCustomer}
            onCancel={() => setIsEditModalOpen(false)}
            isLoading={isLoading}
          />
        )}
      </Modal>

      {/* Customer Detail Modal */}
      <Modal
        open={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        title="Müşteri Detayları"
        size="xl"
      >
        {selectedCustomer && (
          <CustomerDetail
            customer={selectedCustomer}
            onEdit={() => {
              setIsDetailModalOpen(false);
              setIsEditModalOpen(true);
            }}
            onDelete={() => handleDeleteCustomer(selectedCustomer.id)}
          />
        )}
      </Modal>
    </div>
  );
}
