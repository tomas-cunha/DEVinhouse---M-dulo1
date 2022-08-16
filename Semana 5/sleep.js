function sleep(valor) {
    return new Promise((res) => {
        setTimeout(() => res(valor), 3000);
    })
}

sleep("tomás").then((res) => console.log(res))