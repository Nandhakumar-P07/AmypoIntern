import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../../redux/popupSlice'
import axios from 'axios'

const Internadd = ({setViewinterndetails}) => {
    const dispatch = new useDispatch();

    const [interndetails, setInterndetails] = useState({
      name: "",
      college: "",
      dateofjoining: "",
      dateofcompletion: "",
      image:null,
      phonenumber:0,
      email:"",
      idcardimage:null,
      aadharImage:null
    });

    // const handleImageChange = (e) => {
    //   const file = e.target.files[0];
  
    //   if (file) {
    //     // Convert the image file to base64 or any other representation you prefer
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       const imageData = reader.result;
    //       const propertyName = e.target.name;
    //       setInterndetials({ ...interndetails, [propertyName]: imageData });
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };

    const handleImageChange = (event,imagetype) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
    
        reader.onloadend = () => {
          // Convert the image file to a Base64 string
          const base64String = btoa(new Uint8Array(reader.result).reduce((data, byte) => data + String.fromCharCode(byte), ''));
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

    const handlesubmit = async (e) =>{
        e.preventDefault();
        

  await axios.post("http://localhost:8080/saveinterndata",interndetails).then((res)=>{
    axios.get("http://localhost:8080/getinterndetails").then((response) => {
        setViewinterndetails(response.data);
    })
  });
        dispatch(close({ popupaddintern: "false" }))

    }

  return (
    <div className="fixed left-0 top-0 z-50 bg-opacity-60 bg-black w-screen h-screen flex justify-center">
      <div className="fixed h-[70%] top-[10%]  flex flex-col gap-4 w-[40%] bg-white rounded-lg p-8 text-justify">
      <div className="w-full flex fixed left-[66%]">
          <i
            class="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={() => dispatch(close({ popupaddintern: "false" }))}
          ></i>
        </div>
          <div className='flex justify-center w-full text-xl font-semibold'>
            ADD A NEW INTERN
          </div>
          <div>
            <p></p>
          </div>
          <div className='flex justify-center gap-5 py-1'>
                <div className='flex gap-4 flex-col text-lg'>
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
                <form className='flex gap-3 flex-col text-lg' onSubmit={handlesubmit}>
                <input type="file" name='image' onChange={(e)=> handleImageChange(e,'image')} />
                    <input onChange={handleinterndetailschange} name='name' placeholder='Intern name' className='border-hovergray rounded-lg px-2 border-2'></input>
                    <input onChange={handleinterndetailschange} name="college" placeholder='College' className='border-hovergray rounded-lg px-2 border-2'></input>
                    <input onChange={handleinterndetailschange} name='dateofjoining' placeholder='date of joining' className='border-hovergray rounded-lg px-2 border-2'></input>
                    <input onChange={handleinterndetailschange} name='dateofcompletion' placeholder='date of completion' className='border-hovergray rounded-lg px-2 border-2'></input>
                    <input onChange={handleinterndetailschange} name='phonenumber' placeholder='phonenumber' className='border-hovergray rounded-lg px-2 border-2' type='number'></input>
                    <input onChange={handleinterndetailschange} name='email' placeholder='email' className='border-hovergray rounded-lg px-2 border-2' type='email'></input>
                    <input type="file" name='idcardimage' onChange={(e)=> handleImageChange(e,'idcardimage')} />
                    <input type="file" name='aadharcardimage' onChange={(e)=> handleImageChange(e,'aadharImage')} />
                    <button type="submit" className='rounded-lg border-1 bg-buttonblue max-w-[100px] py-1 ml-[-3rem]'>Add</button>
                </form>
          </div>
    </div>
    </div>
  )
}

export default Internadd