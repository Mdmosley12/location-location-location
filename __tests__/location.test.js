const addRemoteLocation = require('../location-idex');

describe('addRemoteLocation', () => {
    test('Return an empty array when passed an empty array', () => {
        const studentsArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        expect(addRemoteLocation([])).toEqual([]);
    })
    test('Returns a brand new array', () => {
        const studentsArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        expect(addRemoteLocation(studentsArray)).not.toBe(studentsArray);
    })
    test('Increments through the array', () => {
        const studentsArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
    })
    test('Adds a location property if one is not present', () => {
        const studentsArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        const updatedStudentsArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        expect(addRemoteLocation(studentsArray)).toEqual(updatedStudentsArray);
    })
})