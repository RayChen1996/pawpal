import Image from "next/image";

const adoptedPets = [
  {
    name: "Buddy",
    breed: "Golden Retriever",
    date: "Adopted on Mar 16, 2024",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lucy",
    breed: "Tabby Cat",
    date: "Adopted on Feb 06, 2024",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  },
];

const favoritePets = [
  {
    name: "Max",
    type: "Corgi",
    note: "Playful & loyal",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nova",
    type: "Calico cat",
    note: "Loves window naps",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rocky",
    type: "Husky",
    note: "Enjoys long runs",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80",
  },
];

const applications = [
  { name: "Max", date: "Oct 15, 2023", status: "Approved" },
  { name: "Charlie", date: "Sep 28, 2023", status: "Pending" },
  { name: "Rocky", date: "Sep 08, 2023", status: "Denied" },
];

const statusBadgeStyles: Record<string, string> = {
  Approved: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Denied: "bg-rose-100 text-rose-700",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eef1f5] text-slate-800">
      <header className="flex flex-col gap-3 border-b bg-white px-6 py-4 shadow-sm md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f9a66c] text-lg font-semibold text-white shadow-sm">
            PP
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">PawPal</span>
            <span className="text-sm text-slate-500">Mobile My Profile Page</span>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a className="hover:text-emerald-600" href="#">
            About
          </a>
          <a className="hover:text-emerald-600" href="#">
            Donate
          </a>
          <a className="hover:text-emerald-600" href="#">
            Join Us
          </a>
          <button className="flex items-center gap-1 rounded-full bg-emerald-500 px-4 py-2 text-white shadow-sm transition hover:bg-emerald-600">
            Contact us
            <span aria-hidden>➜</span>
          </button>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-10 lg:flex-row lg:gap-10 lg:px-8">
        <aside className="w-full max-w-xl rounded-3xl bg-white p-7 shadow-sm lg:sticky lg:top-8 lg:max-w-[320px]">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#fef4ec]">
              <span className="text-4xl">🐾</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">Alex Doe</h2>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <span aria-hidden>✉️</span>
              <span>alexdoe@email.com</span>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800">
              <span aria-hidden>👤</span> Edit Profile
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span aria-hidden>🏠</span> My Adopted Pets
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                2
              </div>
            </button>
            <button className="flex w-full items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 text-left text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100">
              <div className="flex items-center gap-3">
                <span aria-hidden>❤️</span> 我的最愛
              </div>
              <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
                {favoritePets.length}
              </div>
            </button>
            <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span aria-hidden>⭐</span> My Applications
              </div>
              <span className="text-xs text-slate-400">Updated</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span aria-hidden>⚙️</span> Settings
              </div>
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-emerald-900">我的最愛</h3>
                <p className="text-sm text-emerald-700">收藏的寵物列表</p>
              </div>
              <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
                {favoritePets.length} 隻
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {favoritePets.map((pet) => (
                <div
                  key={pet.name}
                  className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-800">{pet.name}</p>
                      <span aria-hidden className="text-emerald-500">
                        ♥
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{pet.type}</p>
                    <p className="text-xs text-emerald-700">{pet.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            <span aria-hidden>↪</span> Logout
          </button>
        </aside>

        <section className="flex-1 space-y-8">
          <section className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">My Adopted Pets</h2>
                <p className="text-sm text-slate-500">Keep track of your happy companions.</p>
              </div>
              <button className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 md:inline-flex">
                Add New
              </button>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {adoptedPets.map((pet) => (
                <div key={pet.name} className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{pet.name}</h3>
                      <p className="text-sm text-slate-500">{pet.breed}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {pet.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800">My Applications</h2>
            <p className="text-sm text-slate-500">Submission status for your adoption requests.</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
              <div className="grid grid-cols-[2fr_2fr_1fr] bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span>Pet Name</span>
                <span>Application Date</span>
                <span className="text-center">Status</span>
              </div>
              <div className="divide-y divide-slate-100 bg-white">
                {applications.map((app) => (
                  <div key={`${app.name}-${app.date}`} className="grid grid-cols-[2fr_2fr_1fr] items-center px-5 py-4 text-sm font-semibold text-slate-700">
                    <span>{app.name}</span>
                    <span className="text-slate-500">{app.date}</span>
                    <div className="flex justify-center">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeStyles[app.status]}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
