"use client";
import ConfigCarForms from "./ConfigCarForms";
import ConfigMotoForms from "./ConfigMotoForms";
import {
  MdAddCircle,
  MdCancel,
  MdCancelPresentation,

  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import { useState } from "react";
import SingleConfigForms from "./SingleCarConfig";

export default function ConfigComponent({ carBrands, motoBrands }) {
  const [openViews, setOpenViews] = useState({});
  const [singleView, setSingleView] = useState({});
  const [viewCarModal, setViewCarModal] = useState(false);
  const [viewMotoModal, setViewMotoModal] = useState(false);

  const cardata = JSON.parse(carBrands);
  const motodata = JSON.parse(motoBrands);

  const toggleOpenView = (id) => {
    setOpenViews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const toggleSingleView = (id) => {
    setSingleView((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const showCarModal = () => {
    setViewCarModal(!viewCarModal);
  };
  const showMotoModal = () => {
    setViewMotoModal(!viewMotoModal);
  };

  // function handleDelete (model) {
  //   console.log(model);
  // }

  return (
    <div className={"flex justify-around"}>
      <div>
        <h2
          className={
            "bg-templateDeadBlue text-sm rounded-sm flex items-center gap-2 text-templateWhite py-1 px-2"
          }
        >
          Marca de Automóveis
          {!viewCarModal ? (
            <MdAddCircleOutline
              onClick={showCarModal}
              className={
                " transition-transform duration-200 ease-in-out hover:scale-150 hover:text-green-300 cursor-pointer "
              }
            />
          ) : (
            <MdCancel
              onClick={showCarModal}
              className={
                " transition-transform duration-200 ease-in-out hover:scale-150 hover:text-red-300 cursor-pointer "
              }
            />
          )}
        </h2>
        {viewCarModal && <ConfigCarForms />}
        {cardata.slice(1).map((brand) => (
          <div key={brand._id}>
            <h2 className={"flex items-center text-[12px] gap-1 p-1 ml-1 mt-2"}>
              <button
                onClick={() => toggleOpenView(brand._id)}
                className="transition-transform duration-200 ease-in-out"
              >
                {brand.brand}
              </button>
              {!singleView[brand._id] ? (<MdAddCircle
              onClick={() => toggleSingleView(brand._id)}
                className={
                  " transition-transform duration-200 ease-in-out hover:scale-150 hover:text-green-900"
                }
              />) : (<MdCancelPresentation
                onClick={() => toggleSingleView(brand._id)}
                  className={
                    " transition-transform duration-200 ease-in-out hover:scale-150 text-templateRed hover:text-red-900"
                  }
                />)}
             
              {singleView[brand._id] && (
                <SingleConfigForms id={brand._id} />
              )}
            </h2>
            <ul
              className={`transition-all duration-300 ease-in-out ${
                openViews[brand._id]
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {brand.models.map((model) => (
                <li key={model} className={"flex items-center ml-3"}>
                  <button onClick={() => console.log(`Brand: ${brand}, Model: ${model}`)} >
                    <MdDelete className="text-red-600 w-7 transition-transform duration-200 ease-in-out hover:scale-150 hover:text-red-800 hover:cursor-not-allowed" />
                  </button>
                  <span className={"text-sm underline"}>{model}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2
          className={
            "bg-templateDeadBlue text-sm rounded-sm flex items-center gap-2 text-templateWhite py-1 px-2"
          }
        >
          Marca de Motocicletas
          {!viewMotoModal ? (
            <MdAddCircleOutline
              onClick={showMotoModal}
              className={
                " transition-transform duration-200 ease-in-out hover:scale-150 hover:text-green-300 cursor-pointer "
              }
            />
          ) : (
            <MdCancel
              onClick={showMotoModal}
              className={
                " transition-transform duration-200 ease-in-out hover:scale-150 hover:text-red-300 cursor-pointer "
              }
            />
          )}
        </h2>
        {viewMotoModal && <ConfigMotoForms />}
        {motodata.slice(1).map((brand) => (
          <div key={brand._id}>
            <h2 className={"flex items-center text-[12px] gap-1 p-1 ml-1 mt-2"}>
              <button
                onClick={() => toggleOpenView(brand._id)}
                className="transition-transform duration-200 ease-in-out"
              >
                {brand.brand}
              </button>
              <MdAddCircle
                className={
                  " transition-transform duration-200 ease-in-out hover:scale-150 hover:text-green-900"
                }
              />
            </h2>
            <ul
              className={`transition-all duration-300 ease-in-out ${
                openViews[brand._id]
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {brand.models.map((model) => (
                <li key={model} className={"flex items-center ml-3"}>
                  <button>
                    <MdDelete className="text-red-600 w-7 transition-transform duration-200 ease-in-out hover:scale-150 hover:text-red-800 hover:cursor-not-allowed" />
                  </button>
                  <span className={"text-sm underline"}>{model}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}