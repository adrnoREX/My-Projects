import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function Searchbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Combine all subcategories from Men, Women, and Kids
    const subcategories = [
    ...[
        { name: 'Tshirts', route: '/shop' },
        { name: 'Sweatshirts', route: '/shop/full_slip_tshirts' },
        { name: 'Formal Shirts', route: '/shop/formal_shirts' },
        { name: 'Casual Shirts', route: '/shop/casual_shirts' },
        { name: 'Sweaters', route: '/shop/men_sweaters' },
        { name: 'Jackets', route: '/shop/men_jackets' },
        { name: 'Blazers', route: '/shop/men_blazers' },
        { name: 'Suits', route: '/shop/suits' },
        { name: 'Rain Coats', route: '/shop/rain_coats' },
        { name: 'Jeans', route: '/shop/men_jeans' },
        { name: 'Casual trousers', route: '/shop/casual_trousers' },
        { name: 'Formal trousers', route: '/shop/formal_trousers' },
        { name: 'Shorts', route: '/shop/men_shorts' },
        { name: 'Track Pants', route: '/shop/track_pants' },
        { name: 'Kurtas', route: '/shop/kurtas' },
        { name: 'Sherwanis', route: '/shop/sherwanis' },
        { name: 'Dhotis', route: '/shop/dhotis' }
    ],
    ...[
        { name: 'Sarees', route: '/shop/sarees' },
        { name: 'Dupattas & Shawls', route: '/shop/dupattas&shawls' },
        { name: 'Tshirts', route: '/shop/shirts' },
        { name: 'Leggings', route: '/shop/leggins' },
        { name: 'Salwar', route: '/shop/salwar' },
        { name: 'Kurtis', route: '/shop/kurtis' },
        { name: 'Jeans', route: '/shop/women_jeans' },
        { name: 'Palazzos & Skirts', route: '/shop/palazzos' },
        { name: 'Trousers', route: '/shop/trousers' },
        { name: 'Shorts & Skirts', route: '/shop/women_shorts' },
        { name: 'Sweaters', route: '/shop/women_sweaters' },
        { name: 'Jackets', route: '/shop/women_jackets' },
        { name: 'Blazers & Waistcoats', route: '/shop/women_blazers' },
    ],
    ...[
        { name: 'Boys Shirts', route: '/shop/boys_shirts' },
        { name: 'Boys Shorts', route: '/shop/boys_shorts' },
        { name: 'Boys Jeans', route: '/shop/boys_jeans' },
        { name: 'Boys Sweatshirts', route: '/shop/boys_sweatshirts' },
        { name: 'Boys Party Wear', route: '/shop/boys_party_wear' },
        { name: 'Girls Shorts & Skirts', route: '/shop/girls_shorts' },
        { name: 'Girls Shirts', route: '/shop/girls_shirts' },
        { name: 'Girls Jeans', route: '/shop/girls_jeans' },
        { name: 'Girls Trousers', route: '/shop/girls_trousers' },
        { name: 'Girls Sweatshirts', route: '/shop/girls_sweatshirts' },
        { name: 'Girls Dresses', route: '/shop/girls_dresses' },
        { name: 'Girls Tops', route: '/shop/girls_tops' },
        { name: 'Girls Kurta Sets', route: '/shop/girls_kurta_sets' },
        { name: 'Girls Leggings', route: '/shop/girls_leggings' },
    ]
    ];

    // Filter based on input
    const filtered = subcategories.filter(sub =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (route, name) => {
    setSearchTerm(name);
    navigate(route); // Navigate to the selected route
    };

    return (
    <div className="relative w-150 max-w-md mx-auto">
        <div className="relative">
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
                type="text"
                placeholder="Search for products....."
                className="pl-10 px-3 py-1 border-2 outline-none border-base-300 w-full"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>

        {/* Dropdown suggestion list */}
        {searchTerm && filtered.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 max-h-60 overflow-y-auto shadow">
            {filtered.map(sub => (
            <li
                key={sub.name}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(sub.route, sub.name)}
            >
                {sub.name}
            </li>
            ))}
        </ul>
        )}

        {/* No match */}
        {searchTerm && filtered.length === 0 && (
        <div className="absolute z-10 bg-white border border-gray-300 w-full mt-1 px-3 py-2 text-gray-500">
            No subcategory found.
        </div>
        )}
    </div>
    );
}

export default Searchbar;
