import { NextAuthOptions} from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"; 
import { AuthOptions } from 'next-auth';

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        authorization: `Refresh ${token.backendTokens.refreshToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Falha ao atualizar o token");
    }
  
    const response = await res.json();
  
    return {
      ...token,
      backendTokens: response,
    };
  }

export const authOptions: NextAuthOptions = {
    providers:[
     CredentialsProvider({
         name: "Credentials",
         credentials: {
             email: {
                 label: "Email",
                 type: "text",
                 placeholder: "jsmith",
             },
             password: { label: "Password", type: "password"},
         },
         async authorize(credentials, req){

          if (!credentials?.email || !credentials?.password) {
            console.log("Credenciais inválidas");
            return null;
          }

          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                 { method: "POST",
                 
                 body: JSON.stringify(credentials), 
                 headers: {
                      "Content-Type": "application/json",
                 },
             });

             if (!res.ok) {
              console.error("Falha ao autenticar: ", res.statusText);
              return null;
             }
             const user = await res.json();

             if (!user || !user.backendTokens) {
              console.error("Usuário ou token inválido");
              return null;
             }
 
             return user;
         }, 
     }),
    ], 
 
   /* OLD 
   callbacks: {
     async jwt({ token, user }) {
       if (user) {
        token.backendTokens = user.backendTokens;
       }

         if(user) return { ...token, ...user};
         
          if (new Date().getTime() < token.backendTokens.expiresIn)
             return token;
 
         return await refreshToken(token); 
     },
    // secret: process.env.NEXTAUTH_URL,
 
     async session({ token, session }) {
         session.user = token.user; 
         session.backendTokens = token.backendTokens;
         //console.log(session, "SESSION--")
         return session;
     }, 
    },  */

    callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Incluindo tokens no JWT
        token.backendTokens = user.backendTokens;
      }
     /* if (new Date().getTime() < token.backendTokens.expiresIn) {
        return token;
      } */

      if (Date.now() < token.backendTokens.expiresIn * 1000) {
        return token;
      }
      return await refreshToken(token);
    },
    async session({ session, token }) {
      // old function 
       //session.backendTokens = token.backendTokens;
      // return session;

      session.user = token.user || {};
      session.backendTokens = token.backendTokens;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
 
 
 
 
    }