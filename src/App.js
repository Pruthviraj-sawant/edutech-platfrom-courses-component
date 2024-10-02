import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner"

const App = () => {
const [courses,setCourses]=useState(null);
const [loading,setloading]=useState(true); 
const [category,setcategory]=useState(filterData[0].title);
useEffect(()=>{
  const fetchData=async()=>{
    setloading(true);
    try {
      const res=await fetch(apiUrl);
      const obj=await res.json();
      console.log(obj);

      //save datainto variable
      setCourses(obj.data);

    } catch (error) {
     toast.error("network error....")
    }
    setloading(false);
  }
  fetchData();
},[])


  return (
    <div className="min-h-screen flex flex-col  overflow-x-hidden bg-bgDark2">
<Navbar/>

<Filter  filterData={filterData} category={category} setcategory={setcategory} />
<div className="w-11/12 flex flex-wrap max-w-[1500px] mx-auto justify-center items-center min-h-[50vh]">
  {
    loading ? (<Spinner/>):(<Cards    courses={courses}  category={category} />)
  }

</div>
    </div>
  );
};

export default App;
