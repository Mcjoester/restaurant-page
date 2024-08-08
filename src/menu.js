import ChickenTacos from './chicken-tacos-resized.jpg';
import CarneTacos from './carne-asada-tacos-resized.jpg';
import PorkTacos from './pork-tacos-resized.jpg';

const menuComponent = () => {
    const container = document.createElement('div');
    container.classList.add('menu-div');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    /* Tacos Title */
    const menuTacos = document.createElement('div');
    menuTacos.classList.add('tacos-header-div');
    const tacosTitle = document.createElement('h2');
    tacosTitle.textContent = 'Tacos';
    /*  Tacos content div */
    const tacoContent = document.createElement('div');
    tacoContent.classList.add('tacos-content-div');
   
    /* Taco 1 */
    /* Tacos Card */
    const tacoCard = document.createElement('div');
    tacoCard.classList.add('taco-card');
    /* Tacos IMG Div */
    const cardImgDiv = document.createElement('div');
    cardImgDiv.classList.add('card-img-div');
    /* Tacos IMG */
    const chickenTacoImg = new Image();
    chickenTacoImg.src = ChickenTacos;
    chickenTacoImg.classList.add('chicken-taco-img');
    /* Tacos Card Info Div */
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    /* Tacos Name and Price Div */
    const tacoNamePrice = document.createElement('div');
    tacoNamePrice.classList.add('taco-name-price');
    const tacoName = document.createElement('span');
    tacoName.classList.add('taco-name');
    tacoName.textContent = 'Chicken Tacos';
    const tacoPrice = document.createElement('span');
    tacoPrice.classList.add('taco-price');
    tacoPrice.textContent = '$11.95';
    /* Tacos Description Div */
    const tacoDesc = document.createElement('div');
    tacoDesc.classList.add('taco-desc');
    const tacoDescContent = document.createElement('p');
    tacoDescContent.textContent = 'The most authentic chicken tacos you have ever tried. Brining together a composition of flavors to change anybody\'s day, for the best.';
    /* END of First Taco */

    /* Taco Card 2 */
    const tacoCard2 = document.createElement('div');
    tacoCard2.classList.add('taco-card');
    /* Tacos IMG Div */
    const cardImgDiv2 = document.createElement('div');
    cardImgDiv2.classList.add('card-img-div');
    /* Tacos IMG */
    const chickenTacoImg2 = new Image();
    chickenTacoImg2.src =CarneTacos;
    chickenTacoImg2.classList.add('chicken-taco-img');
    /* Tacos Card Info Div */
    const cardInfo2 = document.createElement('div');
    cardInfo2.classList.add('card-info');
    /* Tacos Name and Price Div */
    const tacoNamePrice2 = document.createElement('div');
    tacoNamePrice2.classList.add('taco-name-price');
    const tacoName2 = document.createElement('span');
    tacoName2.classList.add('taco-name');
    tacoName2.textContent = 'Carne Asada Tacos';
    const tacoPrice2 = document.createElement('span');
    tacoPrice2.classList.add('taco-price');
    tacoPrice2.textContent = '$11.95';
    /* Tacos Description Div */
    const tacoDesc2 = document.createElement('div');
    tacoDesc2.classList.add('taco-desc');
    const tacoDescContent2 = document.createElement('p');
    tacoDescContent2.textContent = 'The most authentic carne asada tacos you have ever tried. Brining together a composition of flavors to change anybody\'s day, for the best.';


     /* Taco Card 3 */
     const tacoCard3 = document.createElement('div');
     tacoCard3.classList.add('taco-card');
     /* Tacos IMG Div */
     const cardImgDiv3 = document.createElement('div');
     cardImgDiv3.classList.add('card-img-div');
     /* Tacos IMG */
     const chickenTacoImg3 = new Image();
     chickenTacoImg3.src = PorkTacos;
     chickenTacoImg3.classList.add('chicken-taco-img');
     /* Tacos Card Info Div */
     const cardInfo3 = document.createElement('div');
     cardInfo3.classList.add('card-info');
     /* Tacos Name and Price Div */
     const tacoNamePrice3 = document.createElement('div');
     tacoNamePrice3.classList.add('taco-name-price');
     const tacoName3 = document.createElement('span');
     tacoName3.classList.add('taco-name');
     tacoName3.textContent = 'Pork Tacos';
     const tacoPrice3 = document.createElement('span');
     tacoPrice3.classList.add('taco-price');
     tacoPrice3.textContent = '$11.95';
     /* Tacos Description Div */
     const tacoDesc3 = document.createElement('div');
     tacoDesc3.classList.add('taco-desc');
     const tacoDescContent3 = document.createElement('p');
     tacoDescContent3.textContent = 'The most authentic pork chicken tacos you have ever tried. Brining together a composition of flavors to change anybody\'s day, for the best.';

    container.appendChild(menuHeader);
    container.appendChild(menuTacos);
    container.appendChild(tacoContent);
    menuHeader.appendChild(title);
    menuTacos.appendChild(tacosTitle);

    /* Taco 1 */
    tacoContent.appendChild(tacoCard);
    tacoCard.appendChild(cardImgDiv);
    cardImgDiv.appendChild(chickenTacoImg);
    tacoCard.appendChild(cardInfo);
    cardInfo.appendChild(tacoNamePrice);
    tacoNamePrice.appendChild(tacoName);
    tacoNamePrice.appendChild(tacoPrice);
    cardInfo.appendChild(tacoDesc);
    tacoDesc.appendChild(tacoDescContent);

    /* Taco 2 */
    tacoContent.appendChild(tacoCard2);
    tacoCard2.appendChild(cardImgDiv2);
    cardImgDiv2.appendChild(chickenTacoImg2);
    tacoCard2.appendChild(cardInfo2);
    cardInfo2.appendChild(tacoNamePrice2);
    tacoNamePrice2.appendChild(tacoName2);
    tacoNamePrice2.appendChild(tacoPrice2);
    cardInfo2.appendChild(tacoDesc2);
    tacoDesc2.appendChild(tacoDescContent2);

    /* Taco 3 */
    tacoContent.appendChild(tacoCard3);
    tacoCard3.appendChild(cardImgDiv3);
    cardImgDiv3.appendChild(chickenTacoImg3);
    tacoCard3.appendChild(cardInfo3);
    cardInfo3.appendChild(tacoNamePrice3);
    tacoNamePrice3.appendChild(tacoName3);
    tacoNamePrice3.appendChild(tacoPrice3);
    cardInfo3.appendChild(tacoDesc3);
    tacoDesc3.appendChild(tacoDescContent3);

    
    
    return container;
}
export default menuComponent;