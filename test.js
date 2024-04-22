let inputJSON = {
  name: "John",
  children: [
    {
      name: "Alice",
    },
    {
      name: "Bob",
      children: [
        {
          name: "Charlie",
        },
      ],
    },
  ],
};



function fun(obj) {
    // declare variables
    let hasChildrenVar = false;
    let counter = 1;

    // check obj has an array
    function hasChildren(obj){
        for (const key in obj) {
            if(Array.isArray(obj[key])){
                counter++;
                //call function again
            }
        }
    }

    
    for (const key in obj) {
        if(typeof obj[key] == "object"){
            obj[key] = {...obj[key],id:4};
        }else if(Array.isArray(obj[key])){
            obj[key] = fun({...obj[key]});
        }
    }
}
