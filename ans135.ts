// Reusing the person object from Question 133
const personCall = {
    name: "Asadullah Shafique",
    age: 48,
    city: "Karachi",
  };
  
  // Converts the object into a JSON string with indentation
  const jsonString2 = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
  
  console.log(jsonString2);
  /* Outputs:
  {
    "name": "Asadullah Shafique",
    "age": 48,
    "city": "Karachi"
  }
  */
  // Shows how adding indentation to the JSON string makes it easier to read.