async function predictDisease(req, res) {

    try {

        // const {} = req.body
        res.send('predict')

        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

module.exports = {

    predictDisease
}