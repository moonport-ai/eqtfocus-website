"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ihfKestrel?: {
      render: (config?: Record<string, unknown>) => HTMLElement;
      config?: Record<string, unknown>;
    };
  }
}

type KestrelWidgetProps = {
  /**
   * Widget Builder config copied from iHomefinder Control Panel → Widgets.
   * Omit on the /idx anchor page and SEO page routes — render() infers
   * the content from the current URL.
   */
  config?: Record<string, unknown>;
  className?: string;
};

export function KestrelWidget({ config, className }: KestrelWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;

    const mount = () => {
      if (
        typeof window.ihfKestrel?.render === "function" &&
        containerRef.current &&
        !rendered.current
      ) {
        containerRef.current.appendChild(window.ihfKestrel.render(config));
        rendered.current = true;
        return true;
      }
      return false;
    };

    if (mount()) return;

    const interval = window.setInterval(() => {
      if (mount()) window.clearInterval(interval);
    }, 200);

    return () => window.clearInterval(interval);
  }, [config]);

  return <div ref={containerRef} className={className} />;
}
