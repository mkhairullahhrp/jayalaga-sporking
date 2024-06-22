import React, { useState } from "react";
import FormBanner from "../components/FormBanner";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <FormBanner />
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="w-10/12 bg-white px-20 py-10 rounded-md border-2 border-primary shadow-xl">
            <h1 className=" text-5xl font-semibold text-center text-primary">Daftar</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="mt-7">
                <div className="">
                  <label htmlFor="email" className="text-lg font-medium text-primary">
                    Nama
                  </label>
                  <input
                    className="mb-4 p-2 outline-none block w-full bg-gray-200 placeholder-gray-900 rounded-sm border focus:border-primary transition duration-500"
                    id="Nama"
                    placeholder="Budi Pambudi"
                    onChange={(e) => setValues({ ...values, name: e.target.values })}
                  />
                </div>
                <div className="">
                  <label htmlFor="email" className="text-lg font-medium text-primary">
                    Email
                  </label>
                  <input
                    className="mb-4 p-2 outline-none block w-full bg-gray-200 placeholder-gray-900 rounded-sm border focus:border-primary transition duration-500"
                    id="email"
                    type="email"
                    placeholder="budipambudi@gmail.com"
                    onChange={(e) => setValues({ ...values, email: e.target.values })}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-lg font-medium text-primary">
                    Password
                  </label>
                  <input
                    className="mb-4 p-2 outline-none block w-full bg-gray-200 placeholder-gray-900 rounded-sm border focus:border-primary transition duration-500"
                    id="password"
                    placeholder="***********"
                    type="password"
                    onChange={(e) => setValues({ ...values, password: e.target.values })}
                  />
                </div>

                <div>
                  <label htmlFor="confPassword" className="text-lg font-medium text-primary">
                    Konfirmasi Password
                  </label>
                  <input
                    className="mb-4 p-2 outline-none block w-full bg-gray-200 placeholder-gray-900 rounded-sm border focus:border-primary transition duration-500"
                    id="confPassword"
                    placeholder="***********"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-y-2">
                  <button
                    type="submit"
                    className=" bg-primary rounded-sm text-secondary text-lg font-bold py-2 hover:opacity-80 hover:shadow-lg transition duration-500"
                  >
                    Daftar
                  </button>
                </div>

                <div className="mt-3 flex justify-center items-center">
                  <p className="font-medium text-base text-primary">Sudah Punya akun?</p>
                  <Link
                    to="/Login"
                    className="font-medium ml-2 text-cyan-500 hover:underline focus:text-primary"
                  >
                    Masuk
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
