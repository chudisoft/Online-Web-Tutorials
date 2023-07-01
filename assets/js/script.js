const navButton = document.querySelector('.menubar');
const seeMore = document.querySelector('.see-more');
const speakerGroup = document.querySelector('.speaker-group');
const navList = document.querySelector('.nav-items');
const navClose = document.querySelector('#nav-close');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const menuitems = Array.from(document.querySelectorAll('.menu-items'));

document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ('key' in evt) {
        isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape && modal.classList.contains('show')) {
        modal.classList.toggle('show');
    }
};

navButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});

navClose.addEventListener('click', () => {
    navList.classList.toggle('show');
});

menuitems.forEach((item) => {
    item.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.toggle('show');
});

const speakers = [
    {
        name: 'Yochai Benkler',
        description1: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School.',
        description2: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006.',
        featuredImage: 'assets/images/Speakers/speaker_01.png',
    },
    {
        name: 'Kilnam Chon',
        description1: '',
        description2: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame.',
        featuredImage: 'assets/images/Speakers/speaker_02.png',
    },
    {
        name: 'SohYeong Noh',
        description1: 'Director of Art Centre Nabi and a board member of CC Korea.',
        description2: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
        featuredImage: 'assets/images/Speakers/speaker_03.png',
    },
    {
        name: 'Julia Leda',
        description1: 'President of Young Pirates of Europe.',
        description2: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
        featuredImage: 'assets/images/Speakers/speaker_04.png',
    },
    {
        name: 'Lila tretikov',
        description1: 'Executive Director of the Wikimedia Foundation.',
        description2: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
        featuredImage: 'assets/images/Speakers/speaker_05.png',
    },
    {
        name: 'Ryan Merkley',
        description1: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation.',
        description2: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment.',
        featuredImage: 'assets/images/Speakers/speaker_06.png',
    },
];

function LoadItems(index, range) {
    for (; index < range; index += 1) {
        const element = speakers[index];
        const div = document.createElement('div');
        const divImg = document.createElement('divImg');
        const divDesc = document.createElement('divDesc');
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        div.className = 'speaker-block';
        divImg.className = 'speaker-image';
        divDesc.className = 'speaker-desc';
        p1.className = 'text-red';

        img.src = element.featuredImage;
        img.alt = `${element.name} image`;
        h4.innerText = element.name;
        p1.innerText = element.description1;
        p2.innerText = element.description2;

        divImg.appendChild(img);
        divDesc.appendChild(h4);
        divDesc.appendChild(p1);
        divDesc.appendChild(p2);
        div.appendChild(divImg);
        div.appendChild(divDesc);
        speakerGroup.appendChild(div);
    }
}

speakerGroup.innerHTML = '';
LoadItems(0, speakers.length);

seeMore.addEventListener('click', () => {
    speakerGroup.classList.toggle('speaker-group');
    seeMore.classList.toggle('hidden');
});
