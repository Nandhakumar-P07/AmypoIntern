import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import amypologo from "../../Assests/BlackAmypo.svg";
import axios from "axios";

const Signup = () => {
  const nav = new useNavigate();

  const [interndetails, setInterndetails] = useState({
    name: "",
    college: "",
    dateofjoining: "",
    dateofcompletion: "",
    image: null,
    phonenumber: 0,
    email: "",
    idcardimage: null,
    aadharImage: null,
    role:"user"
  });

  const handleImageChange = (event, imagetype) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Convert the image file to a Base64 string
        const base64String = btoa(
          new Uint8Array(reader.result).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setInterndetails((prevDetails) => ({
          ...prevDetails,
          [imagetype]: base64String,
        }));
      };

      reader.readAsArrayBuffer(file);
    }
  };
  const handleinterndetailschange = (event) => {
    const propertyName = event.target.name;

    const propertyValue = event.target.value;

    setInterndetails({ ...interndetails, [propertyName]: propertyValue });
  };
  const handlesubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/saveinterndata",interndetails).then((res)=>{
      nav("/")
    });
  };
  return (
    <div className="h-screen w-screen justify-center items-center flex">
      <div className="border-[1px] border-darkgray h-80% flex w-45% p-9 flex-col gap-5 rounded-lg">
        <div className="flex justify-center w-full ">
          <img src={amypologo} alt="logo" className="text-white w-[8rem]"></img>
        </div>
        <div className="text-lg font-semibold flex justify-center">Signup</div>
        <div className="flex justify-center gap-5 py-1">
          <div className="flex gap-4 flex-col text-lg">
            <p>Image</p>
            <p>Intern Name:</p>
            <p>College:</p>
            <p>Date of Joining:</p>
            <p>Date of Completion:</p>
            <p>Phone number:</p>
            <p>Email:</p>
            <p>Password:</p>
            <p>ID card Image:</p>
            <p>Aadhar Image:</p>
            <p>Role:</p>
          </div>
          <form className="flex gap-3 flex-col text-lg" onSubmit={handlesubmit}>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e, "image")}
            />
            <input
              onChange={handleinterndetailschange}
              name="name"
              placeholder="Intern name"
              className="border-hovergray rounded-lg px-2 border-2"
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="college"
              placeholder="College"
              className="border-hovergray rounded-lg px-2 border-2"
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="dateofjoining"
              placeholder="date of joining"
              className="border-hovergray rounded-lg px-2 border-2"
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="dateofcompletion"
              placeholder="date of completion"
              className="border-hovergray rounded-lg px-2 border-2"
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="phonenumber"
              placeholder="phonenumber"
              className="border-hovergray rounded-lg px-2 border-2"
              type="number"
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="email"
              placeholder="email"
              className="border-hovergray rounded-lg px-2 border-2"
              type="email"
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="password"
              placeholder="password"
              className="border-hovergray rounded-lg px-2 border-2"
              type="password"
            ></input>
            <input
              type="file"
              name="idcardimage"
              onChange={(e) => handleImageChange(e, "idcardimage")}
            />
            <input
              type="file"
              name="aadharcardimage"
              onChange={(e) => handleImageChange(e, "aadharImage")}
            />
            <select name="role" onChange={handleinterndetailschange} id="">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex justify-center ml-[-10rem]">
              <button
                className="border-1 bg-buttonblue px-4 py-2 text-white rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-center gap-2">
            <p>Allready have a account?</p>
            <p
              className="underline text-buttonblue cursor-pointer"
              onClick={() => {
                nav("/login");
              }}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
