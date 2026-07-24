import React, { useContext, useState } from "react";
import {
  ShoppingBag,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { registeredUsers, setRegisteredUsers, setLogedInUser } =
    useContext(Auth);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    setLogedInUser(data);
    localStorage.setItem("logedInUser", JSON.stringify(data));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("User Registered Successfully");
    navigate("/main");
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* ==========================================================================
           LEFT COLUMN: REGISTRATION FORM WORKSPACE
           ========================================================================== */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
          {/* Brand Header */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-2xl border border-orange-100">
                  <ShoppingBag size={22} />
                </div>
                <div>
                  <h1 className="text-xl font-black text-slate-900 tracking-tight">
                    MART
                  </h1>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Storefront Portal
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono tracking-wider uppercase text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <Sparkles size={12} className="text-amber-500" />
                Join Today
              </div>
            </div>

            {/* Welcome Text */}
            <div className="mt-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Create an account
              </h2>
              <p className="text-sm font-medium text-slate-500">
                Fill in your details below to get started with Mart.
              </p>
            </div>

            {/* Form Execution */}
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="mt-8 space-y-4"
            >
              {/* Username Input Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 tracking-wider uppercase">
                  Username
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400">
                    <User size={18} />
                  </div>
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    placeholder="johndoe"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Gmail / Email Input Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 tracking-wider uppercase">
                  Gmail / Email Address
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400">
                    <Mail size={18} />
                  </div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    placeholder="name@gmail.com"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 tracking-wider uppercase">
                  Password
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400">
                    <Lock size={18} />
                  </div>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 Characters",
                      },
                    })}
                    placeholder="Create a strong password"
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500/20 accent-orange-600 cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                    I agree to the{" "}
                    <a
                      href="#terms"
                      onClick={(e) => e.preventDefault()}
                      className="font-bold text-orange-600 underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#privacy"
                      onClick={(e) => e.preventDefault()}
                      className="font-bold text-orange-600 underline"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* Action Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 hover:bg-orange-600 disabled:bg-slate-400 text-white font-bold tracking-wider uppercase py-4 rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-xs shadow-md shadow-slate-900/10 mt-2"
              >
                {isLoading ? (
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>

            {/* Social Authentication Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100" />
              </div>
            </div>
          </div>

          {/* Footer Login Prompt */}
          <div className="mt-8 text-center sm:text-left pt-6 border-t border-slate-100">
            <button
              onClick={() => navigate("/")}
              className="text-xs font-medium text-slate-500"
            >
              Already have an account?{" "}
              <a
                href="#login"
                onClick={(e) => e.preventDefault()}
                className="font-extrabold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Sign in
              </a>
            </button>
          </div>
        </div>

        {/* ==========================================================================
           RIGHT COLUMN: BRAND VISUAL & BENEFIT BANNER
           ========================================================================== */}
        <div className="lg:col-span-5 bg-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Ambient Background Elements */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Chip */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-black tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20">
              New Member Perks
            </span>
            <span className="text-xs font-bold text-slate-400">v2.4.0</span>
          </div>

          {/* Middle Highlight Content */}
          <div className="relative z-10 my-12 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Start your shopping <br />
              <span className="text-orange-500">journey with us.</span>
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-400 leading-relaxed">
              Create an account in seconds to unlock personalized deals, save
              your favorite products, and track shipment status live.
            </p>

            {/* Feature Badges */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 bg-slate-800/60 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-md">
                <div className="p-2 bg-orange-500/10 text-orange-400 rounded-xl">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Exclusive Member Discounts
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Save up to 20% on your first order
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-800/60 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-md">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <Truck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Instant Order Tracking
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Real-time status updates via email
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="relative z-10 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <CheckCircle2 size={15} className="text-emerald-500" />
            <span>Join over 50,000 satisfied shoppers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
