export const getRegisterInfo = async (parameter) => {
    let body = parameter;
    try{
        const response = await fetch('http://localhost:6001/api/clevendario/user/',{ //https://clevendario-api.fly.dev
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)

        }).then(respuesta => {
            console.log(respuesta.status);
            if (respuesta.status == 409){
                alert("User already exist!")
                return 409;
            }
            if (respuesta.status == 200){
                alert("Usuario creado!!");
                return 200;
            }
            //alert("res");
            return respuesta
        })
    }
    catch(e){
        console.log(e);
        alert(e);
        return e;
    }
}

