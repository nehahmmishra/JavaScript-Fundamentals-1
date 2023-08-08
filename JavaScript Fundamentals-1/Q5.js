let packageType = "express";

switch (packageType.toLowerCase()) {
    case "standard":
      estimatedTime = "3-5 days";
      break;
    case "express":
      estimatedTime = "1-2 days";
      break;
    case "overnight":
      estimatedTime = "next day";
      break;
    default:
      estimatedTime = "Wrong choice!!";
      
}

console.log(estimatedTime);