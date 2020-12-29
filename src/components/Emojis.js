import React from "react";





const Emoji=(props)=>{

return(
   <div className="containerEmoji">
     <div className="Emojinfo">
     <span>{props.title}</span>
     <span>{props.symbol}</span>
     </div>
     
   </div> 
)

}

export default Emoji;