import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Cloudinary} from "@cloudinary/url-gen";


import { productInfoFetch } from '../../helpers/productosFetch';
import CardModel from './CardModel';
import { IsLoading } from './IsLoading';





export const CardGrid = () => {


  const [imageIdArray, setImageIdArray] = useState([[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []])
  
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
      itinerario1: imageIdArray[7][0],
      itinerario2: imageIdArray[7][1],
      itinerario3: imageIdArray[7][2],
      itinerario4: imageIdArray[7][3],
      itinerario5: imageIdArray[7][4],
      itinerario6: imageIdArray[7][5]
    }  
    let requisitos = {
      requisitos1: imageIdArray[8][0],
      requisitos2: imageIdArray[8][1],
      requisitos3: imageIdArray[8][2],
      requisitos4: imageIdArray[8][3],
      requisitos5: imageIdArray[8][4],
      requisitos6: imageIdArray[8][5]
    }
    let altura = {
      altura1: imageIdArray[9][0],
      altura2: imageIdArray[9][1],
      altura3: imageIdArray[9][2],
      altura4: imageIdArray[9][3],
      altura5: imageIdArray[9][4],
      altura6: imageIdArray[9][5]
    }
    let dificultad = {
      dificultad1: imageIdArray[10][0],
      dificultad2: imageIdArray[10][1],
      dificultad3: imageIdArray[10][2],
      dificultad4: imageIdArray[10][3],
      dificultad5: imageIdArray[10][4],
      dificultad6: imageIdArray[10][5]
    }
    let distancia = {
      distancia1: imageIdArray[11][0],
      distancia2: imageIdArray[11][1],
      distancia3: imageIdArray[11][2],
      distancia4: imageIdArray[11][3],
      distancia5: imageIdArray[11][4],
      distancia6: imageIdArray[11][5]
    }
    let tiempo = {
      tiempo1: imageIdArray[12][0],
      tiempo2: imageIdArray[12][1],
      tiempo3: imageIdArray[12][2],
      tiempo4: imageIdArray[12][3],
      tiempo5: imageIdArray[12][4],
      tiempo6: imageIdArray[12][5]
    }
    let incluye1 = {
      incluye11: imageIdArray[13][0],
      incluye12: imageIdArray[13][1],
      incluye13: imageIdArray[13][2],
      incluye14: imageIdArray[13][3],
      incluye15: imageIdArray[13][4],
      incluye16: imageIdArray[13][5]
    }
    let incluye2 = {
      incluye21: imageIdArray[14][0],
      incluye22: imageIdArray[14][1],
      incluye23: imageIdArray[14][2],
      incluye24: imageIdArray[14][3],
      incluye25: imageIdArray[14][4],
      incluye26: imageIdArray[14][5]
    }
    let incluye3 = {
      incluye31: imageIdArray[15][0],
      incluye32: imageIdArray[15][1],
      incluye33: imageIdArray[15][2],
      incluye34: imageIdArray[15][3],
      incluye35: imageIdArray[15][4],
      incluye36: imageIdArray[15][5]
    }
    let incluye4 = {
      incluye41: imageIdArray[16][0],
      incluye42: imageIdArray[16][1],
      incluye43: imageIdArray[16][2],
      incluye44: imageIdArray[16][3],
      incluye45: imageIdArray[16][4],
      incluye46: imageIdArray[16][5]
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
    let incluye7 = {
      incluye71: imageIdArray[19][0],
      incluye72: imageIdArray[19][1],
      incluye73: imageIdArray[19][2],
      incluye74: imageIdArray[19][3],
      incluye75: imageIdArray[19][4],
      incluye76: imageIdArray[19][5]
    }
    let incluye8 = {
      incluye81: imageIdArray[20][0],
      incluye82: imageIdArray[20][1],
      incluye83: imageIdArray[20][2],
      incluye84: imageIdArray[20][3],
      incluye85: imageIdArray[20][4],
      incluye86: imageIdArray[20][5]
    }
    let incluye9 = {
      incluye91: imageIdArray[21][0],
      incluye92: imageIdArray[21][1],
      incluye93: imageIdArray[21][2],
      incluye94: imageIdArray[21][3],
      incluye95: imageIdArray[21][4],
      incluye96: imageIdArray[21][5]
    }
    let incluye10 = {
      incluye101: imageIdArray[22][0],
      incluye102: imageIdArray[22][1],
      incluye103: imageIdArray[22][2],
      incluye104: imageIdArray[22][3],
      incluye105: imageIdArray[22][4],
      incluye106: imageIdArray[22][5]
    }
    let incluye11 = {
      incluye111: imageIdArray[23][0],
      incluye112: imageIdArray[23][1],
      incluye113: imageIdArray[23][2],
      incluye114: imageIdArray[23][3],
      incluye115: imageIdArray[23][4],
      incluye116: imageIdArray[23][5]
    }
    let incluye12 = {
      incluye121: imageIdArray[24][0],
      incluye122: imageIdArray[24][1],
      incluye123: imageIdArray[24][2],
      incluye124: imageIdArray[24][3],
      incluye125: imageIdArray[24][4],
      incluye126: imageIdArray[24][5]
    }
    let incluye13 = {
      incluye131: imageIdArray[25][0],
      incluye132: imageIdArray[25][1],
      incluye133: imageIdArray[25][2],
      incluye134: imageIdArray[25][3],
      incluye135: imageIdArray[25][4],
      incluye136: imageIdArray[25][5]
    }
    let incluye14 = {
      incluye141: imageIdArray[26][0],
      incluye142: imageIdArray[26][1],
      incluye143: imageIdArray[26][2],
      incluye144: imageIdArray[26][3],
      incluye145: imageIdArray[26][4],
      incluye146: imageIdArray[26][5]
    }
    let incluye15 = {
      incluye151: imageIdArray[27][0],
      incluye152: imageIdArray[27][1],
      incluye153: imageIdArray[27][2],
      incluye154: imageIdArray[27][3],
      incluye155: imageIdArray[27][4],
      incluye156: imageIdArray[27][5]
    }
    let noIncluye1 = {
      noIncluye11: imageIdArray[28][0],
      noIncluye12: imageIdArray[28][1],
      noIncluye13: imageIdArray[28][2],
      noIncluye14: imageIdArray[28][3],
      noIncluye15: imageIdArray[28][4],
      noIncluye16: imageIdArray[28][5]
    }
    let noIncluye2 = {
      noIncluye21: imageIdArray[29][0],
      noIncluye22: imageIdArray[29][1],
      noIncluye23: imageIdArray[29][2],
      noIncluye24: imageIdArray[29][3],
      noIncluye25: imageIdArray[29][4],
      noIncluye26: imageIdArray[29][5]
    }
    let noIncluye3 = {
      noIncluye31: imageIdArray[30][0],
      noIncluye32: imageIdArray[30][1],
      noIncluye33: imageIdArray[30][2],
      noIncluye34: imageIdArray[30][3],
      noIncluye35: imageIdArray[30][4],
      noIncluye36: imageIdArray[30][5]
    }
    let noIncluye4 = {
      noIncluye41: imageIdArray[31][0],
      noIncluye42: imageIdArray[31][1],
      noIncluye43: imageIdArray[31][2],
      noIncluye44: imageIdArray[31][3],
      noIncluye45: imageIdArray[31][4],
      noIncluye46: imageIdArray[31][5]
    }
    let noIncluye5 = {
      noIncluye51: imageIdArray[32][0],
      noIncluye52: imageIdArray[32][1],
      noIncluye53: imageIdArray[32][2],
      noIncluye54: imageIdArray[32][3],
      noIncluye55: imageIdArray[32][4],
      noIncluye56: imageIdArray[32][5]
    }
    let noIncluye6 = {
      noIncluye61: imageIdArray[33][0],
      noIncluye62: imageIdArray[33][1],
      noIncluye63: imageIdArray[33][2],
      noIncluye64: imageIdArray[33][3],
      noIncluye65: imageIdArray[33][4],
      noIncluye66: imageIdArray[33][5]
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

    let necesario15 = {
      necesario151: imageIdArray[48][0],
      necesario152: imageIdArray[48][1],
      necesario153: imageIdArray[48][2],
      necesario154: imageIdArray[48][3],
      necesario155: imageIdArray[48][4],
      necesario156: imageIdArray[48][5]
    }

    let necesario16 = {
      necesario161: imageIdArray[49][0],
      necesario162: imageIdArray[49][1],
      necesario163: imageIdArray[49][2],
      necesario164: imageIdArray[49][3],
      necesario165: imageIdArray[49][4],
      necesario166: imageIdArray[49][5]
    }
    let necesario17 = {
      necesario171: imageIdArray[50][0],
      necesario172: imageIdArray[50][1],
      necesario173: imageIdArray[50][2],
      necesario174: imageIdArray[50][3],
      necesario175: imageIdArray[50][4],
      necesario176: imageIdArray[50][5]
    }
    let necesario18 = {
      necesario181: imageIdArray[51][0],
      necesario182: imageIdArray[51][1],
      necesario183: imageIdArray[51][2],
      necesario184: imageIdArray[51][3],
      necesario185: imageIdArray[51][4],
      necesario186: imageIdArray[51][5]
    }
    let necesario19 = {
      necesario191: imageIdArray[52][0],
      necesario192: imageIdArray[52][1],
      necesario193: imageIdArray[52][2],
      necesario194: imageIdArray[52][3],
      necesario195: imageIdArray[52][4],
      necesario196: imageIdArray[52][5]
    }
    let necesario20 = {
      necesario201: imageIdArray[53][0],
      necesario202: imageIdArray[53][1],
      necesario203: imageIdArray[53][2],
      necesario204: imageIdArray[53][3],
      necesario205: imageIdArray[53][4],
      necesario206: imageIdArray[53][5]
    }
    let necesario21 = {
      necesario211: imageIdArray[54][0],
      necesario212: imageIdArray[54][1],
      necesario213: imageIdArray[54][2],
      necesario214: imageIdArray[54][3],
      necesario215: imageIdArray[54][4],
      necesario216: imageIdArray[54][5]
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
  let newIncluye7 = [];
  let newIncluye8 = [];
  let newIncluye9 = [];
  let newIncluye10 = [];
  let newIncluye11 = [];
  let newIncluye12 = [];
  let newIncluye13 = [];
  let newIncluye14 = [];
  let newIncluye15 = [];
  let newNoIncluye1 = [];
  let newNoIncluye2 = [];
  let newNoIncluye3 = [];
  let newNoIncluye4 = [];
  let newNoIncluye5 = [];
  let newNoIncluye6 = [];
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
  let newNecesario15 = [];
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
      newIncluye7.push(imageIdArray[19][i])
      newIncluye8.push(imageIdArray[20][i])
      newIncluye9.push(imageIdArray[21][i])
      newIncluye10.push(imageIdArray[22][i])
      newIncluye11.push(imageIdArray[23][i])
      newIncluye12.push(imageIdArray[24][i])
      newIncluye13.push(imageIdArray[25][i])
      newIncluye14.push(imageIdArray[26][i])
      newIncluye15.push(imageIdArray[27][i])
      newNoIncluye1.push(imageIdArray[28][i])
      newNoIncluye2.push(imageIdArray[29][i])
      newNoIncluye3.push(imageIdArray[30][i])
      newNoIncluye4.push(imageIdArray[31][i])
      newNoIncluye5.push(imageIdArray[32][i])
      newNoIncluye6.push(imageIdArray[33][i])
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
      newNecesario15.push(imageIdArray[48][i])
      newNecesario16.push(imageIdArray[49][i])
      newNecesario17.push(imageIdArray[50][i])
      newNecesario18.push(imageIdArray[51][i])
      newNecesario19.push(imageIdArray[52][i])
      newNecesario20.push(imageIdArray[53][i])
      newNecesario21.push(imageIdArray[54][i])
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
      newIncluye7, 
      newIncluye8, 
      newIncluye9, 
      newIncluye10, 
      newIncluye11, 
      newIncluye12, 
      newIncluye13, 
      newIncluye14, 
      newIncluye15, 
      newNoIncluye1, 
      newNoIncluye2, 
      newNoIncluye3, 
      newNoIncluye4, 
      newNoIncluye5, 
      newNoIncluye6,  
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
      newNecesario15, 
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
                    ? <Col xs={12} md={6} xl={4} key = 'col1'> {<CardModel img={imagenes.myImage1} title={names.name1} price={prices.price1} user={users.user1} desc={descripciones.descripcion1} city={ciudades.ciudad1} id={ids.id1} itinerario={itinerario.itinerario1} requisitos={requisitos.requisitos1} altura={altura.altura1} dificultad={dificultad.dificultad1} distancia={distancia.distancia1} tiempo={tiempo.tiempo1} incluye1={incluye1.incluye11} incluye2={incluye2.incluye21} incluye3={incluye3.incluye31} incluye4={incluye4.incluye41} incluye5={incluye5.incluye51} incluye6={incluye6.incluye61} incluye7={incluye7.incluye71} incluye8={incluye8.incluye81} incluye9={incluye9.incluye91} incluye10={incluye10.incluye101} incluye11={incluye11.incluye111} incluye12={incluye12.incluye121} incluye13={incluye13.incluye131} incluye14={incluye14.incluye141} incluye15={incluye15.incluye151} noIncluye1={noIncluye1.noIncluye11} noIncluye2={noIncluye2.noIncluye21} noIncluye3={noIncluye3.noIncluye31} noIncluye4={noIncluye4.noIncluye41} noIncluye5={noIncluye5.noIncluye51} noIncluye6={noIncluye6.noIncluye61} necesario1={necesario1.necesario11} necesario2={necesario2.necesario21} necesario3={necesario3.necesario31} necesario4={necesario4.necesario41} necesario5={necesario5.necesario51} necesario6={necesario6.necesario61} necesario7={necesario7.necesario71} necesario8={necesario8.necesario81} necesario9={necesario9.necesario91} necesario10={necesario10.necesario101} necesario11={necesario11.necesario111} necesario12={necesario12.necesario121} necesario13={necesario13.necesario131} necesario14={necesario14.necesario141} necesario15={necesario15.necesario151} necesario16={necesario16.necesario161} necesario17={necesario17.necesario171} necesario18={necesario18.necesario181} necesario19={necesario19.necesario191} necesario20={necesario20.necesario201} necesario21={necesario21.necesario211} />} </Col>
                    : null,
          
          
            (imageIdArray[0][1])
                    ? <Col xs={12} md={6} xl={4} key = 'col2' > {<CardModel img={imagenes.myImage2} title={names.name2} price={prices.price2} user={users.user2} desc={descripciones.descripcion2} city={ciudades.ciudad2} id={ids.id2} itinerario={itinerario.itinerario2} requisitos={requisitos.requisitos2} altura={altura.altura2} dificultad={dificultad.dificultad2} distancia={distancia.distancia2} tiempo={tiempo.tiempo2} incluye1={incluye1.incluye12} incluye2={incluye2.incluye22} incluye3={incluye3.incluye32} incluye4={incluye4.incluye42} incluye5={incluye5.incluye52} incluye6={incluye6.incluye62} incluye7={incluye7.incluye72} incluye8={incluye8.incluye82} incluye9={incluye9.incluye92} incluye10={incluye10.incluye102} incluye11={incluye11.incluye112} incluye12={incluye12.incluye122} incluye13={incluye13.incluye132} incluye14={incluye14.incluye142} incluye15={incluye15.incluye152} noIncluye1={noIncluye1.noIncluye12} noIncluye2={noIncluye2.noIncluye22} noIncluye3={noIncluye3.noIncluye32} noIncluye4={noIncluye4.noIncluye42} noIncluye5={noIncluye5.noIncluye52} noIncluye6={noIncluye6.noIncluye62} necesario1={necesario1.necesario12} necesario2={necesario2.necesario22} necesario3={necesario3.necesario32} necesario4={necesario4.necesario42} necesario5={necesario5.necesario52} necesario6={necesario6.necesario62} necesario7={necesario7.necesario72} necesario8={necesario8.necesario82} necesario9={necesario9.necesario92} necesario10={necesario10.necesario102} necesario11={necesario11.necesario112} necesario12={necesario12.necesario122} necesario13={necesario13.necesario132} necesario14={necesario14.necesario142} necesario15={necesario15.necesario152} necesario16={necesario16.necesario162} necesario17={necesario17.necesario172} necesario18={necesario18.necesario182} necesario19={necesario19.necesario192} necesario20={necesario20.necesario202} necesario21={necesario21.necesario212}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][2])
                    ? <Col xs={12} md={6} xl={4} key = 'col3'> {<CardModel img={imagenes.myImage3} title={names.name3} price={prices.price3} user={users.user3} desc={descripciones.descripcion3} city={ciudades.ciudad3} id={ids.id3} itinerario={itinerario.itinerario3} requisitos={requisitos.requisitos3} altura={altura.altura3} dificultad={dificultad.dificultad3} distancia={distancia.distancia3} tiempo={tiempo.tiempo1} incluye1={incluye1.incluye13} incluye2={incluye2.incluye23} incluye3={incluye3.incluye33} incluye4={incluye4.incluye43} incluye5={incluye5.incluye53} incluye6={incluye6.incluye63} incluye7={incluye7.incluye73} incluye8={incluye8.incluye83} incluye9={incluye9.incluye93} incluye10={incluye10.incluye103} incluye11={incluye11.incluye113} incluye12={incluye12.incluye123} incluye13={incluye13.incluye133} incluye14={incluye14.incluye143} incluye15={incluye15.incluye153} noIncluye1={noIncluye1.noIncluye13} noIncluye2={noIncluye2.noIncluye23} noIncluye3={noIncluye3.noIncluye33} noIncluye4={noIncluye4.noIncluye43} noIncluye5={noIncluye5.noIncluye53} noIncluye6={noIncluye6.noIncluye63} necesario1={necesario1.necesario13} necesario2={necesario2.necesario23} necesario3={necesario3.necesario33} necesario4={necesario4.necesario43} necesario5={necesario5.necesario53} necesario6={necesario6.necesario63} necesario7={necesario7.necesario73} necesario8={necesario8.necesario81} necesario9={necesario9.necesario91} necesario10={necesario10.necesario101} necesario11={necesario11.necesario113} necesario12={necesario12.necesario123} necesario13={necesario13.necesario133} necesario14={necesario14.necesario143} necesario15={necesario15.necesario153} necesario16={necesario16.necesario163} necesario17={necesario17.necesario173} necesario18={necesario18.necesario183} necesario19={necesario19.necesario193} necesario20={necesario20.necesario203} necesario21={necesario21.necesario213}/>}</Col>
                    : null,
          
          
            (imageIdArray[0][3])
                    ? <Col xs={12} md={6} xl={4} key = 'col4'> {<CardModel img={imagenes.myImage4} title={names.name4} price={prices.price4} user={users.user4} desc={descripciones.descripcion4} city={ciudades.ciudad4} id={ids.id4} itinerario={itinerario.itinerario4} requisitos={requisitos.requisitos4} altura={altura.altura4} dificultad={dificultad.dificultad4} distancia={distancia.distancia4} tiempo={tiempo.tiempo4} incluye1={incluye1.incluye14} incluye2={incluye2.incluye24} incluye3={incluye3.incluye34} incluye4={incluye4.incluye44} incluye5={incluye5.incluye54} incluye6={incluye6.incluye64} incluye7={incluye7.incluye74} incluye8={incluye8.incluye84} incluye9={incluye9.incluye94} incluye10={incluye10.incluye104} incluye11={incluye11.incluye114} incluye12={incluye12.incluye124} incluye13={incluye13.incluye134} incluye14={incluye14.incluye141} incluye15={incluye15.incluye151} noIncluye1={noIncluye1.noIncluye11} noIncluye2={noIncluye2.noIncluye21} noIncluye3={noIncluye3.noIncluye34} noIncluye4={noIncluye4.noIncluye44} noIncluye5={noIncluye5.noIncluye54} noIncluye6={noIncluye6.noIncluye64} necesario1={necesario1.necesario14} necesario2={necesario2.necesario24} necesario3={necesario3.necesario34} necesario4={necesario4.necesario44} necesario5={necesario5.necesario54} necesario6={necesario6.necesario64} necesario7={necesario7.necesario74} necesario8={necesario8.necesario84} necesario9={necesario9.necesario94} necesario10={necesario10.necesario104} necesario11={necesario11.necesario114} necesario12={necesario12.necesario124} necesario13={necesario13.necesario134} necesario14={necesario14.necesario144} necesario15={necesario15.necesario154} necesario16={necesario16.necesario164} necesario17={necesario17.necesario174} necesario18={necesario18.necesario184} necesario19={necesario19.necesario194} necesario20={necesario20.necesario204} necesario21={necesario21.necesario214}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][4])
                    ? <Col xs={12} md={6} xl={4} key = 'col5'> {<CardModel img={imagenes.myImage5} title={names.name5} price={prices.price5} user={users.user5} desc={descripciones.descripcion5} city={ciudades.ciudad5} id={ids.id5} itinerario={itinerario.itinerario5} requisitos={requisitos.requisitos5} altura={altura.altura5} dificultad={dificultad.dificultad5} distancia={distancia.distancia5} tiempo={tiempo.tiempo5} incluye1={incluye1.incluye15} incluye2={incluye2.incluye25} incluye3={incluye3.incluye35} incluye4={incluye4.incluye45} incluye5={incluye5.incluye55} incluye6={incluye6.incluye65} incluye7={incluye7.incluye75} incluye8={incluye8.incluye85} incluye9={incluye9.incluye95} incluye10={incluye10.incluye105} incluye11={incluye11.incluye115} incluye12={incluye12.incluye125} incluye13={incluye13.incluye135} incluye14={incluye14.incluye145} incluye15={incluye15.incluye155} noIncluye1={noIncluye1.noIncluye15} noIncluye2={noIncluye2.noIncluye25} noIncluye3={noIncluye3.noIncluye35} noIncluye4={noIncluye4.noIncluye45} noIncluye5={noIncluye5.noIncluye55} noIncluye6={noIncluye6.noIncluye65}necesario2={necesario2.necesario25} necesario3={necesario3.necesario35} necesario4={necesario4.necesario45} necesario5={necesario5.necesario55} necesario6={necesario6.necesario65} necesario7={necesario7.necesario75} necesario8={necesario8.necesario85} necesario9={necesario9.necesario95} necesario10={necesario10.necesario105} necesario11={necesario11.necesario115} necesario12={necesario12.necesario125} necesario13={necesario13.necesario135} necesario14={necesario14.necesario145} necesario15={necesario15.necesario155} necesario16={necesario16.necesario165} necesario17={necesario17.necesario175} necesario18={necesario18.necesario185} necesario19={necesario19.necesario195} necesario20={necesario20.necesario205} necesario21={necesario21.necesario215}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][5])
                    ? <Col xs={12} md={6} xl={4} key = 'col6'> {<CardModel img={imagenes.myImage6} title={names.name6} price={prices.price6} user={users.user6} desc={descripciones.descripcion6} city={ciudades.ciudad6} id={ids.id6} itinerario={itinerario.itinerario6} requisitos={requisitos.requisitos6} altura={altura.altura6} dificultad={dificultad.dificultad6} distancia={distancia.distancia6} tiempo={tiempo.tiempo6} incluye1={incluye1.incluye16} incluye2={incluye2.incluye26} incluye3={incluye3.incluye36} incluye4={incluye4.incluye46} incluye5={incluye5.incluye56} incluye6={incluye6.incluye66} incluye7={incluye7.incluye76} incluye8={incluye8.incluye86} incluye9={incluye9.incluye96} incluye10={incluye10.incluye106} incluye11={incluye11.incluye116} incluye12={incluye12.incluye126} incluye13={incluye13.incluye136} incluye14={incluye14.incluye146} incluye15={incluye15.incluye156} noIncluye1={noIncluye1.noIncluye16} noIncluye2={noIncluye2.noIncluye26} noIncluye3={noIncluye3.noIncluye36} noIncluye4={noIncluye4.noIncluye46} noIncluye5={noIncluye5.noIncluye56} noIncluye6={noIncluye6.noIncluye66} necesario1={necesario1.necesario16} necesario2={necesario2.necesario26} necesario3={necesario3.necesario36} necesario4={necesario4.necesario46} necesario5={necesario5.necesario56} necesario6={necesario6.necesario66} necesario7={necesario7.necesario76} necesario8={necesario8.necesario86} necesario9={necesario9.necesario96} necesario10={necesario10.necesario106} necesario11={necesario11.necesario116} necesario12={necesario12.necesario126} necesario13={necesario13.necesario136} necesario14={necesario14.necesario146} necesario15={necesario15.necesario156} necesario16={necesario16.necesario166} necesario17={necesario17.necesario176} necesario18={necesario18.necesario186} necesario19={necesario19.necesario196} necesario20={necesario20.necesario206} necesario21={necesario21.necesario216}/>} </Col>
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
