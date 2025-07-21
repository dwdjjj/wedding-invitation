import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

export const sectionVariants = cva("w-full max-w-md mx-auto text-center", {
  variants: {
    spacing: {
      none: "",
      sm: "py-4",
      md: "py-8",
    },
  },
  defaultVariants: {
    spacing: "md",
  },
});

export function Section({ className, spacing, children, ...props }) {
  return (
    <section className={cn(sectionVariants({ spacing }), className)} {...props}>
      {children}
    </section>
  );
}
