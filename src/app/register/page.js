"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(null);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    if (password.length < 5) {
      setError("Senha deve ter no mínimo 5 caracteres.");
      setCreatingUser(true);
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setError("");
        setCreatingUser(false);
      }, 4000);
      return;
    }
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
      setCreatingUser(false);
    } else {
      setError("Erro ao criar usuário!");
      setCreatingUser(true);
      setTimeout(() => {
        setError("");
        setCreatingUser(false);
      }, 4000);
    }
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <section className={"mx-auto mt-2 flex flex-col items-center"}>
      <h1 className="text-center text-templateTextDeadBlue text-4xl my-4">
        Registrar
      </h1>
      {userCreated && (
        <div className="mb-2 text-center text-gray-700">
          Usuário(a) criado(a) com sucesso.
          <br />
          Faça seu{" "}
          <Link className="underline text-templateRed" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      <form
        className={"flex w-full flex-col items-center gap-2"}
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="nome:"
          disabled={creatingUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email:"
          disabled={creatingUser}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha:"
          disabled={creatingUser}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={creatingUser}
          className={
            "border w-full rounded-xl py-2 bg-templateRed text-templateWhite"
          }
        >
          Registrar
        </button>
        {error && <div className="text-red-500 text-center">{error}</div>}

        <div className="text-center my-4 text-gray-500 pt-2">
          Já possui uma conta cadastrada?{" "}
          <Link className="underline" href={"/login"}>
            Entre aqui&raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
