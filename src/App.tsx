import { products } from "./data";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import { useRoute } from "./router";

export default function App() {
  const { path, navigate } = useRoute();

  const productMatch = path.match(/^\/produto\/([^/]+)\/?$/);
  const product = productMatch
    ? products.find((item) => item.slug === productMatch[1])
    : undefined;

  let page = <HomePage navigate={navigate} />;
  if (productMatch && product) {
    page = <ProductPage product={product} navigate={navigate} />;
  } else if (productMatch && !product) {
    page = <NotFoundPage navigate={navigate} />;
  }

  return (
    <>
      {page}
      <WhatsAppFloatButton />
    </>
  );
}
