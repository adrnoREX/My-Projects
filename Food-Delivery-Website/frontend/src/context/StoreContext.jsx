import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const handleTokenExpired = () => {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        setToken("");
        window.location.href = "/login";
    };

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }

        if (token) {
            try {
                const res = await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
                if (res.data.message === "Token expired, please login again") {
                    handleTokenExpired();
                }
            } catch (err) {
                console.error("Add to cart failed:", err);
            }
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

        if (token) {
            try {
                const res = await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
                if (res.data.message === "Token expired, please login again") {
                    handleTokenExpired();
                }
            } catch (err) {
                console.error("Remove from cart failed:", err);
            }
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data);
        } catch (err) {
            console.error("Failed to fetch food list:", err);
        }
    };

    const loadCartData = async (token) => {
        try {
            const res = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            if (res.data.message === "Token expired, please login again") {
                handleTokenExpired();
            } else {
                setCartItems(res.data.cartData);
            }
        } catch (err) {
            console.error("Failed to load cart data:", err);
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
                await loadCartData(savedToken);
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
