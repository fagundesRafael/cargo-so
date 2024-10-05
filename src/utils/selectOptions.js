import { models } from "mongoose";

export const colors = [
    { value: "", label: "COR" },
    { value: "BRANCO", label: "BRANCO" },
    { value: "CINZA", label: "CINZA" },
    { value: "AZUL", label: "AZUL" },
    { value: "PRETO", label: "PRETO" },
    { value: "VERMELHO", label: "VERMELHO" },
    { value: "ROSA", label: "ROSA" },
    { value: "VERDE", label: "VERDE" },
    { value: "ROXO", label: "ROXO" },
    { value: "PRATA", label: "PRATA" },
    { value: "AMARELO", label: "AMARELO" },
    { value: "OUTRO", label: "OUTRO" },
    ];

export const procedures = [
    { value: "", label: "PROCEDIMENTO" },
    { value: "APF", label: "FLAGRANTE" },
    { value: "BOL", label: "BOLETIM" },
    { value: "TCO", label: "TERMO CIRCUNSTANCIADO" },
    { value: "BOC", label: "BOLETIM CIRCUNSTANCIADO" },
    { value: "AAI", label: "ATO INFRACIONAL"},
    { value: "PAA", label: "PROCEDIMENTO INFRACIONAL"},
    { value: "MPE", label: "MINISTÉRIO PÚBLICO" },
    { value: "JUD", label: "JUDICIÁRIO" },
    { value: "SEI", label: "SEI" },
    { value: "OUTRO", label: "OUTRO" },
    ];

    export const carBrands = [
      {
        brand: "MARCA",
        models: []
      },
      {
        brand: "TOYOTA",
        models: ["BANDEIRANTE", "COROLLA", "CAMRY", "PRIUS", "HIGHLANDER", "RAV4", "AVALON", "YARIS", "TACOMA", "SIENNA", "4RUNNER"]
      },
      {
        brand: "HONDA",
        models: ["CIVIC", "ACCORD", "CR-V", "PILOT", "FIT", "ODYSSEY", "RIDGELINE", "HR-V", "PASSPORT", "INSIGHT"]
      },
      {
        brand: "FORD",
        models: ["F-150", "MUSTANG", "EXPLORER", "ESCAPE", "FUSION", "RANGER", "BRONCO", "EDGE", "EXPEDITION", "MAVERICK"]
      },
      {
        brand: "CHEVROLET",
        models: ["SILVERADO", "S10", "MALIBU", "EQUINOX", "TAHOE", "CAMARO", "TRAVERSE", "COLORADO", "SUBURBAN", "TRAX", "BLAZER"]
      },
      {
        brand: "NISSAN",
        models: ["ALTIMA", "SENTRA", "ROGUE", "MURANO", "PATHFINDER", "MAXIMA", "VERSA", "TITAN", "FRONTIER", "LEAF"]
      },
      {
        brand: "BMW",
        models: ["3 SERIES", "5 SERIES", "X3", "X5", "7 SERIES", "X1", "X6", "4 SERIES", "2 SERIES", "8 SERIES"]
      },
      {
        brand: "MERCEDES-BENZ",
        models: ["C-CLASS", "E-CLASS", "GLC", "GLE", "S-CLASS", "A-CLASS", "GLA", "GLS", "CLA", "G-CLASS"]
      },
      {
        brand: "VOLKSWAGEN",
        models: ["GOLF", "PASSAT", "TIGUAN", "JETTA", "ATLAS", "ARTEON", "ID.4", "TAOS", "BEETLE", "TOUAREG"]
      },
      {
        brand: "AUDI",
        models: ["A3", "A4", "Q5", "Q7", "A6", "A8", "Q3", "Q8", "TT", "R8"]
      },
      {
        brand: "HYUNDAI",
        models: ["ELANTRA", "SONATA", "TUCSON", "SANTA FE", "KONA", "PALISADE", "VELOSTER", "IONIQ", "NEXO", "ACCENT"]
      },
      {
        brand: "KIA",
        models: ["FORTE", "OPTIMA", "SPORTAGE", "SOUL", "SORENTO", "TELLURIDE", "STINGER", "NIRO", "SELTOS", "CARNIVAL"]
      },
      {
        brand: "FIAT",
        models: ["UNO", "PALIO", "SIENA", "TORO", "STRADA", "CRONOS", "ARGO", "MOBI", "PULSE", "500"]
      },
      {
        brand: "RENAULT",
        models: ["KWID", "SANDERO", "LOGAN", "DUSTER", "CAPTUR", "MASTER", "KANGOO", "FLUENCE", "ZOE", "TWIZY"]
      },
      {
        brand: "PEUGEOT",
        models: ["208", "2008", "3008", "5008", "EXPERT", "PARTNER", "TRAVELLER", "RIFTER", "ION", "BOXER"]
      }
    ];