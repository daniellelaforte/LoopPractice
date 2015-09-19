var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

for(var i=0; i<animals.length - 1; i++) {
 console.log(animals[i]);
}

for(var i=0; i<animals.length; i+=2) {
 console.log(animals[i]);
}

for(var i=animals.length - 1; i>=0; i--) {
 console.log(animals[i]);
}

var printSomeTwice= function (animals) {

for(var i=0; i<animals.length; i++) {
    console.log(animals[i]);
 if ((i != 0) && (i != animals.length - 1))
 	console.log(animals[i]);
}
}

var getName = function (obj) {

	return name[0];
}

var totalLetters = function (arr) {
var sum=0;
for (var i=0; i<arr.length; i++)
    sum += arr[i].length;
	return sum;
}

var keyValue(key, value) {
	var obj = {}
	return obj[key]=value;
}

var negativeIndex(arr, num) {
	return arr[arr.length - 2]
}

var removeM = function (str) {
	var arr;
	for (var i=0; i<str.length; i++){
		if (str[i]!=='m')
			arr.push(str[i])

	}
	return arr;
}


var printObject = function (obj) {
	return obj.key + " is " + obj.val;
}

var vowels=function (str) {
	var arr2=[];
	for (var i=0; i<str.length; i++) {
		if ((str[i]==='a' || str[i]==='e')||(str[i]==='i' || (str[i]==='o'|| str[i]==='u'))) {
			arr2.push(str[i]);}
	}
	return arr2;
}

var twins = function (arr) {
     for (var i=0; i<arr.length-1; i++) {
     	if (arr[i]!=arr[i+1])
     		return false;
     }
     return true;
}

var or = function (arr) {
	if (arr==[])
		return false;
	for (var i=0; i<arr.length; i++) {
		if (arr[i]==true)
			return true;}
	return false;
}

var unique = function (arr) {
	var obj={}
	var arr2 = []
	for (var i = 0; i< arr.length; i++){
		obj[arr[i]] = obj[arr[i]] || 0
			obj[arr[i]]+=1;
	}
	for (var key in obj)
	   arr2.push(key)
	   
	return arr2;
}

var fun1 = function (students) {
	for(var i=0; i<students.length; i++) {
 console.log(students[i].age);
}
}

var fun2 = function (students) {
	for(var i=0; i<students.length; i++) {
 console.log(students[i].name + ",", students[i].city);
}
}

var fun3 = function (students) {
	for(var i=0; i<students.length; i++) {
		if ((students[i].name !='Meghan') && (students[i].name !='Amir'))
 console.log(students[i].name + " is from", students[i].city);
}
}

var fun4 = function (students) {
	for(var i=0; i<students.length; i++) {
		if (students[i].age > 25)
 console.log(students[i].name + " is older than 25");
}
}



var firstReverse = function(str){
	var where = str.length - 1;
	var arr2=[];
     for (var i=0; i<str.length; i++){
        arr2.push(str[where]);
        where--;
    }
    return arr2
 }

var swapCase = function(str){
	var arr2=str.split("");
     for (var i=0; i<str.length; i++){
    return arr2;
 }


var swapCase = function(str){
	var arr = str.split("")
    var output = arr.map(function(element){
       if (element === element.toUpperCase())
       		return element.toLowerCase()
       else 
       		return element.toUpperCase() 
    })
     return output.join("");
 }


 

 var letterCount = function (str) {
     var arr = str.split(" ");
     var obj = {}
     var arr2 = []
     var arr3 = []
     var count = 0
     var temp = 0

     for (var i=0; i<arr.length; i++){
     	arr[i]=arr[i].split("");}
     	

     for (var j=0; j<arr.length; j++){
     	for (var k=0; k<arr[j].length; k++){
     		obj[arr[j][k]] = obj[arr[j][k]] || 0
     		obj[arr[j][k]]++
     	}
            
          for (var key in obj){
          	arr2.push(obj[key]);
          
          	
          }
          	
          arr2.sort();
          arr2.reverse();
     	  arr3.push(arr2[0])
     	  
     	  obj = {}
     	  arr2=[]
        }
        
     for (var m=0; m<arr3.length; m++){
     	 if (arr3[m] > temp){
     	 	count = m
     	 	temp = arr3[m]
     	 }
     }
     	 if (temp === 1){
     	    return -1;}

     return arr[count]
 }
 
 letterCount("This is neeeat realy cool")



     
