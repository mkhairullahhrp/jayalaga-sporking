import React from "react";
import FormBanner from "../components/FormBanner";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <FormBanner />
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="w-10/12 bg-white px-20 py-10 rounded-md border-2 border-primary shadow-xl">
            <h1 className=" text-5xl font-semibold text-center text-primary">Masuk</h1>
            <form action="">
              <div className="mt-7">
                <div className="">
                  <label htmlFor="email" className="text-lg font-medium text-primary">
                    Email
                  </label>
                  <input
                    className="mb-4 p-2 outline-none block w-full bg-gray-200 placeholder-gray-900 rounded-sm border focus:border-primary transition duration-500"
                    id="email"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-lg font-medium text-primary">
                    Password
                  </label>
                  <input
                    className="mb-4 p-2 outline-none block w-full bg-gray-200 placeholder-gray-900 rounded-sm border focus:border-primary transition duration-500"
                    id="password"
                    type="password"
                    placeholder="**********"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-y-2">
                  <button
                    type="submit"
                    className=" bg-primary rounded-sm text-secondary text-lg font-bold py-2 hover:opacity-80 hover:shadow-lg transition duration-500"
                  >
                    Masuk
                  </button>
                </div>

                <div className="mt-3 justify-center text-center">
                  <Link className="text-center ml-2 font-medium text-primary hover:underline ">
                    Lupa Password?
                  </Link>
                </div>

                <div className="mt-3 flex justify-center items-center">
                  <p className="font-medium text-base text-primary">Belum punya akun?</p>
                  <Link
                    to="/Register"
                    className="font-medium ml-2 text-cyan-500 hover:underline focus:text-primary"
                  >
                    Daftar
                  </Link>
                </div>
                <div className="mt-3 ">
                  <p className="text-[#888888] font-medium text-bas text-center">Atau</p>
                </div>
                <div className="mt-3 flex flex-col gap-y-2">
                  <button className="bg-[#F4F2F2] text-primary rounded-sm py-2 border-2 border-gray-100 flex items-center justify-center gap-2 hover:opacity-80 hover:shadow-lg transition duration-500">
                    <svg
                      width={15}
                      height={15}
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FF8400"
                    >
                      <title>Google</title>
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    Masuk Dengan Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
