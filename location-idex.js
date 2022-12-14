function addRemoteLocation(arr) {
    const newArray = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (!newArray[i].hasOwnProperty('location')) {
            newArray[i].location = 'remote';
        }
    }
    return newArray;
}

module.exports = addRemoteLocation;