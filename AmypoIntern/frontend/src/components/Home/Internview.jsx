import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../../redux/popupSlice";
import axios from "axios";

const Internview = ({ index,setViewinterndetails }) => {
  const dispatch = new useDispatch();
  const [currentviewintern,setCurrentviewintern] = useState(null);

  const getinterndata = () => {
    axios.get(`http://localhost:8080/getinternbyid/${index}`).then((response) =>{
        setCurrentviewintern(response.data);
    })
  }

  useEffect(() => {
    getinterndata();
    // eslint-disable-next-line
  }, [index])

  return (
    <div className="fixed left-0 top-0 z-50 bg-opacity-60 bg-black w-screen h-screen flex justify-center">
      <div className="fixed h-[74%] top-[13%]  flex flex-col gap-4 w-[50%] bg-white rounded-lg p-8 text-justify">
        <div className="w-full flex fixed left-[72%]">
          <i
            class="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={() => dispatch(close({ popupviewintern: "false" }))}
          ></i>
        </div>
        <div className="flex justify-start gap-16  ">
          <img
            alt="userimage"
            src={"data:image/jpeg;base64,"+currentviewintern?.image}
            className="w-[12rem] h-[16rem]"
          ></img>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <p className="text-xl font-poppins font-semibold mr-10">Name:</p>
              <p className="font-semibold text-lg">{currentviewintern?.name}</p>
            </div>
            <div className="flex">
              <p className="text-xl font-poppins font-semibold mr-10">
                College:
              </p>
              <p className="font-semibold text-lg">
                {currentviewintern?.college}
              </p>
            </div>
            <div className="flex">
              <p className="text-xl font-poppins font-semibold mr-16">
                Date of joining:
              </p>
              <p className="font-semibold text-lg">
                {currentviewintern?.dateofjoining}
              </p>
            </div>
            <div className="flex">
              <p className="text-xl font-poppins font-semibold mr-5">
                Date of Completion:
              </p>
              <p className="font-semibold text-lg">
                {currentviewintern?.dateofcompletion}
              </p>
            </div>
            <div className="flex">
              <p className="text-xl font-poppins font-semibold mr-5">
                Phone number :
              </p>
              <p className="font-semibold text-lg">
                {currentviewintern?.phonenumber}
              </p>
            </div>
            <div className="flex">
              <p className="text-xl font-poppins font-semibold mr-[7rem]">
                Email:
              </p>
              <p className="font-semibold text-lg">
                {currentviewintern?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
            <div>
<p className="text-xl font-poppins font-semibold mr-[7rem]">ID card image</p>
<img src={"data:image/jpeg;base64,"+currentviewintern?.idcardimage} alt="idcardimage" className="w-[23rem] h-[17rem]"></img>
            </div>
            <div>
            <p className="text-xl font-poppins font-semibold mr-[7rem]">Aadhar card image</p>
<img src={"data:image/jpeg;base64,"+currentviewintern?.aadharImage} alt="idcardimage" className="w-[23rem] h-[17rem]"></img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Internview;
