const causesUrl = "http://localhost:3500/causes";


export const causes = async () => {
    const request = await fetch(causesUrl, {
        method: 'GET',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*' 
        },
        credentials: 'include',
    });
    const response = await request.json();

    return response;
};



