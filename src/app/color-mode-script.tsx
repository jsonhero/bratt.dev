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
        console.log(selected, 'selected');
        var colorMode;
        if (!selected) {
          colorMode = window.matchMedia('${MEDIA}').matches ? 'dark' : 'light';
        } else {
          colorMode = selected;
        }
        var el = window.document.querySelector('html');
        el.setAttribute('${attribute}', colorMode);
      }()`
    })()


    return <script dangerouslySetInnerHTML={{ __html: scriptSrc }} />
  },
  // Never re-render this component
  () => true
)