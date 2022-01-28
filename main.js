const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// inizializzo il container per le immagini principali
const container = document.getElementById('container');
let indice = 0;
 container.innerHTML = `<div class="item active">
 <img src="`+items[indice]+`">
 <div class="text">
     <h3 id="title">`+title[indice]+`</h3>
     <p id="paragrafo">`+text[indice]+`</p>
 </div>
</div>`;

// inizializzo thumb

const thumbs = document.getElementById('thumbs');


let thumbsHtml = "";

for (let i = 0; i < items.length; i++){

    thumbsHtml += `<div class="img-thumb">
    <img src="`+items[i]+`">
</div>`;
}

thumbs.innerHTML = `<div class="prev" id="prev"><i class="fas fa-angle-up"></i></div>` + thumbsHtml + ` <div class="next" id="next"><i class="fas fa-angle-down"></i></div>`;

const prev = document.getElementById('prev');
prev.addEventListener('click',

        function (){
            indice++;
            if(indice > 4){
                indice = 0;
            }
            container.innerHTML = `<div class="item active">
            <img src="`+items[indice]+`">
            <div class="text">
                <h3 id="title">`+title[indice]+`</h3>
                <p id="paragrafo">`+text[indice]+`</p>
            </div>
           </div>`; 
                      
        }
);


// inizializzo next

const next = document.getElementById('next')
next.addEventListener('click',

        function (){
            indice--;
            if ( indice < 0){
                indice = 4;
            }
            container.innerHTML = `<div class="item active">
            <img src="`+items[indice]+`">
            <div class="text">
                <h3 id="title">`+title[indice]+`</h3>
                <p id="paragrafo">`+text[indice]+`</p>
            </div>
           </div>`;
        }
)
