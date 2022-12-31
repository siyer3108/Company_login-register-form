import React, { useState } from "react";


export const Register = (props) => {
    const [password, setpassword] = useState('');
    const [Rname, setRName] = useState('');
    const [Bname, setBName] = useState('');
    const [Aline1, setAline1] = useState('');
    const [Aline2, setAline2] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [pincode, setpincode] = useState('');
    const [compemail, setcompemail] = useState('');
    const [companynum, setcompanynum] = useState('');
    const [KeyPerFirstName, setKeyPerFirstName] = useState('');
    const [KeyPerLastName, setKeyPerLastName] = useState('');
    const [KeyPerPhone, setKeyPerPhone] = useState('');
    const [Keyemail, setKeyemail] = useState('');
    const [UserName, setUserName] = useState('');

    
    function saveData()
{
  let data={Rname,Bname,Aline1,Aline2,City,State,pincode,compemail,companynum,KeyPerFirstName,KeyPerLastName,KeyPerPhone
            , Keyemail,UserName,password   }

  fetch("https://api.crm.autoneticsamples.7d5188c0fb88.autonetic.cloud/api/company/register", {
    method: "POST",
    headers: {
      'Access-Control-Allow-Origin': '*',
       'ApiKey': 'B5AD11A8-28D0-49D4-8A0F-3D8FDE5D0B02',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className="auth-form-container">
            <h2>Company Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="RegisterdName">Registerd Name</label>
            <input value={Rname} name="RName" onChange={(e) => setRName(e.target.value)} id="Rname" placeholder="Registerd Name" />

            <label htmlFor="BrandName">Brand Name</label>
            <input value={Bname} name="Bname" onChange={(e) => setBName(e.target.value)} id="Bname" placeholder="Brand Name" />

            <label htmlFor="AddressLine1">AddressLine1</label>
            <input value={Aline1} name="Aline1" onChange={(e) => setAline1(e.target.value)} id="Addrs1" placeholder="AddressLine1" />

            <label htmlFor="AddressLine2">AddressLine2</label>
            <input value={Aline2} name="Aline2" onChange={(e) => setAline2(e.target.value)} id="Addrs2" placeholder="AddressLine2" />

            <label htmlFor="City">City</label>
            <input value={City} name="City" onChange={(e) => setCity(e.target.value)} id="city" placeholder="city" />

            <label htmlFor="state">State</label>
            <input value={State} name="state" onChange={(e) => setState(e.target.value)} id="state" placeholder="state" />

            <label htmlFor="pincode">Pincode</label>
            <input value={pincode} name="pincode" onChange={(e) => setpincode(e.target.value)} id="pincode" placeholder="pincode" />

            <label htmlFor="email">Company email</label>
            <input value={compemail} name="compemail"onChange={(e) => setcompemail(e.target.value)}type="text" placeholder="email" id="compemail" />
            
            <label htmlFor="companynumber">Company Phone number</label>
            <input value={companynum} name="companynum" onChange={(e) => setcompanynum(e.target.value)} id="companynumber" placeholder="phone number" />

            <label htmlFor="KeyFirstName">Key Person First Name</label>
            <input value={KeyPerFirstName} name="KeyPerFirstName" onChange={(e) => setKeyPerFirstName(e.target.value)} id="KeyFirstName" placeholder="FirstName" />

            <label htmlFor="KeyLastName">Key Person Last Name</label>
            <input value={KeyPerLastName} name="KeyPerLastName" onChange={(e) => setKeyPerLastName(e.target.value)} id="KeyLastName" placeholder="LastName" />

            <label htmlFor="KeyPersonPhone">Key Person Phone Number</label>
            <input value={KeyPerPhone} name="KeyPerPhone" onChange={(e) => setKeyPerPhone(e.target.value)} id="KeyPersonPhone" placeholder="Phone NUmber" />

            <label htmlFor="email">Key Person email</label>
            <input value={Keyemail} onChange={(e) => setKeyemail(e.target.value)}type="text" placeholder="email" id="email" name="Keyemail" />

            <label htmlFor="UserName">UserName</label>
            <input value={UserName} name="UserName" onChange={(e) => setUserName(e.target.value)} id="UserName" placeholder="UserName" />

           

            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="********" id="password" name="pass" />
            
            <button type="Submit" onClick={saveData} >Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
