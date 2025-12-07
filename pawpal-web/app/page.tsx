import Image from "next/image";

const pets = [
  {
    name: "Buddy",
    breed: "Labrador Mix",
    age: "5yrs",
    color: "Yellow",
    size: "Medium",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lucy",
    breed: "Domestic Shorthair",
    age: "6yrs",
    color: "Ginger",
    size: "Medium",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Max",
    breed: "Golden Retriever",
    age: "4yrs",
    color: "Golden",
    size: "Medium",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bella",
    breed: "Beagle",
    age: "3yrs",
    color: "Brown",
    size: "Medium",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Charlie",
    breed: "German Shepherd",
    age: "4yrs",
    color: "Black and Tan",
    size: "Large",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Daisy",
    breed: "Ragdoll",
    age: "5yrs",
    color: "Black and White",
    size: "Medium",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  },
];

const quickLinks = ["Adoption", "Success Stories", "Resources", "News", "Events", "FAQ", "Terms of Service", "Privacy Policy"];
const resources = ["Donate", "Volunteer", "Foster", "Sponsor"];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-10 sm:px-6 lg:px-10">
        <header className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm sm:gap-4 sm:p-8">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-2xl font-semibold">
              <span className="text-emerald-500">Paw</span>
              <span>Pal</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <a className="font-medium text-emerald-500" href="#">
                Adoption
              </a>
              <a href="#">Foster</a>
              <a href="#">Get Involved</a>
              <a href="#">About Us</a>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <a href="#">Log In</a>
                <button className="rounded-full bg-emerald-500 px-5 py-2 text-white shadow-sm transition hover:bg-emerald-600">
                  Join Us
                </button>
              </div>
            </div>
          </nav>

          <div className="grid gap-6 rounded-2xl bg-emerald-500 px-6 py-7 text-white shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:px-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-wide">Animal Shelter</p>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">Find A New Companion</h1>
              <p className="text-base text-emerald-50">
                Give love and a home to a pet in need. Browse our adoptable pets and find your perfect match today.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="grid place-items-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center">
                <p className="text-3xl font-semibold">200</p>
                <p className="text-emerald-50">Pets Adopted</p>
              </div>
              <div className="grid place-items-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center">
                <p className="text-3xl font-semibold">150</p>
                <p className="text-emerald-50">Looking for homes</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 font-medium text-emerald-500">
                Cat & Dog Search
              </span>
              <button className="rounded-full px-4 py-2 hover:bg-slate-50">Find cats</button>
              <button className="rounded-full px-4 py-2 hover:bg-slate-50">Find dogs</button>
            </div>

            <div className="flex flex-wrap gap-3">
              <select className="h-10 min-w-[140px] rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none">
                <option>Animal Type</option>
                <option>Cats</option>
                <option>Dogs</option>
              </select>
              <select className="h-10 min-w-[120px] rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none">
                <option>Age</option>
                <option>Kitten/Puppy</option>
                <option>Adult</option>
              </select>
              <select className="h-10 min-w-[120px] rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none">
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
              <select className="h-10 min-w-[140px] rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none">
                <option>Gender</option>
                <option>Female</option>
                <option>Male</option>
              </select>
              <div className="flex flex-1 min-w-[220px] items-center rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm">
                <input
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400"
                  placeholder="Search for a breed"
                  type="text"
                />
                <button className="rounded-full bg-emerald-500 px-4 py-1 text-white transition hover:bg-emerald-600">Search</button>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10 flex-1">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">Featured Friends Waiting For You</h2>
            <select className="h-10 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none">
              <option>Sort: Newly added</option>
              <option>Age</option>
              <option>Size</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pets.map((pet) => (
              <article key={pet.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                <div className="relative h-52 w-full">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    fill
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    priority
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{pet.name}</h3>
                      <p className="text-sm text-slate-600">{pet.breed}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">Adopt Me</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase text-slate-400">Age</span>
                      <span>{pet.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase text-slate-400">Color</span>
                      <span>{pet.color}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase text-slate-400">Size</span>
                      <span>{pet.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase text-slate-400">Gender</span>
                      <span>{pet.gender}</span>
                    </div>
                  </div>
                  <button className="w-full rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:border-emerald-300 hover:bg-emerald-50">
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-2xl font-semibold text-slate-900">
                <span className="text-emerald-500">Paw</span>
                <span>Pal</span>
              </div>
              <p className="text-sm text-slate-600">
                Give love and a home to a pet in need. Browse our adoptable pets and find your perfect match today.
              </p>
              <div className="flex gap-3 text-slate-500">
                <span>🐶</span>
                <span>🐱</span>
                <span>🐾</span>
                <span>❤️</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                {quickLinks.map((link) => (
                  <a key={link} href="#" className="hover:text-emerald-600">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">Resources</h3>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                {resources.map((resource) => (
                  <a key={resource} href="#" className="hover:text-emerald-600">
                    {resource}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <h3 className="text-base font-semibold text-slate-900">Contact Us</h3>
              <p>contact@pawpal.com</p>
              <p>(123) 456 7890</p>
              <p>123 Main Street, Chicago, IL 60601</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2023 PawPal. All rights reserved</p>
            <div className="flex items-center gap-3">
              <a href="#" className="transition hover:text-emerald-600" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v5h3v-5h2.1L15 11h-2v-1.5c0-.28.22-.5.5-.5Z" />
                </svg>
              </a>
              <a href="#" className="transition hover:text-emerald-600" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M22 5.92a7.38 7.38 0 0 1-2.1.58 3.69 3.69 0 0 0 1.63-2.03 7.34 7.34 0 0 1-2.32.89 3.68 3.68 0 0 0-6.27 3.36A10.45 10.45 0 0 1 4.59 4.8a3.67 3.67 0 0 0 1.14 4.9 3.63 3.63 0 0 1-1.67-.46v.05a3.68 3.68 0 0 0 2.95 3.61 3.7 3.7 0 0 1-1.66.06 3.69 3.69 0 0 0 3.44 2.55A7.38 7.38 0 0 1 3 18.1 10.41 10.41 0 0 0 8.64 20c6.92 0 10.7-5.73 10.7-10.7 0-.16 0-.32-.01-.48A7.64 7.64 0 0 0 22 5.92Z" />
                </svg>
              </a>
              <a href="#" className="transition hover:text-emerald-600" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M7 4a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H7Zm0 2h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm10.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
                </svg>
              </a>
              <a href="#" className="transition hover:text-emerald-600" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M10 15.5v-7l6 3.5-6 3.5Zm-3.8-7.35c.67-.12 3.56-.15 3.56-.15s2.89.02 3.56.15c.4.08.71.38.79.79.14.68.13 1.48.13 1.48s.01.8-.13 1.48a1.1 1.1 0 0 1-.79.79c-.67.12-3.56.15-3.56.15s-2.89-.02-3.56-.15a1.1 1.1 0 0 1-.79-.79A7.5 7.5 0 0 1 5.3 10c0-.8.1-1.48.13-1.48.08-.4.39-.71.79-.79Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
