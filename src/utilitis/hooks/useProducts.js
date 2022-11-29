import axios from 'axios';
import { useEffect } from 'react';

const useProducts = (data, setData, type) => {
    useEffect(() => {
        axios.get(`http://localhost:8000/carhouse/products/categorizedproducts?type=${type}`)
            .then(res => {
                res.data.products && setData(res.data.products)
            })
    }, [type, setData])
    return {
        data
    }
};

export default useProducts;