import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";

function SignUp() {
  return (
    <section className="form-container">
      <h1 className="form-title">Sign Up & Personalize</h1>

      <SignUpForm />

      <div className="flex-center mt-6">
        <Link href="/sign-in" className="text-gray-400">
          Already have an account?{" "}
          <span className="text-white">Log In</span>
        </Link>
      </div>
    </section>
  );
}
export default SignUp;
