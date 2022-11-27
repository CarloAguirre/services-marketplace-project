import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Cloudinary} from "@cloudinary/url-gen";


import { productInfoFetch } from '../../helpers/productosFetch';
import CardModel from './CardModel';
import { IsLoading } from './IsLoading';





export const CardGrid = () => {


  const [imageIdArray, setImageIdArray] = useState([[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []])
  
  const getImagesID = async()=>{
    
    await productInfoFetch()
    .then(response =>{
      console.log(response)
      setImageIdArray(response);
    })
  };

  useEffect(() => {
    getImagesID()
  }, [setImageIdArray])


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dubwhwd1w'
    }
  }); 
  
  let imagenes = {
    myImage1 :cld.image(`${imageIdArray[0][0]}`), 
    myImage2 :cld.image(`${imageIdArray[0][1]}`), 
    myImage3 :cld.image(`${imageIdArray[0][2]}`), 
    myImage4 :cld.image(`${imageIdArray[0][3]}`), 
    myImage5 :cld.image(`${imageIdArray[0][4]}`), 
    myImage6 :cld.image(`${imageIdArray[0][5]}`), 
    
  }

  let names = {
   name1: imageIdArray[1][0],
   name2: imageIdArray[1][1],
   name3: imageIdArray[1][2],
   name4: imageIdArray[1][3],
   name5: imageIdArray[1][4],
   name6: imageIdArray[1][5]
  }

  let prices = {
    price1: imageIdArray[2][0],
    price2: imageIdArray[2][1],
    price3: imageIdArray[2][2],
    price4: imageIdArray[2][3],
    price5: imageIdArray[2][4],
    price6: imageIdArray[2][5]
   }

   let users = {
    user1: imageIdArray[3][0],
    user2: imageIdArray[3][1],
    user3: imageIdArray[3][2],
    user4: imageIdArray[3][3],
    user5: imageIdArray[3][4],
    user6: imageIdArray[3][5]
   }

   let descripciones = {
    descripcion1: imageIdArray[4][0],
    descripcion2: imageIdArray[4][1],
    descripcion3: imageIdArray[4][2],
    descripcion4: imageIdArray[4][3],
    descripcion5: imageIdArray[4][4],
    descripcion6: imageIdArray[4][5]
   }

   let ciudades = {
    ciudad1: imageIdArray[5][0],
    ciudad2: imageIdArray[5][1],
    ciudad3: imageIdArray[5][2],
    ciudad4: imageIdArray[5][3],
    ciudad5: imageIdArray[5][4],
    ciudad6: imageIdArray[5][5]
   }

   let ids = {
    id1: imageIdArray[6][0],
    id2: imageIdArray[6][1],
    id3: imageIdArray[6][2],
    id4: imageIdArray[6][3],
    id5: imageIdArray[6][4],
    id6: imageIdArray[6][5]
   }

    let itinerario = {
      itinerario1: imageIdArray[6][0],
      itinerario2: imageIdArray[6][1],
      itinerario3: imageIdArray[6][2],
      itinerario4: imageIdArray[6][3],
      itinerario5: imageIdArray[6][4],
      itinerario6: imageIdArray[6][5]
    }  
    let requisitos = {
      requisitos1: imageIdArray[7][0],
      requisitos2: imageIdArray[7][1],
      requisitos3: imageIdArray[7][2],
      requisitos4: imageIdArray[7][3],
      requisitos5: imageIdArray[7][4],
      requisitos6: imageIdArray[7][5]
    }
    let altura = {
      altura1: imageIdArray[8][0],
      altura2: imageIdArray[8][1],
      altura3: imageIdArray[8][2],
      altura4: imageIdArray[8][3],
      altura5: imageIdArray[8][4],
      altura6: imageIdArray[8][5]
    }
    let dificultad = {
      dificultad1: imageIdArray[9][0],
      dificultad2: imageIdArray[9][1],
      dificultad3: imageIdArray[9][2],
      dificultad4: imageIdArray[9][3],
      dificultad5: imageIdArray[9][4],
      dificultad6: imageIdArray[9][5]
    }
    let distancia = {
      distancia1: imageIdArray[10][0],
      distancia2: imageIdArray[10][1],
      distancia3: imageIdArray[10][2],
      distancia4: imageIdArray[10][3],
      distancia5: imageIdArray[10][4],
      distancia6: imageIdArray[10][5]
    }
    let tiempo = {
      tiempo1: imageIdArray[11][0],
      tiempo2: imageIdArray[11][1],
      tiempo3: imageIdArray[11][2],
      tiempo4: imageIdArray[11][3],
      tiempo5: imageIdArray[11][4],
      tiempo6: imageIdArray[11][5]
    }
    let incluye1 = {
      incluye1: imageIdArray[12][0],
      incluye2: imageIdArray[12][1],
      incluye3: imageIdArray[12][2],
      incluye4: imageIdArray[12][3],
      incluye5: imageIdArray[12][4],
      incluye6: imageIdArray[12][5]
    }
    let incluye2 = {
      incluye21: imageIdArray[13][0],
      incluye22: imageIdArray[13][1],
      incluye23: imageIdArray[13][2],
      incluye24: imageIdArray[13][3],
      incluye25: imageIdArray[13][4],
      incluye26: imageIdArray[13][5]
    }
    let incluye3 = {
      incluye31: imageIdArray[14][0],
      incluye32: imageIdArray[14][1],
      incluye33: imageIdArray[14][2],
      incluye34: imageIdArray[14][3],
      incluye35: imageIdArray[14][4],
      incluye36: imageIdArray[14][5]
    }
    let incluye4 = {
      incluye41: imageIdArray[15][0],
      incluye42: imageIdArray[15][1],
      incluye43: imageIdArray[15][2],
      incluye44: imageIdArray[15][3],
      incluye45: imageIdArray[15][4],
      incluye46: imageIdArray[15][5]
    }
    let incluye5 = {
      incluye51: imageIdArray[17][0],
      incluye52: imageIdArray[17][1],
      incluye53: imageIdArray[17][2],
      incluye54: imageIdArray[17][3],
      incluye55: imageIdArray[17][4],
      incluye56: imageIdArray[17][5]
    }
    let incluye6 = {
      incluye61: imageIdArray[18][0],
      incluye62: imageIdArray[18][1],
      incluye63: imageIdArray[18][2],
      incluye64: imageIdArray[18][3],
      incluye65: imageIdArray[18][4],
      incluye66: imageIdArray[18][5]
    }
    let noIncluye1 = {
      noIncluye11: imageIdArray[19][0],
      noIncluye12: imageIdArray[19][1],
      noIncluye13: imageIdArray[19][2],
      noIncluye14: imageIdArray[19][3],
      noIncluye15: imageIdArray[19][4],
      noIncluye16: imageIdArray[19][5]
    }
    let noIncluye2 = {
      noIncluye21: imageIdArray[20][0],
      noIncluye22: imageIdArray[20][1],
      noIncluye23: imageIdArray[20][2],
      noIncluye24: imageIdArray[20][3],
      noIncluye25: imageIdArray[20][4],
      noIncluye26: imageIdArray[20][5]
    }
    let noIncluye3 = {
      noIncluye31: imageIdArray[21][0],
      noIncluye32: imageIdArray[21][1],
      noIncluye33: imageIdArray[21][2],
      noIncluye34: imageIdArray[21][3],
      noIncluye35: imageIdArray[21][4],
      noIncluye36: imageIdArray[21][5]
    }
    let noIncluye4 = {
      noIncluye41: imageIdArray[22][0],
      noIncluye42: imageIdArray[22][1],
      noIncluye43: imageIdArray[22][2],
      noIncluye44: imageIdArray[22][3],
      noIncluye45: imageIdArray[22][4],
      noIncluye46: imageIdArray[22][5]
    }
    let noIncluye5 = {
      noIncluye51: imageIdArray[23][0],
      noIncluye52: imageIdArray[23][1],
      noIncluye53: imageIdArray[23][2],
      noIncluye54: imageIdArray[23][3],
      noIncluye55: imageIdArray[23][4],
      noIncluye56: imageIdArray[23][5]
    }
    let noIncluye6 = {
      noIncluye61: imageIdArray[24][0],
      noIncluye62: imageIdArray[24][1],
      noIncluye63: imageIdArray[24][2],
      noIncluye64: imageIdArray[24][3],
      noIncluye65: imageIdArray[24][4],
      noIncluye66: imageIdArray[24][5]
    }
    let noIncluye7 = {
      noIncluye71: imageIdArray[25][0],
      noIncluye72: imageIdArray[25][1],
      noIncluye73: imageIdArray[25][2],
      noIncluye74: imageIdArray[25][3],
      noIncluye75: imageIdArray[25][4],
      noIncluye76: imageIdArray[25][5]
    }
    let noIncluye8 = {
      noIncluye81: imageIdArray[26][0],
      noIncluye82: imageIdArray[26][1],
      noIncluye83: imageIdArray[26][2],
      noIncluye84: imageIdArray[26][3],
      noIncluye85: imageIdArray[26][4],
      noIncluye86: imageIdArray[26][5]
    }
    let noIncluye9 = {
      noIncluye91: imageIdArray[27][0],
      noIncluye92: imageIdArray[27][1],
      noIncluye93: imageIdArray[27][2],
      noIncluye94: imageIdArray[27][3],
      noIncluye95: imageIdArray[27][4],
      noIncluye96: imageIdArray[27][5]
    }
    let noIncluye10 = {
      noIncluye101: imageIdArray[28][0],
      noIncluye102: imageIdArray[28][1],
      noIncluye103: imageIdArray[28][2],
      noIncluye104: imageIdArray[28][3],
      noIncluye105: imageIdArray[28][4],
      noIncluye106: imageIdArray[28][5]
    }
    let noIncluye11 = {
      noIncluye111: imageIdArray[29][0],
      noIncluye112: imageIdArray[29][1],
      noIncluye113: imageIdArray[29][2],
      noIncluye114: imageIdArray[29][3],
      noIncluye115: imageIdArray[29][4],
      noIncluye116: imageIdArray[29][5]
    }
    let noIncluye12 = {
      noIncluye121: imageIdArray[30][0],
      noIncluye122: imageIdArray[30][1],
      noIncluye123: imageIdArray[30][2],
      noIncluye124: imageIdArray[30][3],
      noIncluye125: imageIdArray[30][4],
      noIncluye126: imageIdArray[30][5]
    }
    let noIncluye13 = {
      noIncluye131: imageIdArray[31][0],
      noIncluye132: imageIdArray[31][1],
      noIncluye133: imageIdArray[31][2],
      noIncluye134: imageIdArray[31][3],
      noIncluye135: imageIdArray[31][4],
      noIncluye136: imageIdArray[31][5]
    }
    let noIncluye14 = {
      noIncluye141: imageIdArray[32][0],
      noIncluye142: imageIdArray[32][1],
      noIncluye143: imageIdArray[32][2],
      noIncluye144: imageIdArray[32][3],
      noIncluye145: imageIdArray[32][4],
      noIncluye146: imageIdArray[32][5]
    }
    let noIncluye15 = {
      noIncluye151: imageIdArray[33][0],
      noIncluye152: imageIdArray[33][1],
      noIncluye153: imageIdArray[33][2],
      noIncluye154: imageIdArray[33][3],
      noIncluye155: imageIdArray[33][4],
      noIncluye156: imageIdArray[33][5]
    }
    let necesario1 = {
      necesario11: imageIdArray[34][0],
      necesario12: imageIdArray[34][1],
      necesario13: imageIdArray[34][2],
      necesario14: imageIdArray[34][3],
      necesario15: imageIdArray[34][4],
      necesario16: imageIdArray[34][5]
    }
    let necesario2 = {
      necesario21: imageIdArray[35][0],
      necesario22: imageIdArray[35][1],
      necesario23: imageIdArray[35][2],
      necesario24: imageIdArray[35][3],
      necesario25: imageIdArray[35][4],
      necesario26: imageIdArray[35][5]
    }
    let necesario3 = {
      necesario31: imageIdArray[36][0],
      necesario32: imageIdArray[36][1],
      necesario33: imageIdArray[36][2],
      necesario34: imageIdArray[36][3],
      necesario35: imageIdArray[36][4],
      necesario36: imageIdArray[36][5]
    }
    let necesario4 = {
      necesario41: imageIdArray[37][0],
      necesario42: imageIdArray[37][1],
      necesario43: imageIdArray[37][2],
      necesario44: imageIdArray[37][3],
      necesario45: imageIdArray[37][4],
      necesario46: imageIdArray[37][5]
    }
    let necesario5 = {
      necesario51: imageIdArray[38][0],
      necesario52: imageIdArray[38][1],
      necesario53: imageIdArray[38][2],
      necesario54: imageIdArray[38][3],
      necesario55: imageIdArray[38][4],
      necesario56: imageIdArray[38][5]
    }
    let necesario6 = {
      necesario61: imageIdArray[39][0],
      necesario62: imageIdArray[39][1],
      necesario63: imageIdArray[39][2],
      necesario64: imageIdArray[39][3],
      necesario65: imageIdArray[39][4],
      necesario66: imageIdArray[39][5]
    }
    let necesario7 = {
      necesario71: imageIdArray[40][0],
      necesario72: imageIdArray[40][1],
      necesario73: imageIdArray[40][2],
      necesario74: imageIdArray[40][3],
      necesario75: imageIdArray[40][4],
      necesario76: imageIdArray[40][5]
    }
    let necesario8 = {
      necesario81: imageIdArray[41][0],
      necesario82: imageIdArray[41][1],
      necesario83: imageIdArray[41][2],
      necesario84: imageIdArray[41][3],
      necesario85: imageIdArray[41][4],
      necesario86: imageIdArray[41][5]
    }
    let necesario9 = {
      necesario91: imageIdArray[42][0],
      necesario92: imageIdArray[42][1],
      necesario93: imageIdArray[42][2],
      necesario94: imageIdArray[42][3],
      necesario95: imageIdArray[42][4],
      necesario96: imageIdArray[42][5]
    }
    let necesario10 = {
      necesario101: imageIdArray[43][0],
      necesario102: imageIdArray[43][1],
      necesario103: imageIdArray[43][2],
      necesario104: imageIdArray[43][3],
      necesario105: imageIdArray[43][4],
      necesario106: imageIdArray[43][5]
    }
    let necesario11 = {
      necesario111: imageIdArray[44][0],
      necesario112: imageIdArray[44][1],
      necesario113: imageIdArray[44][2],
      necesario114: imageIdArray[44][3],
      necesario115: imageIdArray[44][4],
      necesario116: imageIdArray[44][5]
    }
    let necesario12 = {
      necesario121: imageIdArray[45][0],
      necesario122: imageIdArray[45][1],
      necesario123: imageIdArray[45][2],
      necesario124: imageIdArray[45][3],
      necesario125: imageIdArray[45][4],
      necesario126: imageIdArray[45][5]
    }
    let necesario13 = {
      necesario131: imageIdArray[46][0],
      necesario132: imageIdArray[46][1],
      necesario133: imageIdArray[46][2],
      necesario134: imageIdArray[46][3],
      necesario135: imageIdArray[46][4],
      necesario136: imageIdArray[46][5]
    }
    let necesario14 = {
      necesario141: imageIdArray[47][0],
      necesario142: imageIdArray[47][1],
      necesario143: imageIdArray[47][2],
      necesario144: imageIdArray[47][3],
      necesario145: imageIdArray[47][4],
      necesario146: imageIdArray[47][5]
    }
    let necesario16 = {
      necesario161: imageIdArray[48][0],
      necesario162: imageIdArray[48][1],
      necesario163: imageIdArray[48][2],
      necesario164: imageIdArray[48][3],
      necesario165: imageIdArray[48][4],
      necesario166: imageIdArray[48][5]
    }
    let necesario17 = {
      necesario171: imageIdArray[49][0],
      necesario172: imageIdArray[49][1],
      necesario173: imageIdArray[49][2],
      necesario174: imageIdArray[49][3],
      necesario175: imageIdArray[49][4],
      necesario176: imageIdArray[49][5]
    }
    let necesario18 = {
      necesario181: imageIdArray[50][0],
      necesario182: imageIdArray[50][1],
      necesario183: imageIdArray[50][2],
      necesario184: imageIdArray[50][3],
      necesario185: imageIdArray[50][4],
      necesario186: imageIdArray[50][5]
    }
    let necesario19 = {
      necesario191: imageIdArray[51][0],
      necesario192: imageIdArray[51][1],
      necesario193: imageIdArray[51][2],
      necesario194: imageIdArray[51][3],
      necesario195: imageIdArray[51][4],
      necesario196: imageIdArray[51][5]
    }
    let necesario20 = {
      necesario201: imageIdArray[52][0],
      necesario202: imageIdArray[52][1],
      necesario203: imageIdArray[52][2],
      necesario204: imageIdArray[52][3],
      necesario205: imageIdArray[52][4],
      necesario206: imageIdArray[52][5]
    }
    let necesario21 = {
      necesario211: imageIdArray[53][0],
      necesario212: imageIdArray[53][1],
      necesario213: imageIdArray[53][2],
      necesario214: imageIdArray[53][3],
      necesario215: imageIdArray[53][4],
      necesario216: imageIdArray[53][5]
    }


const onClickNextPage = ({target})=>{
  
  let newPages = [];
  let newNames = [];
  let newPrices = [];
  let newUsers = [];
  let newDesc = [];
  let newCity = [];
  let newIds = [];
  let newItinerario = [];
  let newRequisitos = [];
  let newAltura = [];
  let newDificultad = [];
  let newDistancia = [];
  let newTiempo = [];
  let newIncluye1 = [];
  let newIncluye2 = [];
  let newIncluye3 = [];
  let newIncluye4 = [];
  let newIncluye5 = [];
  let newIncluye6 = [];
  let newNoIncluye1 = [];
  let newNoIncluye2 = [];
  let newNoIncluye3 = [];
  let newNoIncluye4 = [];
  let newNoIncluye5 = [];
  let newNoIncluye6 = [];
  let newNoIncluye7 = [];
  let newNoIncluye8 = [];
  let newNoIncluye9 = [];
  let newNoIncluye10 = [];
  let newNoIncluye11 = [];
  let newNoIncluye12 = [];
  let newNoIncluye13 = [];
  let newNoIncluye14 = [];
  let newNoIncluye15 = [];
  let newNecesario1 = [];
  let newNecesario2 = [];
  let newNecesario3 = [];
  let newNecesario4 = [];
  let newNecesario5 = [];
  let newNecesario6 = [];
  let newNecesario7 = [];
  let newNecesario8 = [];
  let newNecesario9 = [];
  let newNecesario10 = [];
  let newNecesario11 = [];
  let newNecesario12 = [];
  let newNecesario13 = [];
  let newNecesario14 = [];
  let newNecesario16 = [];
  let newNecesario17 = [];
  let newNecesario18 = [];
  let newNecesario19 = [];
  let newNecesario20 = [];
  let newNecesario21= [];
  
  if(target.name === 'next'){

    console.log('next')
    let i = '';
    
    for(i=6; i<imageIdArray[0].length; i++){
      
      newPages.push(imageIdArray[0][i])
      newNames.push(imageIdArray[1][i])
      newPrices.push(imageIdArray[2][i])
      newUsers.push(imageIdArray[3][i])
      newDesc.push(imageIdArray[4][i])
      newCity.push(imageIdArray[5][i])
      newIds.push(imageIdArray[6][i])
      newItinerario.push(imageIdArray[7][i])
      newRequisitos.push(imageIdArray[8][i])
      newAltura.push(imageIdArray[9][i])
      newDificultad.push(imageIdArray[10][i])
      newDistancia.push(imageIdArray[11][i])
      newTiempo.push(imageIdArray[12][i])
      newIncluye1.push(imageIdArray[13][i])
      newIncluye2.push(imageIdArray[14][i])
      newIncluye3.push(imageIdArray[15][i])
      newIncluye4.push(imageIdArray[16][i])
      newIncluye5.push(imageIdArray[17][i])
      newIncluye6.push(imageIdArray[18][i])
      newNoIncluye1.push(imageIdArray[19][i])
      newNoIncluye2.push(imageIdArray[20][i])
      newNoIncluye3.push(imageIdArray[21][i])
      newNoIncluye4.push(imageIdArray[22][i])
      newNoIncluye5.push(imageIdArray[23][i])
      newNoIncluye6.push(imageIdArray[24][i])
      newNoIncluye7.push(imageIdArray[25][i])
      newNoIncluye8.push(imageIdArray[26][i])
      newNoIncluye9.push(imageIdArray[27][i])
      newNoIncluye10.push(imageIdArray[28][i])
      newNoIncluye11.push(imageIdArray[29][i])
      newNoIncluye12.push(imageIdArray[30][i])
      newNoIncluye13.push(imageIdArray[31][i])
      newNoIncluye14.push(imageIdArray[32][i])
      newNoIncluye15.push(imageIdArray[33][i])
      newNecesario1.push(imageIdArray[34][i])
      newNecesario2.push(imageIdArray[35][i])
      newNecesario3.push(imageIdArray[36][i])
      newNecesario4.push(imageIdArray[37][i])
      newNecesario5.push(imageIdArray[38][i])
      newNecesario6.push(imageIdArray[39][i])
      newNecesario7.push(imageIdArray[40][i])
      newNecesario8.push(imageIdArray[41][i])
      newNecesario9.push(imageIdArray[42][i])
      newNecesario10.push(imageIdArray[43][i])
      newNecesario11.push(imageIdArray[44][i])
      newNecesario12.push(imageIdArray[45][i])
      newNecesario13.push(imageIdArray[46][i])
      newNecesario14.push(imageIdArray[47][i])
      newNecesario16.push(imageIdArray[48][i])
      newNecesario17.push(imageIdArray[49][i])
      newNecesario18.push(imageIdArray[50][i])
      newNecesario19.push(imageIdArray[51][i])
      newNecesario20.push(imageIdArray[52][i])
      newNecesario21.push(imageIdArray[53][i])
    }
    setImageIdArray([newPages, newNames, newPrices, newUsers, newDesc, newCity, newIds, newItinerario, 
      newRequisitos, 
      newAltura, 
      newDificultad, 
      newDistancia, 
      newTiempo, 
      newIncluye1, 
      newIncluye2, 
      newIncluye3, 
      newIncluye4, 
      newIncluye5, 
      newIncluye6, 
      newNoIncluye1, 
      newNoIncluye2, 
      newNoIncluye3, 
      newNoIncluye4, 
      newNoIncluye5, 
      newNoIncluye6, 
      newNoIncluye7, 
      newNoIncluye8, 
      newNoIncluye9, 
      newNoIncluye10, 
      newNoIncluye11, 
      newNoIncluye12, 
      newNoIncluye13, 
      newNoIncluye14, 
      newNoIncluye15, 
      newNecesario1, 
      newNecesario2, 
      newNecesario3, 
      newNecesario4, 
      newNecesario5, 
      newNecesario6, 
      newNecesario7, 
      newNecesario8, 
      newNecesario9, 
      newNecesario10, 
      newNecesario11, 
      newNecesario12, 
      newNecesario13, 
      newNecesario14, 
      newNecesario16, 
      newNecesario17, 
      newNecesario18, 
      newNecesario19, 
      newNecesario20, 
      newNecesario21])
  }

  if(target.name === 'prev'){

    console.log('prev')
    getImagesID();
  }
};
   
    return (
<> 

      <div className='mx-3'>
      <Container>
        <Row>
          
          {
        
            (imageIdArray[0][0])
                    ?
          
        
            [(imageIdArray[0][0])
                    ? <Col xs={12} md={6} xl={4} key = 'col1'> {<CardModel img={imagenes.myImage1} title={names.name1} price={prices.price1} user={users.user1} desc={descripciones.descripcion1} city={ciudades.ciudad1} id={ids.id1}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][1])
                    ? <Col xs={12} md={6} xl={4} key = 'col2' > {<CardModel img={imagenes.myImage2} title={names.name2} price={prices.price2} user={users.user2} desc={descripciones.descripcion2} city={ciudades.ciudad2} id={ids.id2}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][2])
                    ? <Col xs={12} md={6} xl={4} key = 'col3'> {<CardModel img={imagenes.myImage3} title={names.name3} price={prices.price3} user={users.user3} desc={descripciones.descripcion3} city={ciudades.ciudad3} id={ids.id3}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][3])
                    ? <Col xs={12} md={6} xl={4} key = 'col4'> {<CardModel img={imagenes.myImage4} title={names.name4} price={prices.price4} user={users.user4} desc={descripciones.descripcion4} city={ciudades.ciudad4} id={ids.id4} />} </Col>
                    : null,
          
          
            (imageIdArray[0][4])
                    ? <Col xs={12} md={6} xl={4} key = 'col5'> {<CardModel img={imagenes.myImage5} title={names.name5} price={prices.price5} user={users.user5} desc={descripciones.descripcion5} city={ciudades.ciudad5} id={ids.id5}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][5])
                    ? <Col xs={12} md={6} xl={4} key = 'col6'> {<CardModel img={imagenes.myImage6} title={names.name6} price={prices.price6} user={users.user6} desc={descripciones.descripcion6} city={ciudades.ciudad6} id={ids.id6}/>} </Col>
                    : null]

                    :<IsLoading />
                  }
          
        </Row>
      </Container>
      
      {
            (imageIdArray[0][5] && imageIdArray[0][6])
                    ?  <div className='text-center m-3 mb-5'><button onClick={onClickNextPage} name = 'next' type="button" className="btn btn-success btn-lg text-center"> VER MAS </button></div>
                    :  <div className='text-center m-3 mb-5'><button onClick={onClickNextPage} name = 'prev' type="button" className="btn btn-success btn-lg text-center"> VER MAS </button></div>
          }
      
      
      </div>
</>

   
  
  );
}
