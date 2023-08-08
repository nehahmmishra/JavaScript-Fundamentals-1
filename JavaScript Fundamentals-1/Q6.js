function validateUserInformation(name, email, age) {
    // Validate name
    if (typeof name !== "string") {
      console.log("Name should be a string.");
      return false;
    }
  
    // Validate email
    if (typeof email !== "string") {
      console.log("Email should be a string.");
      return false;
    }
  
    // Validate age
    if (typeof age !== "number") {
      console.log("Age should be a number.");
      return false;
    }
  
    // All fields are valid
    return true;
  }
  
  // Example usage:
  let name = "Mithun"; 
  let email = "Mithun.s@pw.live"; 
  let age = "21"; 
  
  if (validateUserInformation(name, email, age)) {
    console.log("User information is valid.");
  } 
  