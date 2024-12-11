"use client";

import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <h1>Hello {session?.user?.name}!</h1>
        <p>You are authenticated as {session?.user?.email}.</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <h1>Welcome to NextAuth.js!</h1>
        <p>You are not authenticated.</p>
        <button className='rounded-md border border-gray-200 px-4 py-2' onClick={() => signIn('keycloak')}>Sign In</button>
      </div>
    );
  }
}
