import Background from './r-background-resized.jpg';
import Waves from './wave.svg';


const homeComponent = () => {
    const container = document.createElement('div');
    container.classList.add('home-div');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('hero-img-container');

    const homeBackground = new Image();
    homeBackground.classList.add('hero-img');
    homeBackground.src = Background;

    const waves = new Image();
    waves.classList.add('waves');
    waves.src = Waves;

    
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('homeContent-container');

    const title = document.createElement('h1');
    title.textContent = 'SABOR DE EL CORAZON';
    title.classList.add('hero-title');
    
   
    

    const aboutWrapper = document.createElement('div');
    aboutWrapper.classList.add('about-wrapper');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('about-title');
    aboutTitle.textContent = 'About';

    const aboutContent = document.createElement('p');
    aboutContent.classList.add('about-content');
    aboutContent.textContent = 'Welcome to Los Tacos Buenos, your authentic Mexican taco destination! Proudly serving our community since 1995, we bring the rich flavors of Jalisco, Guadalajara right to your plate. As a locally owned and operated business, we are dedicated to providing a genuine taste of Mexico, using traditional recipes handed down through generations.';

    const aboutContent2 = document.createElement('p');
    aboutContent2.classList.add('about-content');
    aboutContent2.textContent = 'Our journey began in the vibrant streets of Guadalajara, where our love for delicious, high-quality tacos was born. Today, we continue that passion here, crafting each taco with the same dedication and care that our ancestors did. From our family to yours, we invite you to experience the warmth, culture, and exquisite taste of Jalisco at Los Tacos Buenos.'

    const aboutContent3 = document.createElement('p');
    aboutContent3.classList.add('about-content');
    aboutContent3.textContent = 'Come join us and savor the difference that comes from fresh ingredients, authentic flavors, and a love for what we do. Thank you for being a part of our story. We look forward to serving you!';



    container.appendChild(imgContainer);
    container.appendChild(contentContainer);
    container.appendChild(aboutWrapper);
    imgContainer.appendChild(homeBackground);
    imgContainer.appendChild(waves);
    contentContainer.appendChild(title); 

    aboutWrapper.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutContent);
    aboutContainer.appendChild(aboutContent2);
    aboutContainer.appendChild(aboutContent3);
   

    return container;
}

export default homeComponent;