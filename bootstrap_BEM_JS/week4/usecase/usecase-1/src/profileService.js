
class ProfileComponent {
    constructor(id, name ,city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}

const APIURL = 'http://localhost:3000/profile/';

// Todo Service
class ProfileService {
    constructor() {
        
  
    }

    async  getProfile(id){

    try{

        const getUsers = uid =>{
            if(uid){
                return  fetch (APIURL+uid);
            }else{
                return  fetch (APIURL);
            }
        
    }

       getUsers(id).then( res => res.json())
        .then(body => { console.log(JSON.stringify(body)); })
    
    }
    catch(err){
        console.log(err)
    }

    }




    // add new todo with given title
    async  addProfile(id,name,city) {
        const newEntry = new ProfileComponent(id,name,city); 
        let data = JSON.stringify(newEntry);
        console.log(APIURL);
        fetch(APIURL, {
         method: 'POST',
         body: data, 
            headers:{
          'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error(error));

    }

    
}

module.exports = ProfileService;


