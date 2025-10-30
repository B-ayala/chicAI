import styled from "styled-components";

// Breakpoints para diseño responsive
export const breakpoints = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1200px'
};

interface propFeature{
    colorType:string,
    
    
}
interface propSize{
    
    styleSelect:string,
    size:string|number,
    
}

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1300px;
    gap: 20px;
    margin:auto ;
    padding: 20px;
    @media (min-width: ${breakpoints.tablet}) {
        padding: 20px 40px;
        
    };
    @media (min-width: ${breakpoints.desktop}) {
        flex-wrap: nowrap;
        gap: 0px;
        max-width: 1500px;
        
    }
`
export const ContainerImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    @media (min-width: ${breakpoints.tablet}) {
        
        
    };
     @media (min-width: ${breakpoints.desktop}) {
        flex-wrap: nowrap;
        
    }

`

export const ImageFirstContainer = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 10px;
    justify-self: center;
    @media (min-width: ${breakpoints.desktop}) {
        width: 550px;
        height: 700px;
    }
`

export const ImageFirst = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    object-fit: cover;
`
export const ContainerSecondImage = styled.div`
    display: flex;
    gap: 10px;
    @media (min-width: ${breakpoints.desktop}) {
        flex-wrap: wrap;
        align-content: flex-start;
        width: 230px;
    }
`
export const ImageSecondContainerButton =styled.button`
    padding: 0;
    border: none;
    cursor: pointer;
    transition: opacity .4s;
    &:hover{
        opacity: .5;
    }
` 

export const ImageSecondContainer = styled.div`
    width: 100px;
    height: 130px;
    border-radius: 10px;
    @media (min-width: ${breakpoints.desktop}) {
        flex-wrap: wrap;
        
    }
`
export const ImageSecond = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`

//Detalles
export const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: ${breakpoints.tablet}) {
        width: 100%;
        
    };
    @media (min-width: ${breakpoints.desktop}) {
        
        
    }
`

export const ContainerBrands = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BrandsText = styled.div`
    
`
export const Brands = styled.img`
    width: 30px;
    height: 30px;
`
export const DetailText = styled.h3`
    font-size: 1.5rem;
    margin: 0;
`

export const ContainerStars = styled.div`
    display: flex;
    ;gap:0px;
`

export const Stars = styled.div`
    font-size: 1.3rem;
`





//metodo de pago
export const ContainerPrice = styled.div`
   
`
export const PriceText = styled.h3`
     font-size: 1.6rem;
    margin: 0;
`

export const ShareText = styled.p`
    font-size: 1rem;
    margin: 0;
`
export const MethodPayText = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
`
//colores y talles del producto

export const ContainerFeature = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ColorText = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
`
export const ContainerBlockColor = styled.div`
    display: flex;
    gap: 5px;
`
export const BlockColor = styled.button<propFeature>`
    
    width: 50px;
    height: 70px;
    background-color: ${props=>props.colorType};
    border-radius: 3px;
    border:none;
    transition: opacity .3s;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    };

    
`

//tallas
export const ContainerSize = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    /*height: 100px;*/
`
export const TextSize = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    
    
`
export const SizeNumbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    @media (min-width: ${breakpoints.tablet}) {
        width: 500px;
        
    }
`
export const NumberSize = styled.div<propSize>`
    border: 1px solid #000000;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    background-color: ${props=>props.styleSelect==props.size?"#bbb8b8":"#fff"};
    transition: background-color .3s;
    &:hover{
        
        background-color: #bbb8b8;
    };
    animation: animationTraslate .3s linear both;

    @keyframes animationTraslate {
        from{
            transform: translate(-70px);
        }
        to{
            transform: translate(0);
        }
    }
`
export const ContainerLookGuideSize = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
   
    
`
export const LookGuideSizeIcon = styled.div`
    font-size: 1.2rem;
`
export const LookGuideSizeText = styled.p`
    font-size: 1.0rem;
     margin: 0;
`


export const ContainerButton = styled.div`
    max-width:600px;
    
    border-radius:5px;
    @media (min-width: ${breakpoints.tablet}) {
        width: 600px;
        margin: auto;
        
    };
    @media (min-width: ${breakpoints.desktop}) {
        
        margin: 0;
        
    }
`
export const ButtonSpecial = styled.button`
    padding: 25px 20px;
    width: 100%;
    border: none;
    border-radius:5px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #201f1f;
    color: #fff;
    &:hover{
        opacity: 0.9;
    }
`
