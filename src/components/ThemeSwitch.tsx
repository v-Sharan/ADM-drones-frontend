import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex border p-1.5 rounded-lg items-center shadow-sm dark:shadow-white">
          {theme == "light" ? <FiSun /> : <FiMoon />}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={theme}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) => {
          setTheme(keys.currentKey as string);
        }}
      >
        <DropdownItem key="light">Light</DropdownItem>
        <DropdownItem key="dark">Dark</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeSwitch;
