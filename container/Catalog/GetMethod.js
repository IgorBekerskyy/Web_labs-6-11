import axios from "axios";
const baseURL = "http://localhost:8080/planes";

const getAllPlanes = async () => {
    let planesRes = await axios.get(baseURL)
        .then(res => {
            const planes = res.data;
            return planes;
        })
        return planesRes;
}

export const getPlanesById = async (id) => {
    let planesRes = await axios.get(baseURL + `/${id}`)
        .then(res => {
            const planes = res.data;
            return planes;
        })
        return planesRes;
}

export const getAllPlanesByPriceAndHight = async (priceBottom, priceTop, hightBottom, hightTop) => {
    let planesRes = await axios.get(baseURL + `/priceBottom=${priceBottom}/priceTop=${priceTop}/hightBottom=${hightBottom}/hightTop=${hightTop}`)
        .then(res => {
            const planes = res.data;
            return planes;
        })
        return planesRes;
}

export default getAllPlanes;