export const users = [
    {
      userId: 1,
      name: "manobhiramreddy",
      email: "bmanobhiramreddy@gmail.com",
      role: "Admin",
      status: "Active",
      created: "2024-12-09",
      image:"",
    },
    {
      userId: 2,
      name: "jeshwanth",
      email: "bjeshwanthreddy@gmail.com",
      role: "User",
      status: "Inactive",
      created: "2024-12-01",
      image: "",
    },
    {
      userId: 3,
      name: "umeshkrishna",
      email: "umeshkrishna@gmail.com",
      role: "User",
      status: "Active",
      created: "2024-12-05",
      image:"",
    },
    {
      userId: 4,
      name: "kaushik",
      email: "kaushik@gmail.com",
      role: "Manager",
      status: "Inactive",
      created: "2024-11-01",
      image: "",
    },
    {
      userId: 5,
      name: "arjunreddy",
      email: "arjunreddy@gmail.com",
      role: "Admin",
      status: "Inactive",
      created: "2024-12-09",
      image:"",
    },
  ];
  
  export const roles = [
    {
      Id: 1,
      rolename: "Admin",
      description:
        "Complete access and manages user's data.",
      permissions: {
        read: true,
        write: true,
        delete: true,
        manageRoles: true,
        viewAnalytics: true,
      },
    },
    {
      Id: 2,
      rolename: "User",
      description:
        "Read and write their data",
      permissions: {
        read: true,
        write: false,
        delete: false,
        manageRoles: false,
        viewAnalytics: true,
      },
    },
    {
      Id: 3,
      rolename: "Manager",
      description:
        "Manage users, assign roles, view reports, but can't delete data",
      permissions: {
        read: true,
        write: true,
        delete: false,
        manageRoles: false,
        viewAnalytics: true,
      },
    },
    {
      Id: 4,
      rolename: "Guest",
      description:
        "Has limited access to view content but cannot make changes or access sensitive data.",
      permissions: {
        read: true,
        write: true,
        delete: false,
        manageRoles: false,
        viewAnalytics: false,
      },
    },
    {
      Id: 5,
      rolename: "Moderator",
      description:
        "Can moderate user-generated content and manage user activities.",
      permissions: {
        read: true,
        write: true,
        delete: false,
        manageRoles: true,
        viewAnalytics: false,
      },
    },
    {
      Id: 4,
      rolename: "Super Admin",
      description:
        "Has the highest level of access, can perform any action across the platform, including system-level management.",
      permissions: {
        read: true,
        write: true,
        delete: false,
        manageRoles: false,
        viewAnalytics: false,
      },
    },
  ];
  
  export const permissions = [
    {
      id: 1,
      permission: "Read",
      description: "Allows reading of data",
    },
    {
      id: 2,
      permission: "Write",
      description: "Allows writing of data",
    },
    {
      id: 3,
      permission: "Execute",
      description: "Allows execution of operations",
    },
    {
      id: 4,
      permission: "Delete",
      description: "Allows deletion of records",
    },
    {
      id: 5,
      permission: "Admin",
      description: "Full administrative permissions",
    },
    {
      id: 6,
      permission: "View Reports",
      description: "Permission to view reports",
    },
  ];
  