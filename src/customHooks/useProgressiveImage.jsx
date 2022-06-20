import React from 'react';

export const useProgressiveImage = (src, isLoading = true) => {
  const [loading, setLoading] = React.useState(isLoading);
  const ref = React.useRef(false);

  React.useEffect(() => {
    ref.current = true;

    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (ref.current) {
          setLoading(false);
        }
      };
    }

    return () => {
      ref.current = false;
    };
  }, [src]);
  return [src, loading];
};
