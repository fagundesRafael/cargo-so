"use client";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { MdOutlineFileUpload } from "react-icons/md";
import { useRef } from "react";
import { useState } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";
import Image from "./Image";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Upload = (item) => {
  const ikUploadRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(
    item && item.imageUrl ? JSON.parse(item.imageUrl) : ""
  );

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
          <h2 className={"mx-auto "}>IMAGEM CARREGADA:</h2>
          <Image
            src={imageUrl}
            alt=""
            width={200}
            height={200}
            layout="responsive"
            objectFit={"contain"}
          />
          <h2 className={"mx-auto"}>UTILIZE A URL ABAIXO:</h2>
          <span
            className={
              " relative z-10 text-[8px] my-2 text-templateRed font-bold"
            }
          >
            {imageUrl}
          </span>
          <h4 className={"text-[10px]"}>
            PARA MELHOR VISUALIZAÇÃO, COPIE E COLE A URL ABAIXO EM UMA NOVA ABA
            DO NAVEGADOR!
          </h4>
          <button
            onClick={() => setImageUrl("")}
            className={
              " text-sm text-templateWhite my-2 rounded-xl border p-1 border-gray-300 bg-templateDeadBlue"
            }
          >
            carregar nova imagem
          </button>
        </>
      )}
      {!imageUrl && (
        <div className={"flex flex-col"}>
          <h1 className={"text-center"}>
            {" "}
            CLIQUE ABAIXO EM{" "}
            <span className={"italic font-bold"}>CARREGAR IMAGEM</span> PARA
            GERAR IMAGEM DO VEÍCULO:
          </h1>
          <MdOutlineImageNotSupported className={"text-[200px] mx-auto"} />
          <button
            onClick={() => ikUploadRef.current.click()}
            className={"flex gap-1 p-6 mx-auto my-5 "}
          >
            <MdOutlineFileUpload className={"text-[22px]"} />
            Carregar imagem
          </button>
        </div>
      )}
    </ImageKitProvider>
  );
};

export default Upload;
