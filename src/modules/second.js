import getData from "./getData";
import postData from "./postData";

const second = () => {
    const cardBtn = document.getElementById('cart');

    getData().then((data) => {
        console.log(data);
    });
}

export default second