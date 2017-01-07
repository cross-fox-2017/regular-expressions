function hide_all_nomor_ktp(string) {

	if(string.match(/\d{3}(-)\d{2}(-)\d{4}/gi)){
		return string.replace(/\d{3}(-)\d{2}/g,'XXX-XX')
	}
	return string;
}

console.log("hide_all_nomor_ktp obfuscates any nomor KTP in the string")
console.log(hide_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log("hide_all_nomor_ktp does not alter a string without nomor KTP in it")
var string = "please confirm your identity: XXX-XX-1422"
console.log(hide_all_nomor_ktp(string) == string)
