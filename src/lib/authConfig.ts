// import 'server-only'

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        authorized({ auth, request }) {
            const isLoggedIn = auth?.user
            const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')

            if (isOnDashboard) {
                return isLoggedIn
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', request.nextUrl))
            }

            return true
        },
    }
}
