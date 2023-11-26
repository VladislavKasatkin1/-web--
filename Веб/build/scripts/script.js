const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const input = document.querySelector('.input');
const add = document.querySelector('.add');

const sliderLine = document.querySelector('.slider__line');



const arr = ['../pictures/cat.jpg', '../pictures/favicon.jpg', 
'https://cdn.ren.tv/media/img/17/50/1750164222df74a3971b3b5d03f7d7c18394ed2e.jpg',
'https://memepedia.ru/wp-content/uploads/2017/06/%D1%81%D0%BC%D0%B5%D1%8E%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D1%82%D0%BE%D0%BC-%D0%BA%D1%80%D1%83%D0%B7.jpg',
'https://avatars.dzeninfra.ru/get-zen_doc/57035/pub_5c3500af62248c00aa874286_5c3502039175d500aabd72ea/scale_1200'
]
arr.forEach((img) => {
sliderLine.innerHTML +=`<img src="${img}" alt="" height="256" width="384">`
})

let offset = 0;

next.addEventListener('click', () => {
    offset = offset >= 384 * (arr.length-1) ? 0 : offset + 384;

    sliderLine.style.right=`${offset}px`
})

prev.addEventListener(`click`, () => {
    offset=offset <=0 ? (384 * arr.length - 1) : offset - 384;
    sliderLine.style.right = `${offset}px`
})

add.addEventListener(`click`, () => {
    arr.push(input.value);
    sliderLine.innerHTML+=`<img src="${input.value}" alt="" height="256" width="384">`
})