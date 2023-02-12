//------------->> Bhoo-Whoo <<-------------//
function booWho(bool) {
    if (typeof bool === "boolean") {
        return true
    } else {
        return false
    }
}

let result = booWho(null);
console.log(result)