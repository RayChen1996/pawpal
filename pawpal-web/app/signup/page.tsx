import Link from "next/link";
import { PawLogo } from "../shared/paw-logo";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-zinc-100 px-4 py-12">
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
        <div className="space-y-8 px-6 py-10 md:px-12">
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <PawLogo className="h-10 w-10" />
            <span className="text-lg font-semibold text-slate-800">PawPal</span>
          </div>
          <header className="space-y-2 text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-emerald-600">PawPal Mobile Sign Up Page</p>
            <h1 className="text-3xl font-semibold text-slate-900">Create Your Account</h1>
            <p className="text-sm leading-6 text-slate-600">
              Join a community of pet lovers. Create your PawPal account to save medical records, book services, and find
              friendly pets nearby.
            </p>
          </header>

          <form className="space-y-5">
            <label className="block space-y-2 text-sm font-medium text-slate-800">
              <span>Full Name</span>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-800">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block space-y-2 text-sm font-medium text-slate-800">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="block space-y-2 text-sm font-medium text-slate-800">
                <span>Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </label>
            </div>

            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-500" />
              <span>
                I&apos;ve read and agree with the {" "}
                <button type="button" className="font-semibold text-sky-600">Terms</button>
                {" "}&amp;{" "}
                <button type="button" className="font-semibold text-sky-600">Privacy Policy</button>
              </span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-emerald-600 hover:text-emerald-700">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
