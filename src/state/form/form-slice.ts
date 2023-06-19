import { createSlice } from "@reduxjs/toolkit";

const userDetails = {
  username:"",
    email:"",
    phone_number:"",
    address_1:"",
    address_2:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
    geolocation:"",
    single_pic:"",
    multi_pic:[]
};

const formSlice = createSlice({
  name: "userDetails",
  initialState:userDetails,
  reducers: {
    setUserName: (state :any , action: {payload : String}) => {
        state.username = action.payload;
    },
    setEmail : (state:any,  action: {payload : String}) => {
        state.email = action.payload;
    },
    setPhoneNumber : (state:any,  action: {payload : String}) => {
        state.phone_number = action.payload;
    },
    setAddress1 : (state:any,  action: {payload : String}) => {
        state.address_1 = action.payload;
    },
    setAddress2 : (state:any,  action: {payload : String}) => {
        state.address_2 = action.payload;
    },
    setCity : (state:any,  action: {payload : String}) => {
        state.city = action.payload;
    },
    setState : (state:any,  action: {payload : String}) => {
        state.state = action.payload;
    },
    setCountry : (state:any,  action: {payload : String}) => {
        state.country = action.payload;
    },
    setPincode : (state:any,  action: {payload : String}) => {
        state.pincode = action.payload;
    },
    setGeoLocation : (state:any,  action: {payload : String}) => {
        state.geolocation = action.payload;
    },
    setSinglePic : (state:any,  action: {payload : String}) => {
        state.single_pic = action.payload;
    },
    setMultiPic : (state:any,  action: {payload : String}) => {
        state.multi_pic = action.payload;
    }

  },
  extraReducers: {},
});

export const {
    setUserName,
    setEmail,
    setPhoneNumber,
    setAddress1,
    setAddress2,
    setCity,
    setState,
    setCountry,
    setPincode,
    setGeoLocation,
    setSinglePic,
    setMultiPic,
  } = formSlice.actions;
  
  export default formSlice.reducer;
