// typings.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      autoplay?: boolean;
      loop?: boolean;
      mode?: string;  // Custom attribute, if needed
      src?: string;
      style?: React.CSSProperties;
      background?: string;
      speed?: number;
      direction?: number;
      renderer?: string;
      // Add other specific properties for lottie-player here
    }
  }
}
