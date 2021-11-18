const { default: axios } = require("axios");

// GET ALL PRODUCTS

async function getProducts(_req, res) {
    console.log('All products function is running!')
    try {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        if (!data || data.length === 0) {
            throw new Error()
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.json(404).json({ message: 'Products not found' })
    }
}



module.exports = {
    getProducts
}