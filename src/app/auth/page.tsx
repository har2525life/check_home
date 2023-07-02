"use client";
import React from "react";
// import { useForm } from "react-hook-form";

type Auth = {
  email: string;
  password: string;
};

export default function AuthPage() {
  //   const { register, reset, handleSubmit } = useForm<Auth>();
  const submitLogin = (event: any) => {
    // const {email, password} = event
    // console.log(email, password)
    console.log(event);
  };

  const submitTestLogin = (event: any) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };
  return (
    <section className="mx-5 h-screen">
      <div className="pt-8">
        <h1 className="text-center text-2xl">Sign in</h1>
        <form onSubmit={submitTestLogin}>
          <div className="flex flex-col mt-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="email@address.com"
              className="border h-12 rounded p-2"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              className="border h-12 rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="mt-10 bg-blue-600 text-white rounded w-full h-9 hover:bg-blue-700"
          >
            SIGN IN
          </button>
          <p className="mt-4">Don't have an account? Sign Up</p>
        </form>
      </div>
    </section>
  );
}
