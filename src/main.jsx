import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const categories = {
//   unique_category_id_1: {
//     name: "sub category 1",
//     subCategories: {
//       unique_category_id_2: {
//         name: "sub sub category",
//         subCategories: null,
//       },
//     },
//   },
//   unique_category_id_3: {
//     name: "sub category 2",
//     subCategories: null
//   },
// };
