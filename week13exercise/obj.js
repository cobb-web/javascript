var Car = {
    brand: "Mazda",
    model: "CX",
    suspension: "good",
    smartCar: true,
    display: "4k"
}

var CarJSON = '{"brand":"Mazda","model":"CX","suspension":"good","smartCar":true, "display":"4k"}';

// var CarStringified = JSON.stringify(Car);

var parsedData = JSON.parse(CarJSON);