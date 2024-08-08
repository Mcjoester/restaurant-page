import PhoneIcon from './phone.svg';
import EmailIcon from './email.svg';
import AddressIcon from './address.svg';
import Location from './map.png';


const contactComponent = () => {
    const container = document.createElement('div');
    container.classList.add('contact-div');

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    /* Contact Card */
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');
    /* Header */
    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contact-header');
    const contactTitle = document.createElement('h1');
    /* Title */
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = "Contact Us";
    /* Contact Content Div */
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');

    /* Phone Container */
    const contactPhoneContainer = document.createElement('div');
    contactPhoneContainer.classList.add('phone-container');
    /* Phone SVG Container */
    const phoneIconContainer = document.createElement('div');
    phoneIconContainer.classList.add('phone-svg-container');
    const phoneSVG = new Image();
    phoneSVG.src = PhoneIcon;
    phoneSVG.classList.add('phone-svg');
    /* Phone Number Container */
    const phoneNumberContainer = document.createElement('div');
    phoneNumberContainer.classList.add('phone-number-container');
    const phoneNumber = document.createElement('span');
    phoneNumber.classList.add('phone-number');
    phoneNumber.textContent = '+1 (123)456-7890';


    /* Email Container */
    const contactEmailContainer = document.createElement('div');
    contactEmailContainer.classList.add('email-container');
    /* Email SVG Container */
    const emailIconContainer = document.createElement('div');
    emailIconContainer.classList.add('phone-svg-container');
    const emailSVG = new Image();
    emailSVG.src = EmailIcon;
    emailSVG.classList.add('email-svg');
    /* Email Address Container */
    const emailAddressContainer = document.createElement('div');
    emailAddressContainer.classList.add('email-address-container');
    const emailAddress = document.createElement('span');
    emailAddress.classList.add('email-address');
    emailAddress.textContent = 'info@lostacosbuenos.com';

    /* Address Container */
    const contactAddressContainer = document.createElement('div');
    contactAddressContainer.classList.add('address-container');
    /* Address SVG Container */
    const addressIconContainer = document.createElement('div');
    addressIconContainer.classList.add('address-svg-container');
    const addressSVG = new Image();
    addressSVG.src = AddressIcon;
    addressSVG.classList.add('address-svg');
    /* Street Address Container */
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container');
    const address = document.createElement('span');
    address.classList.add('address');
    address.textContent = '1234 N Puro Taco St, Phoenix, AZ 85001';

    /* Hours Card */
    const hoursCard = document.createElement('div');
    hoursCard.classList.add('hours-card');
     /* Hours Header */
    const hoursHeader = document.createElement('div');
    hoursHeader.classList.add('hours-header');
    const hoursTitle = document.createElement('h1');
    /* Title */
    hoursTitle.classList.add('hours-title');
    hoursTitle.textContent = "Our Hours";
     /* Hours Content Div */
    const hoursContent = document.createElement('div');
    hoursContent.classList.add('hours-content');
    /* open hours container */
    const hoursContentContainer = document.createElement('div');
    hoursContentContainer.classList.add('hours-content-container');

    const openDaysContainer = document.createElement('div');
    openDaysContainer.classList.add('open-days-container');
    const openDays = document.createElement('span');
    openDays.classList.add('open-days');
    openDays.textContent = 'Wednesday - Sunday';

    const openHoursContainer = document.createElement('div');
    openHoursContainer.classList.add('open-hours-container');
    const openHours = document.createElement('span');
    openHours.classList.add('open-hours');
    openHours.textContent = '4pm - 12am';

    /* closed hours container */
    const closedContentContainer = document.createElement('div');
    closedContentContainer.classList.add('closed-content-container');

    const closedDaysContainer = document.createElement('div');
    closedDaysContainer.classList.add('closed-days-container');
    const closedDays = document.createElement('span');
    closedDays.classList.add('closed-days');
    closedDays.textContent = 'Monday';

    const closedHoursContainer = document.createElement('div');
    closedHoursContainer.classList.add('closed-hours-container');
    const closedHours = document.createElement('span');
    closedHours.classList.add('closed-hours');
    closedHours.textContent = 'Closed';

    /* closed hours container 2 */
    const closedContentContainer2 = document.createElement('div');
    closedContentContainer2.classList.add('closed-content-container2');

    const closedDaysContainer2 = document.createElement('div');
    closedDaysContainer2.classList.add('closed-days-container2');
    const closedDays2 = document.createElement('span');
    closedDays2.classList.add('closed-days2');
    closedDays2.textContent = 'Tuesday';

    const closedHoursContainer2 = document.createElement('div');
    closedHoursContainer2.classList.add('closed-hours-container2');
    const closedHours2 = document.createElement('span');
    closedHours2.classList.add('closed-hours2');
    closedHours2.textContent = 'Closed';


     /* closed hours */
     hoursContent.appendChild(closedContentContainer);
     closedContentContainer.appendChild(closedDaysContainer);
     closedDaysContainer.appendChild(closedDays);
     closedContentContainer.appendChild(closedHoursContainer);
     closedHoursContainer.appendChild(closedHours);
 
     /* closed hours 2 */
     hoursContent.appendChild(closedContentContainer2);
     closedContentContainer2.appendChild(closedDaysContainer2);
     closedDaysContainer2.appendChild(closedDays2);
     closedContentContainer2.appendChild(closedHoursContainer2);
     closedHoursContainer2.appendChild(closedHours2);

     /* open hours */
    hoursContent.appendChild(hoursContentContainer);
    hoursContentContainer.appendChild(openDaysContainer);
    openDaysContainer.appendChild(openDays);
    hoursContentContainer.appendChild(openHoursContainer);
    openHoursContainer.appendChild(openHours);


    
    /* Map Card */
    const mapCard = document.createElement('div');
    mapCard.classList.add('map-card');
    /*Map Content */
    const mapContent = document.createElement('div');
    mapContent.classList.add('map-content');
    const mapPNG = new Image();
    mapPNG.src = Location;
    mapPNG.classList.add('map-png');

    container.appendChild(contactWrapper);
    contactWrapper.appendChild(contactCard);
    contactCard.appendChild(contactHeader);
    contactHeader.appendChild(contactTitle);
    contactCard.appendChild(contactContent);

    /* Hours Card */
    contactWrapper.appendChild(hoursCard);
    hoursCard.appendChild(hoursHeader);
    hoursHeader.appendChild(hoursTitle);
    hoursCard.appendChild(hoursContent);

    /* Map Card */
    contactWrapper.appendChild(mapCard);
    mapCard.appendChild(mapContent);
    mapContent.appendChild(mapPNG);

   

    /* Phone Container */
    contactContent.appendChild(contactPhoneContainer);
    contactPhoneContainer.appendChild(phoneIconContainer);
    phoneIconContainer.appendChild(phoneSVG);
    contactPhoneContainer.appendChild(phoneNumberContainer);
    phoneNumberContainer.appendChild(phoneNumber);
    /* Email Container */ 
    contactContent.appendChild(contactEmailContainer);
    contactEmailContainer.appendChild(emailIconContainer);
    emailIconContainer.appendChild(emailSVG);
    contactEmailContainer.appendChild(emailAddressContainer);
    emailAddressContainer.appendChild(emailAddress);

     /* Address Container */ 
     contactContent.appendChild(contactAddressContainer);
     contactAddressContainer.appendChild(addressIconContainer);
     addressIconContainer.appendChild(addressSVG);
     contactAddressContainer.appendChild(addressContainer);
     addressContainer.appendChild(address);

    return container;
}
export default contactComponent;