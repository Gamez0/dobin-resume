"use client";

import { useEffect } from "react";
import { handlers } from "./handlers";

export default function MockProvider() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { setupWorker } = require("msw/browser");

      const worker = setupWorker(...handlers);
      worker.start();
    }
  }, []);

  return null;
}
