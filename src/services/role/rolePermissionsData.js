export default function getRolePermissionsData() {
  return [
    {
      id: 1,
      name: "Admin",
      permissions: [],
    },
    {
      id: 2,
      name: "Super Admin",
      permissions: [
        {
            id: 1,
            name: "create_product",
          },
          {
            id: 2,
            name: "read_product",
          },
          {
            id: 3,
            name: "update_product",
          },
          {
            id: 4,
            name: "delete_product",
          },
      ],
    },
    {
      id: 3,
      name: "Cashier",
      permissions: [
        {
            id: 1,
            name: "create_account",
          },
          {
            id: 2,
            name: "create_account",
          },
          {
            id:3,
            name: "create_account",
          },
          {
            id: 4,
            name: "create_account",
          },
      ],
    }
  ];
}
