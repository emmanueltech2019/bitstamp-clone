"use client"
import React, { FormEvent, useEffect, useState, ChangeEvent } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Dialog, IconButton, DialogTitle, DialogContent, TextField, Avatar, TextareaAutosize } from '@mui/material';
import axios2 from "../../../../utils/axios"
import CloseIcon from '@mui/icons-material/Close';
import  resetPassword from "../../../nav/img/reset-password.jpg"
import Image from 'next/image';
import Swal from 'sweetalert2';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const UserProfile: React.FC = () => {
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

  interface ProfileData {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
    phone: string;
    // location: string;
    gender: string;
    zip: string;
    country: string;
    region: string;
    city: string;
    address1: string;
    address2: string;
    avatar: string;
    // Add more profile fields as needed
  }
const [profileData, setProfileData] = useState<ProfileData | null>(null);
const [oldPassword,setOldPassword] = useState("") 
const [newPassword,setNewPassword]= useState("") 
const [confirmPassword,setConfirmPassword]= useState("")
// const [country, setCountry] = useState('');
// const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios2.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });         
        // alert("response.data");
        setProfileData(response.data);
      } catch (error: any) {
        // setError(error.response?.data.message || 'An error occurred fetching profile data.');
      } finally {
        // setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this runs only once on mount
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    region: '',
    city: '',
    gender: '',
    address1: '',
    address2: '',
    zip: '',
    avatarUrl: '',
    email:""
    
    // ... other fields you need to update
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the correct field in formData
    });
  };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault();
    let data ={
      oldPassword,
      newPassword,
      confirmPassword
    }
    const response = await axios2.post('/user/password/new', data,{
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });       
    if(response.status==200){
      Toast.fire({
        icon:"success",
        text:"passwords updated successfully"
      })
      .then(()=>{
        window.location.reload();

      })
    }
  }
    // Update handleSubmit2 to handle new image upload
    const handleSubmit2 = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData();
      if (newProfileImage) { // Only append if a new image is selected
          data.append("avatar", newProfileImage);
      }
      
      // Append other form data fields
      Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
      });

    try {
      const response = await axios2.patch("/user/profile/update", 
        {...formData, ...data}, 
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }}
        );

      if (response.status === 200) {
        console.log(response)
        // handleClose(); // Close the modal after successful update
        // Optionally, display a success message to the user
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };




  const [open2, setOpen2] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setProfileImage(URL.createObjectURL(file));
  //   }
  // };
  const [newProfileImage, setNewProfileImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        setProfileImage(URL.createObjectURL(file));
        setNewProfileImage(file);
    }
};

  return (
    <Box className="p-6">
      <Grid container spacing={3}>
        {/* User Card */}
        <Grid item xs={12} md={4}>
          <Card className="rounded-lg shadow-md">
            <Box className="bg-green-500 h-12 rounded-t-lg"></Box>
            <CardContent className="flex flex-col items-center">
              <Typography variant="h6" className="mt-4 mb-2 truncate w-full text-center">
               {profileData?.name}
              </Typography>
              <Typography variant="body2" className="mb-4 text-gray-600">
                ID: {profileData?._id}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Change Password
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Personal Information */}
        <Grid item xs={12} md={8}>
          <Card className="rounded-lg shadow-md">
            <CardContent>
              <Typography variant="h6" className="font-bold mb-4">
                Personal Information
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-bold">Full Name:</span> {profileData?.name}
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-bold">Mobile:</span> {profileData?.phone? profileData.phone:"Not Set"}
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-bold">E-mail:</span> {profileData?.email}
              </Typography>
              <Typography variant="body1" className="mb-4">
                <span className="font-bold">Location:</span> {profileData?.country? profileData.country:"Not Set"}
              </Typography>
              <Button variant="contained" color="primary" className="mr-2" onClick={handleOpen2}>
                Update profile
              </Button>
              {/* <Box className="mt-4">
                <Box className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Profile Completion
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        50%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{ width: '50%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                </Box>
              </Box> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

       <Dialog open={open} onClose={handleClose}>
        <Box className="relative p-4 bg-white rounded-md shadow-md">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="absolute top-2 right-2"
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle className="text-lg font-semibold text-center mb-4">
            Reset Password
          </DialogTitle>
          <DialogContent>
            <Image
              src={resetPassword}
              alt="reset password image"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                margin="dense"
                id="oldPassword"
                label="Old Password"
                type="password"
                fullWidth
                variant="outlined"
                className="mb-2"
                value={oldPassword}
                onChange={(e)=>setOldPassword(e.target.value)}
              />
              <TextField
                margin="dense"
                id="newPassword"
                label="New Password"
                type="password"
                fullWidth
                variant="outlined"
                className="mb-2"
                value={newPassword}
                onChange={(e)=>setNewPassword(e.target.value)}
              />
              <TextField
                margin="dense"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                variant="outlined"
                className="mb-4"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="bg-[#005b49] hover:bg-[#005b49] text-white font-bold py-2 px-4 rounded"
              >
                Update
              </Button>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
      


      <Dialog open={open2} onClose={handleClose2}>
        <Box className="relative p-4 px-0 bg-white rounded-md shadow-md">
          <IconButton
            aria-label="close"
            onClick={handleClose2}
            className="absolute top-2 right-2"
          >
            <CloseIcon />
          </IconButton>

          <DialogTitle className="text-lg font-semibold text-center mb-4">
            Update Profile Settings
          </DialogTitle>

          <DialogContent>
          <div className="flex justify-center mb-4">
              {/* {profileImage ? (
                <>
                { 

                  profileData?.avatar != "" ?
                  <Avatar
                  alt="Profile Image"
                  src={URL.createObjectURL(profileImage)}
                  sx={{ width: 100, height: 100 }}
                  className="rounded-full"
                />:<Image
                alt="Profile Image"
                src={profileData?.avatar}
                // sx={{ width: 100, height: 100 }}
                className="rounded-full"
              />
                
                }
                </>
              ) : (
                <Avatar sx={{ width: 100, height: 100 }} className="rounded-full">
                  <PhotoCamera />
                </Avatar>
              )} */}

{/* {profileImage ? (
  <>
    {
      typeof profileImage === "object" ? ( // Check if profileImage is a File
        <Avatar
          alt="Profile Image"
          src={URL.createObjectURL(profileImage)} // Show preview for uploaded image
          sx={{ width: 100, height: 100 }}
          className="rounded-full"
        />
      ) : (
        <Avatar // Show image from URL
          alt="Profile Image"
          src={profileImage}
          sx={{ width: 100, height: 100 }}
          className="rounded-full"
        />
      )
    }
  </>
) : (
  <Avatar sx={{ width: 100, height: 100 }} className="rounded-full">
    <PhotoCamera /> 
  </Avatar>
)} */}
              {/* <label htmlFor="profile-image-upload">
                <Input
                  accept="image/*"
                  id="profile-image-upload"
                  type="file"
                  onChange={handleImageChange}
                />
                <Button
                  component="span"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  Upload Now
                </Button>
              </label> */}
            </div>
              <form onSubmit={handleSubmit2}>
            <TextField
                autoFocus
                required
                margin="dense"
                name="firstName"
                label="First Name"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.firstName}
              /><TextField
              autoFocus
              required
              margin="dense"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              variant="outlined"
              className="mb-2"
              onChange={handleChange}
              value={profileData?.lastName}
            />
              <TextField
                autoFocus
                required
                margin="dense"
                name="gender"
                label="Gender"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.gender}
              />
              {/* <TextField
                autoFocus
                required
                margin="dense"
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.email}
              /> */}
              <TextField
                autoFocus
                required
                margin="dense"
                name="phone"
                label="Phone"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.phone}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                name="country"
                label="Country"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.country}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                name="region"
                label="Region"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.region}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                name="city"
                label="City"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.city}
              />
              {/* <div>
              <label>Address 1</label>
              <TextareaAutosize
              minRows={3}
              required
              name='address1'
                className='w-full mb-2 h-16 border-gray-300'
                value={profileData?.address1}
                onChange={handleChange}
              />
              </div> */}
               <TextField
                autoFocus
                margin="dense"
                name="address1"
                label="Address 1"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.address1}
              />
              {/* <div>
              <label>Address 2</label>
              <TextareaAutosize
              minRows={3}
              name='address2'
                className='w-full mb-2 border-gray-300'
                value={profileData?.address2}
                onChange={handleChange}
              />
              </div> */}
              <TextField
                autoFocus
                margin="dense"
                name="address2"
                label="Address 2"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.address2}
              />

              <TextField
                autoFocus
                required
                margin="dense"
                name="zip"
                label="Postal/Zip Code"
                type="text"
                fullWidth
                variant="outlined"
                className="mb-2"
                onChange={handleChange}
                value={profileData?.zip}
              />
              <Button variant="contained" type='submit' fullWidth className="mb-4 bg-[#003b2f] hover:bg-[#003b2f] text-[12px]">
                Update
              </Button>
            {/* Rest of your form fields (First Name, Last Name, etc.) */}
            {/* ... your form fields here ... */}
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UserProfile;
