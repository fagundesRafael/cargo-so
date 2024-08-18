import { IoIosNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
export default function RouteHeaderMenu({ pathName }) {
  return (
    <div
    style={{ width: 'calc(100% - 16px)' }}
      className={
        "flex justify-between items-center my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateiconDeadBlue"
      }
    >
      <h1>{pathName}</h1>
      <div className ={"flex gap-3 mx-2"} >
        <IoIosNotifications />
        <MdMessage />
      </div>
    </div>
  );
}
