import {
  UserGroupIcon,
  FolderIcon,
  DocumentTextIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const stats = [
  {
    name: "Toplam Proje",
    value: "24",
    icon: FolderIcon,
    href: "/projects",
    color: "bg-blue-500",
  },
  {
    name: "Aktif Müşteri",
    value: "48",
    icon: UserGroupIcon,
    href: "/customers",
    color: "bg-green-500",
  },
  {
    name: "Bekleyen Teklif",
    value: "12",
    icon: DocumentTextIcon,
    href: "/proposals",
    color: "bg-yellow-500",
  },
  {
    name: "Bu Ay Tamamlanan",
    value: "6",
    icon: ChartBarIcon,
    href: "/reports",
    color: "bg-purple-500",
  },
];

const recentProjects = [
  {
    name: "Fabrika Çelik Konstrüksiyon",
    client: "ABC Sanayi",
    status: "İnşaat",
    progress: 75,
  },
  {
    name: "Depo Binası",
    client: "XYZ Lojistik",
    status: "Tasarım",
    progress: 30,
  },
  {
    name: "Hangar Projesi",
    client: "DEF Havacılık",
    status: "Teklif",
    progress: 10,
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6 hover:shadow-lg transition-shadow cursor-pointer">
                <dt>
                  <div className={`absolute rounded-md p-3 ${item.color}`}>
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">
                    {item.value}
                  </p>
                </dd>
              </div>
            </Link>
          ))}
        </dl>
      </div>

      {/* Recent Projects */}
      <div className="mt-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Son Projeler
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Yakın zamanda güncellenen projelerinizin listesi
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href="/projects"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Tümünü Gör
            </Link>
          </div>
        </div>
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
                        Proje
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Müşteri
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Durum
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        İlerleme
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {recentProjects.map((project, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {project.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {project.client}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {project.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="mr-2 w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-600">
                              {project.progress}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
