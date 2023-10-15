// importar la función sum del archivo app.js
//const { sum } = require('./app.js');

// comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    //let result = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    //expect(result).toBe(23);
//});
//  if     valor   === valor

const { fromEuroToDollar } = require('./app.js')

test("One euro should be 1.206 dollars",()=>{
let result = fromEuroToDollar(1) 
expect(result).toBe(1.2);
})

const { fromDollarToYen } = require('./app.js')

test("One dollar should be 106.5833 yens",()=>{
let result = fromDollarToYen(1) 
expect(result).toBe(106.58333333333334);
})


const { fromYenToPound } = require('./app.js')

test("One yen should be 0.0062548866 pounds",()=>{
let result = fromYenToPound(1) 
expect(result).toBe(0.006254886630179828);
})






