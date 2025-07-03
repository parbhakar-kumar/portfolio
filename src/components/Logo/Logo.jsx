import React,{useRef , useEffect} from 'react'
import { Link } from 'react-router';

function Logo() {
 const logoRef = useRef();
 useEffect(()=>{
  logoRef.current.style.transform = "all 0.3s ease";
  logoRef.current.style.cuesor="pointer"
 })


  return (
    <div>
      <Link to = "/">
      
      <div ref={logoRef} className="flex text-amber-600 text-2xl font-bold">
        My<span className="text-amber-400">Portfolio</span>
      </div>

      </Link>
    </div>
  )
}

export default Logo
