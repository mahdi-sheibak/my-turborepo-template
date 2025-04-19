"use client";

import type { ReactNode } from "react";

import { cn } from "@repo/tailwind-utils";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick: () => void;
}

export const Button = ({
  children,
  className,
  appName,
  onClick,
}: ButtonProps) => {
  return (
    <div>
      <button
        className={cn("bg-red", className)}
        type="button"
        // onClick={() => alert(`Hello from your ${appName} app!`)}
        onClick={onClick}
      >
        {children} - {appName}
      </button>
    </div>
  );
};
