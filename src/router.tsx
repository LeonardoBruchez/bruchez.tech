import { useCallback, useEffect, useState } from "react";

export function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const target = new URL(to, window.location.origin);
    if (`${target.pathname}${target.hash}` !== `${window.location.pathname}${window.location.hash}`) {
      window.history.pushState({}, "", to);
      setPath(target.pathname);
    }
    window.requestAnimationFrame(() => {
      const targetElement = target.hash
        ? document.getElementById(target.hash.slice(1))
        : null;
      if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  return { path, navigate };
}

export function makeLinkHandler(
  navigate: (to: string) => void,
  to: string,
) {
  return (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate(to);
  };
}
