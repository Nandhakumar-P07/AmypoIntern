import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { close } from "../../redux/popupSlice";
import axios from "axios";

const Internedit = ({index,setViewinterndetails}) => {
  const dispatch = new useDispatch();
  const [currentviewintern,setCurrentviewintern] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        const propertyName = e.target.name;
        setCurrentviewintern({ ...currentviewintern, [propertyName]: imageData });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleinterndetailschange = (event) => {
    const propertyName = event.target.name;

    const propertyValue = event.target.value;

    setCurrentviewintern({ ...currentviewintern, [propertyName]: propertyValue });
  };

  const handlesubmit = async(e) =>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/updatedata/${index}`,currentviewintern).then((res)=>{
    axios.get("http://localhost:8080/getinterndetails").then((response) => {
        setViewinterndetails(response.data);
    })
  });
      dispatch(close({ popupaddintern: "false" }));

  }

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
      <div className="fixed h-[70%] top-[10%]  flex flex-col gap-4 w-[40%] bg-white rounded-lg p-8 text-justify">
        <div className="w-full flex fixed left-[66%]">
          <i
            class="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={() => dispatch(close({ popupeditintern: "false" }))}
          ></i>
        </div>

        <div className="flex justify-center w-full text-xl font-semibold">
          Edit details for {currentviewintern?.name}
        </div>
        <div>
          <p></p>
        </div>
        <div className="flex justify-center gap-5 py-1">
          <div className="flex gap-4 flex-col text-lg">
            <p>Image</p>
            <p>Intern Name:</p>
            <p>College:</p>
            <p>Date of Joining:</p>
            <p>Date of Completion:</p>
            <p>Phone number:</p>
            <p>Email:</p>
            <p>ID card Image:</p>
            <p>Aadhar Image:</p>
          </div>
          <form className="flex gap-3 flex-col text-lg" onSubmit={handlesubmit}>
            <input type="file" name="image" onChange={handleImageChange} />
            <input
              onChange={handleinterndetailschange}
              name="name"
              placeholder="Intern name"
              className="border-hovergray rounded-lg px-2 border-2"
              value={currentviewintern?.name}
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="college"
              placeholder="College"
              className="border-hovergray rounded-lg px-2 border-2"
              value={currentviewintern?.college}
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="dateofjoining"
              value={currentviewintern?.dateofjoining}
              placeholder="date of joining"
              className="border-hovergray rounded-lg px-2 border-2"
            ></input>
            <input
              onChange={handleinterndetailschange}
              name="dateofcompletion"
              value={currentviewintern?.dateofcompletion}
              placeholder="date of completion"
              className="border-hovergray rounded-lg px-2 border-2"
            ></input>
            <input
              onChange={handleinterndetailschange}
              value={currentviewintern?.phonenumber}
              name="phonenumber"
              placeholder="phonenumber"
              className="border-hovergray rounded-lg px-2 border-2"
              type="number"
            ></input>
            <input
              onChange={handleinterndetailschange}
              value={currentviewintern?.email}
              name="email"
              placeholder="email"
              className="border-hovergray rounded-lg px-2 border-2"
              type="email"
            ></input>
            <input
              type="file"
              name="idcardimage"
              onChange={handleImageChange}
            />
            <input
              type="file"
              name="aadharcardimage"
              onChange={handleImageChange}
            />
            <button
              type="submit"
              className="rounded-lg border-1 bg-buttonblue max-w-[100px] py-1 ml-[-3rem]"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Internedit;
