export const getTodos = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return fetch(url)
        .then(response => response.json());
}

