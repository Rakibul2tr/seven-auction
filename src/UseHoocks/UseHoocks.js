import { useEffect, useState } from "react";

import car1 from "../assets/images/car/car-1.png";
import car2 from "../assets/images/car/car-2.png";
import car3 from "../assets/images/car/car-3.png";
import car4 from "../assets/images/car/car-4.png";
import jwt_decode from "jwt-decode";
import brandIcon from "../assets/images/icon/brand-icon.png";

import countryFlag from "../assets/images/saudi-flag.png";
const UseHoocks=()=>{
    const Livecars = [
        {
            _id:1,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car1,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            _id:2,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car2,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            _id:3,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car3,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            _id:4,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car2,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            _id:5,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car1,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            _id:6,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car3,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            _id:7,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car2,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            _id:8,
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car4,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
    ];
    const [user,setUser]=useState('')
    const [admin,setAdmin]=useState('')
    
  useEffect(()=>{
    let getUser=localStorage.getItem('User')
    let userData=JSON.parse(getUser)
    setUser(userData);

    let getAdmin=localStorage.getItem('admin')
    let adminData=JSON.parse(getAdmin)
    setAdmin(adminData);
  },[])


  const token=localStorage.getItem('token')
  const Admintoken=localStorage.getItem('Admintoken')
  
  const bearerToken=`Bearer ${token}`
  const AdminbearerToken=`Bearer ${Admintoken}`

  const logOutHendl=()=>{
    fetch(`https://seven-auction.herokuapp.com/api/user/logout`,{
      method:'DELETE',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:bearerToken,
      },
    })
    .then(res=>res.json())
    .then(data=>{
      setUser('')
      alert(data.message)
      localStorage.removeItem("User");
      window.location.reload();
    })
  }
  // admin logout data
  const AdminlogOutHendl=()=>{
    fetch(`https://seven-auction.herokuapp.com/api/admin/logout`,{
      method:'DELETE',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:AdminbearerToken,
      },
    })
    .then(res=>res.json())
    .then(data=>{
      setAdmin('')
      alert(data.message)
      localStorage.removeItem("Admintoken");
      localStorage.removeItem("admin");
      window.location.reload();
    })
  }

    return {
        Livecars,
       admin, user,setUser,logOutHendl,bearerToken,AdminbearerToken,AdminlogOutHendl
        // getAccountData
    }
}

export default UseHoocks;