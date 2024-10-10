async function predictDisease(req, res) {

    try {

        const { 
            Total_Bilirubin,
            Direct_Bilirubin,
            Alkaline_Phosphotase,
            Alamine_Aminotransferase,
            Aspartate_Aminotransferase,
            Total_Protiens,
            Albumin,
            Albumin_and_Globulin_Rati, } = req.body

        res.send('predict')


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

module.exports = {

    predictDisease
}