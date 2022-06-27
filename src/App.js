import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/details/:id' element={<ReviewDetails />} />
          <Route exact path='/category/:id' element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
