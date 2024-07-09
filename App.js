import React from "react";
import ReactDOM from "react-dom/client";
const jsxHeading = <h1 className="head">Namaste React...</h1>;

// functional component
const Title = () => <h1 className="head"> Learning react is fun!!!</h1>;

// element

let elem = (
  <span>
    React element! <br></br>
  </span>
);

const HeadingComponent2 = () => {
  return <h1 className="body">React Functional Component!</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="head">React Functional Component!</h1>
  </div>
);

const title = (
  <h1 className="head">
    {elem}
    This is title
    <HeadingComponent />
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
