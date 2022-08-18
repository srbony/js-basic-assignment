// 1.Convert radian to degree

function radianToDegree(radian) {


    const pi = 3.1416;
    const degree = radian * 180 / pi;
    const convert = parseFloat(degree.toFixed(2));
    // return degree.toFixed(2);
    if (typeof radian !== 'number') {
        return 'please enter a number'
    }
    return convert;

}
const degreeValue = radianToDegree(10);
console.log(degreeValue);

// Problem 2: check filename

function isJavaScriptFile(filename) {
    if (typeof filename !== 'string') {
        return 'please enter a valid input';
    }

    else if (filename.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}
const filenames = isJavaScriptFile('image.jpg.js');
console.log(filenames);

//Problem 3:oilPrice

function oilPrice(diseselQuantity, petrolQuantity, octaneQuantity) {




    const perDiselPrice = 114;
    const perPetrolPrice = 130;
    const perOctanePrice = 135;
    const diselPrice = diseselQuantity * perDiselPrice;
    const petrolPrice = petrolQuantity * perPetrolPrice;
    const octanePrice = octaneQuantity * perOctanePrice;
    const total = diselPrice + petrolPrice + octanePrice;
    if (typeof diseselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'please enter the number'
    }

    return total;


}
const price = oilPrice(10, 20, 30);
console.log(price);

// Problem 4

function publicBusFare(number) {

    const perBusSit = 50;
    const perMicroSit = 11;
    const publicBusTicketRate = 250;
    const busQuantity = number % perBusSit;
    const pessengerRemain = busQuantity;
    const microBusPessenger = pessengerRemain % perMicroSit;
    const total = microBusPessenger * publicBusTicketRate;
    if (typeof number !== 'number') {
        return ('please enter a number');
    }
    else {
        return total;
    }


}
const pessenger = 365;
const totalPrice = publicBusFare(pessenger);
console.log(totalPrice);


//  Problem 5:


function isBestFriend(parameter1, parameter2) {
    if (typeof parameter1 !== 'object' || typeof parameter2 !== 'object') {
        return 'please valid input'
    }


    if (parameter1.name == parameter2.friend && parameter1.friend == parameter2.name) {
        return true;
    }
    else {
        return false;
    }



}
const obj1 = { name: 'abul', friend: 'kabul' };
const obj2 = { name: 'kabul', friend: 'sabul' };
const bestFriend = isBestFriend(obj1, obj2)
console.log(bestFriend);