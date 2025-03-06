import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Clock,
  MessageSquare,
  CreditCard,
  Shield,
  Bell,
  Smartphone,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
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
                  Features & Benefits
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover how MomText helps you stay connected with your loved
                  ones effortlessly
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm dark:bg-pink-800">
                  Core Feature
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Set-and-Forget Scheduling
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Our API-driven scheduling system handles everything
                  automatically. Set up your messages once and never worry about
                  forgetting to text your loved ones again.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-pink-500" />
                    <span>Daily, weekly, or monthly scheduling options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-pink-500" />
                    <span>Custom time selection for each recipient</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-pink-500" />
                    <span>Zero maintenance required after setup</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Scheduling interface"
                  width={600}
                  height={400}
                  className="rounded-lg border shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Message customization"
                  width={600}
                  height={400}
                  className="rounded-lg border shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm dark:bg-pink-800">
                  Personalization
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Personalized Messages
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Create a library of custom messages or use our templates for
                  the perfect sentiment. Personalize your messages to make them
                  feel authentic and heartfelt.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-pink-500" />
                    <span>Unlimited custom message templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-500" />
                    <span>Sentiment-focused message suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-pink-500" />
                    <span>Messages appear from your own phone number</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm dark:bg-pink-800">
                  Family Plans
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Include the Whole Family
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Start with Mom for just $3/month, add Dad for $2 more, and
                  include siblings for just $1 each. Our flexible pricing lets
                  you customize your plan to fit your family.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-pink-500" />
                    <span>Simple, transparent pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-pink-500" />
                    <span>No contracts or hidden fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-pink-500" />
                    <span>Add or remove recipients anytime</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/pricing">
                    <Button size="lg">View Pricing</Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="lg" variant="outline">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Family plan options"
                  width={600}
                  height={400}
                  className="rounded-lg border shadow-lg"
                />
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
