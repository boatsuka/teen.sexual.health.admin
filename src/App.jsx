import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import page.
import Dashboard from "./pages/Dashboard";

// import component.
import PreLayout from "./components/PreLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<PreLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
