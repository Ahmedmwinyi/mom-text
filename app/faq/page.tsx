import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
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
                  Frequently Asked Questions
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to know about MomText
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    How does MomText work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    MomText uses SMS technology to send scheduled messages to
                    your loved ones. You set up the schedule and messages once,
                    and our system handles the rest automatically. The messages
                    come from your phone number, so they appear just like
                    regular texts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Can I customize the messages?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    Yes! You can create a library of custom messages or use our
                    templates. You can also set up different messages for
                    different days or occasions. Our system will randomly select
                    from your message library to keep things fresh and
                    authentic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    What if I want to cancel?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    You can cancel your subscription at any time from your
                    account dashboard. There are no long-term contracts or
                    cancellation fees. Your service will continue until the end
                    of your current billing period.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    Will my family know the messages are automated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    The messages come from your phone number, so they appear
                    just like regular texts. It's up to you whether you tell
                    them about your secret weapon for being the most attentive
                    family member!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I add more family members?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    You can add more family members at any time from your
                    dashboard. The Basic plan includes Mom only, the Family plan
                    includes Mom and Dad, and the Extended Family plan lets you
                    add siblings for $1 each.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">
                    Can I schedule messages for specific dates?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    Yes, you can schedule messages for birthdays, anniversaries,
                    and other special occasions. Our calendar feature lets you
                    set up one-time messages for specific dates in addition to
                    your regular schedule.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I know if my messages were delivered?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    MomText provides delivery confirmation for all messages. You
                    can check the status of your messages in your dashboard, and
                    we'll notify you if there are any delivery issues.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg font-medium">
                    Can I use MomText internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    Currently, MomText is available in the United States and
                    Canada. We're working on expanding to more countries soon.
                    International messaging rates may apply depending on your
                    carrier.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-lg font-medium">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    Yes, we take data security very seriously. All your personal
                    information and message content is encrypted and stored
                    securely. We never share your data with third parties
                    without your consent.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">
                    Getting started is easy! Just sign up for an account, choose
                    your plan, add your recipients, set up your message
                    schedule, and you're good to go. The whole process takes
                    less than 5 minutes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="mt-12 text-center">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Still have questions? We're here to help.
              </p>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
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
