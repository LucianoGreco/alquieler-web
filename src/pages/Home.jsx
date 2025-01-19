import React, { useState } from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import {
  Container,
  Title,
  Info,
  Item,
  Pricing,
  Price,
  Details,
  Services,
  ServiceTitle,
  Gallery,
  ImageCard,
  Address,
  LinkIcon,
  Safety,
  Modal,
  CloseButton
} from "../styles/HomeStyles"; // Importa los estilos desde la carpeta styles
// Actualizacion.
import mesaMusica from "../assets/mesaMusica.JPG";
import cocinaMesada from "../assets/cocinaMesada.JPG";
import cocina from "../assets/cocina.JPG";
import calefon from "../assets/calefon.JPG";
import aireAcondicionado from "../assets/aireAcondicionado.JPG";
import calefactor from "../assets/calefactor.JPG";
import habitacionCamaGrande from "../assets/habitacionCamaGrande.JPG";
import chifonierVentanaCaloventor from "../assets/chifonierVentanaCaloventor.JPG";
import roperoAcolchadosAlmohadas from "../assets/roperoAcolchadosAlmohadas.JPG";
import habitacion2camasChicas from "../assets/habitacion2camasChicas.JPG";
import anteBaño from "../assets/anteBaño.JPG";
import inodoroBidet from "../assets/inodoroBidet.JPG";
import bañoCortina from "../assets/bañoCortina.JPG";
import ollas from "../assets/ollas.JPG";
import platosVasosTabla from "../assets/platosVasosTabla.JPG";
import cubiertos from "../assets/cubiertos.JPG";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    mesaMusica,
    cocinaMesada,
    cocina,
    calefon,
    aireAcondicionado,
    calefactor,
    habitacionCamaGrande,
    chifonierVentanaCaloventor,
    roperoAcolchadosAlmohadas,
    habitacion2camasChicas,
    anteBaño,
    inodoroBidet,
    bañoCortina,
    ollas,
    platosVasosTabla,
    cubiertos,
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      <Title>🏡 𝗗𝗘𝗣𝗔𝗥𝗧𝗔𝗠𝗘𝗡𝗧𝗢 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗟</Title>

      <Info>
        <Item>🙎‍♂️ <strong>𝗖𝗔𝗣𝗔𝗖𝗜𝗗𝗔𝗗:</strong> 5 Personas</Item>
        <Item>🏠 <strong>𝗗𝗢𝗥𝗠𝗜𝗧𝗢𝗥𝗜𝗢𝗦:</strong> 2</Item>
        <Item>🛏 <strong>𝗖𝗔𝗠𝗔𝗦:</strong> 1 Matrimonial - 2 Camas individuales</Item>
        <Item>🚗 <strong>𝗖𝗢𝗖𝗛𝗘𝗥𝗔:</strong> Techada y cerrada</Item>
      </Info>

      <Pricing>
        <Price>👉 <strong>𝗤𝗨𝗜𝗡𝗖𝗘𝗡𝗔:</strong> $700.000</Price>
        <Price>👉 <strong>𝗦𝗘𝗠𝗔𝗡𝗔:</strong> $350.000</Price>
        <Price>👉 <strong>𝗗𝗜𝗔:</strong> $55.000</Price>
      </Pricing>

      <Details>
        🚪 <strong>𝗘𝗡𝗧𝗥𝗔𝗗𝗔 𝗬 𝗦𝗔𝗟𝗜𝗗𝗔:</strong> 10hs.
      </Details>

      <Services>
        <ServiceTitle>📺 𝗦𝗘𝗥𝗩𝗜𝗖𝗜𝗢𝗦 𝗜𝗡𝗖𝗟𝗨𝗜𝗗𝗢𝗦:</ServiceTitle>
        <ul>
          <li>Cocina y calefón (gas natural)</li>
          <li>Internet</li>
          <li>Vajillas (para 5 personas)</li>
          <li>Aire acondicionado</li>
          <li>Parrilla</li>
          <li>Calefacción</li>
          <li>Radio</li>
          <li>Acolchados y almohadas (Traer sábanas)</li>
        </ul>
      </Services>

      <Address>
        <strong>🚩 𝗗𝗜𝗥𝗘𝗖𝗖𝗜Ó𝗡:</strong> C. Figueroa Alcorta 2430, San Rafael, Mendoza
        <LinkIcon href="https://g.co/kgs/fAu9pGo" target="_blank">
          <FaMapMarkerAlt size={20} />
        </LinkIcon>
      </Address>

      <Safety>
        <strong>🚧 𝗘𝗩𝗜𝗧𝗘 𝗘𝗦𝗧𝗔𝗙𝗔𝗦:</strong> Identidad verificada por Mercado Libre ✅
        <LinkIcon href="https://departamento.mercadolibre.com.ar/MLA-1464622333-departamentos-ferreluc-_JM" target="_blank">
          <FaExternalLinkAlt size={20} />
        </LinkIcon>
      </Safety>

      <Gallery>
        {images.map((image, index) => (
          <ImageCard key={index} onClick={() => openModal(image)}>
            <img src={image} alt={`Foto ${index + 1}`} />
          </ImageCard>
        ))}
      </Gallery>

      {/* Modal */}
      {selectedImage && (
        <Modal>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <img src={selectedImage} alt="Imagen ampliada" />
        </Modal>
      )}
    </Container>
  );
};

export default Home;
