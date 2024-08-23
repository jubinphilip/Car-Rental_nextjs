"use client"
import Faq from "@/components/FAQ/Faq";
import Header from "@/components/header/Header";
import Locations from "@/components/Locations/Locations";
import Headermobile from "@/components/mobileheader/Headermobile";
import Submobile from "@/components/mobileSubscribe/Submobile";
import Popular from "@/components/popular/Popular";
import Slider from "@/components/poster/Slider";
import Rent from "@/components/Rent/Rent";
import Subscribe from "@/components/Subscribe/Sub";
import { useEffect, useState } from "react";




export default function Home() {

  const[width,setWidth]=useState(false)
useEffect(()=>
{
  function handleResize()
  {
    setWidth(window.innerWidth<1024)
  }
  handleResize()
  window.addEventListener('resize',handleResize)
  return ()=>
    {
      window.removeEventListener('resize',handleResize)
      }
},[])
  return (
  <>
    <Header/>
    {width && <Headermobile/>}
    <Slider/>
    <Popular/>
    <Subscribe/>
    <Submobile/>
    <Rent/>
    <Locations/>
    <Faq/>
  </>
  );
}
