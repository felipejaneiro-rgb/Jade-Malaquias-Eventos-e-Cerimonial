import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  icon?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 text-sm uppercase tracking-widest font-sans font-bold rounded-sm";
  
  const variants = {
    primary: "bg-jade-primary text-white hover:bg-[#BFA030] shadow-lg hover:shadow-xl",
    outline: "border border-jade-primary text-jade-primary hover:bg-jade-primary hover:text-white",
    text: "text-jade-primary hover:text-[#BFA030] px-0 underline-offset-4 hover:underline"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (href) {
    const isInternal = href.startsWith('#');
    return (
      <a 
        href={href} 
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};