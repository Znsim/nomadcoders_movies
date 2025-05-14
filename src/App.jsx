import { Routes, Route } from 'react-router-dom'; // ✅ Router 제거
import Home from './routes/Home';
import Detail from './routes/Detail';
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
