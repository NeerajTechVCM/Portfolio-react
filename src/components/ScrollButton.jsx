import React, { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const ScrollButton = ({topRef,scrollToTop,isAtTop}) => {


  return (
    
    <div className={`fixed bottom-36 right-10 text-xl p-2 bg-[#b164fa] rounded-full text-white px-4 py-2 ${isAtTop?"hidden":"block"}`
     }  style={{  boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}  onClick={scrollToTop}>



       <FaArrowUp 
       
         />
      

    </div>
  );
};

export default ScrollButton;
