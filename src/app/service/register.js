export const getRegisterInfo = async (parameter) => {
    let body = parameter;
    try{
        const response = await fetch('https://clevendario-api.fly.dev/api/clevendario/user/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)

        }).then(respuesta => respuesta.json()).then((responseData) => {
            if(!responseData.message){
                alert("Usuario creado");
            }else{
                alert("Este correo ya esta registrado")
            }
            return responseData
        })
    }
    catch(e){
        console.log(e)
        return e
    }
}

