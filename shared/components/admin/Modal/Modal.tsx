// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import styles from "./Modal.module.css";
// import { Box, TextField, Button, Drawer } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import UploadSvg from '../svg/UploadSvg';

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

// interface ModalProps {
//   open: boolean;
//   handleClose: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ open, handleClose }) => {
//   return (
//   <Drawer anchor="right" open={open} onClose={handleClose}>
//           <Box className={styles.modal_boxs} sx={{ width: 948, height:"100%", p: 2 }} role="presentation">
        
//         <div className={styles}>
                      
//                       <div className={styles.form_box}>
//                           <div>
//                               <h2 className=''>Add product</h2>
//                               <div >
//                                   <div >
//                                       <h4>Upload your image</h4>
//                                       <img  className='mt-2' src={} alt=""/>
//                                   </div>
//                                   <div >
//                                       <div >
//                                           <input type="file" id='upload_file'   />
//                                           <label htmlFor="upload_file">
//                                               <UploadSvg/>
//                                               <span>upload</span>
//                                           </label>

//                                       </div>
//                                   </div>
//                               </div>
//                               <div >
//                                   <div >
//                                       <h4></h4>
//                                   </div>
//                                   <div >
//                                       <div >
                                          
//                                       </div>
//                                   </div>
//                               </div>
//                           </div>
  
          
//             <hr />
          
//           <div className={styles.modal_btn}>
//             <Button className=" w-[400px] border-[2px] h-[50px] border-[#BDBDBD] text-[#BDBDBD] rounded font-medium px-[20px] text-[16px]"  onClick={handleClose} variant="contained">
//               Add Product
//             </Button>
//             <Button className="w-[400px] h-[50px] rounded px-[28px] text-white text-[16px] font-medium bg-lightPurple3" onClick={handleClose} variant="outlined">
//               Cancel
//             </Button>
//           </div>
//       </Box>
//   </Drawer>

  
//   );
// };

// export default Modal;


