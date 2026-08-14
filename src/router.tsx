import { useCallback, useEffect, useState } from "react";

export function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, "", to);
      setPath(to);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
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
