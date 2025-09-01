import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Oops! Página não encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida para outro local.
        </p>
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = "/"} 
            className="btn-sushi-gold"
            size="lg"
          >
            Voltar ao Início
          </Button>
          <br />
          <Button 
            onClick={() => window.location.href = "/cardapio"} 
            variant="outline"
            size="lg"
          >
            Ver Cardápio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
