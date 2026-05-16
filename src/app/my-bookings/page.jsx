import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import MyBookingsClient from "@/components/MyBookingsClient";

export default async function MyBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <p className="p-10 text-center text-slate-500">
        Please log in first.
      </p>
    );
  }


  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  
const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${session.user.email}`,
  {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  }
);

const data = await res.json();
console.log("bookings data:", data); 


const bookings = Array.isArray(data) ? data : [];

return <MyBookingsClient bookings={bookings} />;
}

