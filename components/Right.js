import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";

const Right = () => {
    return (
        <section className="p-4 space-y-8 pr-8">
            <div className="flex space-x-3 items-center justify-between">
            {/*    icons*/}
             <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4">
                <HiOutlineShieldCheck className="text-[#ccc] text-xl " />
                <MdOutlineSettings className="text-[#ccc] text-xl " />
                <BiBell className="text-[#ccc] text-xl " />
             </div>
            {/*profile*/}

            </div>
        </section>
    );
};

export default Right;