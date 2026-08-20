import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("pt-[76px]", className)}>{children}</div>;
}
