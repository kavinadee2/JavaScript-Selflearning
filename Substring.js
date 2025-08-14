//SubString = a portion of another string
//substring =string.slice(startindex,endindex);

let email = "kavinduwick02@gmail.com";

username = email.slice(0 , email.indexOf("@"));
console.log(username);
domain = email.slice(email.indexOf("@")+1);
console.log(domain);

