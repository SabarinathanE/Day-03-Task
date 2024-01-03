// 2. All the countries (name, region, subregion, population) in the console?


var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function (){
    var result = JSON.parse(request.response);
    for (var countries in result){
        console.log(result[countries].name,',',result[countries].region,',',result[countries].subregion,',',result[countries].population)
      
    }
   
}