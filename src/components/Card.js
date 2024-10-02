import React from 'react'
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => { //use like this also {course}

  let  course=props.course;
  let  likedcourses=props.likedcourses;
  let setlikedcourses=props.setlikedcourses;
  function clickhandler(){
    if(likedcourses.includes(course.id)){
      //pehle se liked
      setlikedcourses((prev)=> prev.filter((cid)=> (cid !== course.id) ));
      toast.warning("liked removed...");
    }
    else{
      //pehle se like nahi hai
      //insert into liked couses
      if (likedcourses.length===0) {
        setlikedcourses([course.id]);
      } else {
        //non empty
        setlikedcourses((prev)=>[...prev,course.id]);
      }
      toast.success("liked course.....");
    }
  }
  return (
    <div className='relative overflow-hidden bg-bgDark mt-2 ml-11 flex flex-col h-70 w-50 p-2 rounded-md'>
<div>
    <img src={course.image.url} alt='yo' className='h-[10rem] rounded-md' ></img>
    <div className='w-[40px] h-[40px] bg-white  rounded-full  right-2 bottom-3 grid  place-items-center  hover:scale-125 transition-all 3s ease absolute top-40'>
        <button onClick={clickhandler} >
         { 
likedcourses.includes(course.id) ? (<FcLike className='hover:scale-125 transition-all 3s' fontSize="1.75rem"/> ) : (<FcLikePlaceholder/>)
         }
        </button>
    </div>
</div>
<div className='w-60 h-36'>
    <p className='font-semibold text-white p-1 leading-6'>{course.title}</p>
    <p className=' text-white font-medium mt-4' > {course.description.length > 100
            ? course.description.substring(0, 80) + "..."
            : course.description}</p>
</div>

    </div>
  ) 
}
export default Card