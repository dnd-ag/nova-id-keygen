import { signIn } from "@/lib/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("keycloak");
      }}
    >
      <button
        type="submit"
        className="rounded-md border border-gray-200 px-4 py-2"
      >
        Sign in with Keycloak
      </button>
    </form>
  );
}
