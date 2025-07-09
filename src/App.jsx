import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import Mygigs from "./pages/mygigs/Mygigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Findjob from "./pages/findjob/Findjob";
import Postjob from "./pages/postjob/Postjob";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.scss";
import FreelancerProfileCreation from "./pages/profile/freelancer/FreelancerProfileCreation";
import ClientProfileCreation from "./pages/profile/client/ClientProfileCreation";
import FreelancerProfile from "./pages/profile/view/FreelancerProfile";
import ClientProfile from "./pages/profile/view/ClientProfile";
import Explore from "./pages/explore/Explore";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const Layout = () => {
    const location = useLocation();
    return (
      <div
        className="app"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ScrollToTop />

        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ flex: 1 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    );
  };
  //adding router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <Mygigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/findjob",
          element: <Findjob />,
        },
        {
          path: "/postjob",
          element: <Postjob />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/create-freelancer-profile",
          element: <FreelancerProfileCreation />,
        },
        {
          path: "/create-client-profile",
          element: <ClientProfileCreation />,
        },
        {
          path: "/freelancer-profile/:id?",
          element: <FreelancerProfile />,
        },
        {
          path: "/client-profile/:id?",
          element: <ClientProfile />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]); // router added

  return (
    <div>
      {/* <Navbar/>  //yo nav bar hatayae paxi balla logo click garda automatically home ma gayp */}
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
