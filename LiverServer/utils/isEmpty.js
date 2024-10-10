module.exports = function isEmpty(req, res, next) {

    try {

        const data = req.body
        for (let key in data) {

            if (data.hasOwnProperty(key)) {

                if (data[key] === null || data[key] === undefined || data[key] === '') return resizeBy.status(400).json({ message: 'All fields are manadatory' })
            }
        }
        next()
    } catch (error) {
console.log(error)
res.status(500).json({message: error})
    }
}