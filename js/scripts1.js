(function(){ 

       'use strict';
   


       let myArr = new Array (5);
       for (let i = 0, I = myArr.length; i < I; i++)
          myArr [i] = prompt ('введите значение ' + (i+1) + '-го элемента масива, из 5 оно будет возведено в степень', '');
          
         

          const newArray = myArr.map(i => i * i);



        document.write(` Вы ввели: ${myArr}.`) 
        
           
        document.write(` Значения в квадрате: ${newArray}`)



        
   })();



   