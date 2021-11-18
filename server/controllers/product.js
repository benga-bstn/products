const { default: axios } = require("axios");

// GET A PRODUCT

async function getProduct(req, res) {
    console.log('Running a single product')
    try {
        const {id} = req.params
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        if (!data) {
            throw new Error()
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.json(404).json({ message: 'Product not found' })
    }
}



module.exports = {
    getProduct
}