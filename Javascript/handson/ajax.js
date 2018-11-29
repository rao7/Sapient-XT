function reqListner(){
    //console.log(this.response);
}

const oReq = new XMLHttpRequest();
oReq.addEventListener("load",reqListner);
oReq.open("GET","https://jsonplaceholder.typicode.com/users");
oReq.send();


/// fetch way

const getUsers = _ =>{
    return fetch("https://jsonplaceholder.typicode.com/users")
}

getUsers().then( res => res.json())
.then(body => console.log(body))
.catch(err => console.log(err));

// usecase 
// you have list of urls(github), i want to make http call for all urls and you need collect user informations in one call.
// list all XT core members

const getGitUrls = _=>{

const gitUrls = [
    {url:"https://github.com/rajeevjain1983/XT-Core"},

    {url:"https://github.com/akanksha-211/XTCore"},

    {url:"https://github.com/CodeWithAnkitSinghal/XT-Core"},

    {url:"https://github.com/adishmodi/XTCore"},

    {url:"https://github.com/goldy28/XT-Core"},

    {url:"https://github.com/vinamrasingh/XT-Core"},

    {url:"https://github.com/rohit-khanna/XT-Core"},

    {url:"https://github.com/sanjaybhatt0621/XT-Core"},

    {url:"HTTPS://github.com/JugalJoshi8/XT-Core"},

    {url:"https://github.com/rohngonnarock/XT-CORE"},

    {url:"https://github.com/vivek-khokhar/XT-CORE"},

    {url:"https://github.com/SidVedi/XT-Core"},

    {url:"https://github.com/ajayp944/XT-Core"},

    {url:"https://github.com/rao7/Sapient-XT"}
];

return 

}

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
  });