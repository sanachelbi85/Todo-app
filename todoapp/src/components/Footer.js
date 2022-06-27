import React from 'react';
import { FcList, FcPlus } from "react-icons/fc";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <Link to="/"><FcList /></Link>
      <Link to="/AddTodo"><FcPlus /></Link> 
    </div>
  )
}

export default Footer