import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      prenom?: string | null
      role: string
      filiere?: string | null
      niveau?: string | null
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string
    id: string
    prenom?: string | null
    filiere?: string | null
    niveau?: string | null
  }
}
