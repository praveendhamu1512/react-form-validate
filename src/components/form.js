import React from "react";
import './form.css';
import { useState, useEffect } from "react";



const Forms=()=> {

    
    const [file, setFile] = useState( {img: ""});

    const[inputs,setInputs]=useState({
        
        card:"",
        title:"",
        fname:"",
        lname:"",
        mobile:"",
        date:null,
        email:"",
        gender:"",
        maritial:"",
        emergencyConpho:"",
        emergency_telpho:"",
        passport:"",
        issueDate:null,
        expiryDate:null,
        countryId:"",
        address:"",
        city:"",
        state:"",
        postal:"",
        country:"",
        nationality:""
    
    })

    const[validation,setValidation]=useState({

        card:"",
        title:"",
        fname:"",
        lname:"",
        mobile:"",
        date:null,
        email:"",
        gender:"",
        maritial:"",
        emergencyConpho:"",
        emergency_telpho:"",
        passport:"",
        issueDate:null,
        expiryDate:null,
        countryId:"",
        address:"",
        state:"",
        postal:"",
        country:"",
        nationality:""
    })

    const handleChange=(event)=> {

        const name=event.target.name;
        const value=event.target.value;
        
        
            setInputs(values => ({...values, [name]: value}))
            setInputs({ ...inputs, [name]: value });           
            setFile({[event.target.name]: URL.createObjectURL(event.target.files[0])});
         //setFile(URL.createObjectURL(event.target.files[0]));
        
    }

    const checkValidation=()=>{

        let errors = validation;

        if(!inputs.card.trim()) {

            errors.card="card name is requires"
        }

        else if (inputs.card.length<4){

            errors.card="card name must be 6 characters more"
        }


        else {

            errors.card="looks good"
        }

        if(!inputs.title.trim()) {

            errors.title="Title Name is requires"
        }

        else if (inputs.title.length<4){

            errors.title="Title name must be 4 characters more"
        }


        else {

            errors.title="looks good"
        }

        if(!inputs.fname.trim()) {

            errors.fname="First Name is requires"
        }

        else if (inputs.fname.length<3){

            errors.fname="First name must be 3 characters more"
        }


        else {

            errors.fname="looks good"
        }

        if(!inputs.lname.trim()) {

            errors.lname="Last Name is requires"
        }

        else if (inputs.lname.length<3){

            errors.lname="Last name must be 3 characters more"
        }


        else {

            errors.lname="looks good"
        }

        if(!inputs.mobile.trim()) {

            errors.mobile="Mobilre Number is requires"
        }

        else if (inputs.mobile.length<10){

            errors.mobile="Mobile Number 10 digits must"
        }


        else {

            errors.mobile="looks good"
        }

        if(!inputs.date) {

            errors.date="DOB - Date must Requires"
        }

        else {

            errors.date="looks good"
        }

        // const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";

        if (!inputs.email) {

            errors.email = "Email is required";
          } 
        //    if (!inputs.email.match(emailCond)) {
        //     errors.email = "Email is required";
        //   } 
          
          else {
            errors.email = "looks good";
          }


          if(!inputs.gender.trim()) {

            errors.gender="Gender is requires"
        }

        else {

            errors.gender="looks good"
        }

        if(!inputs.maritial.trim()) {

            errors.maritial="Maritial Status is requires"
        }

        else {

            errors.maritial="looks good"
        }

        if(!inputs.emergencyConpho.trim()) {

            errors.emergencyConpho="Emergency Contact Number is requires"
        }

        else if (inputs.emergencyConpho.length<10) {

            errors.emergencyConpho="Emergency Contact Number 10 digits must"
        }


        else {

            errors.emergencyConpho="looks good"
        }

        if(!inputs.emergency_telpho.trim()) {

            errors.emergency_telpho="Emergency Contact Number is requires"
        }

        else if (inputs.emergency_telpho.length<10){

            errors.emergency_telpho="Emergency Contact Number 10 digits must"
        }


        else {

            errors.emergency_telpho="looks good"
        }

        if(!inputs.passport.trim()) {

            errors.passport="Passport Number is requires"
        }

        else if (inputs.passport.length<10){

            errors.passport="Passport Number 8 digit or More than"
        }


        else {

            errors.passport="looks good"
        }

        if(!inputs.issueDate) {

            errors.issueDate="Passport Issued Date must Requires"
        }

        else {

            errors.issueDate="looks good"
        }

        if(!inputs.expiryDate) {

            errors.expiryDate="Passport Expiry Date must Requires"
        }

        else {

            errors.expiryDate="looks good"
        }

        if(!inputs.countryId.trim()) {

            errors.countryId="Country ID is requires"
        }

        else if (inputs.countryId.length<2){

            errors.countryId="Country ID 2 or  characters more"
        }


        else {

            errors.countryId="looks good"
        }


        if(!inputs.address.trim()) {

            errors.address="Address is requires"
        }

        else if (inputs.address.length<10){

            errors.address="Address 10 characters or more"
        }


        else {

            errors.address="looks good"
        }

        if(!inputs.city.trim()) {

            errors.city="city is requires"
        }

        else if (inputs.city.length<5){

            errors.city="city 5 characters or more"
        }


        else {

            errors.city="looks good"
        }

        if(!inputs.state.trim()) {

            errors.state="State is requires"
        }

        else if (inputs.state.length<5){

            errors.state="State 5 characters or more"
        }


        else {

            errors.state="looks good"
        }

        if(!inputs.postal.trim()) {

            errors.postal="Postal Code is requires"
        }

        else if (inputs.postal.length<6){

            errors.postal="Postal 6 digits or more"
        }


        else {

            errors.postal="looks good"
        }

        if(!inputs.country.trim()) {

            errors.country="Country Name is requires"
        }

        else if (inputs.country.length<4){

            errors.country="Country Name 4 Characters or more"
        }


        else {

            errors.country="looks good"
        }

        if(!inputs.nationality.trim()) {

            errors.nationality="Nationality is requires"
        }

        else if (inputs.nationality.length<4){

            errors.nationality="Nationality 4 Characters or more"
        }


        else {

            errors.nationality="looks good"
        }



        setValidation(errors);
    }

    useEffect(() => {

        checkValidation();
        
      },[inputs,validation,file]);
    
    //   console.log(checkValidation());
    

    const handleSubmit=(event) =>{

        event.preventDefault();
        
        alert("Register Sucessfully");
        
    }
    return(
        <div className="container  mt-2">
          <form onSubmit={handleSubmit}  action="/" method="POST">
            <div className="card">
              <div className="card-body row">
              <label className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 text-des">Card Applied</label>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 was-validated">
              <input type="text" className="form-control"
                name="card" 
                onChange={handleChange} 
                value={inputs.card || ""}
                required
                />
                 {validation.card && <p>{validation.card}</p>}                    
               <div className="invalid-feedback">Please enter  Card Type.</div>               
            </div>
            </div>
            </div>
            {/* 2nd card */}
            <div className="card mt-4">
              <div className="card-body">
              <div className="text-des d-flex justify-content-between">
                    <h4>Personal Deatails</h4>
                    <h4>Note:All fields Required</h4>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Title</label>
                        <input type="text"
                            
                            onChange={handleChange}
                            className="form-control " 
                            name="title" 
                            value={inputs.title || ""} 
                            required
                        />
                         {validation.title && <p>{validation.title}</p>}
                         <div className="invalid-feedback">Please Enter title</div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>First Name</label>
                        <input type="text" 
                            className="form-control" 
                            onChange={handleChange}
                            name="fname"
                            value={inputs.fname || ""}
                            required
                        />
                        
                            {validation.fname && <p>{validation.fname}</p>}
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Last Name</label>
                        <input type="text" 
                            className="form-control" 
                            onChange={handleChange}
                            name="lname"
                            value={inputs.lname || ""}
                            required
                        />
                        {validation.lname && <p>{validation.lname}</p>}
                         <div className="invalid-feedback"></div>
                    </div>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Mobile Number</label>

                          <input type="tel" 
                            
                            id="txtPhone"
                            className="form-control"
                            onChange={handleChange}
                            name="mobile"
                            value={inputs.mobile || ""}
                             required
                        />                          
                         {validation.mobile && <p>{validation.mobile}</p>}
                          <div className="invalid-feedback">Please enter mobile number</div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Date of birth</label>
                        <input type="date" 
                            className="form-control"
                            onChange={handleChange}
                            name="date"
                            value={inputs.date || ""}
                             required
                        />
                        {validation.date && <p>{validation.date}</p>}
                          <div className="invalid-feedback">Please select date of birth</div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Email</label>
                        <input type="email"
                            className="form-control" 
                            onChange={handleChange}
                            name="email"
                            value={inputs.email || ""}
                            required
                        />
                        {validation.email && <p>{validation.email}</p>}
                        <div className="invalid-feedback">
                        </div>
                    </div>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Gender</label>
                        <input type="text" className="form-control" 
                            name="gender"
                            value={inputs.gender || ""}   
                            onChange={handleChange} 
                            required
                        />
                        {validation.gender && <p>{validation.gender}</p>}
                        <div className="invalid-feedback">Please enter gender</div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                    <label>Maritial Status</label>
                    <input type="text" className="form-control" onChange={handleChange}

                            name="maritial"
                            value={inputs.maritial || ""}
                            required
                        />
                        {validation.maritial && <p>{validation.maritial}</p>}
                        <div className="invalid-feedback">Please enter maritial Status</div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Emergency Contact Person</label>
                        <input type="number" className="form-control"
                            onChange={handleChange}
                            name="emergencyConpho"
                            value={inputs.emergencyConpho || ""}
                             required
                        />
                        {validation.emergencyConpho && <p>{validation.emergencyConpho}</p>}
                        <div className="invalid-feedback"></div>
                    </div>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Emergency Telephone Number</label>
                        <input type="number" className="form-control" 
                            onChange={handleChange}
                            name="emergency_telpho"
                            value={inputs.emergency_telpho || ""}
                            required
                        />
                        {validation.emergency_telpho && <p>{validation.emergency_telpho}</p>}
                        <div className="invalid-feedback">Please enter emergency contact number.</div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Passport No</label>
                        <input type="text" className="form-control"

                        onChange={handleChange}
                        name="passport"
                        value={inputs.passport || ""}
                        required
                        />
                        
                      {validation.passport && <p>{validation.passport}</p>}
                      <div className="invalid-feedback"></div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Passport Issued Date</label>
                        <input type="date" className="form-control" 

                            onChange={handleChange}
                            name="issueDate"
                            value={inputs.issueDate || ""}
                            required/>
                         {validation.issueDate && <p>{validation.issueDate}</p>}
                    </div>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3">
                        <label>ID Type</label>
                        <input type="text" className="form-control passport"
                            
                            placeholder="Passport"
                            onChange={handleChange}
                            name="idtype"
                            value={inputs.idtype || ""}
                            disabled
                        />
            
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                    <label>Passport Expiry Date</label>
                        <input type="date" className="form-control" 

                            onChange={handleChange}
                            name="expiryDate"
                            value={inputs.expiryDate || ""}
                            required
                        />
                         {validation.expiryDate && <p>{validation.expiryDate}</p>}
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Country of ID Issued</label>
                        <input type="text" className="form-control"

                            onChange={handleChange}
                            name="countryId"
                            value={inputs.countryId || ""}
                            required
                        />
                         {validation.countryId && <p>{validation.countryId}</p>}
                        </div>
                </div>
                </div>
            </div> 
            {/* 3rd card */}
            <div className="card mt-4">
              <div className="card-body">
              <div className="text-des">
                    <h4>Residential Address</h4>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Address</label>
                        <input type="text" className="form-control" 
                        onChange={handleChange}
                        name="address"
                        value={inputs.address || ""}                        
                        required
                        />
                         {validation.address && <p>{validation.address}</p>}
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>City</label>
                        <input type="text" className="form-control" 

                            onChange={handleChange}
                            name="city"
                            value={inputs.city || ""}
                            required
                        />

                        {validation.city && <p>{validation.city}</p>}
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>State</label>
                        <input type="text" className="form-control"
                            onChange={handleChange}
                            name="state"
                            value={inputs.state || ""}
                            required
                        />
                         {validation.state && <p>{validation.state}</p>}
                    </div>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Postal Code</label>
                        <input type="number" className="form-control"
                            onChange={handleChange}
                            name="postal"
                            value={inputs.postal || ""}
                            required
                        />
                         {validation.postal && <p>{validation.postal}</p>}
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Country</label>
                        <input type="text" className="form-control"
                            onChange={handleChange}
                            name="country"
                            value={inputs.country ||""}
                            required
                        />
                           {validation.country && <p>{validation.country}</p>}
                        <div className="invalid-feedback">Please enter country </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      </div>
                </div>
                </div>
            </div>
             {/* 4th card  */}
            <div className="card mt-4">
              <div className="card-body">
              <div className="text-des d-flex justify-content-between">
                    <h4>Card Malling Address</h4>
                    <div>
                    <input type="checkbox"
                        style={{marginRight:"8px"}}
                        className="" 
                        id="validationCustom02"
                        />
                    <label>Tick the name as same</label>
                    </div>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Address</label>
                        <input type="text" className="form-control" id="validationCustom01" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>City</label>
                        <input type="text" className="form-control" id="validationCustom02" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>State</label>
                        <input type="text" className="form-control" id="validationCustom02" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Postal Code</label>
                        <input type="number" className="form-control" id="validationCustom01" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Country</label>
                        <input type="text" className="form-control" id="validationCustom02" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      </div>
                </div>
                </div>
            </div>
            {/* 5th card */}
            <div className="card mt-4">
              <div className="card-body">
                <div className="form-row mt-4">
                    <div className="col-md-4 mb-3 was-validated ">
                        <label>Nationality</label>
                        <input type="text" className="form-control" 
                            onChange={handleChange}
                            name="nationality"
                            value={inputs.nationality || ""}
                            required
                        />
                        {validation.nationality && <p>{validation.nationality}</p>}                    
                        <label className="mt-5">Passport Bio Page</label>
                        <div className="was-validated">
                        <input type="file" className="form-control-file "
                            // onChange={handleChange}
                            name="img2"
                            id="img2"
                            required
                        />
                        <div className="invalid-feedback">Please select Passport Bio page.</div>
                        </div>
                        <label className="mt-5">Selfie with Passport Bio Page(Ensure non-mirror image)</label>
                        <div className="was-validated">
                        <input type="file" className="form-control-file"
                            // onChange={handleChange}
                            name="img1"
                            id="img1"
                            required
                        />
                        <div className="invalid-feedback">Please selcet Selfie with Passport Bio Page.</div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">    
                    </div>
                    <div className="col-md-4 mb-3 was-validated">
                        <label>Digital Signature (Please sign or upload image)</label>

                        <img src={file.img} alt="" className="image-sign" />
                        <input type="file" className="form-control-file mt-5" 
                            id="img" name="img" accept="image/*"
                            onChange={handleChange}
                            required
                        />                             
                    </div>
                </div>
                </div>
            </div>
            <div className="text-center">
                <input type="submit" value="NEXT" className="btn btn-warning mt-3 mb-2"></input>
            </div>
          </form>
        </div>
    )

    
}

export default Forms;