
function login(username, credential) {
    const url = `http://3.122.7.162:5000/v60/admin/session`;
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, credential}),
        credentials: 'include'
    };

    return fetch(url, options)
        .then(response => {
            if(!response.ok) {
                return Promise.reject('Please contact the System Administrator at extension 1001 to create a new Login or reset your password.');
            }
            return response;
        })
        .then(response => response.json());
}

export const authService = {
    login
};
