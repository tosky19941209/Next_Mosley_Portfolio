"use client"
import Avatar from "@/components/avatar";
import Profile from "@/components/profile";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, } from "@nextui-org/modal";

type BackdropType = "blur" | "transparent" | "opaque";

interface ContactModalProps {
  backdrop: BackdropType;
  isOpen: boolean;
  onClose: () => void;
}


const ContactModal = ({ backdrop, isOpen, onClose }: ContactModalProps) => {
  return (
    <Modal
      className="bg-white rounded-xl absolute top-1/2 left-1/2 w-[80%]  md:w-[750px] -translate-x-1/2 -translate-y-1/2"
      backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {() => (
          <div className="p-[30px]">
            <ModalHeader className="flex flex-col gap-1 text-[black] text-[30px] font-bold">Contact GREG</ModalHeader>
            <ModalBody>
              <div className="flex gap-3">
                <div className="w-[50%]">

                  <p className="text-slate-700 mt-4">Name</p>
                  <input
                    type="text"
                    className="w-[100%] border mt-3 h-[40px] text-[black]"
                  />

                  <p className="text-slate-700 mt-4">Email</p>
                  <input
                    type="text"
                    className="w-[100%] border mt-3 h-[40px] text-[black]"
                  />

                  <p className="text-slate-700 mt-4">Phone (Optional)</p>
                  <input
                    type="text"
                    className="w-[100%] border mt-3 h-[40px] text-[black]"
                  />

                </div>

                <div className="w-[50%]">
                  <p className="text-slate-700 mt-4">Your Message (Optional)</p>
                  <textarea
                    className="w-[100%] border mt-3 h-[170px] text-[black]"
                  />
                </div>
              </div>

              <p className="text-[black] mt-5">
                By clicking “SUBMIT” below, you are agreeing to the,
                Terms of Use and Privacy Policy and are agreeing to receive marketing email messages from RE/MAX, LLC and/or marketing emails,
                calls or texts placed by or on behalf of a RE/MAX affiliate,
                to any phone number and/or email address that you provided,
                even if your number is on a federal, state, or our internal Do Not Call List.
                You further agree that call/texts may be sent with an automated system for selection or dialing of numbers.
                Please note: Consent is not a condition of purchase. Standard data and messaging rate may apply. You may unsubscribe at any time.
              </p>

              <button
                className="bg-[#1e4cce] w-[100%] h-[40px]"
              >
                SUBMIT
              </button>
            </ModalBody>
            {/* <ModalFooter>
              <button onClick={onClose}>
                Close
              </button>
              <button color="primary" onClick={onClose}>
                Action
              </button>
            </ModalFooter> */}
          </div>
        )}
      </ModalContent>
    </Modal >
  )
}



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<BackdropType>('opaque')

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop)
    onOpen();
  }
  return (
    <NextUIProvider>
      <div className={`${isOpen == true ? "blur-sm bg-[#dbdbde]" : "bg-white"}  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
        <main className={`w-[80%] bg-red-100 ${isOpen == true ? "blur-sm bg-[#dbdbde]" : "bg-white"} flex flex-col md:flex-row gap-10 row-start-2 items-center sm:items-start bg-red-100`}>
          <Avatar handleOpen={handleOpen} />
          <Profile />
        </main>
      </div>
      <ContactModal backdrop={backdrop} isOpen={isOpen} onClose={onClose} />
    </NextUIProvider>


  );
}
