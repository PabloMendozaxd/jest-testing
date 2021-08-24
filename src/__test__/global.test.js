const text ='Hola Mundo';
const fruits=['manzana','melon','banana'];

test('should contain a text', () => {
    expect(text).toMatch(/Mundo/);
});

test('Do we have a banana?', () => {
    expect(fruits).toContain('banana');
})

test('Is A greater than B', () => {
    expect(10).toBeGreaterThan(9);
})

test('Is the input true?', () => {
    expect(true).toBeTruthy();
})

const reverseString=(str,callback)=>{
    callback(str.split("").reverse().join(""))
};

test('Test a callback', () => {
    reverseString('Hola',(str)=>{
      expect(str).toBe('aloH');
    });
});

const makeUpperCase= str=>{
    return new Promise((resolve,reject)=>{
        if (!str) {
            reject(Error("There is no string :/ "));
        }
        resolve(str.toUpperCase());
    });
};

test('The promise should change a string to Uppercase', () => {
    return makeUpperCase("hello").then(str=>{
        expect(str).toBe("HELLO");
    });
});

test('Asynchronously the promise should change a string to uppercase', async() => {
    const upperString=await makeUpperCase("hello");
    expect(upperString).toBe("HELLO");
});
