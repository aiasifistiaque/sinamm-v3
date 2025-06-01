import React, { useState } from 'react'
import { Button } from '../ui/Button';
import { useGetAllQuery } from '@/store/services/commonApi';

type MachinaryFilter = 'all' 

interface MachinaryButtonProps {
  onFilterChange: (filter: MachinaryFilter) => void
}

const MachinaryButton: React.FC<MachinaryButtonProps> = ({onFilterChange}) => {
  const [activeFilter, setActiveFilter] = useState<MachinaryFilter>('all');
  const handleFilterClick = (filter: MachinaryFilter) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }
  const {data, isFetching} = useGetAllQuery({
    path: "machinery-categories",
    sort: "asc"
  })
  // console.log("machinary", data)
  return (
    <div className='flex flex-wrap gap-2 justify-center '>
      <Button
        variant={activeFilter === "all" ? "default" : "outline"}
        className={activeFilter === "all" ? "bg-blue-600 text-white rounded hover:bg-blue-700" : "border-gray-300 rounded hover:bg-gray-200"}
        onClick={() => handleFilterClick("all")}
      >
        All Equipments
      </Button>
        {isFetching ||
        data?.doc?.map((item: any, i: number) => (
          <Button 
            variant={activeFilter === item?.name ? 'default' : 'outline'} 
            className={activeFilter === item?.name 
              ? 'bg-blue-600 text-white rounded hover:bg-blue-700' 
              : 'border-gray-300 rounded hover:bg-[#e7eaee] '
            }
            key={i}
            onClick={() => handleFilterClick(item?.name)}
          >
            {item?.name}
        </Button>
      ))
    }
    </div>
  )
}

export default MachinaryButton