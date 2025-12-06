const navigation = [
  { name: "Dashboard", icon: "🏠", active: true },
  { name: "Pets", icon: "🐾" },
  { name: "Applications", icon: "📄" },
  { name: "Users", icon: "👥" },
  { name: "Settings", icon: "⚙️" },
];

const stats = [
  {
    label: "Total Pets Available",
    value: "124",
    change: "+2% this week",
    trend: "positive",
  },
  {
    label: "New Applications",
    value: "32",
    change: "+15% this month",
    trend: "positive",
  },
  {
    label: "Applications Pending",
    value: "23",
    change: "-12% this month",
    trend: "negative",
  },
  {
    label: "Pending Approvals",
    value: "5",
    change: "No change",
    trend: "neutral",
  },
];

const adoptionTrends = [
  { label: "Week 1", value: 12 },
  { label: "Week 2", value: 18 },
  { label: "Week 3", value: 22 },
  { label: "Week 4", value: 28 },
];

const recentApplications = [
  { name: "Buddy", applicant: "John Doe", status: "Pending" },
  { name: "Lucy", applicant: "Jane Smith", status: "Pending" },
  { name: "Max", applicant: "Jameson Doe", status: "Approved" },
  { name: "Bella", applicant: "Emy Davis", status: "Pending" },
  { name: "Charlie", applicant: "Michael Brown", status: "Approved" },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700 ring-yellow-200",
  Approved: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  Rejected: "bg-red-100 text-red-700 ring-red-200",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r bg-white/90 p-6 shadow-sm lg:flex">
          <div className="mb-8 flex items-center gap-3 text-lg font-semibold text-emerald-700">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xl">🐾</div>
            <div>
              <div className="text-sm font-medium text-slate-500">Admin Panel</div>
              <div>PawPal HQ</div>
            </div>
          </div>

          <nav className="flex-1 space-y-2 text-sm font-medium">
            {navigation.map((item) => (
              <button
                key={item.name}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-700 ${
                  item.active ? "bg-emerald-50 text-emerald-700" : "text-slate-700"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-2 text-sm">
            <button className="flex w-full items-center justify-between rounded-lg border px-3 py-2 text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">
              <span>Help Center</span>
              <span className="text-lg">❓</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border px-3 py-2 text-slate-700 transition hover:border-rose-200 hover:text-rose-700">
              <span>Logout</span>
              <span className="text-lg">↩️</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-10">
          <header className="mb-6 flex flex-col gap-4 sm:items-center sm:justify-between sm:gap-0 lg:flex-row">
            <div>
              <p className="text-sm text-slate-500">Dashboard</p>
              <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Dashboard Overview</h1>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-64">
                <input
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-inner outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Search pets, applications, users"
                  type="search"
                />
                <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400">🔍</span>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">👤</div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Admin User</div>
                  <div className="text-xs text-slate-500">admin@pawpal.com</div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
                  <span>{stat.label}</span>
                  <span className="text-lg">📊</span>
                </div>
                <div className="text-3xl font-semibold text-slate-900">{stat.value}</div>
                <div
                  className={`mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
                    stat.trend === "positive"
                      ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                      : stat.trend === "negative"
                        ? "bg-rose-50 text-rose-700 ring-rose-100"
                        : "bg-slate-50 text-slate-700 ring-slate-100"
                  }`}
                >
                  {stat.trend === "positive" && "▲"}
                  {stat.trend === "negative" && "▼"}
                  {stat.trend === "neutral" && "•"}
                  <span className="ml-1">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-5 shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <div>
                  <p className="font-medium text-slate-800">Adoption Trends</p>
                  <p className="text-xs text-slate-500">Last 4 Weeks</p>
                </div>
                <div className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  +5%
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                {adoptionTrends.map((week) => (
                  <div key={week.label} className="flex-1 text-center">
                    <div
                      className="mx-auto flex h-28 w-full max-w-[70px] items-end rounded-lg bg-emerald-50"
                      style={{ height: `${week.value * 2}px` }}
                    >
                      <div className="w-full rounded-lg bg-emerald-500" style={{ height: `${week.value * 2}px` }} />
                    </div>
                    <div className="mt-2 text-xs text-slate-500">{week.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-800">Recent Applications</p>
                  <p className="text-xs text-slate-500">Latest updates and statuses</p>
                </div>
                <button className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100 transition hover:bg-emerald-100">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {recentApplications.map((application) => (
                  <div key={`${application.name}-${application.applicant}`} className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg">🐕</div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">{application.name}</div>
                        <div className="text-xs text-slate-500">by {application.applicant}</div>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                        statusColors[application.status]
                      }`}
                    >
                      {application.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
