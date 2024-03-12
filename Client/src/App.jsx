/* eslint-disable no-unused-vars */
//import { apiBrukerKall } from "./axios/apiKall";
import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import FrontPage from './pages/Frontpage.jsx';
import MySet from './pages/MySet.jsx';
import UserOverview from './pages/UserOverview.jsx';

function App() {

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/myset" element={<MySet />} />
        <Route path="/users" element={<UserOverview />} />
      </Routes>
    </div>
  );
}

export default App;
