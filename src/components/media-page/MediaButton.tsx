// components/media/MediaFilterButton.tsx
import React, { useState } from 'react';
import { Button } from '../ui/Button';

export type MediaFilter = string;

interface MediaFilterButtonProps {
  categories: string[];
  onFilterChange: (filter: MediaFilter) => void;
  initialFilter?: MediaFilter;
  labelAll?: string;
}

const MediaFilterButton: React.FC<MediaFilterButtonProps> = ({
  categories,
  onFilterChange,
  initialFilter = 'all',
  labelAll = 'All Media',
}) => {
  const [activeFilter, setActiveFilter] = useState<MediaFilter>(initialFilter);

  const handleFilterClick = (filter: MediaFilter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button
        variant={activeFilter === 'all' ? 'default' : 'outline'}
        className={activeFilter === 'all' ? 'bg-blue-900 text-white hover:bg-blue-700' : 'border-gray-300 hover:bg-gray-200'}
        onClick={() => handleFilterClick('all')}
      >
        {labelAll}
      </Button>

      {categories.map((name, i) => (
        <Button
          key={i}
          variant={activeFilter === name ? 'default' : 'outline'}
          className={activeFilter === name ? 'bg-blue-900 text-white hover:bg-blue-700' : 'border-gray-300 hover:bg-[#e7eaee]'}
          onClick={() => handleFilterClick(name)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default MediaFilterButton;
