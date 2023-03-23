var television = {
    size: "27-inch",
    brand: "LG",
    display: "HD",
    smartTV: false
}

var televisionJSON = '{"size":"27-inch","brand":"LG","display":"HD","smartTV":false}';

var televisionStringified = JSON.stringify(television);

var parsedData = JSON.parse(televisionJSON);