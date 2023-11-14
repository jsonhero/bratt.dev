import React from 'react'

interface ColorModeScriptProps {
  attribute: string;
}
export const STORAGE_KEY = 'color-mode-key'
const MEDIA = '(prefers-color-scheme: dark)'

// eslint-disable-next-line react/display-name
export const ColorModeScript = React.memo(
  ({
    attribute,
  }: ColorModeScriptProps) => {
    const scriptSrc = (() => {
      return `!function() {
        var selected = window.localStorage.getItem('${STORAGE_KEY}');
        var colorMode;
        if (!selected) {
          colorMode = window.matchMedia('${MEDIA}').matches ? 'dark' : 'light';
        } else {
          colorMode = selected;
        }
        window.document.documentElement.className = colorMode
      }()`
    })()

    return <script dangerouslySetInnerHTML={{ __html: scriptSrc }} />
  },
  // Never re-render this component
  () => true
)