import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" dir="rtl" />
    </>
  );
}
