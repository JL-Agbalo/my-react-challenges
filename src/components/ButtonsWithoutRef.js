import React, { useRef, useEffect } from "react";

// A functional component that renders a button without using a ref
export function ButtonsWithoutRef({ onClick, children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick} // Event handler for button click
    >
      {children}
    </button>
  );
}

// A functional component that renders a button using a ref
const ButtonsWithRef = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref} // Forwarded ref to the button element
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props} // Spread the remaining props to the button element
    >
      {children}
    </button>
  );
});

// A sample component demonstrating the use of ButtonsWithRef
export function SampleComponent() {
  const buttonRef = useRef(null); // Create a ref for the button

  useEffect(() => {
    buttonRef.current.focus(); // Focus the button when the component mounts
  }, []);

  return (
    <div>
      Sample Component
      <ButtonsWithRef
        ref={buttonRef} // Attach the ref to the ButtonsWithRef component
        onClick={() => console.log("Button clicked")} // Event handler for button click
      >
        Click me // Button label
      </ButtonsWithRef>
    </div>
  );
}
