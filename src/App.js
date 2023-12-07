import React from "react";
import Navbar from "./Components/Navbar";
import Movie from "./Components/Movie";
import MovieDetail from "./Components/MovieDetail";
import { Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies";
import Concerts from "./Components/Concerts";
import EventDetail from "./Components/EventDetail";
import Theatres from "./Components/Theatres";

import BillingForm from "./Components/BillingForm";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Checkout/> */}
      <Routes>
        <Route path="/" element={<Movie />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/concerts" element={<Concerts />}></Route>
        <Route path="/theatres" element={<Theatres />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
        <Route path="/movies/:id/:quantity" element={<BillingForm />}></Route>
        <Route path="/events/:id" element={<EventDetail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
