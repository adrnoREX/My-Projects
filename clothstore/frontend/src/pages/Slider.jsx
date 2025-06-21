import React, { useState } from 'react';
import Card from './Card';
import Pagination from './Pagination'; // Import the new component

function SliderComponent({ items }) {
  const itemsPerPage = 16; // 4 rows x 4 columns
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // optional scroll to top
    }
  };

  return (
    <div className='flex flex-col mt-40'>
      {/* Card Grid */}
      <div className="mx-auto py-4 min-h-[2188px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-8 -my-2">
          {currentItems.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default SliderComponent;
