import { useState } from "react";
import { useParams } from "react-router-dom";
import { ModalScreen } from "../../components/Modal/ModalSceen";
import { HomeCarousel } from "../Home/components/HomeCarousel";
import { featuredProducts } from "../Products/mockData";
import { BlockColor, Brands, BrandsText, ButtonSpecial, ColorText, Container, ContainerBlockColor, ContainerBrands, ContainerButton, ContainerDetail, ContainerFeature, ContainerImage, ContainerLookGuideSize, ContainerPrice, ContainerSecondImage, ContainerSize, ContainerStars, DetailText, ImageSecond, ImageSecondContainer, ImageSecondContainerButton, LookGuideSizeIcon, LookGuideSizeText, MethodPayText, NumberSize, PriceText, ShareText, SizeNumbers, Stars, TextSize } from "./styled";

 type RouteParams =  {
        id?: string; // useParams siempre devuelve un string o undefined
    }

function ProductsDetail() {
    const { id } = useParams<RouteParams>();
    const [colorSelect,setColorSelect] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sizeDetail, setSizeDetail] = useState(5);
    const [selectSize,setSelectSize] = useState("");
    const [modalOpen,setModalOpen] = useState(false);
     

    const data = featuredProducts.find((item)=>item.id == Number(id));

    const colorClothes = (colorName:string) =>{
        const newData  = data?.image.findIndex((item)=>item.color == colorName) ?? -1;
        if(newData != -1){
            setColorSelect(newData)
        } 
    }

    const handleClickImage = (index:number) =>{
        setCurrentSlide(index);
    }

    const handleNumberSizeAdd = () => {
        setSizeDetail(100)
    }
    const handleNumberSizeSubtract = () => {
        setSizeDetail(5)
    }
    
    
    
    const handleOpenModal = ()=>{
        setModalOpen(true)
    }

    const handleSelectSize = (size:string) =>{
        setSelectSize(size);
    }
    
    
  return (
    <div>
        <Container>
            <ContainerImage>
                <HomeCarousel imageRender={data?.image[colorSelect].imageRender} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} renderBoolean={false} widthImageXs="90" widthImageSm="90" widthImageMd="30" />
                {/*<ImageFirstContainer><ImageFirst src={data?.image[colorSelect].imageRender[selectImage]}/></ImageFirstContainer>*/}
                <ContainerSecondImage>
                    {data?.image[colorSelect].imageRender.map((item,index)=>(
                        <ImageSecondContainerButton key={index} onClick={()=>handleClickImage(index)} onMouseOver={()=>handleClickImage(index)}>
                            <ImageSecondContainer>
                                <ImageSecond src={item}/>
                            </ImageSecondContainer>
                        </ImageSecondContainerButton>
                        
                    ))}
                    
                
                </ContainerSecondImage>
                
            </ContainerImage>
            
            <ContainerDetail>
                <ContainerBrands>
                    <BrandsText>ver mas marcas de Aliza</BrandsText>
                    <Brands src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLi_CU0ua7t-VS1wV3xmhAzMKix7Nvej-Eg&s" alt="favorite" />
                    
                </ContainerBrands>
                <DetailText>{data?.name}</DetailText>
                <ContainerStars>
                    <Stars>🎖️</Stars>
                    <Stars>🎖️</Stars>
                    <Stars>🎖️</Stars>
                    <Stars>🎖️</Stars>
                </ContainerStars>
                <ContainerPrice>
                    <PriceText>49000</PriceText>
                    <ShareText>en 3 cuotas 15000</ShareText>
                    <MethodPayText>ver metodos de pago</MethodPayText>
                </ContainerPrice>
                <ContainerFeature>
                    <ColorText>color: negro</ColorText>
                    <ContainerBlockColor>
                        {data?.color.map((item,index)=>(

                            <BlockColor key={index} onClick={()=>colorClothes(item.name)} colorType={item.color}>
                                
                            </BlockColor>
                        ))}

                       
                    </ContainerBlockColor>
                </ContainerFeature>
                <ContainerSize>
                    <TextSize>talle:</TextSize>
                    <SizeNumbers>
                        {
                            data?.size.map((item,index)=>{
                                
                                if(index<sizeDetail) return <NumberSize onClick={()=>handleSelectSize(item.talle)} key={index} size={item.talle} styleSelect={selectSize}>{item.talle}</NumberSize>
                            }
                                
                            )
                        }

                        {data && (sizeDetail==5 && data?.size.length>5) && <NumberSize onClick={()=>handleNumberSizeAdd()} styleSelect={""} size={1}>+</NumberSize>}
                        { sizeDetail!=5 && <NumberSize onClick={()=>handleNumberSizeSubtract()} styleSelect={""} size={1}>-</NumberSize>}
                    </SizeNumbers>
                </ContainerSize>
                <ContainerLookGuideSize onClick={()=>handleOpenModal()}>
                    <LookGuideSizeIcon>📏</LookGuideSizeIcon>
                    <LookGuideSizeText>Ver guía de detalles</LookGuideSizeText>
                </ContainerLookGuideSize>
                <ContainerButton>
                    <ButtonSpecial>Comprar ahora</ButtonSpecial>
                </ContainerButton>
            </ContainerDetail>
            <ModalScreen  openModal={modalOpen} setOpenModal={setModalOpen} size={data?.size} name = {data?.name}/>
        </Container>
    </div>
  )
}

export default ProductsDetail