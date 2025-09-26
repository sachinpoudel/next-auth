"use client"
import { authOptions } from "@/lib/auth"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { signOut } from "next-auth/react"

export default function Dashboard () {

    const {data:session} = useSession()

    if(!session?.user){
        redirect('/signin' )
        return null
    }
    const user = session.user

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 flex items-center pt-5">Dashboard</h1>

          <div>
            {user && (  <button className="bg-red-500 text-white px-4 py-2 rounded flex justify-center items-center" onClick={() => signOut()}>Logout</button>)}

          </div>
        </div>
    )
}