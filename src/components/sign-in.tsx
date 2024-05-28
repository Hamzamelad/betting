import { signIn } from "@/lib/auth";

export function SignIn() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="p-4 rounded-xl bg-gray-800 ">
        <form
          className="mb-2"
          action={async (formData) => {
            "use server";
            await signIn("resend", formData);
          }}
        >
          <input type="text" name="email" placeholder="Email" />
          <button type="submit">submit</button>
        </form>
        <hr />
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="submit">Signin with Google</button>
        </form>
      </div>
    </div>
  );
}
