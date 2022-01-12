declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.txt' {
  const content: string;
  export default content;
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
