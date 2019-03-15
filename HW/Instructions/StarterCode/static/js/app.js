// YOUR CODE HERE!

function renderUFODATA (dateval,cityval,stateval,countryval,shapeval){
   
    var tableData = data;
    var dataFiltered = tableData.filter(function(x){
        return x.datetime == dateval | x.city == cityval | x.state == stateval|x.country == countryval|x.shape == shapeval
    })
    // .filter(function(x){
    //     return ;
    // }).filter(function(x){
    //     return x.state == stateval;
    // }).filter(function(x){
    //     return x.country == countryval;
    // }).filter(function(x){
    //     return x.shape == shapeval;
    // });
    console.log(dataFiltered)
// Two filter methods : "or" method or "and" method      
    let Tbody = d3.select("tbody");
    dataFiltered.map(ufo_sighting=>{
    let newTr = Tbody.append("tr");
    Object.values(ufo_sighting).forEach(x =>{
        newTr.append("td").text(x)
    })
})
}

d3.select('#filter-btn').on("click",function(e){
    d3.event.preventDefault();
    selectedDate = d3.select("#datetime").node().value;
    selectedcity = d3.select("#city").node().value;
    selectedstate = d3.select("#state").node().value;
    selectedcountry = d3.select("#country").node().value;
    selectedshape = d3.select("#shape").node().value;
    renderUFODATA(selectedDate,selectedcity,selectedstate,selectedcountry,selectedshape)
  })



