import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BlogPage() {
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
                  MomText Blog
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tips, stories, and insights about staying connected with
                  family
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-lg border overflow-hidden">
                <Link href="/blog/the-science-of-staying-connected">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Blog post image"
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime="2025-03-01">March 1, 2025</time>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                      The Science of Staying Connected: Why Regular
                      Communication Matters
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Research shows that regular communication with loved ones
                      can improve mental health and strengthen relationships.
                      Learn how even small messages can make a big difference.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group rounded-lg border overflow-hidden">
                <Link href="/blog/5-ways-to-make-mom-smile">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Blog post image"
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime="2025-02-15">February 15, 2025</time>
                      <span>•</span>
                      <span>4 min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                      5 Ways to Make Mom Smile Every Day (Even When You're Busy)
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Small gestures can make a big impact. Discover five simple
                      ways to brighten your mom's day, even when your schedule
                      is packed.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group rounded-lg border overflow-hidden">
                <Link href="/blog/from-guilt-to-connection">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Blog post image"
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime="2025-01-28">January 28, 2025</time>
                      <span>•</span>
                      <span>6 min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                      From Guilt to Connection: How Automation Can Improve
                      Family Relationships
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Many of us feel guilty about not staying in touch with
                      family. Learn how thoughtful automation can help transform
                      that guilt into meaningful connection.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group rounded-lg border overflow-hidden">
                <Link href="/blog/perfect-messages-for-mom">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Blog post image"
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime="2025-01-10">January 10, 2025</time>
                      <span>•</span>
                      <span>3 min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                      20 Perfect Messages to Send Your Mom (That She'll Actually
                      Love)
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Not sure what to say? We've compiled 20 heartfelt messages
                      that will make your mom's day. Copy, paste, and customize
                      to make them your own.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group rounded-lg border overflow-hidden">
                <Link href="/blog/dad-mode-benefits">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Blog post image"
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime="2024-12-20">December 20, 2024</time>
                      <span>•</span>
                      <span>4 min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                      Why "Dad Mode" Might Be the Best $2 You'll Ever Spend
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Dads need love too! Discover the benefits of adding Dad to
                      your MomText subscription and why it's worth every penny.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group rounded-lg border overflow-hidden">
                <Link href="/blog/customer-stories">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Blog post image"
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime="2024-12-05">December 5, 2024</time>
                      <span>•</span>
                      <span>7 min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                      Customer Stories: "How MomText Changed My Relationship
                      With My Parents"
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Real stories from real customers about how automated
                      messaging has transformed their family relationships for
                      the better.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">Load More Articles</Button>
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
