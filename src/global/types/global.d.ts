// custom.d.ts

// (1) SVG를 문자열로 import하는 경우
declare module "*.svg" {
  const src: string;
  export default src;
}

// (2) SVG를 React 컴포넌트로 import하는 경우
declare module "*.svg?component" {
  import React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
