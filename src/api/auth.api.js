const registerUrl = "http://localhost:3500/auth/register";
const loginUrl = "http://localhost:3500/auth/login";
const checkSessionUrl = "http://localhost:3500/auth/check-session";
const logoutUrl = "http://localhost:3500/auth/logout";

export const register = async (form) => {
    const request = await fetch(registerUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });
    const response = await request.json();

    if (!request.ok) {
        throw new Error(response.message);
    }
    return response;
};
export const login = async (form) => {
    const request = await fetch(loginUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });
    const response = await request.json();
    if (!request.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const checkSession = async (form) => {
    const request = await fetch(checkSessionUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
    });
    const response = await request.json();

    return response;
};

export const logout = async () => {
    const request = await fetch(logoutUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
    });

    const response = await request.json();

    return response;
};
