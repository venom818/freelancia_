import React, { useState } from 'react';
import "./Gigs.scss"
import GigCard from '../../components/gigCard/GigCard';
import {gigs} from '../../data';
const Gigs = () =>{
    const [sort, setSort] = useState("sales"); 
    const [open, setOpen] = useState(false); //this makes dowm button
    const [minBudget, setMinBudget] = useState("");
    const [maxBudget, setMaxBudget] = useState("");
    const [filteredGigs, setFilteredGigs] = useState(gigs);
const reSort = (type) =>{ //taking type from user
    setSort(type); // setting state
    setOpen(false); //close menu when we click one of them
}
const applyBudgetFilter = () => {
    let filtered = gigs;
    if (minBudget !== "" || maxBudget !== "") {
        filtered = gigs.filter(gig => {
            const price = gig.price;
            const min = minBudget === "" ? 0 : parseInt(minBudget);
            const max = maxBudget === "" ? Infinity : parseInt(maxBudget);    
            return price >= min && price <= max;
        });
    }
    setFilteredGigs(filtered);
}
const clearFilters = () => {
    setMinBudget("");
    setMaxBudget("");
    setFilteredGigs(gigs);
}
    return (
        <div className="gigs">
          <div className="container">
              <span className='breadcrumbs'> FREELANCIA  GRAPHICS & DESIGN </span>
              <h1>GRAPHICS DESIGNER</h1>
              <p>
                Shaping perceptions, one pixel at a time. Freelancia Graphic Designer
              </p>
              <div className='menu'>
                 <div className='left'>
                    <span>Budget</span>
                    <input 
                        type="number" 
                        placeholder="min" 
                        value={minBudget}
                        onChange={(e) => setMinBudget(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="max" 
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(e.target.value)}
                    />
                    <button onClick={applyBudgetFilter}>Apply</button>
                    <button onClick={clearFilters} style={{marginLeft: '10px', backgroundColor: '#ff6b6b'}}>Clear</button>
                 </div>
                 <div className="right">
                    <span className="sortBy">SortBy</span>
                     <span className="sortType">
                     {sort === "sales" ? "Best Selling" : "Newest"}
                     </span>
                     <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
                {open && (
                   <div className="rightMenu">
                     {sort === "sales" ? (
                       <span onClick={()=>reSort("createdAt")}>Newest</span>
                       ) : (
                       <span onClick={()=>reSort("sales")}>Best Selling</span>
                       )}
                     </div>
                     )}
                 </div>
              </div>
              <div className="cards">
                {filteredGigs.map(gig=>(
                  <GigCard key={gig.id} item={gig}/>
                ))}
              </div>
              {filteredGigs.length === 0 && (
                <div style={{textAlign: 'center', padding: '40px', color: '#666'}}>
                  <p>No gigs found within the specified budget range.</p>
                  <button onClick={clearFilters} style={{marginTop: '10px', padding: '8px 16px', backgroundColor: '#1dbf73', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
                    Clear Filters
                  </button>
                </div>
              )}
          </div>
        </div>
    )
}
export default Gigs;