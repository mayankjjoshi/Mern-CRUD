import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({
        msg: "user data not found",
      });
    }

    const savedData = await userData.save();
    res.status(200).json({
      msg:"User Added Succesfully",
      savedData,
    });
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find({});
    if (!userData) {
      return res.status(404).json({
        msg: "user data not found",
      });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    // const id = req.params.id;
    const userExit = await User.findById(req.params.id);

    if (!userExit) {
      return res.status(404).json({
        msg: "user data not found",
      });
    }

    res.status(200).json(userExit);
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExit = await User.findById(id);

    if (!userExit) {
      return res.status(401).json({
        msg: "user data not found",
      });
    }

    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      updatedData,
      msg:"Updated Successfully"
    });
      
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExit = await User.findById(id);
    if (!userExit) {
      res.status(404).json({
        msg: "User not exit"
      });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({
      msg: "user deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
};