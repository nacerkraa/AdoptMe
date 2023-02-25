import { createRoot } from "react-dom/client";
import { Link,BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    
    <BrowserRouter>
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>
      <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id"  element={<Details/>} />
          <Route path="/"  element={<SearchParams/>} />
        </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
