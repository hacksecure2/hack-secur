
import type { HTMLAttributes, ReactNode } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const GradientText = ({
  children,
  className = "",
  gradientFrom = "from-blue-400",
  gradientTo = "to-blue-200",
  ...props
}: GradientTextProps) => {
  return (
    <span
      {...props}
      className={`
        bg-gradient-to-r 
        ${gradientFrom} 
        ${gradientTo} 
        text-transparent 
        bg-clip-text 
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default GradientText;
