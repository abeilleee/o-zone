import getData from "./getData";
import postData from "./postData";

const second = () => {
    const cardBtn = document.getElementById('cart');

    cardBtn.addEventListener('click', () => {
        postData().then((data) => {
            console.log(data);

            getData().then((data) => {
                console.log(data)
            });
        })
    })
}

export default second