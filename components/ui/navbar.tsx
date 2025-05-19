
import { ModeToggle } from "../mode-toggle";
import { LocaleToggle } from "../locale-toggle";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const Navbar = () => {
    return (
        <div className="items-center justify-end relative hidden md:flex">
            <div className="flex gap-2">
                <ModeToggle />
                <LocaleToggle />
                <Button variant="outline" size="icon" onClick={() => signOut()}>
                    <LogOut />
                </Button>
            </div>
        </div>
    )
}