// Calculating a moving average on streaming values 

/*
console.log('simple mean = ' + simpleMean([1,2,3]))

const calc = new MovingAverageCalculator()
calc.update(1)
calc.update(2)
calc.update(3)
console.log('moving average mean = ' + calc.mean)

*/






// const simpleMean = values => {
//     validate(values)

//     const sum = values.reduce((a,b)=>a+b, 0)
//     const mean = sum/values.length
//     return mean
// }

// const validate = values =>  {
//     if (!values || values.length == 0) {
//         throw new Error('Mean is undefined')
//     }
// }


// class MovingAverageCalculator {
//     constructor() {
//         this.count = 0
//         this._mean = 0
//     }

//     update(newValue) {
//         this.count++

//         const differential = (newValue - this._mean) / this.count

//         const newMean = this._mean + differential

//         this._mean = newMean
//     }

//     get mean() {
//         this.validate()
//         return this._mean
//     }

//     validate() {
//         if (this.count == 0) {
//             throw new Error('Mean is undefined')
//         }
//     }
// }


// class ExponentialMovingAverage {
 
//     constructor(alpha, initialMean) {
//         this.alpha = alpha
//         this.mean = !initialMean ? 0 : initialMean
//     }

//     update(newValue) {
//         const meanIncrement = this.alpha * (newValue - this.mean)

//         const newMean = this.mean + meanIncrement

//         this.mean = newMean
//     }

// }


// class ExponentialMovingAverage {
//     constructor(alpha, mean) {
//         this.alpha = alpha
//         this.mean = !mean ? 0 : mean
//     }

//     get beta() {
//         return 1 - this.alpha
//     }

//     update(newValue) {
//         const redistributedMean = this.beta * this.mean

//         const meanIncrement = this.alpha * newValue

//         const newMean = redistributedMean + meanIncrement

//         this.mean = newMean
//     }
// }


// class ExponentialMovingAverageWithWeights
//     extends ExponentialMovingAverage{
//     constructor(alpha, mean) {
//         super(alpha, mean)

//         this.weights = [1]
//     }

//     update(newValue) {
//         super.update(newValue)

//         const updatedWeights = this.weights.map(w=>w * this.beta)

//         this.weights = updatedWeights

//         this.weights.push(this.alpha)
//     }
// }


// class ExponentialMovingStats {
//     constructor(alpha, mean) {
//         this.alpha = alpha
//         this.mean = !mean ? 0 : mean
//         this.variance = 0
//     }

//     get beta() {
//         return 1 - this.alpha
//     }

//     update(newValue) {
//         const redistributedMean = this.beta * this.mean

//         const meanIncrement = this.alpha * newValue

//         const newMean = redistributedMean + meanIncrement

//         const varianceIncrement = this.alpha * (newValue - this.mean)**2

//         const newVariance = this.beta * (this.variance + varianceIncrement)

//         this.mean = newMean

//         this.variance = newVariance
//     }

//     get stdev() {
//         return Math.sqrt(this.variance)
//     }
// }