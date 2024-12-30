"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Footer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <footer className="dark:bg-background bg-primary-500 text-white pt-10 pb-0 border-t border-white dark:border-gray-700">
      <div className="container mx-auto px-5 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg mb-3">ADM Drones</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Mapping</h3>
          <ul className="space-y-2">
            <li>Model Name </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Security & Surveillance</h3>
          <ul className="space-y-2">
            <li>ADM 6</li>
            <li>ADM 7</li>
            <li>ADM 9</li>
          </ul>
        </div>

        {/* Column 4 */}
        {/* <div>
          <h3 className="font-bold text-lg mb-3">Solutions</h3>
          <ul className="space-y-2">
            <li>BlueFire Live!™</li>
            <li>BlueFire Touch</li>
            <li>ideaForge CARE</li>
            <li>Forest Solution</li>
            <li>Flyght Cloud</li>
          </ul>
          <h3 className="font-bold text-lg mt-5">
            Subscribe to our Newsletter
          </h3>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-2 rounded-l-lg text-black"
            />
            <button className="bg-white text-green-900 p-2 rounded-r-lg">
              →
            </button>
          </div>
        </div> */}

        {/* Column 5 */}
        {/* <div>
          <h3 className="font-bold text-lg mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Smart Waste Management</li>
            <li>End User Licence Agreement</li>
          </ul>
        </div> */}
      </div>

      <div className="flex justify-between border-t dark:border-gray-700 border-gray-300 mt-10 px-5 py-6 text-sm text-start">
        <p>Copyright © 2024 ADM Drone PVT Ltd. All rights reserved.</p>
        <Tooltip content="Contact Us" shadow="md" showArrow>
          <div className="flex items-center fixed bottom-4 right-4 z-50">
            <Button
              className="dark:bg-background bg-primary"
              isIconOnly
              variant="faded"
              size="lg"
              onPress={onOpen}
            >
              <TfiHeadphoneAlt color="white" size={24} />
            </Button>
          </div>
        </Tooltip>
        <Modal
          isOpen={isOpen}
          placement="top-center"
          onOpenChange={onOpenChange}
          backdrop="opaque"
          radius="lg"
          classNames={{
            body: "py-5",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-background dark:bg-background ",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Contact Us
                </ModalHeader>
                <ModalBody>
                  <Input label="Email" variant="bordered" />
                  <Input label="Message" variant="bordered" />
                  <Textarea
                    label="Description"
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                    placeholder="Enter your description"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Send Message
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </footer>
  );
};

export default Footer;

// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
//   Checkbox,
//   Input,
//   Link,
// } from "@nextui-org/react";

// export default function App() {
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();

//   return (
//     <>
//       <Button color="primary" onPress={onOpen}>
//         Open Modal
//       </Button>

//     </>
//   );
// }
