import { icons } from "@/libs/constants";

export default function Technologies() {
  return (
    <>
      <div className="grid grid-cols-5 gap-10 my-16">
        {icons.map((icon: string) => (
          <div className="flex justify-center items-center key={icon}">
            <img src={icon} alt="my toolbox icons" className="w-20 h-20" />
          </div>
        ))}
      </div>
    </>
  );
}
