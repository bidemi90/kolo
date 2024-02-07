const newkolomodel = require("../models/kolomodels");
const bcryptjs = require("bcryptjs");
const {sendMail}=require("../utils/mailer")
const {generatetoken}=require("../services/koloservices")
const {cloudinary}= require("../utils/cloudinaryConfig")
const weeklyContributionmodel=require("../models/weeklykolo")

const open = (req, res) => {
  console.log("mememm");
  return res.status(200).send({ message: "welcome", status: true });
};
const signup = async (req, res, next) => {
  console.log(req.body);
  let data = req.body;

  const checkExistingDetails = await newkolomodel.findOne({
    $or: [
      { email: data.email },
      { username: data.username }
    ]
  });
  
  
  if (checkExistingDetails) {
    return res
      .status(409)
      .send({ message: "Email or username already in use", status: false });
  } else {
    let filledform = newkolomodel(data);
    filledform
      .save()
      .then((result) => {
        console.log(result);
        sendMail(result.email, result.name)
        return res
          .status(200)
          .send({ message: "sign up successful", status: true });
          
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
  }
};
const login = async (req, res, next) => {
    try {
      console.log(req.body);
      const data = req.body;
      const emailOrUsername = data.emailorusername; // Corrected variable name
      
      const found = await newkolomodel.findOne({
        $or: [
          { email: emailOrUsername },
          { username: emailOrUsername } // Corrected variable name
        ]
      });
  
      if (!found) {
        return res.status(409).send({ message: "Invalid email or username", status: false }); // Corrected error message
      }
  
      const password = data.password;
  
      const compare = await bcryptjs.compare(password, found.password);
  
      if (!compare) {
        console.log("Invalid password");
        return res.status(409).send({ message: "Invalid password", status: false });
      }
  
      const email = found.email; // Corrected variable name
      const token = generatetoken(email); // Assuming you have the generatetoken function implemented elsewhere
  
      console.log("Login successful");
      return res.status(200).send({ message: "Welcome", status: true, token:token , user:found });
      // Render the appropriate view for the dashboard using the view engine and view name
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  const addbvn = async (req, res, next) => {
    console.log(req.body);
    const data = req.body;
    const emailOrUsername = data.emailorusername;
    const bvn = data.bvn;
  
    const found = await newkolomodel.findOne({
      $or: [
        { email: emailOrUsername },
        { username: emailOrUsername }
      ]
    });
  
    if (!found) {
      return res.status(409).send({ message: "Invalid email or username", status: false });
    }
  
    // Update the 'bvn' field in the 'found' document if it exists
    if (found) {
      found.bvn = bvn; // Update the 'bvn' field with the new value
      await found.save(); // Save the updated document
      console.log(found.email);
      console.log(found.username);
      return res.status(200).send({ message: "BVN added successfully", status: true });
    }
  };


  const imageUpload = async (req, res, next) => {
    const { files } = req.body
    try {
        console.log(files)
        const result = await cloudinary.uploader.upload(files)
        console.log(result)
        const image_url = result.secure_url
        const public_id = result.public_id
        return res.status(200).send({message:"Upload successful", status:true, secure_url: image_url})
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const createkolo=async (req, res, next) =>{
  console.log(req.body);
  const data =req.body


  const checkExistingDetails = await weeklyContributionmodel.findOne({
   kolo_name:data.kolo_name
  });
  
  
  if (checkExistingDetails) {
    return res
      .status(409)
      .send({ message: "KOLO_NAME ALREADY IN USE ", status: false });
  } else {
    let filledform = weeklyContributionmodel(data);
    filledform
      .save()
      .then((result) => {
        console.log(result);
        return res
          .status(200)
          .send({ message: "kolo created successful", status: true });
          
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
  }


}

  

module.exports = { signup, open ,login , addbvn,createkolo};
