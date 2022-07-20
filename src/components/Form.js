import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  //sets the state as an empty array
  //use this to store the data that the user submits
  const [submittedData, setSubmittedData] = useState([]);

  //state holds erros messages
  const [errors, setErrors] = useState([])

  //sets the data to what is typed
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  //sets the data to what is typed
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  //function that handles the form submission
  const handleSubmit = (e) => {
   //prevents the brower from refreshing
    e.preventDefault();
    if(firstName.length > 0) {
    //puts together the current form data into an object using the values that are stored in the state
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };

    //combines the data thats in the submitted data with the current form data
    const dataArray = [...submittedData, formData];
    //updates the submittedData to whats in the dataArray using the setter function
    setSubmittedData(dataArray);

    //resets the input values after the form has been submitted
    setFirstName("");
    setLastName("");

    //sets errors variable as a empty array
    setErrors([])

    } else {
      //adds the string to the errors variable
      setErrors(["First name is required"])
  }
};


  //submitted data is the entire array of data
  //we're mapping that data to listOfSubmission
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key ={index}>
        {data.firstName} {data.lastName}
      </div>
    )
    })


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* {conditionally render error messages} */}
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{color: "red"}}>
              {error}
            </p>
        )) :
        null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </>
  );
}


export default Form;
