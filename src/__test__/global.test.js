const text ='Hola Mundo';

test('should contain a text', () => {
    expect(text).toMatch(/Mundo/);
});
