import { useState, useEffect, Suspense } from "react";
import i18n from "./i18n";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from "./utils/routes";
import Layout from "./component/Layout";
import { Loader } from "./component/loader";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Asinxron operatsiyalar yoki sahifa yuklanishini simulyatsiya qilish
  useEffect(() => {
    const loadData = async () => {
      // Ma'lumotlarni olish yoki boshqa asinxron jarayonni bajarish
      setTimeout(() => {
        setLoading(false); // Yuklash tugagandan so'ng loadingni o'zgartirish
      }, 2000); // 2 sekund
    };

    loadData();
  }, []);

  return (
    <Suspense fallback={<Loader/>}>

      <Router>

        <Routes>
          <Route path="/" element={<Layout />} >
          {ROUTES.map(({ component: Component, path }, i) => (
  <Route path={path} element={<Component />} key={i} />
))}
          </Route>
          <Route
            path={'*'}
            element={
              <div className="flex w-full h-screen justify-center items-center">
                <h1>404 Not found 🙁</h1>
              </div>
            }
          />
        </Routes>

      </Router>

    </Suspense>
  );
}

export default App;

