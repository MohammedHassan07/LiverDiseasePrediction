module.exports = function isEmpty(req, res, next) {

    const data = req.body
    for (let key in data) {

        if (data.hasOwnProperty(key)) {

            if (data[key] === null || data[key] === undefined || data[key] === '') return resizeBy.status(400).json({ message: 'All fields are manadatory' })
        }
    }
    next()
}