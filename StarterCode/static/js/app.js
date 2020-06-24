// from data.js
var inputElement_date = d3.select('#datetime');
var inputValue_date = inputElement_date.property("value");
//console.log(inputValue_date);

var inputElement_city = d3.select('#city');
var inputValue_city = inputElement_city.property("value");
//console.log(inputValue_city);
    
    


var tableData = data;

var button =d3.select("#filter-btn");
var form =d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);
function runEnter() {
    d3.event.preventDefault();
    var tbody=d3.select("tbody");
    tbody.html(" ");
    //console.log(tableData);

    // tableData.forEach((f)=>{
    //     console.log(f);
    //     var row=tbody.append("tr");
    //     Object.entries(f).forEach(([key, value])=>{
    //         var cell=row.append("td");
    //         cell.text(value);
    //     })
    // })
    var inputElement_date = d3.select('#datetime');
    var inputValue_date = inputElement_date.property("value");
    var inputElement_city = d3.select('#city');
    var inputValue_city = inputElement_city.property("value");
    console.log(inputValue_city);
    console.log(inputValue_date);

    
    if(inputValue_date !=" "){
        var filter_data= tableData.filter(tableData=> tableData.datetime==inputValue_date);
    };
    if(inputValue_city !=" ") {   
        var filter_data= filter_data.filter(filter_data=>{return filter_data.city==inputValue_city});
    }
    //console.log(filter_city);
    console.log(filter_data);

    filter_data.forEach((f)=>{
        console.log(f);
        var row=tbody.append("tr");
        Object.entries(f).forEach(([key, value])=>{
            var cell=row.append("td");
            cell.text(value);
        })
    });



};
    
