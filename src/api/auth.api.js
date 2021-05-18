const registerUrl = "http://localhost:4000/auth/register";


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
    if (!request.ok){
        throw new Error(response.message);
    }
    return response;
};

