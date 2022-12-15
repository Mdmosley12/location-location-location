function addRemoteLocation(arr) {
    const newArray = [...arr];

    newArray.forEach((obj) => {
        if (!obj.hasOwnProperty('location')) obj.location = 'remote';
    });
    return newArray;
}

module.exports = addRemoteLocation;