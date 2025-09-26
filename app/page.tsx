"use client";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default  function HomePage() {
  
    return (
        <div>
            <h2 className="text-white flex items-center justify-center">Landing Page</h2>
            <Link href="/signin" className="text-blue-500 px-4 py-2 border flex justify-center border-blue-500 rounded hover:bg-blue-500 hover:text-white">Sign In</Link>
            <Link href="/signup" className="text-blue-500 px-4 py-2 border flex justify-center border-blue-500 rounded hover:bg-blue-500 hover:text-white">Sign Up</Link>
        </div>
    )
}
//   const session = await getServerSession()