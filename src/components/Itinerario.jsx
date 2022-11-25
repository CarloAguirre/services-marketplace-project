import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import required qualifiers.
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";


export const Itinerario = ({nombre, img}) => {

  

    
    let imgSplit = img.split('/');
    
    let imgSplitted = imgSplit[imgSplit.length-1];
    
    let imgIdUndotted = imgSplitted.split('.')
    
    let imgId = imgIdUndotted[imgIdUndotted.length-2]

    const cld = new Cloudinary({
    cloud: {
        cloudName: 'dubwhwd1w'
    }
    }); 

    const myImage = cld.image(`${imgId}`);

  return (
    <>
    <h3 className=" pt-5 mx-2 px-5 text-light text-center">{nombre}</h3>
    <div className="d-flex container container">
        <AdvancedImage cldImg={myImage} />
        <p style={{ color: 'white', marginTop: '8rem' }} className="p-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
    </div>
        <h3 className="mt-5 mx-2 px-5 text-light">Itinerario:</h3>
        <p className="mt-2 px-5 mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis dolor veritatis nihil aut dicta amet. Culpa quae, sint optio magni id ipsum repellendus, 
            exercitationem hic voluptatum soluta dolor libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis dolor veritatis nihil aut dicta amet. Culpa quae, sint optio magni id ipsum repellendus, 
            exercitationem hic voluptatum soluta dolor libero. 
        </p>
        <br />
        <p className="mt-2 px-5 mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis dolor veritatis nihil aut dicta amet. Culpa quae, sint optio magni id ipsum repellendus, 
        exercitationem hic voluptatum soluta dolor libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis dolor veritatis nihil aut dicta amet. Culpa quae, sint optio magni id ipsum repellendus, 
        exercitationem hic voluptatum soluta dolor libero. 
        </p>


        <h3 className="mt-5 mx-2 px-5 text-light text-center">Especificaciones:</h3>
        <ul className="list-group list-group-horizontal justify-content-center my-5">
            <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Altura:</strong> 6.000 </li>
            <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Dificultad:</strong> media </li>
            <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Distancia:</strong> 30km </li>
            <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Tiempo:</strong> 4 horas </li>
        </ul>

    </>
  )
}
