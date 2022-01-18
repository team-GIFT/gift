declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.svg?react' {
  import * as React from 'react';

  const src: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.txt' {
  const src: string;
  export default src;
}

declare const GIPHY_API_KEY: string;
