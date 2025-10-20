import { useState } from "react";
import { useParams } from "react-router-dom";
import { featuredProducts } from "../Products/mockData";
import { BlockColor, Brands, BrandsText, ButtonSpecial, ColorText, Container, ContainerBlockColor, ContainerBrands, ContainerButton, ContainerDetail, ContainerFeature, ContainerImage, ContainerPrice, ContainerSecondImage, ContainerSize, ContainerStars, DetailText, ImageFirst, ImageFirstContainer, ImageSecond, ImageSecondContainer, ImageSecondContainerButton, MethodPayText, NumberSize, PriceText, ShareText, SizeNumbers, Stars, TextSize } from "./styled";

 type RouteParams =  {
        id?: string; // useParams siempre devuelve un string o undefined
    }

function ProductsDetail() {
    const { id } = useParams<RouteParams>();
    const [colorSelect,setColorSelect] = useState(0);
    const [selectImage,setSelectImage] = useState(0)
    
    const data = featuredProducts.find((item)=>item.id == Number(id));

    const colorClothes = (colorName:string) =>{
        console.log(data?.image)
        const newData  = data?.image.findIndex((item)=>item.color == colorName) ?? -1;
        if(newData != -1){
            setColorSelect(newData)
        }
        
    }
    const handleClickImage = (index:number) =>{
        setSelectImage(index)
    }

    
    
  return (
    <div>
        <Container>
            <ContainerImage>
                <ImageFirstContainer><ImageFirst src={data?.image[colorSelect].imageRender[selectImage]}/></ImageFirstContainer>
                <ContainerSecondImage>
                    {data?.image[colorSelect].imageRender.map((item,index)=>(
                        <ImageSecondContainerButton key={index} onClick={()=>handleClickImage(index)}>
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
                        {data?.color.map((item)=>(

                            <BlockColor onClick={()=>colorClothes(item.name)} colorType={item.color}>
                                
                            </BlockColor>
                        ))}

                       
                    </ContainerBlockColor>
                </ContainerFeature>
                <ContainerSize>
                    <TextSize>talle:</TextSize>
                    <SizeNumbers>
                        {
                            data?.size.map((item,index)=>(
                                <NumberSize key={index}>{item}</NumberSize>
                            ))
                        }
                        <NumberSize>20</NumberSize><NumberSize>40</NumberSize><NumberSize>50</NumberSize>
                        <NumberSize>60</NumberSize><NumberSize>70</NumberSize><NumberSize>80</NumberSize>
                        <NumberSize>60</NumberSize><NumberSize>70</NumberSize><NumberSize>80</NumberSize>
                    </SizeNumbers>
                </ContainerSize>
                <ContainerButton>
                    <ButtonSpecial>Comprar ahora</ButtonSpecial>
                </ContainerButton>
            </ContainerDetail>
            
        </Container>
    </div>
  )
}

export default ProductsDetail