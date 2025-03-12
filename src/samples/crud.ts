import { User } from "src/models";

// Create a new user
const user: User = User.create({
  firstName: "John",
  lastName: "Doe",
});

// Update the user
user.update({
  age: 26,
});

// Get all users
for (const user of User.all()) {
  console.log(user.firstName);
}

// Find a user
const john: User | undefined = User.findBy({
  firstName: "John",
  lastName: "Doe",
});

// Delete the user
john?.delete();
