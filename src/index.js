import { StrictMode } from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>Hello World!</div>;
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
