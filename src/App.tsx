import { products } from "./data";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import WebDesignPage from "./pages/WebDesignPage";
import { useRoute } from "./router";

export default function App() {
  const { path, navigate } = useRoute();

  const productMatch = path.match(/^\/produto\/([^/]+)\/?$/);
  const product = productMatch
    ? products.find((item) => item.slug === productMatch[1])
    : undefined;

  if (productMatch && product) {
    return <ProductPage product={product} navigate={navigate} />;
  }

  if (path === "/impressao-3d" || path === "/impressao-3d/") {
    return <HomePage navigate={navigate} />;
  }

  if (path === "/criacao-de-sites" || path === "/criacao-de-sites/") {
    return <WebDesignPage navigate={navigate} />;
  }

  return <LandingPage navigate={navigate} />;
}
