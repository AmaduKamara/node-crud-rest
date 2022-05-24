import { v4 as uuidv4 } from "uuid";

// Mock database for users
let users = [];

// Fetch all users
export const fetchUsers = (req, res) => {
  res.send(users);
};

// Create a user
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(user);
};

// Get a user
export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.send(user);
};

// Delete user
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

// Update user
export const updateUser = (req, res) => {
  // 1. Get the id from params
  const { id } = req.params;
  // 2. Find the user by the id
  const user = users.find((user) => user.id === id);
  // 3. Get the request body data that is changed
  const { firstName, lastName, email, age } = req.body;

  // 4. Update what is changed
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (email) user.email = email;
  if (age) user.age = age;

  res.send(user);
};
