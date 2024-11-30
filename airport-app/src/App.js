
   import logo from './logo.svg';
   import './App.css';
   import HomePage from "./public/Homepage/Homepage"
   import Header from "./public/Header"
   import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

   function App() {
     return (
     <div>
     <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>

      </Router>
      </div>

     );
   }
   export default App;
