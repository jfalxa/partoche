export const range = size => [...Array(size).keys()]

export const unique = (array, predicate = v => v) =>
  array
    .map(predicate)
    .map((item, i, mapped) => mapped.lastIndexOf(item) === i)
    .map((item, i) => (item ? array[i] : null))
    .filter(Boolean)

export const sortAsc = (a, b) => a - b

export const permute = (list = []) => {
  if (list.length === 1) return [list]

  const permutations = []

  list.forEach(item => {
    const rest = list.filter(i => i !== item)
    const restPermutations = permute(rest)

    restPermutations.forEach(combo => permutations.push([item, ...combo]))
  })

  return permutations
}
