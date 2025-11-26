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
  // Base styles removed padding/rounding to allow variants to control shape
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 text-sm uppercase tracking-widest font-sans font-bold";
  
  const variants = {
    // Added rounded-xl and hover:-translate-y-0.5 for subtle lift
    primary: "bg-jade-primary text-white hover:bg-[#BFA030] shadow-lg hover:shadow-xl rounded-xl hover:-translate-y-0.5 px-8 py-3",
    outline: "border border-jade-primary text-jade-primary hover:bg-jade-primary hover:text-white rounded-xl hover:-translate-y-0.5 px-8 py-3",
    text: "text-jade-primary hover:text-[#BFA030] px-0 underline-offset-4 hover:underline"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isInternal = href.startsWith('#');
    return (
      <a 
        href={href} 
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {content}
    </button>
  );
};