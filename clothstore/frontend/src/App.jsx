import React, { useState } from 'react';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Shoppage from './components/Shoppage';
import Men from './pages/categories/Men';
import Women from './pages/categories/Women';
import Kids from './pages/categories/Kids';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Tshirts from './pages/subcategoriesMen/Tshirts';
import Men_Sweaters from './pages/subcategoriesMen/Men_Sweaters';
import Men_Track_Pants from './pages/subcategoriesMen/Men_Track_Pants';
import Men_Suits from './pages/subcategoriesMen/Men_Suits';
import Men_Shorts from './pages/subcategoriesMen/Men_Shorts';
import Men_Sherwanis from './pages/subcategoriesMen/Men_Sherwanis';
import Men_Rain_Coats from './pages/subcategoriesMen/Men_Rain_Coats';
import Men_Jeans from './pages/subcategoriesMen/Men_Jeans';
import Men_Kurtas from './pages/subcategoriesMen/Men_Kurtas';
import Men_Jackets from './pages/subcategoriesMen/Men_Jackets';
import Men_Full_Slip_Tshirts from './pages/subcategoriesMen/Men_Full_Slip_Tshirts';
import Men_Formal_Trousers from './pages/subcategoriesMen/Men_Formal_Trousers';
import Men_Formal_Shirts from './pages/subcategoriesMen/Men_Formal_Shirts';
import Men_Dhotis from './pages/subcategoriesMen/Men_Dhotis';
import Men_Casual_Trousers from './pages/subcategoriesMen/Men_Casual_Trousers';
import Men_Casual_Shirts from './pages/subcategoriesMen/Men_Casual_Shirts';
import Men_Blazers from './pages/subcategoriesMen/Men_Blazers';
import Women_Shirts from './pages/subcategoriesWomen/Women_Shirts';
import Women_Trousers from './pages/subcategoriesWomen/Women_Trousers';
import Women_Sweaters from './pages/subcategoriesWomen/Women_Sweaters';
import Women_Shorts from './pages/subcategoriesWomen/Women_Shorts';
import Women_Salwar from './pages/subcategoriesWomen/Women_Salwar';
import Women_Palazzos from './pages/subcategoriesWomen/Women_Palazzos';
import Women_Leggins from './pages/subcategoriesWomen/Women_Leggins';
import Women_Kurtis from './pages/subcategoriesWomen/Women_Kurtis';
import Women_Jeans from './pages/subcategoriesWomen/Women_Jeans';
import Women_Jackets from './pages/subcategoriesWomen/Women_Jackets';
import Women_Dupattas from './pages/subcategoriesWomen/Women_Dupattas';
import Women_Blazers from './pages/subcategoriesWomen/Women_Blazers';
import Sarees from './pages/subcategoriesWomen/Sarees';
import Boy_Shirts from './pages/subcategoriesKids/Boy_Shirts';
import Boy_Jeans from './pages/subcategoriesKids/Boy_Jeans';
import Boy_Party_Wear from './pages/subcategoriesKids/Boy_Party_Wear';
import Boy_Shorts from './pages/subcategoriesKids/Boy_Shorts';
import Boy_Sweatshirts from './pages/subcategoriesKids/Boy_Sweatshirts';
import Girl_Dresses from './pages/subcategoriesKids/Girl_Dresses';
import Girl_Jeans from './pages/subcategoriesKids/Girl_Jeans';
import Girl_Kurta_Sets from './pages/subcategoriesKids/Girl_Kurta_Sets';
import Girl_Leggings from './pages/subcategoriesKids/Girl_Leggings';
import Girl_Shirts from './pages/subcategoriesKids/Girl_Shirts';
import Girl_Shorts from './pages/subcategoriesKids/Girl_Shorts';
import Girl_Sweatshirts from './pages/subcategoriesKids/Girl_Sweatshirts';
import Girl_Tops from './pages/subcategoriesKids/Girl_Tops';
import Girl_Trousers from './pages/subcategoriesKids/Girl_Trousers';
import Login from './pages/Login';
import BuyNow from './pages/BuyNow';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import './index.css';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className=''>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          {/* <Route path="/shop" element={<Shoppage/>}/> */}
          {/* <Route path="/shop" element={<Men/>}/>
          <Route path="/shop/women" element={<Women/>}/>
          <Route path="/shop/kids" element={<Kids/>}/> */}
          {/* Men */}
          <Route path="/shop" element={<Tshirts/>}/>
          <Route path="/shop/men_sweaters" element={<Men_Sweaters/>}/>
          <Route path="/shop/track_pants" element={<Men_Track_Pants/>}/>
          <Route path="/shop/suits" element={<Men_Suits/>}/>
          <Route path="/shop/men_shorts" element={<Men_Shorts/>}/>
          <Route path="/shop/sherwanis" element={<Men_Sherwanis/>}/>
          <Route path="/shop/rain_coats" element={<Men_Rain_Coats/>}/>
          <Route path="/shop/kurtas" element={<Men_Kurtas/>}/>
          <Route path="/shop/men_jeans" element={<Men_Jeans/>}/>
          <Route path="/shop/men_jackets" element={<Men_Jackets/>}/>
          <Route path="/shop/full_slip_tshirts" element={<Men_Full_Slip_Tshirts/>}/>
          <Route path="/shop/formal_trousers" element={<Men_Formal_Trousers/>}/>
          <Route path="/shop/formal_shirts" element={<Men_Formal_Shirts/>}/>
          <Route path="/shop/dhotis" element={<Men_Dhotis/>}/>
          <Route path="/shop/casual_trousers" element={<Men_Casual_Trousers/>}/>
          <Route path="/shop/casual_shirts" element={<Men_Casual_Shirts/>}/>
          <Route path="/shop/men_blazers" element={<Men_Blazers/>}/>
          {/* Women */}
          <Route path="/shop/trousers" element={<Women_Trousers/>}/>
          <Route path="/shop/women_sweaters" element={<Women_Sweaters/>}/>
          <Route path="/shop/women_shorts" element={<Women_Shorts/>}/>
          <Route path="/shop/shirts" element={<Women_Shirts/>}/>
          <Route path="/shop/salwar" element={<Women_Salwar/>}/>
          <Route path="/shop/palazzos" element={<Women_Palazzos/>}/>
          <Route path="/shop/leggins" element={<Women_Leggins/>}/>
          <Route path="/shop/kurtis" element={<Women_Kurtis/>}/>
          <Route path="/shop/women_jeans" element={<Women_Jeans/>}/>
          <Route path="/shop/women_jackets" element={<Women_Jackets/>}/>
          <Route path="/shop/dupattas&shawls" element={<Women_Dupattas/>}/>
          <Route path="/shop/women_blazers" element={<Women_Blazers/>}/>
          <Route path="/shop/sarees" element={<Sarees/>}/>
          {/* Kids */}
          <Route path="/shop/boys_shirts" element={<Boy_Shirts/>}/>
          <Route path="/shop/boys_jeans" element={<Boy_Jeans/>}/>
          <Route path="/shop/boys_party_wear" element={<Boy_Party_Wear/>}/>
          <Route path="/shop/boys_shorts" element={<Boy_Shorts/>}/>
          <Route path="/shop/boys_sweatshirts" element={<Boy_Sweatshirts/>}/>
          <Route path="/shop/girls_dresses" element={<Girl_Dresses/>}/>
          <Route path="/shop/girls_jeans" element={<Girl_Jeans/>}/>
          <Route path="/shop/girls_kurta_sets" element={<Girl_Kurta_Sets/>}/>
          <Route path="/shop/girls_leggings" element={<Girl_Leggings/>}/>
          <Route path="/shop/girls_shirts" element={<Girl_Shirts/>}/>
          <Route path="/shop/girls_shorts" element={<Girl_Shorts/>}/>
          <Route path="/shop/girls_sweatshirts" element={<Girl_Sweatshirts/>}/>
          <Route path="/shop/girls_tops" element={<Girl_Tops/>}/>
          <Route path="/shop/girls_trousers" element={<Girl_Trousers/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/buynow" element={<BuyNow/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>       
      </div>   
      
      {/* Toastify container with global style */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        toastClassName="toastify-success"
      />

    </>
  )
}

export default App
