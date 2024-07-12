import Image from "next/image";
import Navbar from "./components/Navbar";
import { getUser, getUserData } from "./supabase/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";
import FunctionCard from "./components/FunctionCard";
import Footer from "./components/Footer";
// import next from "next";

export default async function Home() {
  let isLoggedIn = false;
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
    next: { revalidate: 86400 },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  let maximum = 20;
  let minimum = 0;
  let random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  let movie = data?.results[10];
  var image_url = `http://image.tmdb.org/t/p/original${movie?.backdrop_path}`;


  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      {/* <ToastContainer position="top-left" /> */}

      <main className="max-w-[950px] m-auto flex justify-center">
        <Banner imageUrl={image_url} title={movie?.original_title} />
        <div className="flex flex-col gap-4">
          {/* <h1>Welcome back, {user?.session?.user?.user_metadata?.username}</h1> */}
        </div>
      </main>
      <HeroSection movies={data.results.slice(0, 6)} />
      <FunctionCard />
      <Footer />
    </div>
  );
}
