// import React, { useEffect, useState } from 'react';
// import "./Navbar.scss"
// import { Link,useLocation, useNavigate } from "react-router-dom";

// const Navbar = () =>{
//    const[active, setActive] = React.useState(false);
//    const [open, setOpen] =useState(false); //menu click huda ko functionality
//    const {pathname} = useLocation();
//    const navigate = useNavigate();
//    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Get from localStorage

//    const isActive =()=>{
//    window.scrollY > 0 ? setActive(true) : setActive(false);
//    };

//    useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () =>{
//         window.removeEventListener("scroll", isActive);
//     }
//    }, []);


// const handleLogout = () => {
//     localStorage.removeItem("currentUser");
//     navigate("/");
// };
// // when clicking on profile options menu apprea so this is currenr user
// // const currentUser={
// //     id:1,
// //     username: "Ariana",
// //     isFreelancer: true, //if you are not Freelancer you wont see the menu
// // }
//     return (
//         <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>  
//         {/* yedi homepage haina thin line option active hunxa always aru page ma  */}
//            <div className="container">
//               <div className="logo">
//               <Link to="/" className='link'>
//                  Freelancia
//               </Link>
//               </div>
//               <div className="links"> 
//                 <span>About Us</span>
//                 <span>Contact</span>
//                 <span>Explore More</span>
//                 {!currentUser && (
//                     <Link className="link" to="/login">
//                         Login In
//                     </Link>
//                 )}
//                 {/* //if curerent user is Freelancer dont show this links */}
                
//                { !currentUser && (
//                 <Link className='link' to='/register'>
//                     <button>Register</button>
//                 </Link>
               
//                )} 
//                {/* //if you are current user you wont see this button */}
//                { currentUser && (
//                 <div className="user"onClick={()=> setOpen(!open)}>
//                 <img src="https://www.billboard.com/wp-content/uploads/2022/08/Ariana-Grande-the-voice-2021-billboard-1548.jpg?w=875&h=583&crop=1" alt=""/>
//                     <span>{currentUser?.username}</span>
                    
//                   { open && 
//                   <div className="options"> 
//                     { currentUser?.isFreelancer ? (
//                         <>
//                             <Link className="link" to="/mygigs">Gigs</Link>
//                             <Link className="link" to="/add">Add New Gig</Link>
//                              <Link className="link" to="/findjob">Findjob</Link>
                             
//                         </>
//                     ):(
//                         <Link className="link" to="/postjob">Post Job</Link>
                        
//                         )}
//                         <Link className="link" to="/orders">Orders</Link>
//                         <Link className="link" to="/messages">Messages</Link>
//                         <Link className="link" to={currentUser ?.isFreelancer ? "/freelancer" : "/client"}>Profile</Link>
                        
//                         {/* <Link>Logout</Link> */}
//                         <span onClick={handleLogout}>Logout</span>
//                     </div>}
//                 </div>
//                )}
//               </div>
//         </div>
//            {(active || pathname !=="/") && (
//             <>    
//             <hr />
//             <div className="menu">
//             <Link className= "link menuLink" to="/">
//              Graphics Designing
//             </Link>
//             <Link className= "link" to="/">
//              Video & Animation
//             </Link>
//             <Link className= "link" to="/">
//              Writting & transition
//              </Link>
//             <Link className= "link" to="/">
//              Ai services
//              </Link>
//             <Link className= "link" to="/">
//              Digital marketing
//              </Link>
//             <Link className= "link" to="/">
//              Music & Audio
//              </Link>
//             <Link className= "link" to="/">
//              Pragramming & Tech
//              </Link>
//           </div>
//           </>
//           )}
//         </div>
//     );
// };
// export default Navbar;

import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { logout } from "@/api/auth"
const Navbar = () => {
  const [active, setActive] = React.useState(false)
  const [open, setOpen] = useState(false) //menu click huda ko functionality
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) //Get from localStorage

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])

  const handleLogout =async () => {
    localStorage.removeItem("currentUser")
    let token = localStorage.getItem("token");
    try {
      await logout(token);
      console.log("logout successful")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  // when clicking on profile options menu apprea so this is currenr user
  // const currentUser={
  //     id:1,
  //     username: "Ariana",
  //     isFreelancer: true, //if you are not Freelancer you wont see the menu
  // }
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      {/* yedi homepage haina thin line option active hunxa always aru page ma  */}
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
          <img src="/img/freelancialogo5.png" alt="logo" />
           <h1> reelancia</h1>
          </Link>
        </div>
        <div className="links">
          <span>About Us</span>
          <span>Contact</span>
          <span>Explore More</span>
          {!currentUser && (
            <Link className="link" to="/login">
              Login In
            </Link>
          )}
          {/* //if curerent user is Freelancer dont show this links */}

          {!currentUser && (
            <Link className="link" to="/register">
              <button>Register</button>
            </Link>
          )}
          {/* //if you are current user you wont see this button */}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://www.billboard.com/wp-content/uploads/2022/08/Ariana-Grande-the-voice-2021-billboard-1548.jpg?w=875&h=583&crop=1"
                alt=""
              />
              <span>{currentUser?.username}</span>

              {open && (
                <div className="options">
                  {currentUser === "freelancer" ? (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                      <Link className="link" to="/findjob">
                        Findjob
                      </Link>
                    </>
                  ) : (
                    <Link className="link" to="/postjob">
                      Post Job
                    </Link>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to={currentUser?.isFreelancer ? "/freelancer-profile" : "/client-profile"}>
                    Profile
                  </Link>

                  {/* <Link>Logout</Link> */}
                  <span onClick={handleLogout}>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active  && ( //(active || pathname !== "/") removing is so that menulink does appear on other pages 
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics Designing
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writting & transition
            </Link>
            <Link className="link" to="/">
              Ai services
            </Link>
            <Link className="link" to="/">
              Digital marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Pragramming & Tech
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
export default Navbar
