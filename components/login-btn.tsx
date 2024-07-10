"use client"
import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginBtn() { 
    const { data: session } = useSession()
 
    // checking if session is true
    if(session) { 
        return ( 
            <>
            Signed in as {session.user?.email} <br />
            <button onClick={() => signOut()}>Sign Out</button> 
            </>
        )
    }

    return ( 
        <>
        Not signed in <br /> 
        <button onClick={() => signIn}>Sign in</button> 
        </>
    )
}