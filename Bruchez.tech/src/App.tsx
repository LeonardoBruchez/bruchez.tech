import { products } from "./data";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
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

  return <HomePage navigate={navigate} />;
}
