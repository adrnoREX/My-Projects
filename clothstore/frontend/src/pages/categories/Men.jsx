import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SliderHome from '../SliderHome';

function Men() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategoryItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clothes/category/Men');
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching Women items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryItems();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading Men’s Trends...</div>;
  }

  return (
    <>
      {items.length > 0 ? (
        <SliderHome items={items} />
      ) : (
        <div className="text-center py-10 text-gray-500">No items found in Men category</div>
      )}
    </>
  );
}

export default Men;