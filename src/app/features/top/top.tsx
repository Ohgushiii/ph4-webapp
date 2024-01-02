import Footer from "@/components/features/top/footer";
import Header from "@/components/features/top/header";

export default function Top() {
  return (
    <body className="bg-gray-100 h-screen">
      <Header />
      <main className="w-screen h-4/5 pt-24 px-20 flex justify-around">
        <section className="w-5/12 flex-col justify-between h-full flex">
          <div className="h-1/3 pb-4 mb-16 flex justify-between">
            <div className="w-1/4 flex flex-col items-center justify-center rounded-2xl shadow-md bg-white">
              <ul>
                <li className="text-blue-300">Today</li>
                <li className="text-4xl font-bold text-black">10</li>
                <li className="text-blue-300">hour</li>
              </ul>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center rounded-2xl shadow-md bg-white">
              <ul>
                <li className="text-blue-300">Month</li>
                <li className="text-4xl font-bold text-black">100</li>
                <li className="text-blue-300">hour</li>
              </ul>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center rounded-2xl shadow-md bg-white">
              <ul>
                <li className="text-blue-300">Total</li>
                <li className="text-4xl font-bold text-black">1000</li>
                <li className="text-blue-300">hour</li>
              </ul>
            </div>
          </div>
          <div className="h-3/5 items-center justify-center rounded-2xl shadow-md bg-white">
            <canvas id="time_chart">
              Canvas not supported...
            </canvas>
          </div>
        </section>
        <section className="w-5/12 flex justify-around">
          <div className="w-2/5 rounded-2xl shadow-md bg-white">
            <span className="pl-4">学習言語</span>
            <div className="chart-inner">
              <canvas id="language_chart">
                Canvas not supported...
              </canvas>
            </div>
          </div>
          <div className="w-2/5 rounded-2xl shadow-md bg-white">
            <span className="pl-4 ">学習言語</span>
            <div className="chart-inner">
              <canvas id="content_chart"></canvas>
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </body>
  )
}