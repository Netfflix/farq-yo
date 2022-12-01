// let tun = document.querySelector('.tun')
// let body = document.querySelector('body')

// function kun(){
//     tun.classList.toggle('kun')
//     body.classList.toggle('orqa')
// }


// function chiqarFunc(){

//     let p = document.querySelector('.title')
//     p.innerHTML= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus harum, dolores impedit id recusandae sapiente quas corrupti vitae labore accusantium suscipit, aliquid eos magnam cumque atque voluptatibus possimus est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus harum, dolores impedit id recusandae sapiente quas corrupti vitae labore accusantium suscipit, aliquid eos magnam cumque atque voluptatibus possimus est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus harum, dolores impedit id recusandae sapiente quas corrupti vitae labore accusantium suscipit, aliquid eos magnam cumque atque voluptatibus possimus est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus harum, dolores impedit id recusandae sapiente quas corrupti vitae labore accusantium suscipit, aliquid eos magnam cumque atque voluptatibus possimus est!'
// }



// let main = document.querySelector('.main')
// function mainFc(){
//     news.map((arr)=>{
//         console.log(arr.photo);
//         let cardDv = document.createElement('div')
//         cardDv.classList.add('card')
//         let rasm = document.createElement('img')
//         let title = document.createElement('h2')
//         rasm.src = arr.photo
//         rasm.style.width = '250px'
//         rasm.style.height = '200px'
//         rasm.alt = 'yangilik'
//         let link = document.createElement("a")
//         link.innerText = "Batafsil"
//         link.href = arr.link
//         cardDv.appendChild(rasm)
//         title.innerText = arr.title
//         cardDv.appendChild(title)
//         cardDv.appendChild(link)
//         main.appendChild(cardDv)

//     })
// }
// mainFc()




// let anime = document.querySelector('.anime')

// function next(){
//     anime.src = 'https://pbs.twimg.com/media/FDh447magAAeQ0-.jpg'
// }

// let anime1 = document.querySelector('.anime')

// function back(){
//     anime1.src = 'https://i.ytimg.com/vi/TfhzSLXMkcU/maxresdefault.jpg'
// }

// let anime2 = document.querySelector('.anime')

// function centr(){
//     anime2.src = 'https://get.wallhere.com/photo/illustration-long-hair-anime-anime-girls-clouds-blue-school-uniform-visual-novel-schoolgirl-If-My-Heart-Had-Wings-Habane-Kotori-computer-wallpaper-mangaka-143320.jpg'
// }

// let anime3 = document.querySelector('.anime')

// function left(){
//     anime3.src = 'https://i.pinimg.com/originals/51/74/29/517429e0bdc35ca1ca98af99880f455f.jpg'
// }

// let anime4 = document.querySelector('.anime')

// function right(){
//     anime4.src = 'https://get.wallhere.com/photo/long-hair-anime-anime-girls-blue-hair-blue-eyes-shorts-artwork-chibi-shirt-braids-zettai-ryouiki-clothing-mangaka-279120.jpg'
// }


// let ism = document.querySelector('.name')
// let groop = document.querySelector('.group')
// let email = document.querySelector('.mail')
// let tbody = document.querySelector('.tbody')
// function pudge(){
//     let consol = document.querySelector('tr')


//     let name = document.createElement('td')
//     name.innerText = ism.value
//     let group = document.createElement('td')
//     group.innerText = groop.value
//     let mail = document.createElement('td')
//         mail.innerText = email.value

//     consol.appendChild(name)
//     consol.appendChild(group)
//     consol.appendChild(mail)
//     tbody.appendChild(consol)
// }


// let container = []
// let Name = document.querySelector('#one')
// let Title = document.querySelector('#two')
// let Neews = document.querySelector('#three')
// let Logoo = document.querySelector('#forth')
// let row = document.querySelector('.row')

// function puck(){
//     container.push(
//         {
//             name: one.value,
//             title: two.value,
//             name: three.value,
//             title: forth.value
//         }
//     )
//         row.innerHTML = ''
//     container.map((arr)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col_4' , 'shadow' , 'card')
        
//         let name = document.createElement('h1')
//         name.innerText = arr.one
        
//         let title = document.createElement('p')
//         title.innerText = arr.two
        
//         let mana = document.createElement('h1')
//         mana.innerText = arr.three
        
//         let vot = document.createElement('p')
//         vot.innerText = arr.forth

//         col_4.appendChild(name)
//         col_4.appendChild(title)

//         col_4.appendChild(mana)
//         col_4.appendChild(vot)
        
//         row.appendChild(col_4)
//     })
    
    
// }
// function mack(){
//     container.map()
    
//     row.innerHTML = ''
//     container.map((arr)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col_4' , 'shadow' , 'card')
        
//         let name = document.createElement('h1')
//         name.innerText = arr.one
        
//         let title = document.createElement('p')
//         title.innerText = arr.two
        
//         let mana = document.createElement('h1')
//         mana.innerText = arr.three
        
//         let vot = document.createElement('p')
//         vot.innerText = arr.forth

//         col_4.appendChild(name)
//         col_4.appendChild(title)

//         col_4.appendChild(mana)
//         col_4.appendChild(vot)
        
//         row.appendChild(col_4)
//     })

// }




// let ism = document.querySelector('#name')
// let familiya = document.querySelector('#surname')
// let lovozm = document.querySelector('#degree')
// let kontakt = document.querySelector('#contact')
// let tableUser = document.querySelector('#tableUser')

// let users = []

// function addUser(){
//     tableUser.innerHTML = ''
//     users.push(
//         {
//             ismVal : ism.value,
//             famVal : familiya.value,
//             lovozmVal : lovozm.value,
//             kontaktVal : kontakt.value,
//         }
//     )
//     users.map((arr , index)=>{
//         let qator = document.createElement('tr')

//         let nameTD = document.createElement('td')
//         nameTD.innerText = arr.ismVal
//         let familiyaTD = document.createElement('td')
//         familiyaTD.innerText = arr.famVal
//         let lovozmTD = document.createElement('td')
//         lovozmTD.innerText = arr.lovozmVal
//         let kontaktTD = document.createElement('td')
//         kontaktTD.innerText = arr.kontaktVal

//         let btnsTD = document.createElement('td')
//         let deleteBtn = document.createElement('button')
//         deleteBtn.innerText = 'ocrw'
//         deleteBtn.classList.add('btn','btn-danger','text-dark')
//         deleteBtn.setAttribute('onclick',`deletUser(${index})`)

//         let editBtn = document.createElement('button')
//         editBtn.innerText = 'tahrirlaw'
//         editBtn.classList.add('btn','btn-warning','text-dark')
//         editBtn.setAttribute('onclick',`editFunction(${index})`)
//         btnsTD.appendChild(deleteBtn)
//         btnsTD.appendChild(editBtn)

//         qator.appendChild(nameTD)
//         qator.appendChild(familiyaTD)
//         qator.appendChild(lovozmTD)
//         qator.appendChild(kontaktTD)
//         qator.appendChild(btnsTD)
//         tableUser.appendChild(qator)
//     })

//     ism.value = ''
//     familiya.value = ''
//     lovozm.value  = ''
//     kontakt.value = ''

// }

// function deletUser(index){
//     tableUser.innerHTML = ''
//     users.splice(index , 1)
//     users.map((arr , index)=>{
//         let qator = document.createElement('tr')

//         let nameTD = document.createElement('td')
//         nameTD.innerText = arr.ismVal
//         let familiyaTD = document.createElement('td')
//         familiyaTD.innerText = arr.famVal
//         let lovozmTD = document.createElement('td')
//         lovozmTD.innerText = arr.lovozmVal
//         let kontaktTD = document.createElement('td')
//         kontaktTD.innerText = arr.kontaktVal

//         let btnsTD = document.createElement('td')
//         let deleteBtn = document.createElement('button')
//         deleteBtn.innerText = 'ocrw'
//         deleteBtn.classList.add('btn','btn-danger','text-dark')
//         deleteBtn.setAttribute('onclick',`deletUser(${index})`)

//         let editBtn = document.createElement('button')
//         editBtn.innerText = 'tahrirlaw'
//         editBtn.classList.add('btn','btn-warning','text-dark')
//         editBtn.setAttribute('onclick',`editFunction(${index})`)
//         btnsTD.appendChild(deleteBtn)
//         btnsTD.appendChild(editBtn)

//         qator.appendChild(nameTD)
//         qator.appendChild(familiyaTD)
//         qator.appendChild(lovozmTD)
//         qator.appendChild(kontaktTD)
//         qator.appendChild(btnsTD)
//         tableUser.appendChild(qator)
//     })


// }

// let newIndex = null
// function editFunction(index){
//     ism.value = users[index].ismVal
//     familiya.value = users[index].famVal
//     lovozm.value = users[index].lovozmVal
//     kontakt.value = users[index].kontaktVal
// }

// function editFunc(index){
//     tableUser.innerHTML = ''
//     users.splice(index , 1 ,{
//         ismVal : ism.value,
//         famVal : familiya.value,
//         lovozmVal : lovozm.value,
//         kontaktVal : kontakt.value,
//     })
//     users.map((arr , index)=>{
//         let qator = document.createElement('tr')

//         let nameTD = document.createElement('td')
//         nameTD.innerText = arr.ismVal
//         let familiyaTD = document.createElement('td')
//         familiyaTD.innerText = arr.famVal
//         let lovozmTD = document.createElement('td')
//         lovozmTD.innerText = arr.lovozmVal
//         let kontaktTD = document.createElement('td')
//         kontaktTD.innerText = arr.kontaktVal

//         let btnsTD = document.createElement('td')
//         let deleteBtn = document.createElement('button')
//         deleteBtn.innerText = 'ocrw'
//         deleteBtn.classList.add('btn','btn-danger','text-dark')
//         deleteBtn.setAttribute('onclick',`deletUser(${index})`)

//         let editBtn = document.createElement('button')
//         editBtn.innerText = 'tahrirlaw'
//         editBtn.classList.add('btn','btn-warning','text-dark')
//         editBtn.setAttribute('onclick',`editFunction(${index})`)
//         btnsTD.appendChild(deleteBtn)
//         btnsTD.appendChild(editBtn)

//         qator.appendChild(nameTD)
//         qator.appendChild(familiyaTD)
//         qator.appendChild(lovozmTD)
//         qator.appendChild(kontaktTD)
//         qator.appendChild(btnsTD)
//         tableUser.appendChild(qator)
//     })
// }


// let badge = document.querySelector('#badge')
// let main = document.querySelector('.row')
// // let qidruv = document.querySelector('#qidruv')
// // let shoCard = []

// // function just(){
// //     main.innerHTML = 
// //     watches.map((val , index)=>{
// //         let divDv = document.createElement('div')
// //         divDv.classList.add('col-4')
// //         divDv.style.marginTop = '50px'
// //         divDv.style.borderSolid = '2px , blue'

// //         let btnDv = document.createElement('button')
// //         btnDv.classList.add('btn', 'btn-primary')
// //         btnDv.innerText = 'Sotb olish'
// //         btnDv.setAttribute('onclick',`Sotvolw(${index})`)

// //         let imgDv = document.createElement('img')
// //         imgDv.src = val.img_src
// //         imgDv.style.width = '425px'
// //         imgDv.style.height = '425px'
// //         imgDv.style.borderRadius = '5%'
// //         imgDv.alt = 'watches'
        
// //         let nameDv = document.createElement('h1')
// //         nameDv.classList.add('name')
// //         nameDv.innerText = val.name

// //         let costDv = document.createElement('h2')
// //         costDv.classList.add('cost')
// //         costDv.innerText = val.cost

// //         let countDv = document.createElement('h3')
// //         countDv.classList.add('count')
// //         countDv.innerText = val.count

// //         let categoryDv = document.createElement('h4')
// //         categoryDv.classList.add('category')
// //         categoryDv.innerText = val.category

// //         divDv.appendChild(imgDv)
// //         divDv.appendChild(nameDv)
// //         divDv.appendChild(costDv)
// //         divDv.appendChild(countDv)
// //         divDv.appendChild(categoryDv)
// //         divDv.appendChild(btnDv)
        
// //         main.appendChild(divDv)
// //     })
// // }

// // just()


// // function Sotvolw(val){
// //     shoCard.push(watches[val])
// //     badge.innerText = shoCard.length
// // }

// // function qidruvda(){
// //     main.innerHTML = ''
// //     let result = watches.filter((arr)=>{
// //         return arr.name.includes(qidruvda.value)
// //     })
// //     result.map((val , index)=>{
// //         let divDv = document.createElement('div')
// //         divDv.classList.add('col-4')
// //         divDv.style.marginTop = '50px'
// //         divDv.style.borderSolid = '2px , blue'

// //         let btnDv = document.createElement('button')
// //         btnDv.classList.add('btn', 'btn-primary')
// //         btnDv.innerText = 'Sotb olish'
// //         btnDv.setAttribute('onclick',`Sotvolw(${index})`)

// //         let imgDv = document.createElement('img')
// //         imgDv.src = val.img_src
// //         imgDv.style.width = '425px'
// //         imgDv.style.height = '425px'
// //         imgDv.style.borderRadius = '5%'
// //         imgDv.alt = 'watches'
        
// //         let nameDv = document.createElement('h1')
// //         nameDv.classList.add('name')
// //         nameDv.innerText = val.name

// //         let costDv = document.createElement('h2')
// //         costDv.classList.add('cost')
// //         costDv.innerText = val.cost

// //         let countDv = document.createElement('h3')
// //         countDv.classList.add('count')
// //         countDv.innerText = val.count

// //         let categoryDv = document.createElement('h4')
// //         categoryDv.classList.add('category')
// //         categoryDv.innerText = val.category

// //         divDv.appendChild(imgDv)
// //         divDv.appendChild(nameDv)
// //         divDv.appendChild(costDv)
// //         divDv.appendChild(countDv)
// //         divDv.appendChild(categoryDv)
// //         divDv.appendChild(btnDv)
        
// //         main.appendChild(divDv)
// //     })
// // }




// let cardla = document.querySelector(".cardla")
// let shopCard = []
// let count = document.querySelector("#count")
// let result = []
// let search = document.querySelector("#search")
// let dan = document.querySelector("#dan")
// let gacha = document.querySelector("#gacha")
// function makeCard() {
//     cardla.innerHTML = ''
//     watches.map((arr, index) => {
//         let col4 = document.createElement("div")
//         col4.classList.add("card", "col-3", "shadow")

//         let img = document.createElement("img")
//         img.src = arr.img_src
//         img.classList.add("image")

//         let name = document.createElement("h3")
//         name.innerText = arr.name
//         name.classList.add("name")

//         let cost = document.createElement("h3")
//         cost.innerText = arr.cost
//         cost.classList.add("name")

//         let btn = document.createElement("button")
//         btn.innerText = "Sotib olish"
//         btn.classList.add("btn", "btn-primary", "buy")
//         btn.setAttribute("onclick", `Buying(${index})`)


//         col4.appendChild(img)
//         col4.appendChild(name)
//         col4.appendChild(cost)
//         col4.appendChild(btn)
//         cardla.appendChild(col4)
//     })
// }


// function Buying(val) {
//     shopCard.push(watches[val])
//     count.innerText = shopCard.length
// }



// function searchFunc() {
//     let result = watches.filter((arr) => {
//         return arr.name.toLowerCase().includes(search.value.toLowerCase())
//     })
//     cardla.innerHTML = ''
//     result.map((arr, index) => {
//         let col4 = document.createElement("div")
//         col4.classList.add("card", "col-3", "shadow")

//         let img = document.createElement("img")
//         img.src = arr.img_src
//         img.classList.add("image")

//         let name = document.createElement("h3")
//         name.innerText = arr.name
//         name.classList.add("name")

//         let cost = document.createElement("h3")
//         cost.innerText = arr.cost
//         cost.classList.add("name")

//         let btn = document.createElement("button")
//         btn.innerText = "Sotib olish"
//         btn.classList.add("btn", "btn-primary", "buy")
//         btn.setAttribute("onclick", `Buying(${index})`)


//         col4.appendChild(img)
//         col4.appendChild(name)
//         col4.appendChild(cost)
//         col4.appendChild(btn)
//         cardla.appendChild(col4)
//     })
// }



// function dangachaFunc(){
//     let natija = watches.filter((arr)=>{
//         return arr.cost >= dan.value && arr.cost <=gacha.value
//     })
//     cardla.innerHTML = ""
//     natija.map((arr, index) => {
//         let col4 = document.createElement("div")
//         col4.classList.add("card", "col-3", "shadow")

//         let img = document.createElement("img")
//         img.src = arr.img_src
//         img.classList.add("image")

//         let name = document.createElement("h3")
//         name.innerText = arr.name
//         name.classList.add("name")

//         let cost = document.createElement("h3")
//         cost.innerText = arr.cost
//         cost.classList.add("name")

//         let btn = document.createElement("button")
//         btn.innerText = "Sotib olish"
//         btn.classList.add("btn", "btn-primary", "buy")
//         btn.setAttribute("onclick", `Buying(${index})`)


//         col4.appendChild(img)
//         col4.appendChild(name)
//         col4.appendChild(cost)
//         col4.appendChild(btn)
//         cardla.appendChild(col4)
//     })
// }


// makeCard()


// let story = document.querySelector('.story')
// let post = document.querySelector(".post")
// function makeCard(){
//     insagram.map((arr , index)=>{
//         let card = document.createElement('div')
//         card.classList.add('col-2' , 'text-center')
//         let avatar = document.createElement('img')
//         avatar.classList.add('rounded-circle' , 'border')
//         avatar.width = 100
//         avatar.height = 100
//         avatar.src = arr.avatar
//         avatar.alt = arr.nick_name

//         let nick_name = document.createElement('p')
//         nick_name.innerText = arr.nick_name

//         card.appendChild(avatar)
//         card.appendChild(nick_name)
//         story.appendChild(card)
//     })
// }
// makeCard( )

// function postFunk(){
//     post.innerHTML = ''
//     insagram.map((arr,index)=>{
//         let img_post = document.createElement("img")
//         img_post.classList.add('border','border-radius')
//         img_post.width = 600
//         img_post.height = 500
//         img_post.src = arr.post

//         let i = document.createElement('i')
//         i.setAttribute("onclick",`like(${index})`)

//         let a = document.createElement('i')
//         a.classList.add('fa-regular', 'fa-comment','border')

//         let b = document.createElement('i')
//         b.classList.add('fa-regular','fa-bookmark','border')


//         if(arr.favourite_Status === true){
//             i.classList.add("fa-solid", "fa-heart", 'text-danger')
            
//         }
//         else{
//             i.classList.add("fa-regular", "fa-heart" )
//         }

//         post.appendChild(i)
//         post.appendChild(a)
//         post.appendChild(b)
//         post.appendChild(img_post)
//     })
// }
// postFunk()

// function like(ball){
//     insagram[ball].favourite_Status = !insagram[ball].favourite_Status
//     postFunk()
// }




// likeIcons.setAttribute("onclick" , `likeFunc(${index})`)
//         if(arr.favourite_Status === true){
//             likeIcons.classList.add("fa-solid", "fa-heart" , 'text-danger')
//             iconsBox.appendChild(likeIcons)
//         }else{
//             likeIcons.classList.add("fa-regular", "fa-heart")
//             iconsBox.appendChild(likeIcons)
//         }

// let youtubeBox = document.querySelector('#youtubeBox')
// let searchName = document.querySelector('#searchName')

// function searchFunc(){
//     let filtt = videos.filter((arr)=>{
//         return arr.tittle.toLocaleLowerCase().includes(searchName.value.toLocaleLowerCase())
//     })
//     youtubeBox.innerHTML = ''
//     filtt.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }

// let refrew = []
// function obnavit(){
//     for(let i=0; i<=5; i++){
//         refrew.push(videos[i])
//     }
// }
// obnavit()

// function youtube(){
//     youtubeBox.innerHTML = ''
//     refrew.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }
// youtube()

// function more(){
//     let li = refrew.length
//     for(let i = li; i <= li + 2; i++){
//         refrew.push(videos[i])
//         youtube()
//     }
// }

// function hamasFunc(){
//     let result = videos.filter((arr)=>{
//         return  arr.categories == 'Все'
//     })
//     youtubeBox.innerHTML = ''
//     result.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }


// function muzkaFunc(){
//     let result = videos.filter((arr)=>{
//         return  arr.categories == 'Музыка'
//     })
//     youtubeBox.innerHTML = ''
//     result.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }

// function kinoFunc(){
//     let result = videos.filter((arr)=>{
//         return  arr.categories == 'Фильм'
//     })
//     youtubeBox.innerHTML = ''
//     result.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }

// function repFunc(){
//     let result = videos.filter((arr)=>{
//         return  arr.categories == 'Реп'
//     })
//     youtubeBox.innerHTML = ''
//     result.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }

// function animeFunc(){
//     let result = videos.filter((arr)=>{
//         return  arr.categories == 'Аниме'
//     })
//     youtubeBox.innerHTML = ''
//     result.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }

// function codinFunc(){
//     let result = videos.filter((arr)=>{
//         return  arr.categories == 'Coding'
//     })
//     youtubeBox.innerHTML = ''
//     result.map((arr,i)=>{
//         let col_4 = document.createElement('div')
//         col_4.classList.add('col-4')

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let video = document.createElement('iframe')
//         video.src = arr.url
//         video.width = '100%'
//         video.height = '350px'

//         let tit = document.createElement('h4')
//         tit.innerText = arr.tittle

//         card.appendChild(video)
//         card.appendChild(tit)
//         col_4.appendChild(card)
//         youtubeBox.appendChild(col_4)

//     })
// }




