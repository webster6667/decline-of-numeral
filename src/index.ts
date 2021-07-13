import {DeclineOfNumeral} from './types'

/**
 * @description
 * function decline numeral word
 *
 * @param {number | string} quantity - count of numeral
 * @param {string[]} arrayOfDeclinedWords - all variants of the declension of the word
 * @returns {string}
 *
 * @example
 *
 * //ru
 * declineOfNumeral(1, ['минута', 'минуты', 'минут']) // => 'минута'
 * declineOfNumeral(2, ['минута', 'минуты', 'минут']) // => 'минуты'
 * declineOfNumeral(5, ['минута', 'минуты', 'минут']) // => 'минут'
 *
 * //en
 * declineOfNumeral(1, ['cat', 'cats', 'cats']) // => 'cat'
 * declineOfNumeral(2, ['cat', 'cats', 'cats']) // => 'cats'
 * declineOfNumeral(5, ['cat', 'cats', 'cats']) // => 'cats'
 */
const declineOfNumeral:DeclineOfNumeral = (quantity, arrayOfDeclinedWords) => {
    quantity = +quantity


    
    if (isNaN(quantity)) throw new Error('type of quantity expect only number');

    return arrayOfDeclinedWords[(quantity % 100 > 4 && quantity % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(quantity % 10 < 5) ? quantity % 10 : 5]];
}

export default declineOfNumeral
