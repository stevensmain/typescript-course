// This code defines an enumeration named user with four properties: normalUser, adminUser, payedUser, and rootUser. Each property is
// assigned a string value that corresponds to the name of the user type. The code then assigns the normalUser property to a constant
// variable named myUser. Finally, the code checks if the myUser constant is strictly equal to the normalUser property of the user
// enumeration. If the condition is true, the code outputs a string message to the console indicating that the user does not have
// permissions to create.

enum user {
  normalUser = "normal",
  adminUser = "admin",
  payedUser = "payed",
  rootUser = "root",
}

const myUser = user.normalUser;

if (myUser === user.normalUser) {
  console.log("You not have permissions to create");
}
