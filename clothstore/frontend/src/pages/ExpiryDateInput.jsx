import React, { useState } from 'react';

function ExpiryDateInput() {
    const [value, setValue] = useState('');

    const formatExpiry = (val) => {
    // Remove non-digit characters
    val = val.replace(/[^\d]/g, '');

    if (val.length === 0) return '';
    if (val.length <= 2) return val;
    return val.slice(0, 2) + ' / ' + val.slice(2, 6);
    };

    const handleChange = (e) => {
    const formatted = formatExpiry(e.target.value);
    setValue(formatted);
    };

    return (
    <input
        type="text"
        placeholder="MM / YYYY"
        maxLength={9}
        value={value}
        onChange={handleChange}
        className="border-3 outline-none border-gray-300 mt-2 p-2 rounded w-36 text-center"
    />
    );
}

export default ExpiryDateInput;
