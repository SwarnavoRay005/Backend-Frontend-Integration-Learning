import axios from "axios";

const api = "http://localhost:2000/api/products";

export const getProduct = () => axios.get(api);

export const getSingleProduct = (id)=> axios.get(`${api}/${id}`);

export const createProduct = (data)=> axios.post(`${api}/create`,data)

export const updateProduct = (id,data)=> axios.patch(`${api}/update/${id}`,data)

export const deleteProduct = (id)=> axios.delete(`${api}/delete/${id}`)