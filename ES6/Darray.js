let [firstname,middlename] =['himanshu','n','joshi'];

console.log(firstname  + middlename)

function addressMaker(city,state){
    const newAddress={newCity: city, newState:state};

    console.log(newAddress);
}

addressMaker('austin','texas');