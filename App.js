import React from "react";
import ReactDOM from "react-dom/client";
const jsxHeading = <h1 className="head">Namaste React...</h1>;

// functional component

const HeadingComponent = () => {
  return <h1 className="head">React Functional Component!</h1>;
};

const HeadingComponent2 = () => (
  <h1 className="head">React Functional Component!</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingComponent());
