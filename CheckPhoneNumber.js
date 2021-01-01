const isValidPhoneNumber = (phoneNumber) => {
  phoneNumber = phoneNumber.split("-").join("")
  
  const checkNumber = Number.isInteger(Number(phoneNumber))
  const checkFirstNumber = phoneNumber.slice(0, 3) === "010" ? true : false
  const checkPhoneNumber = phoneNumber.slice(3).length === 8 ? true : false 
  
  return checkNumber && checkFirstNumber && checkPhoneNumber 
}

isValidPhoneNumber("010-6577-7237")