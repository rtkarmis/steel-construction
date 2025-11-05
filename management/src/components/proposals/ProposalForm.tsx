'use client';

import { useState } from 'react';

interface Proposal {
  id: number;
  title: string;
  client: string;
  contactPerson: string;
  email: string;
  phone: string;
  description: string;
  estimatedValue: string;
  submittedDate: string;
  deadline: string;
  status: string;
  priority: string;
  location: string;
}

interface ProposalFormProps {
  proposal?: Proposal;
  onSubmit: (proposal: Proposal) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const statuses = [
  'Bekliyor',
  'İnceleniyor',
  'Onaylandı',
  'Reddedildi'
];

const priorities = [
  'Düşük',
  'Orta',
  'Yüksek'
];

export default function ProposalForm({ proposal, onSubmit, onCancel, isLoading = false }: ProposalFormProps) {
  const [formData, setFormData] = useState<Proposal>({
    id: proposal?.id || 0,
    title: proposal?.title || '',
    client: proposal?.client || '',
    contactPerson: proposal?.contactPerson || '',
    email: proposal?.email || '',
    phone: proposal?.phone || '',
    description: proposal?.description || '',
    estimatedValue: proposal?.estimatedValue || '',
    submittedDate: proposal?.submittedDate || new Date().toISOString().split('T')[0],
    deadline: proposal?.deadline || '',
    status: proposal?.status || 'Bekliyor',
    priority: proposal?.priority || 'Orta',
    location: proposal?.location || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Teklif Başlığı *
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Teklif başlığını girin"
          />
        </div>

        <div>
          <label htmlFor="client" className="block text-sm font-medium text-gray-700">
            Müşteri Firması *
          </label>
          <input
            type="text"
            name="client"
            id="client"
            required
            value={formData.client}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Müşteri firma adı"
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
            İletişim Kişisi *
          </label>
          <input
            type="text"
            name="contactPerson"
            id="contactPerson"
            required
            value={formData.contactPerson}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="İletişim kişisi adı"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-posta *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefon *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="+90 XXX XXX XX XX"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Konum *
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="İl, Türkiye"
          />
        </div>

        <div>
          <label htmlFor="estimatedValue" className="block text-sm font-medium text-gray-700">
            Tahmini Değer *
          </label>
          <input
            type="text"
            name="estimatedValue"
            id="estimatedValue"
            required
            value={formData.estimatedValue}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="örn: 3.500.000 ₺"
          />
        </div>

        <div>
          <label htmlFor="submittedDate" className="block text-sm font-medium text-gray-700">
            Başvuru Tarihi *
          </label>
          <input
            type="date"
            name="submittedDate"
            id="submittedDate"
            required
            value={formData.submittedDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Son Tarih *
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            required
            value={formData.deadline}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Durum *
          </label>
          <select
            name="status"
            id="status"
            required
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
            Öncelik *
          </label>
          <select
            name="priority"
            id="priority"
            required
            value={formData.priority}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {priorities.map(priority => (
              <option key={priority} value={priority}>{priority}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Açıklama *
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            required
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Teklif detayları ve özel gereksinimler"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          İptal
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? 'Kaydediliyor...' : proposal?.id ? 'Güncelle' : 'Oluştur'}
        </button>
      </div>
    </form>
  );
}