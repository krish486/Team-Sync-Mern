import React from "react";

import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { authHook } from "../../hook/authHook";

const Register = () => {
    let { register, handleSubmit, errors, isSubmitting, password, getStrength, onLoginSubmit, onRegisterSubmit } = authHook()
    return (
        <div className="min-h-screen bg-[#070511] text-white">

            <div className="grid min-h-screen lg:grid-cols-2">

                {/* LEFT SIDE */}
                <div className="hidden lg:flex relative overflow-hidden border-r border-white/10">

                    <img
                        src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=2070&auto=format&fit=crop"
                        alt="AI"
                        className="absolute inset-0 h-full w-full object-cover opacity-40"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-[#050515]/20 via-[#050515]/40 to-[#050515]" />

                    <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">

                        <h1 className="text-3xl font-bold">
                            Synthetix AI
                        </h1>

                        <div>

                            <p className="uppercase tracking-[4px] text-purple-300 text-sm mb-6">
                                Next-Gen Intelligence
                            </p>

                            <h2 className="text-4xl xl:text-6xl font-bold leading-tight mb-6 max-w-xl">
                                Accelerate your team's intelligence.
                            </h2>

                            <p className="text-gray-300 text-lg max-w-lg">
                                Connect your enterprise data to our
                                specialized AI models and unlock
                                unparalleled strategic insights.
                            </p>

                            <div className="flex gap-12 mt-12">

                                <div>
                                    <h3 className="text-4xl font-bold">
                                        99.9%
                                    </h3>
                                    <p className="text-gray-400">
                                        Uptime SLA
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-bold">
                                        ISO
                                    </h3>
                                    <p className="text-gray-400">
                                        27001 Certified
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-center px-6 sm:px-10 lg:px-16 py-10">

                    <div className="w-full max-w-[560px]">

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                            Create your account
                        </h1>

                        <p className="text-gray-400 mb-10">
                            Experience the future of collaborative
                            data intelligence.
                        </p>

                        <form
                            onSubmit={handleSubmit(onRegisterSubmit)}
                            className="space-y-6"
                        >

                            {/* NAME */}
                            <div>

                                <label className="block mb-2 text-sm">
                                    Full Name
                                </label>

                                <div className="relative">

                                    <FiUser
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full bg-[#15131d] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500"
                                        {...register("name", {
                                            required: "Name is required",
                                        })}
                                    />

                                </div>

                                {errors.name && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.name.message}
                                    </p>
                                )}

                            </div>

                            {/* EMAIL */}
                            <div>

                                <label className="block mb-2 text-sm">
                                    Email Address
                                </label>

                                <div className="relative">

                                    <FiMail
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-[#15131d] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500"
                                        {...register("email", {
                                            required: "Email is required",
                                        })}
                                    />

                                </div>

                            </div>

                            {/* PASSWORD */}
                            <div>

                                <label className="block mb-2 text-sm">
                                    Password
                                </label>

                                <div className="relative">

                                    <FiLock
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-[#15131d] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500"
                                        {...register("password", {
                                            required: "Password required",
                                        })}
                                    />

                                </div>

                                <div className="flex gap-2 mt-3">

                                    {[25, 50, 75, 100].map((level) => (
                                        <div
                                            key={level}
                                            className={`h-1 flex-1 rounded-full ${getStrength() >= level
                                                ? "bg-purple-400"
                                                : "bg-white/10"
                                                }`}
                                        />
                                    ))}

                                </div>

                            </div>

                            {/* TERMS */}
                            <div className="flex items-start gap-3">

                                <input
                                    type="checkbox"
                                    className="accent-purple-500 mt-1"
                                    {...register("terms")}
                                />

                                <p className="text-sm text-gray-400">
                                    I agree to the Terms of Service and
                                    Privacy Policy.
                                </p>

                            </div>

                            {/* SUBMIT */}
                            <button
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-600 to-purple-400 hover:opacity-90 transition"
                            >
                                {isSubmitting
                                    ? "Creating..."
                                    : "Create Account"}
                            </button>

                        </form>

                        {/* DIVIDER */}
                        <div className="flex items-center gap-4 my-8">

                            <div className="h-px flex-1 bg-white/10" />

                            <span className="text-gray-500 text-sm">
                                OR CONTINUE WITH
                            </span>

                            <div className="h-px flex-1 bg-white/10" />

                        </div>

                        {/* SOCIAL */}
                        <div className="grid grid-cols-2 gap-4">

                            <button className="border border-white/10 rounded-xl py-4 flex justify-center items-center gap-2 hover:bg-white/5 transition">
                                <FcGoogle size={22} />
                                Google
                            </button>

                            <button className="border border-white/10 rounded-xl py-4 hover:bg-white/5 transition">
                                SSO
                            </button>

                        </div>

                        <p className="text-center text-gray-400 mt-10">
                            Already have an account?{" "}
                            <span className="text-purple-400 font-semibold cursor-pointer">
                                Log In
                            </span>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;