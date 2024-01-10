export const getLoginInfo = async (parameter) => {
    let body = parameter;
    try{
        const response = await fetch('https://clevendario-api.fly.dev/api/clevendario/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)

        }).then(respuesta => respuesta.json()).then((responseData) => {
            localStorage.setItem('sesion',responseData.access_token)
            return responseData
        })
    }
    catch(e){
        console.log(e)
        return e
    }
}

