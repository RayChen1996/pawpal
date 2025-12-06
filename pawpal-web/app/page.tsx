import Image from "next/image";
import Link from "next/link";

const navLinks = ["Find a Pet", "About", "Resources", "Contact Us"]; 

const filters = [
  "Animal Type",
  "Breed",
  "Age",
  "Sex",
  "Location",
  "Advanced Filters",
];

const pets = [
  {
    name: "Buddy",
    breed: "Golden Retriever",
    age: "Adult · Male",
    description:
      "Loving and playful, great with kids and enjoys outdoor adventures.",
    location: "Pawstitive Shelter, San Francisco, CA",
    status: "Available for Adoption",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lucy",
    breed: "German Shepherd",
    age: "Adult · Female",
    description:
      "The great companion you will find, she is loving and protective.",
    location: "Pawstitive Shelter, San Francisco, CA",
    status: "Available for Adoption",
    image:
      "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Max",
    breed: "Labrador Retriever",
    age: "Adult · Male",
    description:
      "Loving and playful, great with kids and enjoys outdoor adventures.",
    location: "Pawstitive Shelter, San Francisco, CA",
    status: "Available for Adoption",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bella",
    breed: "Beagle",
    age: "Adult · Female",
    description:
      "Smart and friendly, perfect for active families and children.",
    location: "Pawstitive Shelter, San Francisco, CA",
    status: "Available for Adoption",
    image:
      "https://images.unsplash.com/photo-1523517832534-89c87e348c02?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Charlie",
    breed: "Golden Retriever",
    age: "Young · Male",
    description:
      "The great companion you will find, he is loving and playful.",
    location: "Pawstitive Shelter, San Francisco, CA",
    status: "Available for Adoption",
    image:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Daisy",
    breed: "Golden Retriever",
    age: "Adult · Female",
    description:
      "Gentle and calm, loves long walks and cozy naps at home.",
    location: "Pawstitive Shelter, San Francisco, CA",
    status: "Available for Adoption",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
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
            {navLinks.map((item) => (
              <a key={item} className="hover:text-emerald-600" href="#">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm font-medium">
            <button className="rounded-full px-4 py-2 text-slate-700 hover:text-emerald-700">
              Login
            </button>
            <button className="rounded-full bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-600">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-8">
        <section className="relative overflow-hidden rounded-2xl bg-emerald-500 text-white shadow-xl">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=1600&q=80"
              alt="Happy dog in the field"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-emerald-600/60" aria-hidden />
          </div>
          <div className="relative grid gap-6 p-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="flex items-center gap-1 rounded-full bg-white/20 px-4 py-2">
                  <span className="text-lg">📍</span>
                  Nothwood, VA
                </span>
              </div>
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Find Your New Best Friend
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                Connecting adoptable pets with loving homes. Start your journey to
                find a loyal companion today.
              </p>
              <div className="flex gap-3">
                <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-white/40 hover:bg-emerald-400">
                  Browse Pets
                </button>
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-md hover:bg-slate-50">
                  Submit an Ad
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-white/15 p-4 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
                <div className="rounded-2xl bg-emerald-800/60 px-4 py-6 text-center">
                  Dogs
                  <div className="mt-1 text-xs font-medium text-white/80">
                    7 active listings
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-800/60 px-4 py-6 text-center">
                  Cats
                  <div className="mt-1 text-xs font-medium text-white/80">
                    4 active listings
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-800/60 px-4 py-6 text-center">
                  Farm Animals
                  <div className="mt-1 text-xs font-medium text-white/80">
                    1 active listings
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-800/60 px-4 py-6 text-center">
                  Others
                  <div className="mt-1 text-xs font-medium text-white/80">
                    12 active listings
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="rounded-full bg-white/20 px-3 py-1">Vaccinated</span>
                <span className="rounded-full bg-white/20 px-3 py-1">Neutered</span>
                <span className="rounded-full bg-white/20 px-3 py-1">Friendly</span>
                <span className="rounded-full bg-white/20 px-3 py-1">Good with Kids</span>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
              Featured Friends Waiting for You
            </span>
            <div className="ml-auto hidden items-center gap-2 text-sm text-slate-600 md:flex">
              <span>Sort by:</span>
              <button className="rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-300 hover:text-emerald-700">
                Popular
              </button>
              <button className="rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-300 hover:text-emerald-700">
                Newest
              </button>
              <button className="rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-300 hover:text-emerald-700">
                Distance
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className="flex items-center justify-between rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
              >
                <span>{filter}</span>
                <span className="text-lg">⌄</span>
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {pets.map((pet) => (
              <div
                key={pet.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex gap-2 text-xs font-semibold text-white">
                    <span className="rounded-full bg-emerald-500/90 px-3 py-1">
                      {pet.status}
                    </span>
                    <span className="rounded-full bg-black/50 px-3 py-1">{pet.age}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                      Dog · Golden Retriever
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{pet.name}</h3>
                    <p className="text-sm text-slate-500">{pet.breed}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{pet.description}</p>
                  <p className="text-sm font-medium text-slate-700">{pet.location}</p>
                  <div className="flex gap-3 text-sm font-semibold">
                    <Link
                      href="/pets/buddy"
                      className="flex-1 rounded-full bg-emerald-500 px-4 py-2 text-center text-white shadow hover:bg-emerald-600"
                    >
                      View Details
                    </Link>
                    <button className="flex items-center gap-1 rounded-full border border-slate-200 px-4 py-2 text-slate-700 hover:border-emerald-300 hover:text-emerald-700">
                      <span role="img" aria-label="chat">
                        💬
                      </span>
                      Chat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span>© 2023 PawPal</span>
            <span className="text-slate-300">|</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <a className="hover:text-emerald-600" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-emerald-600" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
