import {templates, select, classNames} from '../settings.js';

const homepageData = {
  carouselData: [
    {
      img: 'images/homepage/pizza-2.jpg',
      title: 'Consectetur Adipiscing',
      text: 'Consectetur adipiscing elit. Sed tincidunt. Lorem ipsum dolor sit amet, ',
      author: 'Kaslik Amanov'
    },
    {
      img: 'images/homepage/pizza-3.jpg',
      title: 'Sed Tincidunt.',
      text: 'Adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Sed tincidunt.',
      author: 'Margaret Osborne'
    },
    {
      img: 'images/homepage/pizza-3.jpg',
      title: 'Sit Amet.',
      text: 'Dolor ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt.',
      author: 'Rupert Sasanov'
    }
  ],

  galleryLinks: [
    'images/homepage/pizza-1.jpg',
    'images/homepage/pizza-2.jpg',
    'images/homepage/pizza-7.jpg',
    'images/homepage/pizza-6.jpg',
    'images/homepage/pizza-5.jpg',
    'images/homepage/pizza-4.jpg',
  ],
};

class Home{
  constructor(element){
    const thisHome = this;

    thisHome.data = homepageData;
    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element){
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;

    const generatedHTML = templates.homePage(thisHome.data);

    document.querySelector(select.containerOf.home).innerHTML = generatedHTML;

    thisHome.dom.links = thisHome.dom.wrapper.querySelectorAll(select.containerOf.homeLinks);
  }

  initWidgets(){
    const thisHome = this;

    for(let link of thisHome.dom.links){
      link.addEventListener('click', function(event){
        event.preventDefault();

        const hash = event.target.hash.replace('#', '');
        const currentLink = document.querySelector('.main-nav a[href="#home"]');
        const currentPageId = document.getElementById(select.containerOf.homeId);
        const newPageId = document.getElementById(hash);
        const newLink = document.querySelector(`.main-nav a[href="${event.target.hash}"]`);

        window.location.hash = `#/${hash}`;
        currentLink.classList.remove(classNames.nav.active);
        currentPageId.classList.remove(classNames.nav.active);
        newPageId.classList.add(classNames.pages.active);
        newLink.classList.add(classNames.pages.active); 
      });
    }
  }
}

export default Home;