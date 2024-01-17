// Numeric password generator
let otp1 = ''
let length = 4
for(let i = 0; i < length; i++){
    let otp = Math.random()
    otp *= 10;
    otp = Math.floor(otp)
    otp = otp.toString()
    otp1 += otp;
}
console.log(otp1);