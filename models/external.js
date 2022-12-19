const api = 'https://harry-potter-api-en.onrender.com/characters'

export async function getAll() {
    try {
        const response = await fetch(api);
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getById(id) {
    try {
        const response = await fetch(`${api}/${id}`)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getByNickname(nickName) {
    nickName = capitalizeFirstLetter(nickName)
    try {
        const response = await fetch(`${api}?nickname=${nickName}`)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getByHouse(house) {
    house = capitalizeFirstLetter(house)
    try {
        const response = await fetch(`${api}?hogwartsHouse=${house}`)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}