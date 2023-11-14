'use client';

import { useEffect } from 'react'
import Prism from 'prismjs';

export function NotionPrism() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return null;
}