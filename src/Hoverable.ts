// import { isHoverEnabled } from "./HoverState";
// import { element, func, oneOfType } from "prop-types";
// import React from "react";

// export default function Hoverable({ onHoverIn, onHoverOut, children }) {
//   const [isHovered, setHovered] = React.useState(false);
//   const [showHover, setShowHover] = React.useState(true);

//   function handleMouseEnter(e) {
//     if (isHoverEnabled() && !isHovered) {
//       if (onHoverIn) onHoverIn();
//       setHovered(true);
//     }
//   }

//   function handleMouseLeave(e) {
//     if (isHovered) {
//       if (onHoverOut) onHoverOut();
//       setHovered(false);
//     }
//   }

//   function handleGrant() {
//     setShowHover(false);
//   }

//   function handleRelease() {}

//   const child =
//     typeof children === "function"
//       ? children(showHover && isHovered)
//       : children;

//   return React.cloneElement(React.Children.only(child), {
//     onMouseEnter: handleMouseEnter,
//     onMouseLeave: handleMouseLeave,
//     // prevent hover showing while responder
//     onResponderGrant: () => setShowHover(false),
//     onResponderRelease: () => setShowHover(true),
//     // if child is Touchable
//     onPressIn: handleGrant,
//     onPressOut: handleRelease
//   });
// }

// Hoverable.displayName = "Hoverable";

// Hoverable.propTypes = {
//   children: oneOfType([func, element]),
//   onHoverIn: func,
//   onHoverOut: func
// };

import React, { useCallback, ReactNode } from 'react';

import { isHoverEnabled } from './HoverState';

export interface HoverableProps {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  children: ((isHovered: boolean) => ReactNode) | ReactNode;
}

export default function Hoverable({ onHoverIn, onHoverOut, children }: HoverableProps) {
  const [isHovered, setHovered] = React.useState(false);
  const [showHover, setShowHover] = React.useState(true);

  const handleMouseEnter = useCallback(() => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setHovered(true);
    }
  }, [isHovered, onHoverIn]);

  const handleMouseLeave = useCallback(() => {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setHovered(false);
    }
  }, [isHovered, onHoverOut]);

  const handleGrant = useCallback(() => {
    setShowHover(false);
  }, []);

  const handleRelease = useCallback(() => {
    setShowHover(true);
  }, []);

  const child =
    typeof children === 'function' ? children(showHover && isHovered) : children;

  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    // prevent hover showing while responder
    onResponderGrant: handleGrant,
    onResponderRelease: handleRelease,
    // if child is Touchable
    onPressIn: handleGrant,
    onPressOut: handleRelease,
  });
}

