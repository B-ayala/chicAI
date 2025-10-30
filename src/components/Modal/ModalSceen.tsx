import {
    Fade,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { CloseModal, ContainerCloseModal, ContainerModal, ContainerSizeTable, ContainerTable, DescriptionProduct, TitleModal, TitleProduct } from './styled';

type SetBoolean = Dispatch<SetStateAction<boolean>>;

interface SizeData {
  talle: string;
  busto: number;
  cadera: number;
  largo: number;
}

interface ModalProps {
    openModal: boolean;
    setOpenModal: SetBoolean;
    size:SizeData[]| undefined,
    name:string|undefined,
    
}
interface SizeData {
  talle: string;
  busto: number;
  cadera: number;
  largo: number;
}


export const  ModalScreen :React.FC<ModalProps> = ({openModal,setOpenModal,size,name}) => {
    
    
const handleClose = ()=>{
    setOpenModal(false)
}




    return (
        
            <Modal 
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            
            slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
            
            >   
                <Fade in={openModal}>
                    <ContainerModal>
                    <TableContainer component={Paper} sx={{ maxWidth: 650, margin: '20px auto' }}>
                    <TitleModal>NAME EMPRESA</TitleModal>
                    <ContainerSizeTable>
                        <TitleProduct>{name}</TitleProduct>
                        <DescriptionProduct>Zara def</DescriptionProduct>
                        <ContainerTable>
                            <Table sx={{ minWidth: 400 }} aria-label="tabla de talles">
                                {/* ENCABEZADO DE LA TABLA */}
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Talle</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Busto (cm)</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Cadera (cm)</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Largo (cm)</TableCell>
                                    </TableRow>
                                </TableHead>

                                {/* CUERPO DE LA TABLA */}
                                <TableBody>
                                    {size?.map((row) => (
                                    <TableRow
                                        key={row.talle}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                        {row.talle}
                                        </TableCell>
                                        <TableCell align="right">{row.busto}</TableCell>
                                        <TableCell align="right">{row.cadera}</TableCell>
                                        <TableCell align="right">{row.largo}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            
                        
                        </ContainerTable>
                        
                    </ContainerSizeTable>
                    </TableContainer>
                    <ContainerCloseModal onClick={handleClose}>
                            <CloseModal>Cerrar</CloseModal>
                    </ContainerCloseModal>
                </ContainerModal>
                </Fade>
                
            </Modal>
        
        
        
      
    ) 
} 