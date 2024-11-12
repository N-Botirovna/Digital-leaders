import { useState, useEffect } from "react";
import i18n from "./i18n";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { Loader } from "./component/loader/Loader";

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
    <Router>
      {loading ? (
        <Loader size={62} /> // Yuklanayotganda Loaderni ko'rsatish
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Routes>
      )}
    </Router>
  );
}

export default App;

