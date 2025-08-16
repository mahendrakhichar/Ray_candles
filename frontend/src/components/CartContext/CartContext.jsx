import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  // Update cart and localStorage
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Add item to cart
  const addToCart = (item) => {
    const newCart = [...cartItems];
    const existingItem = newCart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }
    updateCart(newCart);
  };

  // Update item quantity
  const updateQuantity = (id, delta) => {
    const newCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    updateCart(newCart);
  };

  // Remove item
  const removeItem = (id) => {
    const newCart = cartItems.filter(item => item.id !== id);
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