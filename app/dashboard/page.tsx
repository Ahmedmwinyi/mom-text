"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Clock,
  MessageSquare,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Save,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function DashboardPage() {
  const [recipients, setRecipients] = useState([
    {
      id: 1,
      name: "Mom",
      phone: "(555) 123-4567",
      active: true,
      schedule: "daily",
      time: "09:00",
    },
    {
      id: 2,
      name: "Dad",
      phone: "(555) 987-6543",
      active: true,
      schedule: "weekly",
      time: "10:00",
    },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, content: "Hi Mom, I love you! ❤️", active: true },
    {
      id: 2,
      content: "Just wanted to let you know I'm thinking of you today!",
      active: true,
    },
    {
      id: 3,
      content: "Hope you're having a great day! Love you!",
      active: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const addMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, content: newMessage, active: true },
      ]);
      setNewMessage("");
    }
  };

  const toggleMessageActive = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, active: !message.active } : message
      )
    );
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const updateRecipient = (id: number, field: string, value: string) => {
    setRecipients(
      recipients.map((recipient) =>
        recipient.id === id ? { ...recipient, [field]: value } : recipient
      )
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
            <span className="text-xl font-bold">MomText</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>
            <Link href="/logout">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your automated messages and recipients
            </p>
          </div>

          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="messages">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </TabsTrigger>
              <TabsTrigger value="recipients">
                <Clock className="mr-2 h-4 w-4" />
                Recipients & Schedule
              </TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-end gap-4">
                  <div className="grid gap-1.5 flex-1">
                    <Label htmlFor="new-message">Add a new message</Label>
                    <Input
                      id="new-message"
                      placeholder="Type your message here..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                  </div>
                  <Button onClick={addMessage}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>

                <div className="rounded-lg border">
                  <div className="p-4 font-medium border-b">
                    Your Message Library
                  </div>
                  <div className="divide-y">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className="p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <Switch
                            checked={message.active}
                            onCheckedChange={() =>
                              toggleMessageActive(message.id)
                            }
                          />
                          <span
                            className={message.active ? "" : "text-gray-400"}
                          >
                            {message.content}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteMessage(message.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    ))}
                    {messages.length === 0 && (
                      <div className="p-8 text-center text-gray-500">
                        <p>No messages yet. Add your first message above.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recipients" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recipients.map((recipient) => (
                  <div
                    key={recipient.id}
                    className="rounded-lg border overflow-hidden"
                  >
                    <div className="p-4 font-medium border-b bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
                      <span>{recipient.name}</span>
                      <Switch
                        checked={recipient.active}
                        onCheckedChange={(checked) =>
                          updateRecipient(recipient.id, "active", checked)
                        }
                      />
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="grid gap-1.5">
                        <Label htmlFor={`phone-${recipient.id}`}>
                          Phone Number
                        </Label>
                        <Input
                          id={`phone-${recipient.id}`}
                          value={recipient.phone}
                          onChange={(e) =>
                            updateRecipient(
                              recipient.id,
                              "phone",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="grid gap-1.5">
                        <Label htmlFor={`schedule-${recipient.id}`}>
                          Message Frequency
                        </Label>
                        <Select
                          value={recipient.schedule}
                          onValueChange={(value) =>
                            updateRecipient(recipient.id, "schedule", value)
                          }
                        >
                          <SelectTrigger id={`schedule-${recipient.id}`}>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-1.5">
                        <Label htmlFor={`time-${recipient.id}`}>Time</Label>
                        <Input
                          id={`time-${recipient.id}`}
                          type="time"
                          value={recipient.time}
                          onChange={(e) =>
                            updateRecipient(
                              recipient.id,
                              "time",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <Button className="w-full">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="rounded-lg border border-dashed flex flex-col items-center justify-center p-8 h-full">
                  <p className="text-gray-500 mb-4 text-center">
                    Add another family member to your plan
                  </p>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Recipient
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t bg-gray-100 dark:bg-gray-950">
        <div className="container flex flex-col gap-2 py-4 text-center text-xs text-gray-500 md:py-6 dark:text-gray-400">
          <p>© 2025 MomText Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
