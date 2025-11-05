'use client';

import { EnvelopeIcon, PhoneIcon, MapPinIcon, BuildingOfficeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

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

interface CustomerDetailProps {
  customer: Customer;
  onEdit: () => void;
  onDelete: () => void;
}

const statusColors = {
  'Aktif': 'bg-green-100 text-green-800',
  'Potansiyel': 'bg-yellow-100 text-yellow-800',
  'Pasif': 'bg-gray-100 text-gray-800',
};

export default function CustomerDetail({ customer, onEdit, onDelete }: CustomerDetailProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                <BuildingOfficeIcon className="h-8 w-8 text-gray-600" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{customer.name}</h2>
              <p className="text-sm text-gray-500">Müşteri ID: #{customer.id}</p>
            </div>
          </div>
          <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${statusColors[customer.status as keyof typeof statusColors]}`}>
            {customer.status}
          </span>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">İletişim Bilgileri</h3>
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">E-posta</p>
              <a href={`mailto:${customer.email}`} className="text-base text-indigo-600 hover:text-indigo-800">
                {customer.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Telefon</p>
              <a href={`tel:${customer.phone}`} className="text-base text-indigo-600 hover:text-indigo-800">
                {customer.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <MapPinIcon className="h-5 w-5 text-gray-400 mr-3 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">Adres</p>
              <p className="text-base text-gray-900">{customer.address}</p>
            </div>
          </div>

          <div className="flex items-center">
            <BuildingOfficeIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">İletişim Kişisi</p>
              <p className="text-base text-gray-900">{customer.contactPerson}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Statistics */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Proje İstatistikleri</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <ChartBarIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-900">{customer.projectCount}</p>
            <p className="text-sm text-blue-700">Toplam Proje</p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-900 mb-2">₺</div>
            <p className="text-lg font-semibold text-green-900">{customer.totalValue}</p>
            <p className="text-sm text-green-700">Toplam Değer</p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-900 mb-2">📋</div>
            <p className="text-sm font-medium text-purple-900 truncate">{customer.lastProject}</p>
            <p className="text-sm text-purple-700">Son Proje</p>
          </div>
        </div>
      </div>

      {/* Business Relationship */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">İş İlişkisi</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Müşteri Durumu</span>
              <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${statusColors[customer.status as keyof typeof statusColors]}`}>
                {customer.status}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Ortalama Proje Değeri</span>
              <span className="text-sm font-medium">
                {customer.projectCount > 0 
                  ? `${(parseFloat(customer.totalValue.replace(/[^\d]/g, '')) / customer.projectCount / 1000).toFixed(0)}K ₺`
                  : '0 ₺'
                }
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">İlk Kayıt Tarihi</span>
              <span className="text-sm font-medium">
                {new Date().toLocaleDateString('tr-TR')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Son Aktiviteler</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-600">Son proje teslim edildi</span>
              <span className="ml-auto text-gray-400">3 gün önce</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-600">Yeni teklif talebi alındı</span>
              <span className="ml-auto text-gray-400">1 hafta önce</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-gray-600">İletişim bilgileri güncellendi</span>
              <span className="ml-auto text-gray-400">2 hafta önce</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <button
          onClick={onDelete}
          className="rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Sil
        </button>
        <button
          onClick={onEdit}
          className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Düzenle
        </button>
      </div>
    </div>
  );
}