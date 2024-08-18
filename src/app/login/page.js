'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState(null);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);
    setError(null);

    await signIn('credentials', {name, email, password, callbackUrl: '/'});

    setLoginInProgress(false);
  }

  return (
    <section className={"mx-auto mt-2 flex flex-col items-center"}>
      <h1 className="text-center text-templateTextDeadBlue text-4xl my-4">
        Entrar
      </h1>
      <form
        className={"flex w-full flex-col items-center gap-2"}
        onSubmit={handleFormSubmit}
      >
        <input
          name="name"
          type="text"
          placeholder="nome:"
          disabled={loginInProgress}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="email:"
          disabled={loginInProgress}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="senha:"
          disabled={loginInProgress}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={setLoginInProgress}
          className={
            "border w-full rounded-xl py-2 bg-templateRed text-templateWhite"
          }
        >
          Entrar
        </button>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <div className="my-2 text-center text-gray-700">
            {""} ou faça seu login com provedor de terceiros
        </div>
        <button className="flex gap-2 justify-center w-full border py-2 rounded-xl">
          <Image
            src={"/google-utils/google-logo.png"}
            alt={""}
            width={20}
            height={20}
          />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 pt-2">
          Não possui uma conta?{" "}
          <Link className="underline" href={"/register"}>
            Registre aqui &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
