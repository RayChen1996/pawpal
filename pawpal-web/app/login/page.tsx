import Link from "next/link";
import Image from "next/image";
import { PawLogo } from "../shared/paw-logo";

const socialProviders = [
  { label: "Login with Google", color: "bg-emerald-100 text-emerald-700", icon: GoogleIcon },
  { label: "Login with Facebook", color: "bg-sky-100 text-sky-700", icon: FacebookIcon },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-zinc-100 px-4 py-12">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 md:grid-cols-[1.2fr_1fr]">
        <div className="relative hidden md:block">
          <Image
            src="/pawpal-dog.svg"
            alt="Happy golden retriever"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-6 px-6 py-10 md:px-10">
          <div className="flex items-center gap-2 text-emerald-600">
            <PawLogo className="h-10 w-10" />
            <span className="text-lg font-semibold text-slate-800">PawPal</span>
          </div>
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-[0.18em] text-emerald-600">PawPal Mobile Login Page</p>
            <h1 className="text-3xl font-semibold text-slate-900">Welcome Back!</h1>
            <p className="text-sm leading-6 text-slate-600">
              Your pets missed you. Sign in to schedule playdates, track vaccinations, and stay connected with your furry
              pals.
            </p>
          </header>

          <div className="flex flex-col gap-3 md:flex-row">
            {socialProviders.map(({ label, color, icon: Icon }) => (
              <button
                key={label}
                className={`flex w-full items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${color}`}
                type="button"
              >
                <Icon />
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-full bg-slate-200" />
            <p className="whitespace-nowrap text-xs uppercase tracking-[0.3em] text-slate-400">Or</p>
            <span className="h-px w-full bg-slate-200" />
          </div>

          <form className="flex flex-col gap-5">
            <label className="space-y-2 text-sm font-medium text-slate-800">
              <span className="block">Email</span>
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-800">
              <span className="block">Password</span>
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </label>

            <div className="flex flex-col gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-500" />
                Keep me logged in!
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-sm text-slate-600">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="font-semibold text-sky-600 hover:text-sky-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M21 12.1c0-.7-.1-1.4-.2-2.1H12v4h5.2c-.2 1-.8 1.9-1.7 2.5v2h2.7c1.6-1.5 2.5-3.7 2.5-6.4Z"
        className="fill-current"
      />
      <path
        d="M12 22c2.3 0 4.2-.7 5.6-1.9l-2.7-2c-.8.5-1.8.9-2.9.9a5 5 0 0 1-4.7-3.4H4.4v2.1A10 10 0 0 0 12 22Z"
        className="fill-current"
        opacity="0.65"
      />
      <path
        d="M7.3 13.6A5 5 0 0 1 7 12c0-.6.1-1.1.3-1.6V8.3H4.4a9.9 9.9 0 0 0 0 7.4l2.9-2.1Z"
        className="fill-current"
        opacity="0.5"
      />
      <path
        d="M12 7.5c1.3 0 2.5.4 3.4 1.3l2.5-2.5A9.8 9.8 0 0 0 12 2a10 10 0 0 0-7.6 3.4l2.9 2.1A5 5 0 0 1 12 7.5Z"
        className="fill-current"
        opacity="0.35"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M13.6 21v-7h2.3l.4-2.8h-2.7V9.2c0-.8.2-1.3 1.3-1.3H16V5.4c-.6 0-1.5-.1-2.5-.1-2.4 0-4 1.4-4 3.9V11H7.2v2.8h2.3V21h4.1Z" />
    </svg>
  );
}
