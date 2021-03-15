import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

function Slider({gallery}) {
    let items = gallery.map((elem, index) => {
        return {
            src: `assets/gallery/${elem.img}`,
            altText: `Slide ${index}`,
            caption: elem.info,
            header: elem.place,
            key: index
        }
    })
   
   return <div className="slider">
       <UncontrolledCarousel items={items} />
   </div>
    
}

export { Slider }