import { RecordButton } from "../../common/record-button";
import { LogoutButton } from "../../common/logout-button";

export default function Header() {
  return (
    <div className="w-screen h-16 px-12 flex justify-between items-center shadow-md bg-white fixed z-50">
      <div>
        {/* <img src="./assets/img/logo.svg" alt="POSSE"> */}
        <span>4th week</span>
      </div>
      <div className="flex justify-around w-1/4">
        <LogoutButton />
        <RecordButton />
      </div>
    </div>
  )
}