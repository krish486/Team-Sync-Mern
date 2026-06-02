import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { authHook } from "../../hook/authHook";


const Login = () => {

    let { register, handleSubmit, errors, isSubmitting, onLoginSubmit, navigate } = authHook();

    return (
        <div className="min-h-screen bg-[#090914] relative overflow-hidden flex items-center justify-center px-4">

            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10 w-full max-w-md">

                {/* Card */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">

                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center text-white text-2xl font-bold">
                            S
                        </div>

                        <h1 className="text-white text-3xl font-bold mt-4">
                            team-sync
                        </h1>

                        <p className="text-gray-400 mt-2 text-sm">
                            Sign in to your workspace
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3">

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 transition rounded-xl py-3 text-white"
                        >
                            <FcGoogle size={20} />
                            Google
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 transition rounded-xl py-3 text-white"
                        >
                            <FaGithub size={20} />
                            GitHub
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-white/10"></div>
                        <span className="text-gray-400 text-sm">
                            or continue with email
                        </span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(onLoginSubmit)}
                        className="space-y-5"
                    >

                        {/* Email */}
                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value:
                                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message:
                                            "Enter a valid email",
                                    },
                                })}
                            />

                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-300 text-sm">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-purple-400 text-sm hover:text-purple-300"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                {...register("password", {
                                    required:
                                        "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Minimum 6 characters",
                                    },
                                })}
                            />

                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="accent-purple-600"
                            />
                            <label
                                htmlFor="remember"
                                className="text-gray-400 text-sm"
                            >
                                Stay signed in
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                        >
                            <span>
                                {isSubmitting
                                    ? "Signing In..."
                                    : "Sign In"}
                            </span>

                            <FiLogIn />
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center border-t border-white/10 pt-6">

                        <p
                            onClick={() => { navigate("/register") }}
                            className="text-gray-400 text-sm">
                            Don't have an account?{" "}
                            <span className="text-purple-400 cursor-pointer hover:text-purple-300 font-medium">
                                Sign Up
                            </span>
                        </p>

                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-xs">
                        © 2026 team-sync. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;