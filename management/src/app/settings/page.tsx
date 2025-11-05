import {
  UserIcon,
  BuildingOfficeIcon,
  BellIcon,
  ShieldCheckIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export default function SettingsPage() {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            Ayarlar
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Sistem ayarlarınızı ve hesap bilgilerinizi yönetin.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {/* Company Information */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                  Şirket Bilgileri
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Şirket bilgilerinizi güncelleyin.
                </p>
              </div>
              <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Düzenle
                </button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Şirket Adı
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  Güvenoğlu Çelik & Metal
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Vergi Numarası
                </label>
                <p className="mt-1 text-sm text-gray-900">1234567890</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <p className="mt-1 text-sm text-gray-900">+90 212 555 0100</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-posta
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  info@guvenoglucelik.com
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Adres
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  Organize Sanayi Bölgesi, 1. Cadde No: 123, Gebze/Kocaeli
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Kullanıcı Yönetimi
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Sistem kullanıcılarını yönetin.
                </p>
              </div>
              <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Kullanıcı Ekle
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Kullanıcı
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        E-posta
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Rol
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
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Admin Kullanıcı
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        admin@guvenoglucelik.com
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Yönetici
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Aktif
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Düzenle
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
              <BellIcon className="h-5 w-5 mr-2" />
              Bildirim Ayarları
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Hangi bildirimleri almak istediğinizi seçin.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Yeni teklif talepleri
                  </h4>
                  <p className="text-sm text-gray-500">
                    Yeni teklif talebi geldiğinde bildirim al
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  role="switch"
                  aria-checked="true"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Proje güncellemeleri
                  </h4>
                  <p className="text-sm text-gray-500">
                    Proje durumu değiştiğinde bildirim al
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  role="switch"
                  aria-checked="false"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Haftalık raporlar
                  </h4>
                  <p className="text-sm text-gray-500">
                    Her hafta özet rapor gönder
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  role="switch"
                  aria-checked="true"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              Güvenlik Ayarları
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Hesap güvenliğinizi yönetin.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Şifreyi Değiştir
                  </h4>
                  <p className="text-sm text-gray-500">
                    Mevcut şifrenizi güncelleyin
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Değiştir
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    İki Faktörlü Doğrulama
                  </h4>
                  <p className="text-sm text-gray-500">
                    Hesabınız için ek güvenlik katmanı
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Etkinleştir
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Oturum Geçmişi
                  </h4>
                  <p className="text-sm text-gray-500">
                    Son giriş yapılan cihazları görüntüle
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Görüntüle
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
              <CogIcon className="h-5 w-5 mr-2" />
              Sistem Ayarları
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Genel sistem yapılandırması.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dil
                </label>
                <select
                  id="language"
                  name="language"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="tr"
                >
                  <option value="tr">Türkçe</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timezone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Saat Dilimi
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="Europe/Istanbul"
                >
                  <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
                  <option value="Europe/London">Londra (UTC+0)</option>
                  <option value="America/New_York">New York (UTC-5)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="currency"
                  className="block text-sm font-medium text-gray-700"
                >
                  Para Birimi
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="TRY"
                >
                  <option value="TRY">Türk Lirası (₺)</option>
                  <option value="USD">ABD Doları ($)</option>
                  <option value="EUR">Euro (€)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="dateFormat"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tarih Formatı
                </label>
                <select
                  id="dateFormat"
                  name="dateFormat"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="DD/MM/YYYY"
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ayarları Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
