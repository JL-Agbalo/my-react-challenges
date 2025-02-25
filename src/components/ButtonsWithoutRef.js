import React, { useRef, useEffect } from "react";

export function ButtonsWithoutRef({ onClick, children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ButtonsWithRef = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
});

export function SampleComponent() {
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div>
      Sample Component
      <ButtonsWithRef
        ref={buttonRef}
        onClick={() => console.log("Button clicked")}
      >
        Click me
      </ButtonsWithRef>
    </div>
  );
}
