let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

for (let props in myObject) {
    const value = myObject[props];
    const checkType = typeof value;
    console.log(`${props} : ${value} | type : ${checkType}`);
}
