import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SidebarWrapper from "../../components/sidebar-wrapper";
import { SessionProvider } from "next-auth/react";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
    const session = await auth()

    if (!session?.user) {
        redirect('/login')
    }
    return (
        <SessionProvider>
            <SidebarWrapper>
                {children}
            </SidebarWrapper>
        </SessionProvider>
    )
}