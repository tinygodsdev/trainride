import React from 'react'
import Home from './pages/Home';
import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import Station0010 from './pages/Apinu';
import Stations from './components/Stations';
import PageWrapper from './components/PageWrapper';
import Ride0010 from './pages/RideToApinu';
import { ApinuNewsDashboard } from './dashboards.jsx/ApinuDashboards';
import Apinu from './pages/Apinu';
import RideToApinu from './pages/RideToApinu';
import RideToKepeken from './pages/RideToKepeken';
import Kepeken from './pages/Kepeken';
import RideToValleyOfCreeks from './pages/RideToValleyOfCreeks';
import ValleyOfCreeks from './pages/ValleyOfCreeks';
import RideToRiszChannel from './pages/RideToRiszChannel';
import RiszChannel from './pages/RiszChannel';
import RideToRisz from './pages/RideToRisz';
import Risz from './pages/Risz';
import RideToMash from './pages/RiseToMash';
import Mash from './pages/Mash';
import RideToTilanka from './pages/RideToTilanka';
import Tilanka from './pages/Tilanka';
import RideToEsha from './pages/RideToEsha';
import Esha from './pages/Esha';
import RideToKalarna from './pages/RideToKalarna';
import Kalarna from './pages/Kalarna';
import RideToVelvetAgain from './pages/RideToVelvetAgain';
import VelvetAgain from './pages/VelvetAgain';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper theme={"velvet"} idx={0} ><Home /></PageWrapper>} />

          <Route path="to-apinu" element={<PageWrapper theme={"train"} idx={1}><RideToApinu /></PageWrapper>} />
          <Route path="apinu" element={<PageWrapper theme={"apinu"} idx={2}><Apinu /></PageWrapper>} />

          <Route path="to-kepeken" element={<PageWrapper theme={"train"} idx={3}><RideToKepeken /></PageWrapper>} />
          <Route path="kepeken" element={<PageWrapper theme={"kepeken"} idx={4}><Kepeken /></PageWrapper>} />

          <Route path="to-valley-of-creeks" element={<PageWrapper theme={"train"} idx={5}><RideToValleyOfCreeks /></PageWrapper>} />
          <Route path="valley-of-creeks" element={<PageWrapper theme={"valley-of-creeks"} idx={6}><ValleyOfCreeks /></PageWrapper>} />

          <Route path="to-risz-channel" element={<PageWrapper theme={"train"} idx={7}><RideToRiszChannel /></PageWrapper>} />
          <Route path="risz-channel" element={<PageWrapper theme={"risz-channel"} idx={8}><RiszChannel /></PageWrapper>} />

          <Route path="to-risz" element={<PageWrapper theme={"train"} idx={9}><RideToRisz /></PageWrapper>} />
          <Route path="risz" element={<PageWrapper theme={"risz"} idx={10}><Risz /></PageWrapper>} />

          <Route path="to-mash" element={<PageWrapper theme={"train"} idx={11}><RideToMash /></PageWrapper>} />
          <Route path="mash" element={<PageWrapper theme={"mash"} idx={12}><Mash /></PageWrapper>} />

          <Route path="to-tilanka" element={<PageWrapper theme={"train"} idx={13}><RideToTilanka /></PageWrapper>} />
          <Route path="tilanka" element={<PageWrapper theme={"tilanka"} idx={14}><Tilanka /></PageWrapper>} />

          <Route path="to-esha" element={<PageWrapper theme={"train"} idx={15}><RideToEsha /></PageWrapper>} />
          <Route path="esha" element={<PageWrapper theme={"esha"} idx={16}><Esha /></PageWrapper>} />

          <Route path="to-kalarna" element={<PageWrapper theme={"train"} idx={17}><RideToKalarna /></PageWrapper>} />
          <Route path="kalarna" element={<PageWrapper theme={"kalarna"} idx={18}><Kalarna /></PageWrapper>} />

          <Route path="to-velvet-again" element={<PageWrapper theme={"train"} idx={19}><RideToVelvetAgain /></PageWrapper>} />
          <Route path="velvet-again" element={<PageWrapper theme={"velvet-again"} idx={20}><VelvetAgain /></PageWrapper>} />

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
