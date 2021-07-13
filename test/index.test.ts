import declineOfNumeral from '../src'

describe('function return inclined word, if input right type of quantity', () => {

    test('function return inclined word, if quantity is number, but typeof === "string" ', () => {

        const arrayOfInclinedWords = ['минута', 'минуты', 'минут'],
            quantity = '1'

        expect(declineOfNumeral(quantity, arrayOfInclinedWords)).toEqual(arrayOfInclinedWords[0])
    });

    test('function throw error, if quantity is NaN', () => {

        const arrayOfInclinedWords = ['минута', 'минуты', 'минут'],
              quantity = 'abcd'

        expect(() => declineOfNumeral(quantity, arrayOfInclinedWords)).toThrowError('type of quantity expect only number')
    });

})

describe('function return inclined word', () => {

    test('function return inclined first incline ru word ', () => {

        const arrayOfInclinedWords = ['минута', 'минуты', 'минут'],
              quantity = 1

        expect(declineOfNumeral(quantity, arrayOfInclinedWords)).toEqual(arrayOfInclinedWords[0])
    });

    test('function return inclined second incline ru word ', () => {

        const arrayOfInclinedWords = ['минута', 'минуты', 'минут'],
              quantity = 2

        expect(declineOfNumeral(quantity, arrayOfInclinedWords)).toEqual(arrayOfInclinedWords[1])
    });

    test('function return inclined third incline ru word ', () => {

        const arrayOfInclinedWords = ['минута', 'минуты', 'минут'],
              quantity = 5

        expect(declineOfNumeral(quantity, arrayOfInclinedWords)).toEqual(arrayOfInclinedWords[2])
    });

    test('function return inclined first incline en word ', () => {

        const arrayOfInclinedWords = ['cat', 'cats'],
              quantity = 1

        expect(declineOfNumeral(quantity, arrayOfInclinedWords)).toEqual(arrayOfInclinedWords[0])
    });

    test('function return inclined second incline en word ', () => {

        const arrayOfInclinedWords = ['cat', 'cats'],
              quantity = 2

        expect(declineOfNumeral(quantity, arrayOfInclinedWords)).toEqual(arrayOfInclinedWords[1])
    });

    test('function return inclined third incline ru word ', () => {

        const arrayOfInclinedWords = ['cat', 'cats'],
              quantity = 5

        expect(declineOfNumeral(quantity, arrayOfInclinedWords)).toEqual(arrayOfInclinedWords[1])
    });



})

