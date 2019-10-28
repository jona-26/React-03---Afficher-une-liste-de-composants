import React from 'react';
import Contact from './Contact';
import './Contact.css';

const Marge = {
    name: 'Marge',
    avatar: "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201805/182014771.jpg",
    online: true,
}
const Homer = {
    name: 'Homer',
    avatar: "https://img1.looper.com/img/gallery/the-untold-truth-of-the-simpsons/intro-1495123029.jpg",
    online: false,
}
const Bart = {
    name: 'Bart',
    avatar: "https://vignette.wikia.nocookie.net/simpsons/images/a/aa/Bart_simpson.png",
    online: true,
}
const Lisa = {
    name: 'Lisa',
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png",
    online: false,
}
const Maggie = {
    name: 'Maggie',
    avatar: "https://timedotcom.files.wordpress.com/2014/08/simpsons-06.jpg",
    online: true,
}

const simpsons = [Marge, Homer, Bart, Lisa, Maggie];
 const ContactList = () => {
 return (
   <ul>
     {
       simpsons.map(contact => <li> <Contact {...contact} /> </li>)
     }
   </ul>
 );
   }
export default ContactList;
