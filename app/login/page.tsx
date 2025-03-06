import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
            <span className="text-xl font-bold">MomText</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 p-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-pink-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me
              </Label>
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-pink-500 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-100 dark:bg-gray-950">
        <div className="container flex flex-col gap-2 py-4 text-center text-xs text-gray-500 md:py-6 dark:text-gray-400">
          <p>© 2025 MomText Inc. All rights reserved.</p>
          <p>
            <Link href="/terms" className="underline underline-offset-2">
              Terms of Service
            </Link>{" "}
            &bull;{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
