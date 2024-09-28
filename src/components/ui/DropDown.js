"use client"
export default function DropDown({ options, selected, setSelected, label }) {
  return (
    <div className={"flex-col"}>
        <label className={"text-[10px]"}>{label}</label>
        <select
      className={"rounded-none"}
      name="searchOptions"
      id="searchOptions"
    >
      <option value="">Filtrar</option>
      <option value="APF">APF</option>
      <option value="IPL">IPL</option>
      <option value="BOL">BOL</option>
      <option value="TCO">TCO</option>
      <option value="BOC">BOC</option>
      <option value="MPE">MPE</option>
      <option value="JUD">JUD</option>
      <option value="SEI">SEI</option>
      <option value="OUTRO">OUTRO</option>
    </select>
    </div>
  );
}
