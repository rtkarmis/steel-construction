import {
  PlusIcon,
  EyeIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const proposals = [
  {
    id: 1,
    title: "Yeni Fabrika Çelik Konstrüksiyon",
    client: "JKL Endüstri A.Ş.",
    contactPerson: "Hasan Çelik",
    email: "hasan@jklendüstri.com",
    phone: "+90 216 555 0505",
    description:
      "5000 m² alan için endüstriyel çelik konstrüksiyon fabrika binası",
    estimatedValue: "3.500.000 ₺",
    submittedDate: "2024-10-15",
    deadline: "2024-11-30",
    status: "Bekliyor",
    priority: "Yüksek",
    location: "Gebze, Kocaeli",
  },
  {
    id: 2,
    title: "Oto Galeri Çelik Yapısı",
    client: "MNO Otomotiv",
    contactPerson: "Zeynep Akın",
    email: "zeynep@mnootomotiv.com",
    phone: "+90 212 555 0606",
    description: "Modern tasarım oto galeri çelik konstrüksiyonu",
    estimatedValue: "850.000 ₺",
    submittedDate: "2024-10-20",
    deadline: "2024-12-15",
    status: "İnceleniyor",
    priority: "Orta",
    location: "Maslak, İstanbul",
  },
  {
    id: 3,
    title: "Spor Salonu Çatı Sistemi",
    client: "PQR Belediyesi",
    contactPerson: "Mustafa Özkaya",
    email: "mustafa@pqrbelediye.gov.tr",
    phone: "+90 312 555 0707",
    description: "Kapalı spor salonu için çelik çatı konstrüksiyonu",
    estimatedValue: "1.200.000 ₺",
    submittedDate: "2024-10-25",
    deadline: "2024-12-31",
    status: "Onaylandı",
    priority: "Yüksek",
    location: "Çankaya, Ankara",
  },
  {
    id: 4,
    title: "Küçük Depo Binası",
    client: "STU Ticaret",
    contactPerson: "Leyla Kaya",
    email: "leyla@stuticaret.com",
    phone: "+90 232 555 0808",
    description: "500 m² küçük depo binası çelik konstrüksiyonu",
    estimatedValue: "420.000 ₺",
    submittedDate: "2024-10-28",
    deadline: "2024-11-20",
    status: "Reddedildi",
    priority: "Düşük",
    location: "Bornova, İzmir",
  },
];

const statusColors = {
  Bekliyor: "bg-yellow-100 text-yellow-800",
  İnceleniyor: "bg-blue-100 text-blue-800",
  Onaylandı: "bg-green-100 text-green-800",
  Reddedildi: "bg-red-100 text-red-800",
};

const priorityColors = {
  Yüksek: "bg-red-100 text-red-800",
  Orta: "bg-yellow-100 text-yellow-800",
  Düşük: "bg-green-100 text-green-800",
};

export default function ProposalsPage() {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            Teklif Talepleri
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Gelen teklif taleplerini yönetin ve değerlendirin.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon className="h-4 w-4" />
            Yeni Teklif
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Toplam Teklif
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {proposals.length}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Bekleyen
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-yellow-600">
            {proposals.filter((p) => p.status === "Bekliyor").length}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Onaylanan
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-green-600">
            {proposals.filter((p) => p.status === "Onaylandı").length}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Toplam Değer
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {(
              proposals.reduce(
                (sum, p) =>
                  sum + parseFloat(p.estimatedValue.replace(/[^\d]/g, "")),
                0
              ) / 1000000
            ).toFixed(1)}
            M ₺
          </dd>
        </div>
      </div>

      {/* Proposals List */}
      <div className="mt-8 space-y-6">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div className="sm:flex sm:items-start">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100">
                      <span className="text-lg font-medium text-indigo-600">
                        #{proposal.id}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {proposal.title}
                    </h3>
                    <div className="mt-1 max-w-2xl text-sm text-gray-500">
                      <p>{proposal.description}</p>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Müşteri:
                        </span>
                        <p className="mt-1 text-sm text-gray-900">
                          {proposal.client}
                        </p>
                        <p className="text-sm text-gray-500">
                          {proposal.contactPerson}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Değer:
                        </span>
                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {proposal.estimatedValue}
                        </p>
                        <p className="text-sm text-gray-500">
                          {proposal.location}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Tarihler:
                        </span>
                        <p className="mt-1 text-sm text-gray-900">
                          Başvuru:{" "}
                          {new Date(proposal.submittedDate).toLocaleDateString(
                            "tr-TR"
                          )}
                        </p>
                        <p className="text-sm text-gray-500">
                          Son:{" "}
                          {new Date(proposal.deadline).toLocaleDateString(
                            "tr-TR"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-6">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        priorityColors[
                          proposal.priority as keyof typeof priorityColors
                        ]
                      }`}
                    >
                      {proposal.priority}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        statusColors[
                          proposal.status as keyof typeof statusColors
                        ]
                      }`}
                    >
                      {proposal.status}
                    </span>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <EyeIcon className="h-3 w-3 mr-1" />
                      Detay
                    </button>
                    {proposal.status === "Bekliyor" && (
                      <>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md bg-green-50 px-2.5 py-1.5 text-xs font-semibold text-green-700 shadow-sm ring-1 ring-inset ring-green-600/20 hover:bg-green-100"
                        >
                          <CheckIcon className="h-3 w-3 mr-1" />
                          Onayla
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-red-600/20 hover:bg-red-100"
                        >
                          <XMarkIcon className="h-3 w-3 mr-1" />
                          Reddet
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {proposals.length === 0 && (
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            Teklif talebi yok
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            İlk teklif talebinizi oluşturarak başlayın.
          </p>
        </div>
      )}
    </div>
  );
}
