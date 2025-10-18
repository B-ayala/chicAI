import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchIcon from '@mui/icons-material/Search';

import { InputAdornment, TextField, TextFieldVariants } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../../../../pages/Products/mockData';
import { getProducts } from '../../../features/Product/productSlice';
import { BotonSearch, TextSearch } from './styled';

type SearchProps = {
  ancho: number;
  margen: number;
  formType: TextFieldVariants;
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function Search({ ancho, margen, formType, closeMenu }: SearchProps) {
  const datos: any = ['ZAPATOS', 'PANTALONES', 'REMERAS', 'CALZADO', 'CAMIZAS'];
  const [input, setInput] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  //const listProducts = useSelector((state:RootState)=>state.product.value)
  //const list = listProducts["0"]
  //const listModificada = Object.values(list);//devuelve array de objetos

  const handleChangeInput = (change: string) => {
    const filterProducts = featuredProducts.filter(
      (item: Product) =>
        item.name.toLocaleUpperCase().includes(change.toLocaleUpperCase()) && change
    );
    setProducts(filterProducts);
    setInput(change);
  };
  const handleClickCross = () => {
    setInput('');
    setProducts([]);
  };
  const handleClick = (value: number, name: string) => {
    const productsFilter = featuredProducts.filter((product: Product) => product.id == value);
    dispatch(getProducts(productsFilter));
    setInput(name);
    setProducts([]);
    closeMenu(false);
  };

  const handleClickSearch = () => {
    const filterProducts = featuredProducts.filter((item: Product) =>
      item.name.toLocaleUpperCase().includes(input.toLocaleUpperCase())
    );
    dispatch(getProducts(filterProducts));
    setProducts([]);
    closeMenu(false);
  };

  return (
    <>
      <div style={{ marginLeft: margen, zIndex: 2 }}>
        <Box
          width={ancho}
          sx={{
            background: '#ebe1e0ff',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderEndStartRadius: products.length > 0 ? 0 : 5,
            borderEndEndRadius: products.length > 0 ? 0 : 5,
            minWidth: 100,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            onChange={(e) => handleChangeInput(e.target.value)}
            id="outlined-basic"
            label="Buscar"
            variant={formType}
            fullWidth
            size="small"
            value={input}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <BotonSearch as={Link} to={'/products'}>
                      <SearchIcon onClick={handleClickSearch} />
                    </BotonSearch>
                  </InputAdornment>
                ),
                endAdornment: input && (
                  <InputAdornment position="end">
                    <BotonSearch onClick={handleClickCross}>
                      <ClearOutlinedIcon />
                    </BotonSearch>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {datos.length > 0 && (
          <Box
            width={ancho}
            sx={{
              background: '#ebe1e0ff',
              fontSize: '20',
              listStyleType: 'none',
              position: 'absolute',
            }}
          >
            {products.map((item) => (
              <TextSearch
                key={item.id}
                as={Link}
                to={'/products'}
                onClick={() => handleClick(item.id, item.name)}
              >
                {item.name}
              </TextSearch>
            ))}
          </Box>
        )}
      </div>
    </>
  );
}
