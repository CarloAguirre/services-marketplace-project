
import {Cloudinary} from "@cloudinary/url-gen";

export const CloudinaryTest = () => {

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'demo'
        }
      }); 

      const myImage = cld.image('ozzn0o2fe1nmpbii39t0')
      
  return (
    <div>{myImage}t</div>
  )
}
