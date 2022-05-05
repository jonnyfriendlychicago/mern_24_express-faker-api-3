const express = require('express'); 
// import { faker } from '@faker-js/faker'; // this is the old way of writing it?  new way?  so confused. 
const app = express(); 
const port = 8000;
const {faker} = require('@faker-js/faker'); 

app.use(express.json()); 
app.use(express.urlencoded( {extended: true } )); 

app.get('/', (request, response) => {
    response.send("JRF hello world!  Ya hearin me? Clips?")
}); 
//////////////////////////////////////////////////////

// below is what assignment instructions provided
// const createUser = () => {
//     const newFakeUser = {
//         password: faker.internet.password()
//         , email:  faker.internet.email() 
//         , phoneNumber: faker.phone.phoneNumber()
//         , lastName: faker.name.lastName()
//         , firstName: faker.name.firstName()
//         // , _id: ??????????
//     };
//     return newFakeUser;
// };

// below is hack of above, using assignment solution
const userObj = () => (
    {
    password: faker.internet.password()
    , email:  faker.internet.email() 
    , phoneNumber: faker.phone.phoneNumber()
    , lastName: faker.name.lastName()
    , firstName: faker.name.firstName()
    // , _id: ??????????
    }
);

// below is for testing purposes
const createUser = userObj(); 
console.log(createUser); 


// below seemed good to me, but it's not working
// app.get('/api/users/new', (request, response) => {
//     response.json(createUser); 
//   }); 

// below is hack on above
app.get('/api/users/new', (request, response) => {
    const createUser = userObj(); 
    response.json(createUser); 
  }); 


const companyObj = () => (
    {
        companyName: faker.company.companyName()
        , addyStreet:  faker.address.streetAddress() 
        , addyCity:  faker.address.city() 
        , addyState:  faker.address.state() 
        , addyZip:  faker.address.zipCode() 
        , addyCountry:  faker.address.country() 
    }
); 

// below for testing only
const createCompany = companyObj(); 
console.log(createCompany); 

app.get('/api/company/new', (request, response) => {
    const createCompany = companyObj(); 
    response.json(createCompany); 
  }); 

  app.get('/api/user-and-company/new', (request, response) => {
    const createUser = userObj(); 
    const createCompany = companyObj(); 
    const responseObj = {
        u: createUser, 
        c: createCompany
    };
    response.json(responseObj); 
  }); 

// console.log(responseObj); 


////////////////////////
app.listen(port, () => {
    console.log(`JRF Express Server is running on port ${port}`); 
}); 