import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { auth, handlers } = NextAuth({ 
    providers: [GitHub],
    pages: {
        signIn: '/login',
    }
})