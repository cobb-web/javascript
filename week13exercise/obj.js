var Car = {
    brand: "Mazda",
    model: "CX",
    suspension: "good",
    smartCar: true
}

var CarJSON = '{"brand":"Mazda","model":"CX","suspension":"good","smartCar":true}';

// var CarStringified = JSON.stringify(Car);

var parsedData = JSON.parse(CarJSON);