"use client";

import useTradingViewWidget from "@/app/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

export interface Props {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

function TradingViewWidget({
  config,
  height = 600,
  scriptUrl,
  title,
  className,
}: Props) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">
          {title}
        </h3>
      )}
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className={cn("tradingview-widget-container__widget", className)}
          style={{ height: `${height}px`, width: "100%" }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
