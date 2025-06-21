import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
    <div className="w-full flex justify-center items-center space-x-4 -mx-35 mt-17 mb-10">
        <button
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 border border-gray-300 rounded hover:bg-base-300 disabled:opacity-50"
        disabled={currentPage === 1}
        >
        ← Previous
        </button>

        <span className="px-4 py-2 cursor-default">
        Page {currentPage} of {totalPages}
        </span>

        <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-7 py-2 border border-gray-300 rounded hover:bg-base-300 disabled:opacity-50"
        disabled={currentPage === totalPages}
        >
        Next →
        </button>
    </div>
    );
}

export default Pagination;
