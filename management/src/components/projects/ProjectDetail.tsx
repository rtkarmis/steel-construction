'use client';

import { CalendarIcon, MapPinIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  name: string;
  client: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
  budget: string;
  description: string;
  location: string;
}

interface ProjectDetailProps {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

const statusColors = {
  'Tamamlandı': 'bg-green-100 text-green-800',
  'Devam Ediyor': 'bg-blue-100 text-blue-800',
  'Planlama': 'bg-yellow-100 text-yellow-800',
  'Askıda': 'bg-red-100 text-red-800',
  'Tasarım': 'bg-purple-100 text-purple-800',
  'İptal': 'bg-gray-100 text-gray-800',
};

export default function ProjectDetail({ project, onEdit, onDelete }: ProjectDetailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateProgress = () => {
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);
    const now = new Date();
    
    if (now < start) return 0;
    if (now > end) return 100;
    
    const total = end.getTime() - start.getTime();
    const elapsed = now.getTime() - start.getTime();
    return Math.round((elapsed / total) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
            <p className="text-sm text-gray-500 mt-1">Proje ID: #{project.id}</p>
          </div>
          <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${statusColors[project.status as keyof typeof statusColors]}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Key Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Müşteri</p>
              <p className="text-base text-gray-900">{project.client}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Konum</p>
              <p className="text-base text-gray-900">{project.location}</p>
            </div>
          </div>

          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Bütçe</p>
              <p className="text-base text-gray-900 font-semibold">{project.budget}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Başlangıç Tarihi</p>
              <p className="text-base text-gray-900">{formatDate(project.startDate)}</p>
            </div>
          </div>

          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Bitiş Tarihi</p>
              <p className="text-base text-gray-900">{formatDate(project.endDate)}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">İlerleme</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{progress}% tamamlandı</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Proje Açıklaması</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Kategori</h3>
        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700">
          {project.category}
        </span>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Proje Zaman Çizelgesi</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Proje Başlangıcı</span>
              <span className="text-sm font-medium">{formatDate(project.startDate)}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Tahmini Bitiş</span>
              <span className="text-sm font-medium">{formatDate(project.endDate)}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Kalan Süre</span>
              <span className="text-sm font-medium">
                {new Date(project.endDate) > new Date() 
                  ? `${Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} gün`
                  : 'Tamamlandı'
                }
              </span>
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