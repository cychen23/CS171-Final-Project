
// load data using promises
let promises = [

    d3.csv("data/oly-merged.csv")
];


Promise.all(promises)
    .then(function (data) {
        initMainPage(data)
    })
    .catch(function (err) {
        console.log(err)
    });

    // initMainPage
function initMainPage(dataArray) {

    // log data
    console.log('check out the data', dataArray);

}
