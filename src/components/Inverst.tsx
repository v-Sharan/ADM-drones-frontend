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
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type FormTypes = {
  email: string;
  message: string;
  subject: string;
};

const Inverset = () => {
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
    <div
      className="fixed bottom-0 left-0 w-full py-1.5 bg-gradient-to-r dark:from-foreground-50 dark:to-background/10 from-blue-500 to-violet-500
    text-white"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <p className="text-sm md:text-base font-semibold">
          We are Looking For Investors
        </p>
        <div className="flex gap-2">
          <div className="">
            <p>
              Email:{" "}
              <a href="mailto:admdrones@gmail.com">admdrones@gmail.com</a>
            </p>
            <p>
              Mobile: <a href="tel:+91 9363901791">+91 9363901791</a>
            </p>
          </div>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition"
            onClick={onOpen}
          >
            <TfiHeadphoneAlt size={24} />
          </button>
        </div>
      </div>
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
  );
};

export default Inverset;
