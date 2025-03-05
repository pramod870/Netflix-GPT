export const checkValidateData = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{6,}$/; // Example: At least 6 characters

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password did not match"

    return {
        isEmailValid,
        isPasswordValid
    };
};

// Example usage
const result = checkValidateData("test@example.com", "1@password");
console.log(result); // { isEmailValid: true, isPasswordValid: true }
