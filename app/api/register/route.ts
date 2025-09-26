import User from "@/lib/model";

export default async function POST(req: Request) {
try {
    const {email,password} = await req.json();

    // Validate input
    if (!email || !password) {
        return new Response(JSON.stringify({ error: "Email and password are required" }), { status: 400 });
    }
    const user = await User.findOne({
        email
    })
    if(user){
        return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }
const newUser = new User({
    email,
    password
})
await newUser.save();
return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201
})
    
} catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
}
}