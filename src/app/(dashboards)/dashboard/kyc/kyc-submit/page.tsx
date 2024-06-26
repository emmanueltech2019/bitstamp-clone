// "use client"
// import React, { FormEvent, useEffect, useState } from 'react';
// import { Box, Card, CardContent, Typography, Button, Grid, Alert, AlertTitle } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { useDropzone } from 'react-dropzone';
// import axios2 from "../../../../../utils/axios"

// import Swal from "sweetalert2"
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

//   // const onDropFront = (acceptedFiles: File[]) => {
//   //   setFrontImage(acceptedFiles[0]);
//   // };

//   // const onDropBack = (acceptedFiles: File[]) => {
//   //   setBackImage(acceptedFiles[0]);
//   // };
//   const onDropFront = (acceptedFiles: File[]) => {
//     setFrontImage(acceptedFiles[0]);
//     const img = new Image();
//     img.src = URL.createObjectURL(acceptedFiles[0]);
//     img.onload = () => {
//       setFrontImageDims({ width: img.width, height: img.height });
//     };
//   };

//   const onDropBack = (acceptedFiles: File[]) => {
//     setBackImage(acceptedFiles[0]);
//     const img = new Image();
//     img.src = URL.createObjectURL(acceptedFiles[0]);
//     img.onload = () => {
//       setBackImageDims({ width: img.width, height: img.height });
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

//     const formData = new FormData();
//     formData.append('frontImage', frontImage);
//     if (backImage) {
//       formData.append('backImage', backImage);
//     }
//     console.log(formData);
//     // alert("coool")

//     try {
//       // Replace with your actual API endpoint
//       const response = await axios2.post('/user/verify-submit',
//         formData,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//         });
//       console.log(response)
//       if (response.status === 200) {
//         Toast.fire({
//           icon: "success",
//           text: "Please await verification"
//         }).then((response) => window.location.reload())
//       }
//       // Handle the API response (success/error)
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };
//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios2.get('/user/profile', {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//         });
//         if (response.data.kycVerification.frontImageUrl) {
//           setHide(true)
//         }
//         setFrontImage(response.data.kycVerification.frontImageUrl);
//         setBackImage(response.data.kycVerification.backImageUrl);
//       } catch (error: any) {
//       } finally {
//       }
//     };

//     fetchProfileData();
//   }, []); // Empty dependency array ensures this runs only once on mount

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
//                 <div {...getFrontRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"> {/* Use getRootProps here */}
//                   <input {...getFrontInputProps()} /> {/* Don't forget this! */}
//                   {frontImage ? (
//                     // Display image if frontImage is a File
//                     typeof frontImage === 'object' ? (
//                       <Image src={URL.createObjectURL(frontImage)} width={frontImageDims.width} height={frontImageDims.height}  alt="Front ID" className="w-full h-auto" />
//                     ) : (
//                       // Display image directly if frontImage is a URL
//                       <Image src={frontImage} alt="Front ID" width={frontImageDims.width} height={frontImageDims.height}  className="w-full h-auto" />
//                     )
//                   ) : (
//                     // Display the upload prompt if no image
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
//                 <div {...getBackRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"> {/* Use getRootProps here */}
//                   <input {...getBackInputProps()} /> {/* Don't forget this! */}
//                   {backImage ? (
//                     // Display image if backImage is a File
//                     typeof backImage === 'object' ? (
//                       <Image src={URL.createObjectURL(backImage)} width={backImageDims.width} height={backImageDims.height} alt="Front ID" className="w-full h-auto" />
//                     ) : (
//                       // Display image directly if backImage is a URL
//                       <Image src={backImage} alt="Back ID" width={backImageDims.width} height={backImageDims.height} className="w-full h-auto" />
//                     )
//                   ) : (
//                     // Display the upload prompt if no image
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
//               {
//                 hide ? "" : <Button variant="contained" color="primary" type='submit' className="px-8 bg-[#003b2f] hover:bg-[#003b2f]">
//                   Send
//                 </Button>
//               }

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

const TierTwoVerification: React.FC = () => {
  const [frontImage, setFrontImage] = useState<File | null | string>(null);
  const [backImage, setBackImage] = useState<File | null | string>(null);
  const [hide, setHide] = useState<boolean>(false);
  const [frontImageDims, setFrontImageDims] = useState({ width: 200, height: 200 });
  const [backImageDims, setBackImageDims] = useState({ width: 200, height: 200 });


  interface HTMLImageElement {
    // ... existing properties and methods ...
    decode(): Promise<void>;
  }

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
            <Box className="text-center mt-6">
              {!hide && (
                <Button variant="contained" color="primary" type='submit' className="px-8 bg-[#003b2f] hover:bg-[#003b2f]">
                  Send
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
