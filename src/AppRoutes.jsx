/* Librerias */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles.jsx";

/* Componentes */
import GlobalContextProvider from "./components/GlobalContext/GlobalContext.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

/* Páginas */
import Index from "./pages/Index/index.jsx";
import NewVideo from "./pages/NewVideo/NewVideo.jsx";

/*
  * Archivo para manejar la navegación entre páginas de manera dinámica
*/

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <GlobalContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Index />}></Route>
          
          <Route path="/nuevo-video" element={<NewVideo />}></Route>
        </Routes>

        <Footer />
      </GlobalContextProvider>      
    </BrowserRouter>
  );
}