import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import SliderComponent from '../Slider'
import Footer from '../Footer'
import axios from 'axios'

function Men_Blazers() {
  const [items, setItems] = useState([])

    //fetch subcategory items 
    const fetchSubcategoryItems = async (subcategory) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/clothes/subcategory/${subcategory}`)
        setItems(response.data)
    } catch (error) {
        console.error("Error fetching category data:", error)
    }
    }

    useEffect(() => {
        // Fetch Women subcategory items when the component is mounted
        fetchSubcategoryItems('Men_Blazers')
    }, [])

  return (
    <>
    <div>
        <Navbar/>
        <div className='flex'>
        <Sidebar />
        {/* Pass the fetched items to SliderComponent */}
        <SliderComponent items={items} />
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Men_Blazers