import React from 'react';

interface SectionHeaderProps {
  text: string;
  className?: string;
  textClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  className = '',
  textClassName = '',
}) => {
  return (
    <div
      className={`inline-block rounded bg-[#e5ecf7] ${className}`}
    >
      <p
        className={`bg-primary/10 text-[#1447E6] px-4 py-2 rounded-full font-medium text-sm ${textClassName}`}
      >
        {text || ""}
      </p>
    </div>
  );
};

export default SectionHeader;