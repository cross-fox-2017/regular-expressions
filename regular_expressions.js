"use strict"
// Determine whether a string contains a nomor KTP
function has_ktp(string) {
  return /\d{3}-\d{2}-\d{4}/.test(string);
}

console.log("has_ktp returns true if it has what looks like a nomor KTP")
console.log(has_ktp("please don't share this: 234-60-1422") == true)

console.log("has_ktp returns false if it doesn't have a nomor KTP")
console.log(has_ktp("please confirm your identity: XXX-XX-1422") == false)

// Return the Social Security number from a string.
function grab_ktp(string) {
  var num_ktp = string.match(/\d{3}-\d{2}-\d{4}/)
  return num_ktp;
}

console.log("grab_ktp returns an nomor KTP if the string has an nomor KTP")
console.log(grab_ktp("please don't share this: 234-60-1422") == "234-60-1422")

console.log("grab_ssn returns nil if it doesn't have a nomor KTP")
console.log(grab_ktp("please confirm your identity: XXX-XX-1422") == null)

// Return all of the Social Security numbers from a string.
function grab_all_nomor_ktp(string) {
  var num_ktp = string.match(/\d{3}-\d{2}-\d{4}/g)

  if(num_ktp !== null){
    return num_ktp;
  }
  else return [];
}

console.log("grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP")
console.log(grab_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp("please confirm your identity: XXX-XX-1422"))
  // return []


// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
function hide_all_nomor_ktp(string) {
  if(/\d+(?=\-)/g.test(string) === true){
    //string = string.replace(/\d+(?=\-)/gi,"XXX-XX");
    string = string.replace(/(\d{3})-(\d{2})/g,"XXX-XX");
    return string;
  }
  else{
    return string;
  }
}

console.log("hide_all_nomor_ktp obfuscates any nomor KTP in the string")
console.log(hide_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log("hide_all_nomor_ktp does not alter a string without nomor KTP in it")
var string = "please confirm your identity: XXX-XX-1422"
console.log(hide_all_nomor_ktp(string) == string)


// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
function format_nomor(string) {
  if(/\d{3}\S\d{2}\S\d{4}|\d{9}/g.test(string) === true){
    var arrString = string.match(/\d{3}\S\d{2}\S\d{4}|\d{9}/g)
    var newArrString = []
    var temp
    for(var i=0; i<arrString.length; i++){
      if(/[^\d]/g.test(arrString[i]) === true){
        newArrString.push(arrString[i].replace(/[^\d]/g,"-"))
      }
      else{
        temp = arrString[i]
        newArrString.push(`${temp.substring(0,3)}-${temp.substring(3,5)}-${temp.substring(5,temp.length)}`)
      }
    }
    return newArrString.join(", ")
  }
  else{
    return string
  }
}

console.log("format_nomor finds and reformat any nomor KTP in the string")
console.log(format_nomor("234601422, 350.80.0744, 013-60-8762") == "234-60-1422, 350-80-0744, 013-60-8762")

console.log("format_nomor does not alter a string without nomor KTP in it")
string = "please confirm your identity: 44211422"
console.log(format_nomor(string) == string)
