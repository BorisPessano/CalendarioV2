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

        })
        console.log(response);
        return response.status;
    }
    catch(e){
        console.log(e);
        alert(e);
        return e;
    }
}

