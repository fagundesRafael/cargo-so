"use client";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { MdOutlineFileUpload } from "react-icons/md";
import { useRef } from "react";
import { useState } from "react";
import Image from "./Image";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Upload = () => {
  const ikUploadRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  const authenticator = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/upload-auth");

      if (!res.ok) {
        throw new Error("Falha na autenticação de imagem!" + res.text());
      }

      const data = await res.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error("Falha na autenticação de imagem!");
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const onUploadProgress = (progress) => {
    console.log("Loading...", progress);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImageUrl(res.url);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUpLoadProgress={onUploadProgress}
        style={{ display: "none" }}
        ref={ikUploadRef}
      />
      {imageUrl && (
        <>
          <Image src={imageUrl} alt="" layout={"fill"} objectFit={"contain"} />
          <h2 className={"text-[10px] mx-auto "}>
            COPIE E COLE A URL ABAIXO:
          </h2>
          <span className={" relative z-10 text-[8px] my-2 text-templateRed font-bold"}>
            {imageUrl}
          </span>
          <h2 className={"text-[10px] mx-auto "}>
            CASO A IMAGEM GERADA NÃO SEJA GERADA CORRETAMENTE, FAÇA UM NOVO CARREGAMENTO!
          </h2>
        </>
      )}
      {!imageUrl && (
        <button
          onClick={() => ikUploadRef.current.click()}
          className={"flex gap-1 p-6 mx-auto my-5 "}
        >
          <MdOutlineFileUpload className={"text-[22px]"} />
          Carregar imagem
        </button>
      )}
    </ImageKitProvider>
  );
};

export default Upload;
