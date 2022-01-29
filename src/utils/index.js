export const authKey = (newKey, keyTable) => {
return keyTable.find(key => key.toLowerCase() === newKey.toLowerCase())
}