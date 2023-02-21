import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from "./pages/logIn";
import Homepage from "./pages/homepage";
import Questpage1 from "./pages/questPage1";
import Questpage2 from "./pages/questPage2";
import Questpage3 from "./pages/questPage3";
import QuestPage from "./pages/questPage";
import MintNFT from "./pages/mintNft";
import ReviewImage from "./pages/reviewImage";
import './App.css';
import { Flex } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      <Router>

      <Flex
        width="100vw"
        height='100vh'
        marginX='auto'
        justifyContent={'center'}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/logIN" element={<LogIn />} />
          <Route path="/questpage" element={<QuestPage />} />
          <Route path="/homepage/quest1" element={<Questpage1 />} />
          <Route path="/homepage/quest2" element={<Questpage2 />} />
          <Route path="/homepage/quest3" element={<Questpage3 />} />
          <Route path="/mintNFT" element={<MintNFT />} />
          <Route path="/mintNFT/reviewImage" element={<ReviewImage />} />
        </Routes>
      </Flex>
      </Router>
    </div>
  );
}

export default App;
