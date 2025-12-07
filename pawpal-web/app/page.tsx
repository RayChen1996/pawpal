import Link from "next/link";
import { PawLogo } from "./shared/paw-logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-16">
      <div className="mb-8 flex items-center gap-2 text-slate-800">
        <PawLogo className="h-8 w-8" />
        <p className="text-2xl font-semibold">PawPal</p>
      </div>

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-emerald-600">
            Welcome back
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Ready to sign in?</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Head over to the login page to keep managing your pet&apos;s appointments, reminders, and favorite pals.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Go to Login
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-sky-600">New here?</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Create your PawPal account</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Join PawPal to save your pet&apos;s records, share with family, and discover friendly pets nearby.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
