import SignInForm from "@/components/auth/SignInForm";
import Link from "next/link";

function SignIn() {
  return (
    <section className="form-container">
      <h1 className="form-title">Log In Your Account</h1>

      <SignInForm />

      <div className="flex-center mt-6">
        <Link href="/sign-up" className="text-gray-400">
          Don't have an account?{" "}
          <span className="text-white">Sign Up</span>
        </Link>
      </div>
    </section>
  );
}
export default SignIn;
