const registerUrl = "http://localhost:3500/auth/register";
const checkSessionUrl = "http://localhost:3500/auth/check-session";


export const register = async (form) => {
   
    const request = await fetch (registerUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
        body: JSON.stringify(form),
    });
    const response = await request.json();
    console.log("esto lleva la request.json en auth.api")
    if (!request.ok){
        throw new Error(response.message);
    
    }
    return response;
};

export const checkSession = async (form) => {
    const request = await fetch(checkSessionUrl, {
        method: 'GET',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*' // CORS
        },
        credentials: 'include',
    });
    const response = await request.json();

    return response;
};


