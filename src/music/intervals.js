// LIST OF INTERVALS
const root = 0
// const dim_second = 1
// const second = 2
// const aug_second = 3
const min_third = 3
const third = 4
const fourth = 5
// const aug_fourth = 6
const dim_fifth = 6
const fifth = 7
const aug_fifth = 8
// const dim_sixth = 8
const sixth = 9
const seventh = 10
const maj_seventh = 11
// const octave = 12
const dim_ninth = 13
const ninth = 14
const aug_ninth = 15
// const dim_eleventh = 16
const eleventh = 17
const aug_eleventh = 18
// const dim_thirteenth = 20
const thirteenth = 21

// LIST OF CHORDS
const maj = [root, third, fifth]
const min = [root, min_third, fifth]
const aug = [root, third, aug_fifth]
const dim = [root, min_third, dim_fifth]

const six = [...maj, sixth]
const min_six = [...min, sixth]
const seven = [...maj, seventh]
const min_seven = [...min, seventh]
const aug_seven = [...aug, seventh]
const dim_seven = [...dim, sixth]
const seven_f5 = [root, third, dim_fifth, seventh]
const min_seven_f5 = [...dim, seventh]
const seven_sus4 = [root, fourth, fifth, seventh]
const maj_seven = [...maj, maj_seventh]
const min_mag_seven = [...min, maj_seventh]

const nine = [...seven, ninth]
const min_nine = [...min_seven, ninth]
const maj_nine = [...maj_seven, ninth]
const nine_f5 = [...seven_f5, ninth]
const nine_s5 = [...aug_seven, ninth]
const seven_f9 = [...seven, dim_ninth]
const seven_s9 = [...seven, aug_ninth]

const eleven = [...nine, eleventh]
const min_eleven = [...min_nine, eleventh]
const aug_eleven = [...nine, aug_eleventh]

const thirteen = [...eleven, thirteenth]
const min_thirteen = [...min_eleven, thirteenth]
const thirteen_f9 = [...seven_f9, eleventh, thirteenth]
const thirteen_f9f5 = [...seven_f5, dim_ninth, eleventh, thirteenth]

export default {
  maj: maj,
  m: min,
  aug: aug,
  dim: dim,

  6: six,
  m6: min_six,
  7: seven,
  m7: min_seven,
  aug7: aug_seven,
  dim7: dim_seven,
  '7_b5': seven_f5,
  m7_b5: min_seven_f5,
  '7_sus4': seven_sus4,
  maj7: maj_seven,
  m_maj7: min_mag_seven,

  9: nine,
  m9: min_nine,
  maj9: maj_nine,
  '9_b5': nine_f5,
  '9_#5': nine_s5,
  '7_b9': seven_f9,
  '7_#9': seven_s9,

  11: eleven,
  m11: min_eleven,
  aug11: aug_eleven,

  13: thirteen,
  m13: min_thirteen,
  '13_b9': thirteen_f9,
  '13_b9b5': thirteen_f9f5
}
