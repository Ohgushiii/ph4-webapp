import { RecordButton } from "../../common/button";

export default function Header() {
  return (
    <div className="w-screen h-16 px-12 flex justify-between items-center shadow-md bg-white fixed z-50">
      <div>
        {/* <img src="./assets/img/logo.svg" alt="POSSE"> */}
          <span>4th week</span>
      </div>
      <RecordButton />
    </div>
  )
}