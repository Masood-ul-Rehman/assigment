import Image from "next/image";
import Button from "@/components/button";
import CardItems from "@/components/card-items";
export default function Home() {
  return (
    <div className="p-4 bg-white flex flex-col items-center gap-4 text-white">
      <div className="bg-[rgb(8,18,46)] w-full h-[300px] p-6 rounded-xl">
        <div className=" flex justify-between items-center w-full">
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
      <div className="w-full flex flex-col  bg-[rgb(8,18,46)] p-4 rounded-xl gap-4">
        <div className="flex  gap-3">
          <div className=" flex gap-2 items-center">
            <Image src="/seman.png" alt="semen icon" width={20} height={20} />
            <h4 className="text-md font-medium">Semen</h4>
            <h4 className="text-sm font-medium">Sample 19A43A</h4>
          </div>
          <div className=" flex gap-2 items-center bg-[#5577FF33] rounded-xl px-2 py-1">
            <Image src="/avatar.png" alt="avatar" width={16} height={16} />
            <h4 className="text-sm font-medium text-[#5577FF]">
              Partner: PESA Testicular
            </h4>
          </div>
          <div className=" flex gap-2 items-center bg-[#5577FF33] rounded-xl px-2 py-1">
            <Image src="/snow.png" alt="snow icon" width={16} height={16} />
            <h4 className="text-sm font-medium text-[#5577FF]">Frozen</h4>
          </div>
          <div className=" flex gap-2 items-center bg-[#5577FF33] rounded-xl px-2 py-1">
            <Image src="/tube.png" alt="tube icon" width={10} height={10} />
            <h4 className="text-sm font-medium text-[#5577FF]">12:56 PM</h4>
            <h4 className="text-sm font-medium text-[#5577FF]">10 Jun 2024</h4>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="bg-[#FFFFFF0D] p-4 rounded-xl gap-2 flex flex-col">
            <div className="flex gap-2 items-center">
              <Image src="/research.png" alt="" width={16} height={16} />
              <h4 className="text-sm font-medium">Pre-processing</h4>
            </div>
            <CardItems />
          </div>
          <div className="bg-[#FFFFFF0D] p-4 rounded-xl gap-2 flex flex-col">
            <div className="flex gap-2 items-center ">
              <Image
                src="/calculator.png"
                alt="calculator icon"
                width={18}
                height={17}
              />
              <h4 className="text-sm font-medium">Post Preparation</h4>

              <div className="bg-[#5577FF33] rounded-full px-2 py-1">
                <h4 className="text-sm font-medium text-[#5577FF]">
                  microfluidics{" "}
                </h4>
              </div>
            </div>{" "}
            <CardItems />
          </div>
          <div className="bg-[#FFFFFF0D]  rounded-xl  ">
            <div className="bg-[url('/blur.png')] bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center justify-center gap-8 p-4">
              <div className="text-center flex gap-2 flex-col">
                <h4 className="text-md font-medium">
                  No insemination details yet
                </h4>
                <p className="text-sm font-medium text-[#929DB7]">
                  This will come after OPU has been verified
                </p>
              </div>
              <Button text="Add insemination details" width="w-[220px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
