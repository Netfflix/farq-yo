// let Krasovka = $('.krasovka')


// function krasovkaFunc(){
//     shop.map((arr, index)=>{
//         let col2 = `
//         <div class="col-2">
//         <div class="card">
//             <img class='jmm' src=${arr.img_src} alt="">
//             <h3>${arr.narxi}</h3>
//             <h5>${arr.name_two}</h5>
//             <button class="ad "> ${'Добавить'}</button>
            
//         </div>
//     </div>
//         `
//         Krasovka.append(col2)
//     })
    
// }

// krasovkaFunc()



// let qator = $('.row')
// let span = $('.spn')
// let row = $('.row')
// let badged = $('.bad')
// let savatcha = []

// function likeFunc(){
//     let likeCount = 0
//     data.map((arr) => {
//         if(arr.like == true){
//             likeCount = likeCount + 1
//         }
//         span.text(likeCount)
//     })
//     qator.html('')
//     data.map((arr , index) => {
//         if(arr.like == true){
//             let card = 
//             `
//             <div class=" col-4">
//             <div class="card">
//                 <i class="ikns fa-solid fa-heart text-danger" onclick='likeStatus(${index})'></i><img src='${arr.img}' alt="" width='100%' height='450px'>
//                 <h1>${arr.name}</h1>
//                 <h4>${arr.cost}</h4>
//                 <button onclick='buying(${index})' class="btn btn-primary">Karzina</button>
//             </div>
//         </div>
//             `
//         qator.append(card)
//         }
//         else{
//             let card = 
//             `
//             <div class="col-4">
//             <div class="card">
//                 <i class="ikns fa-solid fa-heart " onclick='likeStatus(${index})'></i><img src='${arr.img}' alt="" width='100%' height='450px'>
//                 <h1>${arr.name}</h1>
//                 <h4>${arr.cost}</h4>
//                 <button onclick='buying(${index})' class="btn btn-primary">Karzina</button>
//             </div>
//         </div>
//             `
//         qator.append(card)
//         }

        

//     })
// }

// likeFunc()


// function buying(val) {
//     if(savatcha.length == 0){
//         savatcha.push({...data[val] , count: 1})
//     }
//     else{
//         let result = savatcha.filter(arr=>{
//             return arr.name === data[val].name 
//         })
//         if(result.length == 0){
//             savatcha.push({...data[val] , count: 1})
//         }
//         console.log("savatcha result" , result);
//     }
//     badged.text(savatcha.length)
//     console.log('savatcha' , savatcha);
// }

// function cardRender(){
//     row.html('')
//     savatcha.map((arr , index)=>{
//         let savatcard = `
//         <div class="col-12">
//         <div class="card">
//             <div class="card__info d-flex justify-content-between">
//                 <img src="${arr.img}" alt="${arr.name}" width="250px" height="250px">
//                 <div class="d-flex justify-content-between align-items-center">
//                     <button onclick='decrement(${index})' class="btn btn-primary">-</button>
//                     <h2 class="p-3">${arr.count}</h2>
//                     <button onclick="increment(${index})" class="btn btn-primary">+</button>
//                 </div>
//                 <div>
//                     <h4>Nomi: ${arr.name}</h4>
//                     <h4>Narxi: ${arr.cost}</h4>
//                 </div>
//             </div>
//             <div>
//                 <h2 class="text-center">Umumiy Summa :${arr.cost * arr.count}</h2>
//             </div>
//         </div>
//     </div>
//         `

//         row.append(savatcard)
//     })
// }

// function decrement(params){
//     if(savatcha[params].count == 1){
//         savatcha.splice(params , 1)
//     }
//     else{
//         savatcha[params].count -=  1
//     }
//     console.log("Ishladi" , params);
//     console.log(savatcha);
//     cardRender()
//     badged.text(savatcha.length)
// }

// function increment(params){
//     savatcha[params].count +=  1
//     console.log("Ishladi" , params);
//     console.log(savatcha);
//     cardRender()
//     badged.text(savatcha.length)
// }


// likeFunc()

// function likeStatus(val){
//     data[val].like = !data[val].like
//     likeFunc()
// }

// function qdrwFunc(params){
//      console.log(params.value);
//      let result = data.filter((arr , index)=>{
//         return  arr.name.includes(params.value)
//      })
//      qator.html('')
//      result.map((arr , index) => {
//          if(arr.like == true){
//              let card = 
//              `
//              <div class=" col-4">
//              <div class="card">
//                  <i class="ikns fa-solid fa-heart text-danger" onclick='likeStatus(${index})'></i><img src='${arr.img}' alt="" width='100%' height='450px'>
//                  <h1>${arr.name}</h1>
//                  <h4>${arr.cost}</h4>
//                  <button onclick='buying(${index})' class="btn btn-primary">Karzina</button>
//              </div>
//          </div>
//              `
//          qator.append(card)
//          }
//          else{
//              let card = 
//              `
//              <div class="col-4">
//              <div class="card">
//                  <i class="ikns fa-solid fa-heart " onclick='likeStatus(${index})'></i><img src='${arr.img}' alt="" width='100%' height='450px'>
//                  <h1>${arr.name}</h1>
//                  <h4>${arr.cost}</h4>
//                  <button onclick='buying(${index})' class="btn btn-primary">Karzina</button>
//              </div>
//          </div>
//              `
//          qator.append(card)
//          }
 
         
 
//      })
//      console.log(result);
// }

$('#carusel').slick()