const {
    standardDeviation,
    sanitizeAmounts,
    roundToTwoDp,
    analysePayments
} = require('./analyze.js')
const test = require('ava')


 test('check test with 0 sanitizeamounts of users data' ,t => {
//First Argument for t.is is actual, second is expected
  t.deepEqual(sanitizeAmounts([0, 0, 0, 0, 0]), 0)
})

test('check test with positive sanitize amounts of users data' ,t => {
//First Argument for t.is is actual, second is expected
  t.deepEqual(sanitizeAmounts([500, 1300, 123.34, 564.12, 150]), 2637.46)
})


test('check test with some minus sanitizeamounts of users data' ,t => {
//First Argument for t.is is actual, second is expected
  t.deepEqual(sanitizeAmounts([-900, 780, 450.56, 789.89, -870]), 250.45)}
  
  test('check test  with multiple minus sanitizeamounts of users data' ,t => {
//First Argument for t.is is actual, second is expected
  t.deepEqual(sanitizeAmounts([1500, -780, 700, -345.56, -560]), 514.44)}
  


test('Check Round of with positive sanitizeAmounts',t => {
//First Argument for t.is is actual, second is expected
t.deepEqual(roundToTwoDp([1022.12]), 1022)}

test('Check Round of with positive sanitizeAmounts',t => {
//First Argument for t.is is actual, second is expected
t.deepEqual(roundToTwoDp([1022.67]), 1023)}

test('Check Round of with 0 sanitizeAmounts',t => {
//First Argument for t.is is actual, second is expected
t.deepEqual(roundToTwoDp([00.00]), 0)}

test('Check Round of with negative sanitizeAmounts',t => {
//First Argument for t.is is actual, second is expected
t.deepEqual(roundToTwoDp([-234.87]), 0)}



test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([1250, 1345, 245.67, 342, 200]), 509.97087821169)
})

test('Standard Deviation is correct for with negative value Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([1200, 300, -200.56, 134.67, -200]), 514.53956584115)
})


 test('Standard Deviation for incorrect', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([1200, 300, -200.56, 134.67, -200]), 234.8507532)
})

 test('Standard Deviation for 0', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([0,0,0,0,0]), 0)
})


 test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([1, 2, 2, 2, 1, 1]), 0.5)
})

 test('Check mean are calculate correctly with positive TransactionInformation', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
            "Amount": 1
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 3,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 4,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: 2.5,
        median: 2.5,
        min: 1,
        standardDeviation: 1.12,
    })
})

test('Check mean are calculate correctly with negative TransactionInformation', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
            "Amount": -200,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 1000,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 300,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 200,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 1000,
        mean: 325,
        median: 220,
        min: -200,
        standardDeviation: 432.29041164476,
    })
})

 test('Check Median with No TransactionInformation', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
           
        
    ]), {
        max: 0,
        mean: 0,
        median: 0.5,
        min: 0,
        standardDeviation: 0,
    })
})

 test('Check Median with 1 TransactionInformation', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
           
        {
            "Amount": 400,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 400,
        mean: 400,
        median: 0,
        min: 400,
        standardDeviation: 0,
    })
})




