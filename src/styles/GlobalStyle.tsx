import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
 ${normalize}
 
 body {
  font-family:'Spoqa Han Sans Neo', 'Helvetica Neue', helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme: { color } }) => color.black};
  color: ${({ theme: { color } }) => color.white};
  }

  body *,
  body *::before,
  body *::after {
    -webkit-tap-highlight-color: rgba(250 250 0 / 2%);
    box-sizing: border-box;
  }

  img, svg {
    vertical-align: middle;
  }

  [disabled] {
    cursor: not-allowed;
  }
  
  button {
    // TODO: Need confirm
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  abbr[title] {
    cursor: help;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

 a {
   text-decoration: none;
   color:inherit;
 }

ul{
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.a11yHidden{
  overflow: hidden;
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
}

/* focusable outline style */
  a[href]:focus-visible, 
  area[href]:focus-visible, 
  button:focus-visible, 
  input:focus-visible, 
  select:focus-visible, 
  textarea:focus-visible, 
  iframe:focus-visible, 
  summary:focus-visible, 
  details:focus-visible, 
  video[controls]:focus-visible, 
  audio[controls]:focus-visible, 
  [contenteditable=""]:focus-visible, 
  [contenteditable="true"]:focus-visible, 
  [tabindex]:focus-visible,
  .isFocusable:focus-visible{
    outline:none;
    -moz-outline: none;
    -webkit-outline: none;
    box-shadow: 1px 1px 0 0 ${({ theme: { color } }) => color.outline}, 
    -1px -1px 0 0 ${({ theme: { color } }) => color.outline},
      -1px 1px 0 0 ${({ theme: { color } }) => color.outline},
      1px -1px 0 0 ${({ theme: { color } }) => color.outline};
  }
`;
