"use client";
import { Eye, EyeOff, Key, Loader2, User2 } from "lucide-react";
import { useState } from "react";
import AdminSignIn_Server from "@/server/admin/signin/server";
import { useRouter } from "next/navigation";
import { set } from "idb-keyval";
import { toast } from "react-hot-toast";

export default function AdminSignIn() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    accountType: "admin",
    remember: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<{ [target_name: string]: string }>({});

  function form_validation(): boolean {
    if (formData.username === "") {
      setError({ username: "Username is required" });
      return false;
    }
    if (formData.password === "") {
      setError({ password: "Password is required" });
      return false;
    }
    return true;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError({});
  };

  const handleSignIn = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!form_validation()) {
        setTimeout(() => {
          setError({});
        }, 1000);
        return;
      }

      setIsSubmitting(true);
      const response = await AdminSignIn_Server(formData);

      if (response.success && response.token) {
        setIsSubmitting(false);
        setFormData({
          username: "",
          password: "",
          accountType: "admin",
          remember: false,
        });

        toast.success(`Welcome back ${response.data.first_name}`);

        const idb_object = {
          token: response.token,
          user: response.data,
        };
        set("user_data", idb_object);

        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 2000);
      }
    } catch (err: unknown) {
      console.error("Error signing in:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative bg-white dark:bg-neutral-900 min-h-screen w-full flex flex-col items-center justify-center text-black dark:text-white text-sm overflow-hidden"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Colorful scattered backdrop */}
      <div className="absolute inset-0 z-0">
        {/* Amber glows */}
        <div className="bg-rose-500/30 w-36 h-36 blur-3xl absolute top-10 left-10 rounded-full opacity-40"></div>
        <div className="bg-rose-700/30 w-32 h-32 blur-2xl absolute bottom-20 left-40 rounded-full opacity-50"></div>

        {/* Blue glows */}
        <div className="bg-violet-500/30 w-36 h-36 blur-3xl absolute top-40 right-20 rounded-full opacity-40"></div>
        <div className="bg-violet-600/30 w-24 h-24 blur-2xl absolute bottom-10 right-10 rounded-full opacity-50"></div>

        {/* Pink/Purple glows */}
        <div className="bg-violet-500/30 w-96 h-96 blur-3xl absolute top-60 left-1/3 rounded-full opacity-40"></div>
        <div className="bg-violet-600/30 w-96 h-96 blur-2xl absolute bottom-32 left-1/4 rounded-full opacity-50"></div>

        {/* Teal/Green glows */}
        <div className="bg-rose-500/30 w-82 h-82 blur-3xl absolute top-20 right-1/3 rounded-full opacity-40"></div>
        <div className="bg-rose-600/30 w-20 h-20 blur-2xl absolute bottom-1/4 right-1/2 rounded-full opacity-50"></div>
      </div>

      {/* Sign-in card */}
      <div className="relative z-10 p-8">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <span className="flex flex-col gap-2 items-center">
            <img src="/favicon.ico" alt="" className="w-12 h-16" />
            <h1 className="text-xl font-bold">Admin Sign In</h1>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              Let's get you signed in
            </p>
          </span>
        </div>

        <form onSubmit={handleSignIn} className="flex flex-col gap-4 w-80">
          <div className="flex items-center w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-2">
            <User2 size={16} className="mr-2 text-bold text-blue-700" />
            <input
              onChange={handleChange}
              value={formData.username}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full h-full outline-none"
            />
          </div>
          <span className="text-xs text-red-500">{error?.username}</span>

          <div className="flex items-center w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-2">
            <Key size={16} className="mr-2 text-bold text-blue-700" />
            <input
              onChange={handleChange}
              value={formData.password}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full h-full outline-none"
            />
            {showPassword ? (
              <EyeOff
                onClick={() => setShowPassword(!showPassword)}
                size={16}
                className="ml-2 text-bold text-blue-700 cursor-pointer"
              />
            ) : (
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                size={16}
                className="ml-2 text-bold text-blue-700 cursor-pointer"
              />
            )}
          </div>
          <span className="text-xs text-red-500">{error?.password}</span>

          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="bg-blue-500 text-blue-500"
            />
            <label htmlFor="remember">Remember me</label>
          </span>

          {isSubmitting ? (
            <p className="bg-blue-500 dark:bg-blue-600 text-white text-xs py-2 px-4 rounded-lg mt-4 w-full flex justify-center items-center">
              <span className="animate-spin">
                <Loader2 />
              </span>
              Signing in...
            </p>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 dark:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors disabled:bg-blue-400 dark:disabled:bg-blue-500"
            >
              Sign In
            </button>
          )}
        </form>
      </div>

      <p className="text-xs text-gray-600 dark:text-neutral-400 relative z-10 mt-4">
        Made with <span className="text-red-500">❤️</span> by RavenIQ Labs
      </p>
    </div>
  );
}