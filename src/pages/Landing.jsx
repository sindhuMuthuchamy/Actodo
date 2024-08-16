import { useLocation } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Card from '../components/card';
import Todocontainer from '../components/Todocontainer';


function Landing(){

        const location = useLocation()
        const user = location.state?.user; 

        // State to hold the current date and time
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // Update date and time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clean up the timer on component unmount
        return () => clearInterval(timer);
    }, []);

    // Format the date and time
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

        
    return(
        <>
        <div className='bg-black p-10'>
      <div className='bg-[#efefef] p-8 border rounded-md'>
        <Header username={user}/>
        <div className='flex gap-3 my-5 justify-between flex-wrap'>
        <Card bgcolor={"#8272DA"} title={"Dream it. Wish it. Do it"} subtitle={"Dream bigger. Do bigger"}/>
        <Card bgcolor={"#FD6663"} title={formatDate(currentDateTime)} subtitle={formatTime(currentDateTime)}/>
        <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>
        </div>
        <Todocontainer/>
      </div>

    </div>
        </>
    )
}

export default Landing