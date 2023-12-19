let tb=document.querySelector('tbody')
let btn=document.getElementById('btn')
let frm=document.getElementById('frm')
let pg=document.getElementById('pg')
let tbd=document.getElementById('tb')

btn.addEventListener('click',function(){
       tbd.innerHTML=""
    function displaydata1(pd){
        d=pd.data
        
    d.map((ele)=>
    {
    
        let row = document.createElement('tr')
        let id = document.createElement('td')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let imgt = document.createElement('img')
        td1.appendChild(imgt)
    
        id.innerText=ele.id
        imgt.src =ele.avatar
        td2.innerText=ele.first_name
        td3.innerText=ele.last_name
        td4.innerText=ele.email
        row.append(id,td1,td2,td3,td4)
        tb.append(row)
    
    })
    }
    fetch(`https://reqres.in/api/users?page=${pg.value}`)
    .then(function(res){
        return res.json();
    })
    .then(function(fres){
        displaydata1(fres)
    })
    // .catch(function(){
    //     let h1t=document.createElement('h1')
    //     h1t.textContent('Somthing Went Wrong')
    //     frm.appendChild(h1t)
    //     console.log("something went wrong");
    // })
 
})
