import React, { useEffect } from "react";
import Guest from "@/Layouts/Guest";
import ValidationErrors from "@/Components/Default/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { MdAccountCircle } from "react-icons/md";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const onHandleChange = event => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };

  const submit = e => {
    e.preventDefault();
    post(route("register"));
  };

  return (
    <Guest>
      <Head title="DAFTAR AKUN" />
      <div
        className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-duration="500">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2
              className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white"
              data-aos="fade-right"
              data-aos-duration="500">
              Daftar Cuy
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
              Atau{" "}
              <Link
                href={route("login")}
                as="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                sudah punya akun masuk disini
              </Link>
            </p>
            <ValidationErrors errors={errors} />
          </div>
          <form className="mt-8 space-y-6" onSubmit={submit}>
            <div className="flex flex-col gap-3 -space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="on"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-100 sm:text-sm"
                  placeholder="username"
                  onChange={onHandleChange}
                  value={data.username}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="on"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-100 sm:text-sm"
                  placeholder="email address"
                  onChange={onHandleChange}
                  value={data.email}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="on"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-100 sm:text-sm"
                  placeholder="password"
                  onChange={onHandleChange}
                  value={data.password}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  ketik ulang password
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  autoComplete="on"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-100 sm:text-sm"
                  placeholder="ketik ulang password"
                  onChange={onHandleChange}
                  value={data.password_confirmation}
                />
              </div>
            </div>
            <div className="" data-aos="fade-up-right" data-aos-duration="500">
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={processing}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdAccountCircle />
                </span>
                Daftar Akun
              </button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
