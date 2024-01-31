export const getLoginInfo = async (parameter) => {
    let body = parameter;
    const response = await fetch('https://clevendario-api.fly.dev/api/clevendario/user/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)

    }).then(respuesta => respuesta.json())

    return response
}
