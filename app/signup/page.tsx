"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function Signup() {
    const router = useRouter();

const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        const res = await fetch("/api/signup", {   
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        console.log(data);
        // You might want to redirect or show a success message here
        // For example: redirect to dashboard
        // redirect("/dashboard");  
        router.push("/dashboard");
        }
    
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="border p-2 rounded"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Sign Up
            </button>
    
          </form>
        </div>
      );
}