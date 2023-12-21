import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPopup } from "../../redux/popupSlice";
import { open } from "../../redux/popupSlice";
import Internview from "./Internview";
import Internedit from "./Internedit";
import axios from 'axios';
import Internadd from "./Internadd";

const Layout2 = () => {
  const dispatch = new useDispatch();
  const [viewinterndetails,setViewinterndetails] = useState([]);
  const viewpopup = useSelector(selectPopup);
  const [currentviewintern, setCurrentviewintern] = useState(11);

  const handleclickview = async(id) => {
      setCurrentviewintern(id);
    await dispatch(open({ popupviewintern: "true" }));
  }

  const handleclickedit = async(id) => {
    setCurrentviewintern(id);
  await dispatch(open({ popupeditintern: "true" }));
}

  const deleteintern = async (index) => {
    await axios.delete(`http://localhost:8080/deletedata/${index}`);
    getinterndetails();
  };

  const getinterndetails = () => {
    if(localStorage.getItem("role")==="user"){
      setViewinterndetails(JSON.parse(localStorage.getItem("userdata")))
    //   axios.get(`http://localhost:8080/getinternbyid/${localStorage.getItem("id")}`).then((response) =>{
    //     setViewinterndetails(response.data[0]);
    //     console.log(response.data[0])
    // })
    }
    else{
      axios.get("http://localhost:8080/getinterndetails").then((response) => {
        setViewinterndetails(response.data);
      })
    }
  }

  useEffect(() => {
    getinterndetails();
    // eslint-disable-next-line
  }, [])
  return (
    <div className="">
      <div
          className={`${
            viewpopup?.popupaddintern === "true" ? "block" : "hidden"
          } `}
        >
            <Internadd setViewinterndetails={setViewinterndetails} />
        </div>
      <div
        className={`${
          viewpopup?.popupviewintern === "true" ? "block" : "hidden"
        } `}
      >
        <Internview index={currentviewintern} />
      </div>
      <div
        className={`${
          viewpopup?.popupeditintern === "true" ? "block" : "hidden"
        } `}
      >
        <Internedit index={currentviewintern} setViewinterndetails={setViewinterndetails} />
      </div>
      <table className=" w-full">
        <thead>
          <tr className="border-b-[2px] border-t-[2px] text-xl font-poppins font-semibold">
            <td className="px-10 py-3">S.No</td>
            <td className="px-10 py-3">Intern Name</td>
            <td className="px-10 py-3">College</td>
            <td className="px-10 py-3">Date of Join</td>
            <td className="px-10 py-3">Date of Completion</td>
            <td className="px-10 py-3">Edit Details</td>
          </tr>
        </thead>
        <tbody>
          {localStorage.getItem("role")==="user" ? (
            <tr className="">
            <td className="px-10 py-3">{viewinterndetails?.id}</td>
            <td className="px-10 py-3">{viewinterndetails?.name}</td>
            <td className="px-10 py-3">{viewinterndetails?.college}</td>
            <td className="px-10 py-3">{viewinterndetails?.dateofjoining}</td>
            <td className="px-10 py-3">{viewinterndetails?.dateofcompletion}</td>
            <td className="px-10 py-3 flex gap-5">
              <i
                className="fa-solid fa-eye cursor-pointer"
                onClick={()=>handleclickview(viewinterndetails?.id)}
              ></i>
              <i
                className="fa-solid fa-user-pen cursor-pointer"
                onClick={() => handleclickedit(viewinterndetails?.id)}
              ></i>
              <i
                className="fa-solid fa-trash cursor-pointer"
                onClick={() => deleteintern(viewinterndetails?.id)}
              ></i>
            </td> 
          </tr>
          ) : (
            viewinterndetails?.map((intern, index) => (
              <tr key={index} className="">
                <td className="px-10 py-3">{index + 1}</td>
                <td className="px-10 py-3">{intern.name}</td>
                <td className="px-10 py-3">{intern.college}</td>
                <td className="px-10 py-3">{intern.dateofjoining}</td>
                <td className="px-10 py-3">{intern.dateofcompletion}</td>
                <td className="px-10 py-3 flex gap-5">
                  <i
                    className="fa-solid fa-eye cursor-pointer"
                    onClick={()=>handleclickview(intern.id)}
                  ></i>
                  <i
                    className="fa-solid fa-user-pen cursor-pointer"
                    onClick={() => handleclickedit(intern.id)}
                  ></i>
                  <i
                    className="fa-solid fa-trash cursor-pointer"
                    onClick={() => deleteintern(intern.id)}
                  ></i>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="border-[1px]"></div>
    </div>
  );
};

export default Layout2;
