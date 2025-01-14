import Image from "next/image";
import Button from "@/components/button";
import CardItems from "@/components/card-items";
export default function Home() {
  return (
    <div className="p-4 bg-white flex flex-col items-center justify-center gap-4 text-white">
      <div className="bg-primary w-full rounded-[20px]">
        <div className="bg-bgImg bg-no-repeat  bg-center w-full h-[280px]    p-6">
          <div className=" flex justify-between items-center w-full">
            <Image src="/logo.png" alt="logo" width={140} height={100} />
            <Image src="/open.png" alt="open" width={14} height={14} />
          </div>
          <div className=" bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center justify-center relative">
            <div className="flex flex-col font-normal gap-2">
              <h4 className="text-white text-center text-sm font-normal">
                OPU Scheduled for{" "}
                <span className="underline">Friday 24 Jun 10:30 am</span>
              </h4>
              <p className="text-textGrey text-center text-sm font-medium">
                Oocytes can be added here once OPU has successfully occurred
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <Button text="Add oocytes & OPU details" />
              <h4 className="text-textGrey text-center text-sm">
                No oocytes collected,{" "}
                <span className="text-[#7F6BF3] font-medium">close cycle</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col  bg-primary p-4 rounded-2xl gap-4">
        <div className="flex  gap-3">
          <div className=" flex gap-2 items-center">
            <Image src="/seman.png" alt="semen icon" width={20} height={20} />
            <h4 className="text-base font-semibold">Semen</h4>
            <h4 className="text-sm font-semibold">Sample 19A43A</h4>
          </div>
          <div className=" flex gap-2 items-center bg-opacityBlue rounded-xl px-2 py-1">
            <Image src="/Avatar.png" alt="avatar" width={16} height={16} />
            <h4 className="text-sm font-medium text-accent">
              Partner: PESA Testicular
            </h4>
          </div>
          <div className=" flex gap-2 items-center bg-opacityBlue rounded-2xl px-2 py-1">
            <Image src="/snow.png" alt="snow icon" width={16} height={16} />
            <h4 className="text-sm font-medium text-accent">Frozen</h4>
          </div>
          <div className=" flex gap-2 items-center bg-opacityBlue rounded-2xl px-2 py-1">
            <Image src="/tube.png" alt="tube icon" width={10} height={10} />
            <h4 className="text-sm font-medium text-accent">12:56 PM</h4>
            <h4 className="text-sm font-medium text-accent">10 Jun 2024</h4>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="bg-opacityWhite p-4 rounded-2xl gap-2 flex flex-col">
            <div className="flex gap-2 items-center">
              <Image src="/research.png" alt="" width={16} height={16} />
              <h4 className="text-sm font-semibold">Pre-processing</h4>
            </div>
            <CardItems />
          </div>
          <div className="bg-opacityWhite p-4 rounded-xl gap-2 flex flex-col">
            <div className="flex gap-2 items-center ">
              <Image
                src="/calculator.png"
                alt="calculator icon"
                width={18}
                height={17}
              />
              <h4 className="text-sm font-semibold">Post Preparation</h4>

              <div className="bg-opacityBlue rounded-full px-2 py-1">
                <h4 className="text-[10px] font-medium text-accent">
                  microfluidics{" "}
                </h4>
              </div>
            </div>{" "}
            <CardItems />
          </div>
          <div className="bg-opacityWhite  rounded-xl  ">
            <div className="bg-[url('/blur.png')] bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center justify-center gap-8 p-4">
              <div className="text-center flex gap-2 flex-col">
                <h4 className="text-sm font-medium">
                  No insemination details yet
                </h4>
                <p className="text-[12px] font-medium text-[#929DB7]">
                  This will come after OPU has been verified
                </p>
              </div>
              <Button text="Add insemination details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
