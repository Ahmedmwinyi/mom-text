"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Heart, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const planFromUrl = searchParams.get("plan") || "basic";

  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(planFromUrl);
  const [recipients, setRecipients] = useState([
    { name: "Mom", phone: "", enabled: true },
  ]);

  const addRecipient = (type: string) => {
    if (type === "dad") {
      setRecipients([...recipients, { name: "Dad", phone: "", enabled: true }]);
    } else {
      setRecipients([
        ...recipients,
        { name: "Sibling", phone: "", enabled: true },
      ]);
    }
  };

  const updateRecipient = (index: number, field: string, value: string | boolean) => {
    const newRecipients = [...recipients];
    newRecipients[index] = { ...newRecipients[index], [field]: value };
    setRecipients(newRecipients);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const calculatePrice = () => {
    let price = 0;
    let momCount = 0;
    let dadCount = 0;
    let siblingCount = 0;

    recipients.forEach((recipient) => {
      if (recipient.enabled) {
        if (recipient.name === "Mom") momCount++;
        else if (recipient.name === "Dad") dadCount++;
        else siblingCount++;
      }
    });

    if (momCount > 0) price += 3;
    if (dadCount > 0) price += 2;
    price += siblingCount * 1;

    return price;
  };

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
      <main className="flex-1">
        <div className="container grid flex-1 items-start gap-4 py-12 md:py-16">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Create Your Account</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Start sending automated messages to your loved ones
              </p>
            </div>
            <div className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">
                      Step 1: Choose your plan
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Select the plan that works best for your family
                    </p>
                  </div>
                  <RadioGroup
                    value={plan}
                    onValueChange={setPlan}
                    className="grid gap-4"
                  >
                    <div>
                      <RadioGroupItem
                        value="basic"
                        id="basic"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="basic"
                        className="flex flex-col items-start justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-500 [&:has([data-state=checked])]:border-pink-500"
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Basic
                          </p>
                          <p className="text-sm text-muted-foreground">
                            $3/month
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Perfect for keeping in touch with Mom.
                        </p>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="family"
                        id="family"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="family"
                        className="flex flex-col items-start justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-500 [&:has([data-state=checked])]:border-pink-500"
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Family
                          </p>
                          <p className="text-sm text-muted-foreground">
                            $5/month
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Keep both parents in the loop.
                        </p>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="extended"
                        id="extended"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="extended"
                        className="flex flex-col items-start justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-500 [&:has([data-state=checked])]:border-pink-500"
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Extended Family
                          </p>
                          <p className="text-sm text-muted-foreground">
                            $5+/month
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Include the whole family.
                        </p>
                      </Label>
                    </div>
                  </RadioGroup>
                  <Button onClick={nextStep} className="w-full">
                    Continue
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">
                      Step 2: Add recipients
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Who would you like to send messages to?
                    </p>
                  </div>
                  <div className="space-y-4">
                    {recipients.map((recipient, index) => (
                      <div
                        key={index}
                        className="space-y-2 rounded-lg border p-4"
                      >
                        <div className="flex items-center justify-between">
                          <Label
                            htmlFor={`name-${index}`}
                            className="text-base font-medium"
                          >
                            {recipient.name}
                          </Label>
                          <div className="flex items-center space-x-2">
                            <Label
                              htmlFor={`enabled-${index}`}
                              className="text-sm"
                            >
                              Active
                            </Label>
                            <input
                              type="checkbox"
                              id={`enabled-${index}`}
                              checked={recipient.enabled}
                              onChange={(e) =>
                                updateRecipient(
                                  index,
                                  "enabled",
                                  e.target.checked
                                )
                              }
                              className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor={`phone-${index}`} className="text-sm">
                            Phone Number
                          </Label>
                          <Input
                            id={`phone-${index}`}
                            placeholder="(555) 123-4567"
                            value={recipient.phone}
                            onChange={(e) =>
                              updateRecipient(index, "phone", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {(plan === "family" || plan === "extended") &&
                    recipients.every((r) => r.name !== "Dad") && (
                      <Button
                        variant="outline"
                        onClick={() => addRecipient("dad")}
                        className="w-full"
                      >
                        Add Dad (+$2/month)
                      </Button>
                    )}

                  {plan === "extended" && (
                    <Button
                      variant="outline"
                      onClick={() => addRecipient("sibling")}
                      className="w-full"
                    >
                      Add Sibling (+$1/month)
                    </Button>
                  )}

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button onClick={nextStep}>Continue</Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">
                      Step 3: Create your account
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Enter your details to create your account
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="you@example.com"
                        type="email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button onClick={nextStep}>Continue</Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Step 4: Payment</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Complete your subscription
                    </p>
                  </div>

                  <div className="rounded-lg border p-4 bg-gray-50 dark:bg-gray-900">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Subscription</span>
                        <span className="text-sm font-medium">
                          ${calculatePrice().toFixed(2)}/month
                        </span>
                      </div>
                      {recipients.map(
                        (recipient, index) =>
                          recipient.enabled && (
                            <div
                              key={index}
                              className="flex justify-between text-gray-500 text-xs"
                            >
                              <span>{recipient.name}</span>
                              <span>
                                {recipient.name === "Mom"
                                  ? "$3.00"
                                  : recipient.name === "Dad"
                                  ? "$2.00"
                                  : "$1.00"}
                              </span>
                            </div>
                          )
                      )}
                      <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                        <span>Total</span>
                        <span>${calculatePrice().toFixed(2)}/month</span>
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="card">Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="paypal" className="space-y-4">
                      <div className="flex items-center justify-center h-20 rounded-lg border border-dashed">
                        <p className="text-sm text-gray-500">
                          Continue with PayPal during checkout
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button>Complete Subscription</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-100 dark:bg-gray-950">
        <div className="container flex flex-col gap-2 py-4 text-center text-xs text-gray-500 md:py-6 dark:text-gray-400">
          <p>© 2025 MomText Inc. All rights reserved.</p>
          <p>
            <Link href="#" className="underline underline-offset-2">
              Terms of Service
            </Link>{" "}
            &bull;{" "}
            <Link href="#" className="underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
