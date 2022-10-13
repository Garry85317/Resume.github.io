import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import MyCV from "./CV";
import Todo from "./Todo"
import Pexels from "./Pexels"
import ColourGenerate from "./Colour"
import Weather from "./Weather";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react';

function App() {
  // const LazyLoad = (path) => {
  //   const Comp = React.lazy(() => import(`../${path}`))
  //   return (
  //     <React.Suspense >
  //       <Comp />
  //     </React.Suspense>
  //   )
  // }
  return (
    <div>
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
      </Router>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;