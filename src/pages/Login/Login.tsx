import { Button } from "@mui/material";
import {
  Mail,
  LockKeyhole,
  LogIn,
  Sparkles,
  Eye,
  EyeOff,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../components/ZustandShare/AuthZuts";
import { toast } from "sonner";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false)


  const {Login, currentUser} = useAuthStore()

const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    setIsLoading(true);

    const success = await Login(email, password);

    if (success) {
      navigate("/dashboard");

      // console.log(currentUser)
    }

  } catch (error) {
    // store handles errors
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-white text-black">



      <div className="mx-auto flex min-h-[90vh] w-full max-w-md items-center justify-center">

        <div className="w-full">

          {/* BRAND */}
          <div className="m-3 flex flex-col items-center text-center">
{/* 
            <div
              className="
                mb-4 flex h-12 w-12
                items-center justify-center
                rounded-2xl
                bg-blue-600
                text-white
                shadow-sm
              "
            >
              <Sparkles size={21} />
            </div> */}


            <h1 className="text-xl font-bold tracking-tight">
              Staff Deliverables Management System
            </h1>

            <p className="mt-1 text-xs text-black/40">
              Work Monitoring Platform
            </p>

          </div>


          {/* LOGIN CARD */}
          <div
            className="
              rounded-2xl
              border border-black/8
              bg-white
              p-7
              shadow-[0_15px_50px_rgba(0,0,0,0.05)]
            "
          >

            {/* HEADER */}
            <div className="mb-7">

              <div
                className="
                  mb-3 inline-flex
                  items-center gap-2
                  rounded-full
                  bg-amber-50
                  px-3 py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-widest
                  text-amber-700
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />

                Welcome back
              </div>

              <h2 className="text-2xl font-bold tracking-tight">
                Sign in
              </h2>

              <p className="mt-2 text-sm leading-6 text-black/45">
                Enter your credentials to access your account.
              </p>

            </div>


            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-5">

              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email address
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="
                      pointer-events-none
                      absolute left-3.5 top-1/2
                      -translate-y-1/2
                      text-blue-500
                    "
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="
                      w-full
                      rounded-xl
                      border border-black/10
                      bg-white
                      py-3.5
                      pl-11
                      pr-4
                      text-sm
                      outline-none
                      transition
                      placeholder:text-black/25
                      hover:border-blue-200
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />

                </div>

              </div>


              {/* PASSWORD */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="
                      text-xs
                      font-semibold
                      text-blue-600
                      transition
                      hover:text-amber-600
                    "
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    className="
                      pointer-events-none
                      absolute left-3.5 top-1/2
                      -translate-y-1/2
                      text-amber-500
                    "
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="
                      w-full
                      rounded-xl
                      border border-black/10
                      bg-white
                      py-3.5
                      pl-11
                      pr-11
                      text-sm
                      outline-none
                      transition
                      placeholder:text-black/25
                      hover:border-amber-200
                      focus:border-amber-500
                      focus:ring-4
                      focus:ring-amber-500/10
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute right-3.5 top-1/2
                      -translate-y-1/2
                      text-black/30
                      transition
                      hover:text-blue-600
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>


              {/* REMEMBER */}
         


              {/* LOGIN BUTTON */}
             <Button 
             type="submit"
             className="w-full"
             variant="outlined"
             color="warning"
             sx={{
              textTransform:"none"
             }}>
              {isLoading ? 
              <>
              <span className="flex">
<Loader2 className="animate-spin" size={18}/>
              Signing you in progress ..." 
              </span>

              </>

              
              : "Sign In"}
             </Button>

            </form>


            {/* DIVIDER */}
            {/* <div className="my-7 flex items-center gap-3">

              <div className="h-px flex-1 bg-black/8" />

              <span className="text-[10px] font-semibold tracking-widest text-black/25">
                OR
              </span>

              <div className="h-px flex-1 bg-black/8" />

            </div> */}


            {/* GOOGLE */}
            {/* <button
              type="button"
              className="
                flex w-full
                items-center justify-center
                gap-3
                rounded-xl
                border border-black/10
                bg-white
                py-3.5
                text-sm
                font-semibold
                transition
                hover:border-blue-200
                hover:bg-blue-50/30
              "
            >
              <span className="font-bold text-blue-600">
                G
              </span>

              Continue with Google
            </button> */}


            {/* REGISTER */}
            {/* <p className="mt-7 text-center text-sm text-black/40">

              Don't have an account?{" "}

              <button
                type="button"
                onClick={() => navigate("/register")}
                className="
                  font-semibold
                  text-blue-600
                  transition
                  hover:text-amber-600
                "
              >
                Create account
              </button>

            </p> */}

          </div>


          {/* SECURITY */}
          <div
            className="
              mt-6 flex
              items-center justify-center
              gap-2
              text-[11px]
              font-medium
              text-black/30
            "
          >
            <ShieldCheck size={14} className="text-blue-500" />

            Secure account access

          </div>


          {/* FOOTER */}
          {/* <p className="mt-5 text-center text-[11px] text-black/25">
            © {new Date().getFullYear()} COP
          </p> */}

        </div>

      </div>

    </div>
  );
}

export default Login;