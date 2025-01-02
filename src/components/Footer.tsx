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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormTypes = {
  email: string;
  message: string;
  subject: string;
};

const Footer = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    console.log(JSON.stringify(data));
    setIsLoading(true);
    try {
      const send = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      const res = await send.json();
      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      onClose();
      reset();
    }
  };

  return (
    <footer className="dark:bg-background bg-primary-500 text-white pt-10 pb-0 border-t border-white dark:border-gray-700">
      <div className="container mx-auto px-5 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-3">ADM Drones</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Mapping</h3>
          <ul className="space-y-2">
            <li>Model Name </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Security & Surveillance</h3>
          <ul className="space-y-2">
            <li>ADM 6</li>
            <li>ADM 7</li>
            <li>ADM 9</li>
          </ul>
        </div>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <ModalBody>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                          label="Email"
                          placeholder="Enter your email"
                          variant="bordered"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          description="We'll never share your email with anyone else."
                          onClear={() => setValue("email", "")}
                          errorMessage={errors.email && "Email is required"}
                          validationState={errors.email ? "invalid" : "valid"}
                        />
                      )}
                    />
                    <Controller
                      name="subject"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                          label="Subject"
                          placeholder="Subject of the content"
                          variant="bordered"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          errorMessage={errors.subject && "Subject is required"}
                          validationState={errors.subject ? "invalid" : "valid"}
                        />
                      )}
                    />
                    <Controller
                      name="message"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onBlur, onChange, value } }) => (
                        <Textarea
                          label="Message"
                          variant="bordered"
                          placeholder="Enter your message"
                          description="Write your message here, we will reply as soon as possible."
                          errorMessage={errors.message && "Message is required"}
                          validationState={errors.message ? "invalid" : "valid"}
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                        />
                      )}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" type="submit" isLoading={isLoading}>
                      Send Message
                    </Button>
                  </ModalFooter>
                </form>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </footer>
  );
};

export default Footer;
