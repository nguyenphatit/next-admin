"use client"

import { useState } from "react";
import { CircleGauge, Cog, LogOut, User } from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Navbar } from "./ui/navbar";
import { useTranslations } from "next-intl";

const links = [
  {
    label: "dashboard",
    href: "/",
    icon: <CircleGauge />,
  },
  {
    label: "profile",
    href: "/profile",
    icon: <User />,
  },
  {
    label: "settings",
    href: "/settings",
    icon: <Cog />,
  },
]

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const t = useTranslations("Sidebar")

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <Sidebar.Body className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              NEXT ADMIN
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <Sidebar.Link key={idx} link={{
                  label: t(link.label),
                  href: link.href,
                  icon: link.icon,
                }} />
              ))}
            </div>
          </div>
          <div>
            <Sidebar.Button
              onClick={() => signOut()}
              icon={<LogOut />}
            >
              {t("logout")}
            </Sidebar.Button>
            <Sidebar.Link
              link={{
                label: session?.user?.name as string,
                href: "/profile",
                icon: (
                  <img
                    src={session?.user?.image as string}
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </Sidebar.Body>
      </Sidebar>
      <main className="flex flex-1">
        <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 overflow-y-auto">
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  )
}