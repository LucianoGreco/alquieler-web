import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: #333;
  border: 1px solid red;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 6px;
  padding: 16px 0;
`;

export const ImageCard = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  height: 150px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #ff6347;
  }
`;

export const Info = styled.div`
  margin-bottom: 20px;
  line-height: 1.2;
`;

export const Item = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  strong {
    font-size: 1.4rem;
  }
`;

export const Pricing = styled.div`
  margin-bottom: 20px;
  line-height: 1.2;
  font-size: 1.2rem;
  strong {
    font-size: 1.4rem;
  }
`;

export const Price = styled.p`
  margin: 5px 0;
`;

export const Details = styled.p`
  font-size: 1.4rem;
`;

export const Services = styled.div`
  font-size: 1rem;
  padding: 0;

  li {
    font-size: 1.2rem;
  }
`;

export const ServiceTitle = styled.p`
  font-size: 1.4rem;
`;

export const Address = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 1.2rem;
  strong {
    font-size: 1.4rem;
  }
`;

export const LinkIcon = styled.a`
  margin-left: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    color: #0056b3;
  }
`;

export const Safety = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 1.2rem;
  strong {
    font-size: 1.4rem;
  }
`;
