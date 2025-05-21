/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

import { containerAnimation, itemAnimation } from "./animation";

type ListProps<T> = {
  items: T[];
  className?: string;
  children: (item: T, index: number) => ReactNode;
} & Omit<HTMLAttributes<HTMLUListElement>, "children">;

export function List<T>({
  items,
  className,
  children,
  ...props
}: ListProps<T>) {
  return (
    <ul className={clsx("mt-8 w-full px-4 space-y-4", className)} {...props}>
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 w-full"
      >
        {items.map((item, idx) => (
          <motion.li
            key={
              (item as any).id ??
              (item as any).name ??
              (item as any).href ??
              idx
            }
            variants={itemAnimation}
            className="flex items-center justify-center"
          >
            {children(item, idx)}
          </motion.li>
        ))}
      </motion.div>
    </ul>
  );
}
