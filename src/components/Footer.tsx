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
    <footer className="dark:bg-background bg-primary-500 text-white py-10 border-t border-white dark:border-gray-700">
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
      </div>
    </footer>
  );
};

export default Footer;
