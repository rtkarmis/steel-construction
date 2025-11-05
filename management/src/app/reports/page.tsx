import {
  ChartBarIcon,
  DocumentArrowDownIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const monthlyData = [
  { month: "Ocak", projects: 2, revenue: 1200000, proposals: 5 },
  { month: "Şubat", projects: 3, revenue: 1800000, proposals: 7 },
  { month: "Mart", projects: 1, revenue: 850000, proposals: 4 },
  { month: "Nisan", projects: 4, revenue: 2100000, proposals: 8 },
  { month: "Mayıs", projects: 2, revenue: 1600000, proposals: 6 },
  { month: "Haziran", projects: 3, revenue: 1950000, proposals: 9 },
  { month: "Temmuz", projects: 5, revenue: 2800000, proposals: 12 },
  { month: "Ağustos", projects: 2, revenue: 1400000, proposals: 5 },
  { month: "Eylül", projects: 3, revenue: 2200000, proposals: 7 },
  { month: "Ekim", projects: 4, revenue: 2600000, proposals: 10 },
  { month: "Kasım", projects: 1, revenue: 750000, proposals: 3 },
  { month: "Aralık", projects: 2, revenue: 1300000, proposals: 6 },
];

const reports = [
  {
    id: 1,
    name: "Aylık Proje Raporu",
    description: "Ay bazında tamamlanan projelerin detaylı analizi",
    lastGenerated: "2024-11-01",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "Müşteri Analiz Raporu",
    description: "Müşteri segmentasyonu ve değer analizi",
    lastGenerated: "2024-10-28",
    type: "Excel",
    size: "856 KB",
  },
  {
    id: 3,
    name: "Finansal Özet Raporu",
    description: "Gelir, gider ve kârlılık analizi",
    lastGenerated: "2024-10-25",
    type: "PDF",
    size: "1.8 MB",
  },
  {
    id: 4,
    name: "Teklif Performans Raporu",
    description: "Teklif başarı oranları ve trend analizi",
    lastGenerated: "2024-10-20",
    type: "PDF",
    size: "1.2 MB",
  },
];

export default function ReportsPage() {
  const totalRevenue = monthlyData.reduce(
    (sum, month) => sum + month.revenue,
    0
  );
  const totalProjects = monthlyData.reduce(
    (sum, month) => sum + month.projects,
    0
  );
  const totalProposals = monthlyData.reduce(
    (sum, month) => sum + month.proposals,
    0
  );
  const avgProjectValue = totalRevenue / totalProjects;

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            Raporlar
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            İş performansınızı analiz edin ve detaylı raporlar oluşturun.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ChartBarIcon className="h-4 w-4" />
            Yeni Rapor
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Yıllık Özet (2024)
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Toplam Gelir
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {(totalRevenue / 1000000).toFixed(1)}M ₺
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Tamamlanan Proje
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {totalProjects}
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Toplam Teklif
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {totalProposals}
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Ortalama Proje Değeri
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {(avgProjectValue / 1000).toFixed(0)}K ₺
            </dd>
          </div>
        </div>
      </div>

      {/* Monthly Performance Chart */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Aylık Performans
        </h3>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-6">
            {/* Simple bar chart representation */}
            <div className="grid grid-cols-12 gap-2">
              {monthlyData.map((month, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2">
                    <div
                      className="bg-blue-500 rounded-t mx-auto"
                      style={{
                        height: `${(month.revenue / 2800000) * 80}px`,
                        width: "20px",
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 transform -rotate-45 origin-top-left">
                    {month.month}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500 text-center">
              Aylık Gelir Performansı (₺)
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Data Table */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Aylık Detay Veriler
        </h3>
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Ay
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Proje Sayısı
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Gelir
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Teklif Sayısı
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Başarı Oranı
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {monthlyData.map((month, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {month.month}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {month.projects}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {month.revenue.toLocaleString("tr-TR")} ₺
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {month.proposals}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    %{((month.projects / month.proposals) * 100).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Available Reports */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Mevcut Raporlar
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {reports.map((report) => (
            <div
              key={report.id}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {report.name}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {report.description}
                  </p>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {new Date(report.lastGenerated).toLocaleDateString("tr-TR")}
                    <span className="mx-2">•</span>
                    {report.type}
                    <span className="mx-2">•</span>
                    {report.size}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-4 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <DocumentArrowDownIcon className="h-3 w-3 mr-1" />
                  İndir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
