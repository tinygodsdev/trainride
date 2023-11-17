import React from 'react'
import Home from './pages/Home';
import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import Station0010 from './pages/Station0010';
import Stations from './components/Stations';
import PageWrapper from './components/PageWrapper';
import Ride0010 from './pages/Ride0010';
import { ApinuNewsDashboard } from './dashboards.jsx/ApinuDashboards';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper theme={"velvet"} ><Home /></PageWrapper>} />
          <Route path="to0010" element={<PageWrapper theme={"train"}><Ride0010 /></PageWrapper>} />
          <Route path="0010" element={<PageWrapper theme={"apinu"}><Station0010 /></PageWrapper>} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          <Route path="secret/apinu/news" element={<PageWrapper theme={"apinu"}><ApinuNewsDashboard /></PageWrapper>} />
        </Route>
      </Routes>
    </>
  )
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}


export default App
