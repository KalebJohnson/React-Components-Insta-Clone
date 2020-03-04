/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React ,{useState} from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage.js";
import SearchBar from "./components/SearchBar/SearchBarContainer.js"; 
import dummyData from "./dummy-data";



const App = () => {
const [data,setdata] = useState(dummyData)
  return (
    <div className="App">
      <PostsPage dummyData={data}/>
      <SearchBar/>
      
    </div>
  );
};

export default App;
