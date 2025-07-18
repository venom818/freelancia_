// import React from "react";
// import { Link } from "react-router-dom";
// import "./CatCard.scss"

// const CatCard = ({item}) =>{
//     return(
//         <Link to="gigs?cat=design">
//             <div className="catCard">
//                 <div className="catcardborder">
//                 <img src={item.img} alt="image"/>
//                 {/* <span className="desc">{item.desc}</span>  */}
//                 <span className="title">{item.title}</span>
//                 </div>
//             </div>
      
//         </Link>
        
//     )
// }
// export default CatCard;

import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss"

const CatCard = ({item}) =>{
    return(
        <Link to="gigs?cat=design">
            <div className="catCard">
            <img src={item.img} alt="image"/>
            {/* <span className="desc">{item.desc}</span> */}
            <span className="title">{item.title}</span>
        </div>
        </Link>
        
    )
}
export default CatCard;

