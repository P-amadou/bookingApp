const urlAPI = 'hhttp://localhost:4242'

export default function apiCall(path, method, body, _, callback) {
    let init;
    
        init = {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }

    
    fetch(urlAPI + path, init)
        .then(data => data.json())
        .then((data) => {
            callback(data);
        })
};