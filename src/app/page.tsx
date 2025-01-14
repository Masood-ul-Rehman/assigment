import Image from "next/image";
import Button from "@/components/button";
import CardItems from "@/components/card-items";

export default function Home() {
  return (
    <div className="p-4 bg-white flex flex-col items-center gap-4 text-white">
      <div className="bg-[rgb(8,18,46)] w-full h-[300px] p-6 rounded-xl">
        <div className=" flex justify-between w-full">
          <Image src="/logo.png" alt="logo" width={140} height={100} />
          <img src="/open.png" alt="open" />
        </div>
        <div className="bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-center text-sm">
              OPU Scheduled for{" "}
              <span className="underline">Friday 24 Jun 10:30 am</span>
            </h4>
            <p className="text-[#B2BEE0] text-center text-sm font-medium">
              Oocytes can be added here once OPU has successfully occurred
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <Button text="Add oocytes & OPU details" />
            <h4 className="text-white text-center text-sm">
              No oocytes collected,{" "}
              <span className="text-[#7F6BF3] font-medium">close cycle</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 bg-[rgb(8,18,46)] p-4 rounded-xl gap-4">
        <div className="flex  gap-3">
          <div className=" flex gap-2 items-center">
            <img src="/seman.png" alt="" />
            <h4 className="text-md font-medium">Semen</h4>
            <h4 className="text-sm font-medium">Sample 19A43A</h4>
          </div>
          <div className=" flex gap-2 items-center bg-[#5577FF33] rounded-xl px-2 py-1">
            <img src="/avatar.png" alt="" />
            <h4 className="text-sm font-medium text-[#5577FF]">
              Partner: PESA Testicular
            </h4>
          </div>
          <div className=" flex gap-2 items-center bg-[#5577FF33] rounded-xl px-2 py-1">
            <img src="/snow.png" alt="" />
            <h4 className="text-sm font-medium text-[#5577FF]">Frozen</h4>
          </div>
          <div className=" flex gap-2 items-center bg-[#5577FF33] rounded-xl px-2 py-1">
            <img src="/tube.png" alt="" />
            <h4 className="text-sm font-medium text-[#5577FF]">12:56 PM</h4>
            <h4 className="text-sm font-medium text-[#5577FF]">10 Jun 2024</h4>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="bg-[#FFFFFF0D] p-4 rounded-xl">
            <div className="flex gap-2 items-center">
              <img src="/research.png" alt="" />
              <h4 className="text-sm font-medium">Pre-processing</h4>
            </div>
            <CardItems />
          </div>
          <div className="bg-[#FFFFFF0D] p-4 rounded-xl">
            <h4 className="text-md font-medium">Semen</h4>
          </div>
          <div className="bg-[#FFFFFF0D] p-4 rounded-xl">
            <h4 className="text-md font-medium">Semen</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
