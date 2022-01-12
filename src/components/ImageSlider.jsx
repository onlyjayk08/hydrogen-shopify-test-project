import React from 'react';
import { Slide } from 'react-slideshow-image';
import './ImageSlider.css';

const slideImages = [
  '../../public/assets/image1.jpg',
  '../../public/assets/image2.jpg',
  '../../public/assets/image3.jpg',
  '../../public/assets/image1.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

export default function ImageSlider(){
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <span>Slide 4</span>
          </div>
        </div>
      </Slide>
    )
}




// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/style.css';

// const slideImages = [
//   {
//     url: '../../public/assets/image1.jpg',
//     caption: 'Slide 1'
//   },
//   {
//     url: '../../public/assets/image2.jpg',
//     caption: 'Slide 2'
//   },
//   {
//     url: '../../public/assets/image3.jpg',
//     caption: 'Slide 3'
//   },
//   {
//     url: '../../public/assets/image4.jpg',
//     caption: 'Slide 4'
//   },
// ]

// export default function ImageSlider(){
//   return(
//     <div className="slide-container">
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <div className="each-slide" key={index}>
//               <div style={{'backgroundImage': `url(${slideImage.url})`}}>
//                 <span>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))} 
//         </Slide>
//       </div>
//   )
// }