import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Promotions from "./pages/Promotions";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Header />
              <Cart />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/pagamento" element={<Payment />} />
                <Route path="/promocoes" element={<Promotions />} />
                <Route path="/admin" element={<Admin />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
