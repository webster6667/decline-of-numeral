import { DeclineOfNumeral } from './types';
/**
 * @description
 * function incline numeral word
 *
 * @param {number | string} quantity - count of numeral
 * @param {string[]} arrayOfDeclinedWords - all variants of the declension of the word
 * @returns {}
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
export declare const declineOfNumeral: DeclineOfNumeral;
export default declineOfNumeral;
