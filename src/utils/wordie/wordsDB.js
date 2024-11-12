import { ramdomNum } from '../randomNum'

const words = {
  1: 'house',
  2: 'bread',
  3: 'chair',
  4: 'dance',
  5: 'eagle',
  6: 'frame',
  7: 'ghost',
  8: 'peace',
  9: 'joker',
  10: 'knife',
  11: 'lemon',
  12: 'magic',
  13: 'night',
  14: 'ocean',
  15: 'piano',
  16: 'quick',
  17: 'radio',
  18: 'stone',
  19: 'tiger',
  20: 'uncle'
}

export const randomWord = () => {
  const test = words[ramdomNum(1, 20)]
  return test
}
