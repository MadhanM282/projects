async function repos(url,location){
// console.log('url', url);

    let res = await fetch(url)

    let data = await res.json()
    // console.log('data', data);

    display(data,location);

    
}


function display(data,location){
    location.innerHTML=""
    data.map((ele)=>{
        
        console.log('ele', ele);
        let div = document.createElement("div");

            let reponame = document.createElement("h2")
            reponame.innerHTML = ele.full_name;
            reponame.style.color = "#5c9de7"

            let name = document.createElement("h3")
            name.innerHTML = ele.name;

            let date = document.createElement("p");
            date.innerHTML = ele.created_at
           
            div.append(reponame,name,date);

            location.append(div)
        
    })
}
export default repos