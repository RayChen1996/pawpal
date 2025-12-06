import Image from "next/image";
import Link from "next/link";

const badges = [
  { label: "Available for Adoption", color: "bg-emerald-50 text-emerald-700" },
  { label: "Adult", color: "bg-orange-50 text-orange-600" },
  { label: "2 years", color: "bg-orange-50 text-orange-600" },
  { label: "Vaccinated", color: "bg-emerald-50 text-emerald-700" },
  { label: "Neutered", color: "bg-emerald-50 text-emerald-700" },
  { label: "Friendly", color: "bg-emerald-50 text-emerald-700" },
  { label: "Good with Kids", color: "bg-emerald-50 text-emerald-700" },
];

const gallery = [
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=600&q=80",
];

export default function BuddyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
              P
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-800">PawPal</div>
              <div className="text-sm text-slate-500">Find your new best friend</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {"Home · Dogs · Buddy".split(" · ").map((item) => (
              <span key={item} className="text-slate-500">
                {item}
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm font-medium">
            <button className="rounded-full px-4 py-2 text-slate-700 hover:text-emerald-700">Login</button>
            <button className="rounded-full bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-600">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <Link href="/" className="font-medium text-emerald-700 hover:underline">
            Home
          </Link>
          <span>›</span>
          <span>Dogs</span>
          <span>›</span>
          <span className="font-semibold text-slate-800">Buddy</span>
        </div>

        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80"
                alt="Buddy sitting on grass"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {gallery.map((url, index) => (
                <div key={url} className="relative h-20 overflow-hidden rounded-xl">
                  <Image
                    src={url}
                    alt={`Buddy thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Home / Dog / Buddy
                </div>
                <h1 className="text-3xl font-semibold text-slate-900">Buddy</h1>
                <p className="text-sm text-slate-500">Golden Retriever, 2 years, Male</p>
              </div>
              <div className="flex gap-2 text-lg text-slate-400">
                <button className="rounded-full bg-slate-50 p-3 hover:text-emerald-600" aria-label="Bookmark">
                  🔖
                </button>
                <button className="rounded-full bg-slate-50 p-3 hover:text-emerald-600" aria-label="Favorite">
                  ❤️
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`rounded-full px-4 py-2 shadow-sm ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">About Buddy</h2>
              <p>
                Meet Buddy, the golden-hearted Golden Retriever who&apos;s ready to fill your
                life with joy and slobbery kisses! At two years old, Buddy is the perfect
                mix of playful energy and calm affection. He loves long walks in the park,
                chasing after his favorite squeaky tennis ball, and ending the day with a
                good belly rub. Buddy is both vaccinated and neutered, healthy, and knows all
                his basic commands.
              </p>
              <p>
                Whether it&apos;s a game of fetch or a cozy movie night, Buddy will be right by
                your side. If you&apos;re looking for a loyal friend who is friendly, and great
                with kids, Buddy is the companion for you!
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span> Pawstitive Shelter, San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🕒</span>
                  <span> 1 week ago</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">😺</span>
                  <span> Views and favorites available upon request</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-dashed border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600">
                    Verified Adopter
                  </span>
                  <span className="rounded-full border border-dashed border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600">
                    Likes long walks and chasing tennis balls
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4">
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Available for Adoption
                </div>
                <div className="text-2xl font-semibold text-slate-900">$350</div>
              </div>
              <button className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-600">
                Apply to Adopt Buddy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
