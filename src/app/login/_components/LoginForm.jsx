"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setError(false);
    setDisabled(true);

    const result = await signIn("credentials", {
      name,
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setError(true);
      setDisabled(false);
      setTimeout(() => {
        setError(false);
      }, 5000);
      console.log(error);
    } else {
      window.location.href = result.url;
    }
  }

  return (
    <section className={"mx-auto mt-2 flex flex-col items-center"}>
      <h1 className="text-center text-templateDeadBlue text-4xl my-4">
        Entrar
      </h1>
      <form
        className={"flex w-full flex-col items-center gap-2"}
        onSubmit={handleFormSubmit}
      >
        <input
          className={"w-full"}
          id="name"
          name="name"
          type="text"
          placeholder="nome:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabled}
        />
        <input
          className={"w-full"}
          id="email"
          name="email"
          type="email"
          placeholder="email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
        />
        <input
          className={"w-full"}
          id="password"
          name="password"
          type="password"
          placeholder="senha:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={disabled}
          className={
            "border w-full rounded-xl py-2 bg-templateRed text-templateWhite"
          }
        >
          Entrar
        </button>
        {error && (
          <div className={" flex flex-col text-red-500 text-center"}>
            Erro de Credenciais!{" "}
            <span className={"text-[12px]"}>
              Verifique e informe corretamente seu login, email e senha!
            </span>{" "}
          </div>
        )}
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
};
