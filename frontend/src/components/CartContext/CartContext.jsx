import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Normalize any old cart items with imageUrl to imageUrls
    const normalizedCart = cart.map(item => ({
      ...item,
      imageUrls: Array.isArray(item.imageUrls)
        ? item.imageUrls
        : item.imageUrl
        ? [item.imageUrl]
        : [],
    }));
    setCartItems(normalizedCart);
  }, []);

  // Update cart and localStorage
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Add item to cart
  const addToCart = (item) => {
    // Normalize item to ensure imageUrls is an array
    const normalizedItem = {
      ...item,
      imageUrls: Array.isArray(item.imageUrls)
        ? item.imageUrls
        : item.imageUrl
        ? [item.imageUrl]
        : [],
    };
    const newCart = [...cartItems];
    const existingItem = newCart.find(cartItem => cartItem._id === normalizedItem._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({ ...normalizedItem, quantity: 1 });
    }
    updateCart(newCart);
  };

  // Update item quantity
  const updateQuantity = (_id, delta) => {
    const newCart = cartItems.map(item =>
      item._id === _id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    updateCart(newCart);
  };

  // Remove item
  const removeItem = (_id) => {
    const newCart = cartItems.filter(item => item._id !== _id);
    updateCart(newCart);
  };

  // Clear cart
  const clearCart = () => {
    updateCart([]);
  };

  // Calculate cart count
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};