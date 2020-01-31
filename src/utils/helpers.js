export const range = size => [...Array(size).keys()]

export const unique = (array, predicate = v => v) =>
  array
    .map(predicate)
    .map((item, i, mapped) => mapped.lastIndexOf(item) === i)
    .map((item, i) => (item ? array[i] : null))
    .filter(Boolean)

export const sortAsc = (a, b) => a - b

export const permute = (list = [], size = list.length) => {
  if (size === 1) return list.map(i => [i])

  const permutations = []

  list.forEach(item => {
    const rest = list.filter(i => i !== item)
    const restPermutations = permute(rest, Math.min(list.length, size) - 1)

    restPermutations.forEach(combo => permutations.push([item, ...combo]))
  })

  return permutations
}
