const getData = () => {
    return fetch('https://test-fbc2d-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        })
}

export default getData;