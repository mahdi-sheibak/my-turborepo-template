"use client";

import type { ReactNode } from "react";

import { cn } from "@repo/tailwind-utils";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <div>
      <button
        className={cn("bg-red", className)}
        type="button"
        // onClick={() => alert(`Hello from your ${appName} app!`)}
      >
        {children} - {appName}
      </button>
    </div>
  );
};
