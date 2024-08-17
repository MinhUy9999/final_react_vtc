import axios from "axios"

export const getLocalStorage = (key) => {
  const localString = localStorage.getItem(key)
  return localString ? JSON.parse(localString) : null
}

export const saveLocalStorage = (key, value) => {
  var stringJson = JSON.stringify(value)
  localStorage.setItem(key, stringJson)
}

export const getArrSeat = async ()=>{
  try {
      const response = await axios.get('../common/data/danhSachGhe.json')
      return response.data
  } catch (error) {
      throw error
  }
  
}