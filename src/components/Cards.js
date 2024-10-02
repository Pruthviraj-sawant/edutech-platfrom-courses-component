import React, { useState } from 'react'
import Card from './Card'
const Cards = (props) => {
let courses=props.courses;
let category=props.category;
const [likedcourses,setlikedcourses] = useState([]);

//all courses data in simgle array, data is stored in key value from  
const getcourses=()=>{
    if(category === "All"){
        let allcourse=[];
    Object.values(courses).forEach((coursecategory)=>{
        coursecategory.forEach((course)=>{
            allcourse.push(course);
        })
    })
    return allcourse;
}
else{
    //specific category data pass
    return courses[category];
}
}


  return (
    <div className='flex  gap-2 flex-wrap overflow-hidden justify-center max-w-[100vw]'>

        {!courses ? (
            <div>
                <p className='font-bold text-[2rem] text-white mt-40'>No Data Found..</p>
            </div>
        ):(
            getcourses().map((course) =>{
                return <Card key={course.id} course={course} category={category}  likedcourses={likedcourses} setlikedcourses={setlikedcourses}/>
             })
              
        )}
        

    </div>
  )
}

export default Cards