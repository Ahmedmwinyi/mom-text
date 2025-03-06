import Link from "next/link";
import { Heart, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
            <span className="text-xl font-bold">MomText</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-pink-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that works for your family. No hidden fees, no
                  contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
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
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Daily or weekly messages</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>5 custom message templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Delivery confirmation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Cancel anytime</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=basic">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex flex-col rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 ring-2 ring-pink-500">
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
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Mom + Dad messaging</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>10 custom message templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Custom scheduling per recipient</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Delivery confirmation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Cancel anytime</span>
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
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Mom + Dad + Siblings</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>$1 per additional family member</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Unlimited custom message templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Custom scheduling per recipient</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Delivery confirmation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Cancel anytime</span>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions about our pricing? We've got answers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">Are there any setup fees?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  No, there are no setup fees or hidden charges. You only pay
                  the monthly subscription fee for your chosen plan.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">
                  Can I change my plan later?
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Yes, you can upgrade, downgrade, or cancel your plan at any
                  time from your account dashboard.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">How does billing work?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We bill monthly on the date you signed up. You can update your
                  payment information at any time in your account settings.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-lg font-bold">Do you offer refunds?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We don't offer refunds for partial months, but you can cancel
                  anytime and your service will continue until the end of your
                  billing period.
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
                  href="/features"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Pricing
                </Link>
                <Link
                  href="/faq"
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
                  href="/about"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
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
                  href="/terms"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Privacy
                </Link>
                <Link
                  href="/cookies"
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
