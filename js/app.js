"use stirct"

const uzs = document.querySelector("#uzs"),
    usd = document.querySelector("#usd")



    uzs.addEventListener("input", (e)=>{
        const request = new XMLHttpRequest() 
        request.open("GET", 'json/current.json') 
        request.setRequestHeader('Content-type', 'application-json; charset-utf=8')
        request.send()
        

        request.addEventListener("load", ()=>{
            if(request.status === 200){
                // console.log(request.response);
                const data = JSON.parse(request.response)

                usd.value = (+uzs.value / data.current.usd).toFixed(2) 
            }
            else{
                usd.value = "404 Not found"
            }
        })
})