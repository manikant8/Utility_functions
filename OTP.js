// Numeric OTP generator
let otp1 = ''
let length = 4
for(let i = 0; i < length; i++){
    let otp = (Math.random() *10)+1
    otp = Math.floor(otp)
    otp = otp.toString()
    otp1 += otp;
}
console.log(otp1);

//using toFixed()
let length = 6
let otp = Math.random()
console.log(otp);
let x = Math.pow(10, length)
console.log(otp.toFixed(length) * x);
