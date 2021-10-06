const btnFetch = document.querySelector('.fetch'),
    img = document.querySelector('.img'),
    kind = document.querySelector('.dogSelector')

async function dog() {
    let type = kind.value
    let url = `https://dog.ceo/api/breed/${type}/images/random`;
    let info = await (await fetch(url)).json();
    console.log(info);
    img.innerHTML = `<img style="width: 300px; height: 300px;" src='${info.message}'>`
}

btnFetch.addEventListener('click', dog)