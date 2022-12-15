import characters from "../characters.json" assert { type: "json" };

export function getAll() {
    return characters
}
export function getById(id) {
    return characters.find((c) => c.id === parseInt(id))
}
export function getByBirthMonth(month) {
    return characters.filter((c) => c.born.toLowerCase().includes(month.toLowerCase()))
}

export function getByBloodType(bloodType) {
    return characters.filter((c) => c.blood.toLowerCase().includes(bloodType.toLowerCase()))
}

export function getMatches() {
    const chunks = chunk(shuffle(characters), 6)
    console.log(chunks.length)
    return {
        match1: [[...chunks[0]], [...chunks[1]]],
        match2: [[...chunks[2]], [...chunks[3]]],
        referees:  [...chunks[4]]
    }
}

function chunk (items, size) {
    const chunks = []
    items = [].concat(...items)
    while (items.length) {
        chunks.push(
            items.splice(0, size)
        )
    }
    return chunks
}
function shuffle (array)
{
    let last = array.length
    let n
    while (last > 0)
    {
        n = rand(last)
        swap(array, n, --last)
    }
    return array
}

const rand = n =>
    Math.floor(Math.random() * n)

function swap (array, i, j)
{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array
}
