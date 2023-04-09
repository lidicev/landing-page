//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));



// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";

// //include bootstrap npm library into the bundle
// import "bootstrap";

// //include your index.scss file into the bundle
// import "../styles/index.scss";
// import "../styles/custom.css";

// //import your own components
// import Home from "./component/home.jsx";

// //render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));