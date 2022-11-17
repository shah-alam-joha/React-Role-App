export default function getUserData() {
  return [
    {
      id:1,
      name: "joha",
      username: "joha",
      password: "123456",
      role:{
        id: 1,
        name: "Admin",
      },
    },
    {
      id:2,
      name: "jerin",
      username: "jerin",
      password: "1234567",
      role: {
        id: 2, 
        name: "Super Admin"
      },
    },
    {
      id:3,
      name: "jannat",
      username: "jannat",
      password: "password",
      role: null,
    
    },
  ];
}
