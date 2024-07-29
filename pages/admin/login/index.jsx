"use client"
import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Head from "next/head";
import Image from "next/image";
import Swal from "sweetalert2";

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray", // Box border color
    },
    "&:hover fieldset": {
      borderColor: "gray", // Box border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "gray", // Box border color on focus
    },
  },
  "& .MuiInputBase-root": {
    backgroundColor: "gray", // Input background color (light gray)
  },
}));

const SignInSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (values) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
    console.log(values);

    // Swal.fire({
    //   title: 'Success!',
    //   text: 'You have signed in successfully.',
    //   icon: 'success',
    //   confirmButtonText: 'OK'
    // });
    // console.log(values);
  };

   

  return (
    <>
      <Head>
        <title>Foody | Admin</title>
        <meta name="description" content="foody" />
        <link rel="icon" href="/images/png/admin.png" />
      </Head>
      <div className="min-h-screen bg-darkBlue1">
        <div className="w-full ">
          <header className="mb-8 pt-14 pl-8">
            <h1 className="text-[#F5F5F5] font-extrabold text-[28px]">
              Foody
              <span className="text-[#EAAB00]">.</span>
            </h1>
          </header>
          <Formik
            initialValues={{ name: "", password: "" }}
            validationSchema={SignInSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className=" flex justify-center max-w-4xl mx-auto flex-col md:flex-row bg-darkBlue2 rounded-lg overflow-hidden">
                  <div className="w-full md:w-1/2 py-14 px-6 ">
                    <p className="text-grayText font-bold text-2xl text-center mb-6">
                      Welcome Admin
                    </p>
                    <div className="mb-4">
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel  htmlFor="outlined-adornment-name">
                          Name
                        </InputLabel>
                        <Field
                          autoComplete="off"
                          as={CustomOutlinedInput}
                          name="name"
                          id="outlined-adornment-name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <PersonIcon />
                            </InputAdornment>
                          }
                          label="Name"
                          placeholder="e-mail"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-600"
                        />
                      </FormControl>
                    </div>
                    <div className="mb-4">
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel  htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <Field
                          as={CustomOutlinedInput}
                          name="password"
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          placeholder="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-600"
                        />
                      </FormControl>
                    </div>
                    <Button 
                      variant="contained"
                      size="medium"
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: "#c035a2 ",
                        "&:hover": {
                          backgroundColor: "#c035a2 ",
                        },
                        textTransform: "none",
                        fontSize: "1rem",
                        py: 2,
                      }}
                      className="text-white font-medium text-xl py-2 bg-lightPurple3"
                    >
                      Sign In
                    </Button>
                  </div>
                  <div className="w-full md:w-1/2 bg-adminLogin flex items-center justify-center">
                    <div>
                      <Image
                        src="/images/svg/adminLogin.svg"
                        width={300}
                        height={300}
                        alt="Admin login"
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
