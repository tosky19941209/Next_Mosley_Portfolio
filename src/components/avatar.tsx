"use client"
import Image from "next/image"
interface AvatarInterface {
    handleOpen: (item: any) => void
}
const Avatar = ({ handleOpen }: AvatarInterface) => {
    const mobileNumber = "(727) 939-5695"

    return (
        <div className="w-[200px]">
            <Image
                alt="avatar"
                src={"/assets/avatar.jpg"}
                width={200}
                height={200}
            />
            <button
                className="w-[100%] h-[40px] bg-[#1e4cce] mt-5 rounded-md text-[white]"
                onClick={() => handleOpen("blue")}
            >
                Contact Us
            </button>

            <div className="flex gap-2 mt-5">
                <p className="font-bold text-[black]">
                    Mobile:
                </p>
                <p className="text-[black]">
                    {mobileNumber}
                </p>
            </div>
        </div>
    )
}

export default Avatar