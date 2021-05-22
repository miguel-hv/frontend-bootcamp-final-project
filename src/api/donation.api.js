const causeDonationUrl = "http://localhost:3500/causes/donation";


export const causeDonation = async (donation) => {
    const request = await fetch(causeDonationUrl, {
        method: 'POST',
        headers: {
        //    'Accept': 'application/json',
           'Content-Type': 'application/json',
        //    'Access-Control-Allow-Origin': '*' // CORS
        },
        credentials: 'include',        
        body: JSON.stringify({donation})
    });

    const response = await request.json();

    if (!request.ok) console.log('ERROR: ', response.message);

    return response;
};
