import { PlusIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    name: 'Endüstriyel Fabrika Çelik Konstrüksiyon',
    client: 'ABC Sanayi A.Ş.',
    category: 'Endüstriyel',
    status: 'Tamamlandı',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    budget: '2.500.000 ₺',
    description: 'Modern çelik konstrüksiyon fabrika binası tasarımı ve uygulaması',
    location: 'İstanbul, Türkiye'
  },
  {
    id: 2,
    name: 'Lojistik Depo Binası',
    client: 'XYZ Lojistik Ltd.',
    category: 'Lojistik',
    status: 'Devam Ediyor',
    startDate: '2024-03-10',
    endDate: '2024-12-15',
    budget: '1.800.000 ₺',
    description: 'Geniş kapasiteli lojistik depo çelik konstrüksiyonu',
    location: 'Ankara, Türkiye'
  },
  {
    id: 3,
    name: 'Havacılık Hangarı',
    client: 'DEF Havacılık',
    category: 'Havacılık',
    status: 'Planlama',
    startDate: '2024-05-01',
    endDate: '2025-02-28',
    budget: '4.200.000 ₺',
    description: 'Büyük kapasiteli uçak hangarı çelik yapısı',
    location: 'İzmir, Türkiye'
  },
];

const statusColors = {
  'Tamamlandı': 'bg-green-100 text-green-800',
  'Devam Ediyor': 'bg-blue-100 text-blue-800',
  'Planlama': 'bg-yellow-100 text-yellow-800',
  'Beklemede': 'bg-red-100 text-red-800',
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Projeler</h1>
          <p className="mt-2 text-sm text-gray-700">
            Şirket projelerinizi yönetin, düzenleyin ve takip edin.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon className="h-4 w-4" />
            Yeni Proje
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500">{project.client}</p>
                </div>
                <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${statusColors[project.status as keyof typeof statusColors]}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">Kategori:</span>
                    <span className="ml-1">{project.category}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">Konum:</span>
                    <span className="ml-1">{project.location}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">Bütçe:</span>
                    <span className="ml-1">{project.budget}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">Tarih:</span>
                    <span className="ml-1">{new Date(project.startDate).toLocaleDateString('tr-TR')} - {new Date(project.endDate).toLocaleDateString('tr-TR')}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-x-1 rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EyeIcon className="h-3 w-3" />
                  Görüntüle
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-x-1 rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PencilIcon className="h-3 w-3" />
                  Düzenle
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-50"
                >
                  <TrashIcon className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add empty state if no projects */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">Proje yok</h3>
          <p className="mt-1 text-sm text-gray-500">İlk projenizi oluşturarak başlayın.</p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Yeni Proje
            </button>
          </div>
        </div>
      )}
    </div>
  );
}