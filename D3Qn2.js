// 2. All the country Flags in the console?


var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function (){
    var result = JSON.parse(request.response);
    for (var countries in result){
        console.log(result[countries].flags)
      
    }
   
}