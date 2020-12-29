import React,{useState} from "react";
import "./App.css";
import Emoji from "./components/Emojis";
import emojis from"./emojis.json";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Header from"./components/Header"


function App() {


  const[search,setSearch]=useState("")

  const tab=[];
  for(let i=0 ; i< emojis.length;i++){
    if(emojis[i].keywords.indexOf(search)!==-1){
      tab.push(
        <Emoji key={emojis[i].title} title={emojis[i].title} symbol={emojis[i].symbol}/>
      )
    }

  }

  return (

    <div className="containerApp">
    <Header/>
    <Search search={search} setSearch={setSearch}/>
    <div>
    {tab}
    </div>
    <div>
    <Footer/>
    </div>
      
    </div>
  );
}

export default App;
