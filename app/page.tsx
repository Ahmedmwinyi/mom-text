import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  Heart,
  Clock,
  MessageSquare,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-16">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
            <span className="text-xl font-bold">MomText</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" className="hover:bg-gray-100" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-slate-900 hover:bg-slate-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24m lg:py-32 bg-gradient-to-b from-white to-pink-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Never Forget to Text Mom Again
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Automated "I love you" texts to Mom for just $3/month. Set
                    it and forget it - pure sentimental ROI.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="px-8 bg-slate-900 hover:bg-slate-700"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline" className="px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center lg:justify-end">
                <div className="relative w-[340px] h-[600px] bg-white dark:bg-gray-800 rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-900 dark:border-gray-700">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 dark:bg-gray-700"></div>
                  <div className="p-4 pt-8 space-y-4">
                    <div className="bg-pink-100 dark:bg-pink-900/20 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="h-5 w-5 text-pink-500 fill-pink-500" />
                        <p className="font-medium">MomText</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Scheduled message sent:
                        </p>
                        <div className="mt-2 p-3 bg-pink-50 dark:bg-pink-900/10 rounded-lg">
                          <p className="font-medium">Hi Mom, I love you! ❤️</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Sent today at 9:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
                      <p className="text-sm font-medium mb-2">Your Schedule</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-2 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">Daily • 9:00 AM</span>
                          </div>
                          <div className="w-8 h-4 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center p-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500 ml-auto"></div>
                          </div>
                          <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-2 rounded-lg">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="h-4 w-4 text-gray-500" />
                              <span className="text-sm">Custom Messages</span>
                            </div>
                            <div className="w-8 h-4 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center p-0.5">
                              <div className="w-3 h-3 rounded-full bg-pink-500 ml-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm dark:bg-pink-800">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Set it up once and never worry about forgetting to text Mom
                  again.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-800">
                  <Clock className="h-6 w-6 text-pink-600 dark:text-pink-200" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Set-and-Forget Scheduling
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Choose daily, weekly, or custom schedules. Our API-driven
                    system handles the rest.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-800">
                  <MessageSquare className="h-6 w-6 text-pink-600 dark:text-pink-200" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Personalized Messages</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Create a library of custom messages or use our templates for
                    the perfect sentiment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-800">
                  <CreditCard className="h-6 w-6 text-pink-600 dark:text-pink-200" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Simple Pricing</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Just $3/month for Mom. Add Dad for $2 more, and siblings for
                    $1 each.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm dark:bg-pink-800">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that works for your family.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Perfect for keeping in touch with Mom.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$3</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Daily or weekly messages
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    5 custom message templates
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Delivery confirmation
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=basic">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 ring-2 ring-pink-500">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Family</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Keep both parents in the loop.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$5</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Mom + Dad messaging
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    10 custom message templates
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Custom scheduling per recipient
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Delivery confirmation
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=family">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Extended Family</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Include the whole family.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$5+</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Mom + Dad + Siblings
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    $1 per additional family member
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited custom message templates
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=extended">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm dark:bg-pink-800">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to know about MomText.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">How does MomText work?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  MomText uses SMS technology to send scheduled messages to your
                  loved ones. You set up the schedule and messages once, and our
                  system handles the rest automatically.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">
                  Can I customize the messages?
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Yes! You can create a library of custom messages or use our
                  templates. You can also set up different messages for
                  different days or occasions.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">What if I want to cancel?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  You can cancel your subscription at any time from your account
                  dashboard. There are no long-term contracts or cancellation
                  fees.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">
                  Will my family know the messages are automated?
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  The messages come from your phone number, so they appear just
                  like regular texts. It's up to you whether you tell them about
                  your secret weapon for being the most attentive family member!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-100 dark:bg-gray-950">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-2 min-w-[150px]">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
              <span className="text-xl font-bold">MomText</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Never forget to text Mom again.
              <br />© 2025 MomText Inc.
            </p>
          </div>
          <div className="flex flex-1 flex-col md:flex-row gap-8 md:justify-end">
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="grid gap-2">
                <Link
                  href="#features"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
