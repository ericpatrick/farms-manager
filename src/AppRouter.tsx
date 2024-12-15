import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { FarmsHome } from "./pages/FarmsHome";
import { FarmDetails } from "./pages/FarmDetails";
import { HomeLayout } from "./layouts/HomeLayout";
import { FarmFormPage } from "./pages/FarmFormPage";

export function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route path="farms">
          <Route index element={<FarmsHome />} />
          <Route path='new' element={<FarmFormPage />} />
          <Route path=':id' element={<FarmDetails />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='/farms' />} />
    </Routes>
  </BrowserRouter>
}
