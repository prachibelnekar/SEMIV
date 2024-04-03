import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    full_name: "",
    mobile_no: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.full_name}, ${data.mobile_no} is my phone no. and my email id is ${data.email} and I want to say that ${data.message}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name: </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="full_name" defaultValue={data.full_name} placeholder="Enter your full name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone No: </label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="mobile_no" defaultValue={data.mobile_no} onChange={InputEvent} placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email: </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" defaultValue={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" defaultValue={data.message} onChange={InputEvent}></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
