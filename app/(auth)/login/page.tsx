"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("Login");
  return (
    <section className="h-screen relative flex size-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1692606674482-effe67e384d9?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover px-2 py-6 md:px-12 lg:justify-end lg:p-0 ">
      <div className="relative z-10 h-full flex flex-1 flex-col rounded-3xl border-white/50 border-t bg-white/60 px-4 py-10 backdrop-blur-2xl sm:justify-center md:flex-none md:px-20 lg:rounded-r-none lg:border-t-0 lg:border-l lg:py-24">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          <h1 className="font-semibold text-3xl text-neutral-900 tracking-tighter">
            {t("title")}
          </h1>
          <p className="mt-4 font-medium text-base text-neutral-500">
            {t("description")}
          </p>

          <div className="mt-8">
            <Button
              aria-label="Sign in with GitHub"
              variant="outline"
              className="w-full text-neutral-900 cursor-pointer"
              size="lg"
              type="button"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <GitHubIcon />
              <span>{t("signInWithGitHub")}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}