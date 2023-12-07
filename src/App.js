import React from "react";
import Navbar from "./Components/Navbar";
import Movie from "./Components/Movie";
import MovieDetail from "./Components/MovieDetail";
import { Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies";
import Concerts from "./Components/Concerts";

import Theatres from "./Components/Theatres";

import BillingForm from "./Components/MovieBillingForm";
import TheatreandConcerts from "./Components/EventDetail";
import EventBillingForm from "./Components/EventBillingForm";

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
        <Route path="/events/:id" element={<TheatreandConcerts />}></Route>
        <Route path="/events/:id/:quantity" element={<EventBillingForm/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
