import "./styles/global.css";
import test from "./lib/helpers/test_module";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello, world!</h1>
    <p>${test}</p>
    <button class="button">Testing</button>
  </div>
`;

document.querySelector("button").addEventListener("click", () => {
  console.log("clicked");
});
