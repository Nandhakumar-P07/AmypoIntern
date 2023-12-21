import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import amypologo from "../../Assests/BlackAmypo.svg";
import axios from "axios";

const Login = () => {
  const nav = new useNavigate();
  const [login,setLogin] = useState({});
    const handleChange = (e )=>{
        const {name,value} = e.target;
        setLogin({...login,[name]:value});
    }
    const handlesubmit =async (e)=>{
        e.preventDefault();
        console.log(login);
        await axios.get("http://localhost:8080/login",{params:{email:login.email,password:login.password}}).then((response)=>{
          console.log(response.data[0]);
          localStorage.setItem("role",response.data[0]?.role);
          localStorage.setItem("id",response.data[0]?.id);
          localStorage.setItem("userdata",JSON.stringify(response?.data[0]))
            if(response.data[0]?.role==="admin" || response.data[0]?.role==="user")
                nav("/")
            else if(response.data=="")
                alert("Invalid Credentials");
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className="h-screen w-screen justify-center items-center flex">
      <div className="border-[1px] border-darkgray h-80% flex w-45% p-9 flex-col gap-5 rounded-lg">
        <div className="flex justify-center w-full ">
          <img src={amypologo} alt="logo" className="text-white w-[8rem]"></img>
        </div>
        <div className="text-base font-semibold flex justify-center">Login</div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <p className="font-poppins text-[1.2rem] py-1">Email</p>
            <p className="font-poppins text-[1.2rem] py-1">Password</p>
          </div>
          <div className="flex flex-col gap-5">
            <input
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="pl-4 border-[1px] border-dimgray rounded-lg py-1"
            ></input>
            <input
              placeholder="password"
              name="password"
              onChange={handleChange}
              className="pl-4 border-[1px] border-dimgray rounded-lg py-1"
            ></input>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="border-1 bg-buttonblue px-4 py-2 text-white rounded-lg"
            onClick={handlesubmit}

          >
            Submit
          </button>
        </div>
        <div>
          <div className="flex justify-center gap-2">
            <p>Don't have an account?</p>
            <p
              className="underline text-buttonblue cursor-pointer"
              onClick={() => {
                nav("/signup");
              }}
            >
              Signup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
