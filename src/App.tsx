import React from 'react';
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Cart from "@/components/Cart";  // Alteração aqui: importação correta
import Index from "./pages/Index";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <Cart />  {/* Aqui o Cart foi importado como default */}
        <Menu />
      </div>
    </CartProvider>
  );
};

export default App;
