async function predictDisease(req, res) {


    /*
    
const tf = require('@tensorflow/tfjs-node');


let model;

async function loadModel() {
  model = await tf.loadLayersModel('file://liver_disease_model.h5');
  console.log('Model loaded successfully');
}

loadModel();

    const inputData = req.body; // Assuming input data is sent in the request body
    const inputTensor = tf.tensor2d([Object.values(inputData)]); // Convert input to a tensor
    //Preprocess your data here
    const prediction = model.predict(inputTensor);
    const result = prediction.dataSync()[0]; // Get the prediction result
    res.json({ prediction: result });
 


    */

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