function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let dish = document.getElementById('dish');
    let dia = document.getElementById('dia');
    let data = new Date();
    let hora = data.getHours();

    if (hora >= 0 && hora <= 5) {
        img.src = 'images/midnight_snack.png';
        dish = 'Lanche da madrugada';
        document.body.style.background = '#383838';
    } else if (hora >= 6 && hora <= 10) {
        img.src = 'images/breakfast.png';
        dish = 'Café da manhã';
        document.body.style.background = 'gold';
    } else if (hora >= 11 && hora <= 13) {
        img.src = 'images/lunch.png';
        dish = 'Almoço';
        document.body.style.background = 'pink';
    } else if (hora >= 14 && hora <= 17) {
        img.src = 'images/snack.png';
        dish = 'Lanche da tarde';
        document.body.style.background = 'orange';
    } else if (hora >= 18 && hora <= 24) {
        img.src = 'images/dinner.png';
        dish = 'Janta';
        document.body.style.background = 'gray';
    } else {
        img.src = 'images/error.png';
        dish = 'Sem refeição. Horário inválido!';
        document.body.style.background = 'black';
    }
    msg.innerHTML = `Agora são ${hora} horas! <br>${dish} :)`;
}
