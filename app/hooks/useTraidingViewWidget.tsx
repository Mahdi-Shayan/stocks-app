"use client";

import { useEffect, useRef } from "react";

function useTraidingViewWidget(
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    if (container.current.dataset.loaded) return;
    container.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px"></div>`;

    const el = container.current;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    el.appendChild(script);
    el.dataset.loaded = "true";

    return () => {
      if (el) {
        el.innerHTML = "";
        delete el.dataset.loaded;
      }
    };
  }, [height, config, scriptUrl]);

  return container;
}
export default useTraidingViewWidget;
