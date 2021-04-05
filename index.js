// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
    drivers.push(name);
}
function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}
function destructivelyRemoveLastDriver(name) {
    drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name);
}
function appendDriver(name) {
    let newDrivers = drivers.slice(0)
    newDrivers.push(name)
    return newDrivers
}

function prependDriver(name) {
    let newDrivers = drivers.slice(0)
    newDrivers.unshift(name)
    return newDrivers
}

function removeLastDriver() {
    let newDrivers = drivers.slice(0)
    newDrivers.pop(name)
    return newDrivers
}

function removeFirstDriver() {
    let newDrivers = drivers.slice(0)
    newDrivers.shift(name)
    return newDrivers
}