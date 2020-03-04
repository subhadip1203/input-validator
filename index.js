const validator = require('./validator/validator');


//----- this object can be "request" body of form or anything else ------//
obj ={
    email : "subhadip@gmail.com",
    name : "subhadip pahari",
    firstName : "subhadip",
    age : 28,
    DOB: '12 march 1993',
    mobile : 987654570    
}

//--------- our schema for validation ----------//
schema = {  
    email: { type: "email" },  
    name: { type: "alpha_Space", length_min: 5, length_max: 30 },
    firstName: { type: "alpha", length_min: 5, length_max: 15 },
    age: { type: "number", value_min: 18 ,value_max: 60 },
    DOB: { type: "date_time", },
    mobile : { type: "number", length_min: 10, length_max: 13 },
}


//--------- we will pass validation function 2 parameters: obj , schema -------//
validate_result = validator(obj , schema)

//console.log(validate_result)


if(validate_result.error) {
    console.log( " ----- validate_result.error is an Array --------");
    console.log(validate_result.error)
}



