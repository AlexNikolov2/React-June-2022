const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if(data.ok){
        return data;
    }
    else{
        throw new Error(data.message);
    }
};

export const register = (email, password) => {
    return fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json());
}

export const logout = (token) => {
    return fetch(`${baseUrl}/auth/logout`, {
        headers: {
            'X-Authorization': token,
        }
    });
};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}