import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import Stars from "../assets/bg-pattern.png"

export default function Home() {
  return (
    <>
      <div className="min-w-screen h-screen flex flex-col  text-[color:#121826] select-none">
        <div className="flex flex-col justify-center items-center w-full h-[20%] bg-[color:#f9fafd] text-[color:#121826] border-b-1 border-[color:#E5E7EB] relative">
          <Image
            src={Stars} // Substitua pelo caminho da sua imagem
            alt="Background"
            fill
            className="object-cover z-[1]"
          />
          <h2 className="text-4xl mb-4 font-bold relative z-10">Pricing & Plans</h2>
          <p className="text-center whitespace-nowrap relative z-10 max-sm:whitespace-normal">Discover the plan that unlocks the transformative power <br/> of digital art and join our vibrant community today</p>
        </div>
        <div className="text-black p-6 items-center" id="grid">
          <div className="flex flex-col w-full" id="one">
            <div className="flex flex-col gap-2 w-full h-[8.5rem] justify-center items-center mb-2">
              <span className="text-[color:#263FA9] font-semibold hidden">Free</span>
              <span className="text-6xl font-bold hidden">$0</span>
              <span className="hidden">Per month</span>
            </div>
            <div className="flex flex-col bg-[color:#f9fafc] rounded-tl-lg rounded-bl-lg whitespace-nowrap">
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">Wesbite number</span>
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">Server storage</span>
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">Database</span>
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">Unmetered width</span>
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">SSD Disk</span>
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">VCPUS Fontworld</span>
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">Worldpress install</span>
              <span className="py-2 px-4 font-semibold border-b-1 border-[color:#E5E7EB]">Server speed</span>
            </div>
          </div>
          <div className="flex flex-col" id="two">
            <div className="flex flex-col gap-2 w-full h-[11rem] justify-center items-center mb-2">
              <span className="text-[color:#263FA9] font-semibold">Free</span>
              <span className="text-6xl font-bold ">$0</span>
              <span className="opacity-65">Per month</span>
            </div>
            <div className="flex flex-col items-center w-full mb-4">
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium">01</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium">100 GB</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
            </div>
            <div className="flex gap-2 justify-center w-full font-bold text-[color:#263FA9] ">Get Started <i className="ri-arrow-right-line"></i></div>
          </div>
          <div className="flex flex-col" id="three">
            <div className="flex flex-col gap-2 w-full h-[11rem] justify-center items-center mb-2">
              <span className="text-[color:#263FA9] font-semibold">Team</span>
              <span className="text-6xl font-bold">$59</span>
              <span className="opacity-65">Per month</span>
            </div>
            <div className="flex flex-col items-center w-full mb-4">
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium">10</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium">500 GB</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> 15 </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> - </span>
            </div>
            <div className="flex gap-2 justify-center w-full font-bold text-[color:#263FA9] ">Get Started <i className="ri-arrow-right-line"></i></div>
          </div>
          <div className="flex flex-col bg-[color:#121826] text-white rounded-2xl mt-2" id="four">
            <div className="flex flex-col gap-2 w-full h-[11rem] justify-center items-center mb-0">
              <span className="text-white bg-[color:#263FA9] rounded-3xl px-3 font-semibold">Popular</span>
              <span className="text-6xl font-bold">$99</span>
              <span className="opacity-65">Per month</span>
            </div>
            <div className="flex flex-col items-center w-full">
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium">50</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium">1 TB</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium"> Unlimited </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#101622] font-medium"> ✓ </span>
            </div>
            <div className="flex gap-2 justify-center items-center w-full h-13 font-bold text-white bg-[color:#7d4f1e] rounded-bl-2xl rounded-br-2xl">Get Started <i className="ri-arrow-right-line"></i></div>
          </div>
          <div className="flex flex-col" id="five">
            <div className="flex flex-col gap-2 w-full h-[11rem] justify-center items-center mb-2">
              <span className="text-[color:#263FA9] font-semibold">Enterprise</span>
              <span className="text-6xl font-bold">$299</span>
              <span className="opacity-65">Per month</span>
            </div>
            <div className="flex flex-col items-center w-full mb-4">
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium">Unlimited</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium">Unlimited</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium">Unlimited</span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> ✓ </span>
              <span className="py-2 border-b-1 w-full text-center border-[color:#E5E7EB] font-medium"> ✓ </span>
            </div>
            <div className="flex gap-2 justify-center w-full font-bold text-[color:#263FA9] ">Get Started <i className="ri-arrow-right-line"></i></div>
          </div>
        </div>
      </div>
    </>
  );
}
