const timer = () => {
    setInterval(() => {
        console.log(new Date().toLocaleTimeString('pt-BR'))
    }, 2000)
}

timer();