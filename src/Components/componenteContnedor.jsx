

// Una promesa recibe una callback (una funcion pasada por parametro)
const task = new Promise ((res, rej)=> {

    let condition = true;
    if(condition){
        res("200 ok");
    }else{
        rej("404 not found")
        
    }
})




function ComponenteContenedor (){

    //console.log(task);

    task
        .then (respuesta =>{
            console.log(respuesta);
            return respuesta
        })
        .then (respuesta => console.log(respuesta))
        .catch( err => console.log(err))
        .finally(()=> console.log("Finalizado... (si o si al final)"));


    return(

        
        <div>

            
        </div>


    )
}

export default ComponenteContenedor