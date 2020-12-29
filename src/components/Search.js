import React from "react";


const Search= props=>{

return(
   <div>
       
       <input
        type="text"
        placeholder="What emoji are you looking for ?"
        value={props.search}
        onChange={event=>{
         const value= event.target.value;
         props.setSearch(value) 
       }}
       />
   </div> 
)

}

export default Search;