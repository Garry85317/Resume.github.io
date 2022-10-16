import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import MyCV from "./CV";
import Todo from "./Todo"
import Pexels from "./Pexels"
import ColourGenerate from "./Colour"
import Weather from "./Weather";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <div>
      {/* <Loading /> */}
      <Router>
        <Nav />
        <Routes>
          <Route index path='/' element={<Navigate to="/CV" />} />
          <Route element={<MyCV />} path={'/CV'}>
            <Route element={<MyCV />} path={':position'}></Route>
          </Route>
          <Route element={<Todo />} path={'/todo-list'}></Route>
          <Route element={<Pexels />} path={'/pexels'}></Route>
          <Route element={<ColourGenerate />} path={'/colour-generate'}></Route>
          <Route element={<Weather />} path={'/weather'}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
