import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import page.
import Dashboard from "./pages/Dashboard";

// import component.
import PreLayout from "./components/PreLayout";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<PreLayout />}>
            <Route path="teacher">
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
