import {BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

export default function App() {
  //router render
  return(
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path ="/" element={<Home/>}/>
        <Route path='/hello' element={<h1>Hello!</h1>} />
      </Routes>
    </Router>);
}

