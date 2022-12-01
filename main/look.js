let row = $('.row')
let badged = $('.badged')
let savatcha = []
function makeCard() {
    data.map((arr, index) => {
        let card = `
      <div class="col-4">
        <div class="card m-3 p-3">
          <img src='${arr.img}' alt="${arr.name}" height="250px">
          <h4 class="name">${arr.name}</h4>
          <p class="price">${arr.cost}</p>
          <button onclick='buying(${index})'>sotib olish</button>
        </div>
      </div>
      `
        row.append(card)
    })
}

makeCard()

function buying(val) {
    if(savatcha.length == 0){
        savatcha.push({...data[val] , count: 1})
    }
    else{
        let result = savatcha.filter(arr=>{
            return arr.name === data[val].name 
        })
        if(result.length == 0){
            savatcha.push({...data[val] , count: 1})
        }
        console.log("savatcha result" , result);
    }
    badged.text(savatcha.length)
    console.log('savatcha' , savatcha);
}

function cardRender(){
    row.html('')
    savatcha.map((arr , index)=>{
        let savatcard = `
        <div class="col-12">
        <div class="card">
            <div class="card__info d-flex justify-content-between">
                <img src="${arr.img}" alt="${arr.name}" width="250px" height="250px">
                <div class="d-flex justify-content-between align-items-center">
                    <button onclick='decrement(${index})' class="btn btn-primary">-</button>
                    <h2 class="p-3">${arr.count}</h2>
                    <button onclick="increment(${index})" class="btn btn-primary">+</button>
                </div>
                <div>
                    <h4>Nomi: ${arr.name}</h4>
                    <h4>Narxi: ${arr.cost}</h4>
                </div>
            </div>
            <div>
                <h2 class="text-center">Umumiy Summa :${arr.cost * arr.count}</h2>
            </div>
        </div>
    </div>
        `

        row.append(savatcard)
    })
}

function decrement(params){
    if(savatcha[params].count == 1){
        savatcha.splice(params , 1)
    }
    else{
        savatcha[params].count -=  1
    }
    console.log("Ishladi" , params);
    console.log(savatcha);
    cardRender()
    badged.text(savatcha.length)
}

function increment(params){
    savatcha[params].count +=  1
    console.log("Ishladi" , params);
    console.log(savatcha);
    cardRender()
    badged.text(savatcha.length)
}