import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function GET(){
    try {
        const session = await getServerSession();
    if(!session){
         redirect('/signin')
         return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    } catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}