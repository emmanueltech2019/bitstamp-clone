
// "use client";
// import React, { FormEvent, useEffect, useState } from 'react';
// import { Box, Card, CardContent, Typography, Button, Grid, Alert, AlertTitle } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { useDropzone } from 'react-dropzone';
// import axios2 from "../../../../../utils/axios";
// import Swal from "sweetalert2";
// import Image from 'next/image';

// const Toast = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.onmouseenter = Swal.stopTimer;
//     toast.onmouseleave = Swal.resumeTimer;
//   }
// });

// const TierTwoVerification: React.FC = () => {
//   const [frontImage, setFrontImage] = useState<File | null | string>(null);
//   const [backImage, setBackImage] = useState<File | null | string>(null);
//   const [hide, setHide] = useState<boolean>(false);
//   const [frontImageDims, setFrontImageDims] = useState({ width: 200, height: 200 });
//   const [backImageDims, setBackImageDims] = useState({ width: 200, height: 200 });
//   const [loading, setLoading] = useState<boolean>(false);

//   interface HTMLImageElement {
//     // ... existing properties and methods ...
//     decode(): Promise<void>;
//   }

//   const onDropFront = (acceptedFiles: File[]) => {
//     if (acceptedFiles.length === 0) return;

//     setFrontImage(acceptedFiles[0]);
//     const imgElement = new window.Image();
//     imgElement.src = URL.createObjectURL(acceptedFiles[0]);
//     imgElement.onload = () => {
//       setFrontImageDims({ width: imgElement.width, height: imgElement.height });
//       URL.revokeObjectURL(imgElement.src);
//     };
//   };

//   const onDropBack = (acceptedFiles: File[]) => {
//     if (acceptedFiles.length === 0) return;

//     setBackImage(acceptedFiles[0]);
//     const imgElement = new window.Image();
//     imgElement.src = URL.createObjectURL(acceptedFiles[0]);
//     imgElement.onload = () => {
//       setBackImageDims({ width: imgElement.width, height: imgElement.height });
//       URL.revokeObjectURL(imgElement.src);
//     };
//   };

//   const { getRootProps: getFrontRootProps, getInputProps: getFrontInputProps } = useDropzone({
//     onDrop: onDropFront,
//     accept: { 'image/*': [] },
//     multiple: false,
//   });

//   const { getRootProps: getBackRootProps, getInputProps: getBackInputProps } = useDropzone({
//     onDrop: onDropBack,
//     accept: { 'image/*': [] },
//     multiple: false,
//   });

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!frontImage) {
//       alert('Please upload the front view of your ID.');
//       return;
//     }
//     setLoading(true);
//     const formData = new FormData();
//     formData.append('frontImage', frontImage);
//     if (backImage) {
//       formData.append('backImage', backImage);
//     }
//     console.log(formData);

//     try {
//       const response = await axios2.post('/user/verify-submit', formData, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//       });
//       console.log(response);
//       if (response.status === 200) {
//         Toast.fire({
//           icon: "success",
//           text: "Please await verification"
//         }).then(() => window.location.reload());
//       }
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios2.get('/user/profile', {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//         });
//         if (response.data.kycVerification.frontImageUrl) {
//           setHide(true);
//         }
//         setFrontImage(response.data.kycVerification.frontImageUrl);
//         setBackImage(response.data.kycVerification.backImageUrl);
//       } catch (error: any) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   return (
//     <Box className="p-6">
//       <Typography variant="h4" className="font-bold mb-4">
//         TIER TWO VERIFICATION
//       </Typography>
//       <Alert severity="info" className="mb-4">
//         <AlertTitle>{hide ? "Pending verification" : "Awaiting tier two verification"}</AlertTitle>
//       </Alert>
//       <Card className="rounded-lg shadow-md">
//         <CardContent>
//           <form onSubmit={handleSubmit}>
//             <Typography variant="h5" className="font-bold mb-2 text-center">
//               Tier two Verification (KYC)
//             </Typography>
//             <Typography variant="body2" className="text-center mb-4">
//               Please kindly upload a government approved identification document. (ID Card, Driver licenses, and any other document.)
//               <br />
//               <span className="text-blue-600">
//                 Note: This can be rejected upon submission due to unclear format or wrong input
//               </span>
//             </Typography>
//             <Grid container spacing={3} justifyContent="center">
//               <Grid item xs={12} md={5}>
//                 <div {...getFrontRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer">
//                   <input {...getFrontInputProps()} />
//                   {frontImage ? (
//                     typeof frontImage === 'object' ? (
//                       <Image src={URL.createObjectURL(frontImage)} width={frontImageDims.width} height={frontImageDims.height} alt="Front ID" className="w-full h-auto" />
//                     ) : (
//                       <Image src={frontImage} alt="Front ID" width={frontImageDims.width} height={frontImageDims.height} className="w-full h-auto" />
//                     )
//                   ) : (
//                     <>
//                       <CloudUploadIcon fontSize="large" className="text-gray-400" />
//                       <Typography variant="body1" className="mt-2 text-gray-600">
//                         Drag and drop or Tap to upload the front view
//                       </Typography>
//                     </>
//                   )}
//                 </div>
//               </Grid>
//               <Grid item xs={12} md={5}>
//                 <div {...getBackRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer">
//                   <input {...getBackInputProps()} />
//                   {backImage ? (
//                     typeof backImage === 'object' ? (
//                       <Image src={URL.createObjectURL(backImage)} width={backImageDims.width} height={backImageDims.height} alt="Back ID" className="w-full h-auto" />
//                     ) : (
//                       <Image src={backImage} alt="Back ID" width={backImageDims.width} height={backImageDims.height} className="w-full h-auto" />
//                     )
//                   ) : (
//                     <>
//                       <CloudUploadIcon fontSize="large" className="text-gray-400" />
//                       <Typography variant="body1" className="mt-2 text-gray-600">
//                         Drag and drop or Tap to upload the back view
//                       </Typography>
//                     </>
//                   )}
//                 </div>
//               </Grid>
//             </Grid>
//             <Box className="text-center mt-6">
//               {!hide && (
//                 <Button variant="contained" color="primary" type='submit' className="px-8 bg-[#003b2f] hover:bg-[#003b2f]">
//                   {loading?"Loading...":"Send"}
//                 </Button>
//               )}
//             </Box>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default TierTwoVerification;


"use client";
import React, { FormEvent, useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Alert, AlertTitle } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';
import axios2 from "../../../../../utils/axios";
import Swal from "sweetalert2";
import Image from 'next/image';

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

// Loader component
const FullScreenLoader: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography variant="h4" color="white">Loading...</Typography>
  </Box>
);

const TierTwoVerification: React.FC = () => {
  const [frontImage, setFrontImage] = useState<File | null | string>(null);
  const [backImage, setBackImage] = useState<File | null | string>(null);
  const [hide, setHide] = useState<boolean>(false);
  const [frontImageDims, setFrontImageDims] = useState({ width: 200, height: 200 });
  const [backImageDims, setBackImageDims] = useState({ width: 200, height: 200 });
  const [loading, setLoading] = useState<boolean>(false);

  const onDropFront = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setFrontImage(acceptedFiles[0]);
    const imgElement = new window.Image();
    imgElement.src = URL.createObjectURL(acceptedFiles[0]);
    imgElement.onload = () => {
      setFrontImageDims({ width: imgElement.width, height: imgElement.height });
      URL.revokeObjectURL(imgElement.src);
    };
  };

  const onDropBack = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setBackImage(acceptedFiles[0]);
    const imgElement = new window.Image();
    imgElement.src = URL.createObjectURL(acceptedFiles[0]);
    imgElement.onload = () => {
      setBackImageDims({ width: imgElement.width, height: imgElement.height });
      URL.revokeObjectURL(imgElement.src);
    };
  };

  const { getRootProps: getFrontRootProps, getInputProps: getFrontInputProps } = useDropzone({
    onDrop: onDropFront,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const { getRootProps: getBackRootProps, getInputProps: getBackInputProps } = useDropzone({
    onDrop: onDropBack,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!frontImage) {
      alert('Please upload the front view of your ID.');
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('frontImage', frontImage);
    if (backImage) {
      formData.append('backImage', backImage);
    }
    console.log(formData);

    try {
      const response = await axios2.post('/user/verify-submit', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      console.log(response);
      if (response.status === 200) {
        Toast.fire({
          icon: "success",
          text: "Please await verification"
        }).then(() => window.location.reload());
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios2.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        if (response.data.kycVerification.frontImageUrl) {
          setHide(true);
        }
        setFrontImage(response.data.kycVerification.frontImageUrl);
        setBackImage(response.data.kycVerification.backImageUrl);
      } catch (error: any) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <Box className="p-6">
      {loading && <FullScreenLoader />}
      <Typography variant="h4" className="font-bold mb-4">
        TIER TWO VERIFICATION
      </Typography>
      <Alert severity="info" className="mb-4">
        <AlertTitle>{hide ? "Pending verification" : "Awaiting tier two verification"}</AlertTitle>
      </Alert>
      <Card className="rounded-lg shadow-md">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" className="font-bold mb-2 text-center">
              Tier two Verification (KYC)
            </Typography>
            <Typography variant="body2" className="text-center mb-4">
              Please kindly upload a government approved identification document. (ID Card, Driver licenses, and any other document.)
              <br />
              <span className="text-blue-600">
                Note: This can be rejected upon submission due to unclear format or wrong input
              </span>
            </Typography>
            {!hide ? (
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={5}>
                <div {...getFrontRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer">
                  <input {...getFrontInputProps()} />
                  {frontImage ? (
                    typeof frontImage === 'object' ? (
                      <Image src={URL.createObjectURL(frontImage)} width={frontImageDims.width} height={frontImageDims.height} alt="Front ID" className="w-full h-auto" />
                    ) : (
                      <Image src={frontImage} alt="Front ID" width={frontImageDims.width} height={frontImageDims.height} className="w-full h-auto" />
                    )
                  ) : (
                    <>
                      <CloudUploadIcon fontSize="large" className="text-gray-400" />
                      <Typography variant="body1" className="mt-2 text-gray-600">
                        Drag and drop or Tap to upload the front view
                      </Typography>
                    </>
                  )}
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div {...getBackRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer">
                  <input {...getBackInputProps()} />
                  {backImage ? (
                    typeof backImage === 'object' ? (
                      <Image src={URL.createObjectURL(backImage)} width={backImageDims.width} height={backImageDims.height} alt="Back ID" className="w-full h-auto" />
                    ) : (
                      <Image src={backImage} alt="Back ID" width={backImageDims.width} height={backImageDims.height} className="w-full h-auto" />
                    )
                  ) : (
                    <>
                      <CloudUploadIcon fontSize="large" className="text-gray-400" />
                      <Typography variant="body1" className="mt-2 text-gray-600">
                        Drag and drop or Tap to upload the back view
                      </Typography>
                    </>
                  )}
                </div>
              </Grid>
            </Grid>
            ):<>
            <Alert severity="warning" className="mb-4">
        <AlertTitle>{hide ? "You details is currently been proccessed by the admin." : ""}</AlertTitle>
      </Alert></>}
            <Box className="text-center mt-6">
              {!hide && (
                <Button variant="contained" color="primary" type='submit' className="px-8 bg-[#003b2f] hover:bg-[#003b2f]">
                  {loading?"Loading...":"Send"}
                </Button>
              )}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TierTwoVerification;
