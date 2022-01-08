async function user(value){
    try{
        let res = await fetch(`https://api.github.com/users/${value}`)
        let data = await res.json()
        return data;
    }
    catch(e){
        console.log('e', e);

    }

}





export default user

 

