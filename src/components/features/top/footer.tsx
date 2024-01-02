import { RecordButton } from "../../common/button";

export default function Footer() {
  return (
    <footer className="w-screen h-16 bottom-0 absolute">
      <div className="flex justify-center items-center">
        <div id="prev" className="w-4 h-4 border-t-2 border-l-2 border-black transform -rotate-45">
        </div>
        <span className="text-2xl">2024年1月</span>
        <div id="next" className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45">
        </div>
      </div>
    </footer>
  )
}