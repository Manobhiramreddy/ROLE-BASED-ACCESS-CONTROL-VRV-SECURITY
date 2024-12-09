**Role-Based Access Control (RBAC) UI Dashboard  | VRV Security**

**Project Overview**  
This project is a dynamic **Role-Based Access Control (RBAC)** dashboard built to provide administrators with an intuitive interface for managing users, roles, and permissions. Designed with a focus on usability, security, and scalability, the dashboard enables seamless handling of access control while maintaining a clean and modern UI.  
This project was created as part of an internship evaluation for **VRV Security**, demonstrating expertise in frontend development, secure design practices, and the implementation of RBAC concepts.  

**Key Features**  

**1. User Management**  
- View and manage a list of users with key attributes like name, role, and status.  
- Perform CRUD operations: Add, Edit, and Delete users dynamically.  
- Assign roles to users with a simple and interactive workflow.  
- Manage user status (Active/Inactive).  

**2. Role Management**  
- Define and edit roles with associated permissions.  
- Assign custom permissions like **Read**, **Write**, **Delete**, or any custom attributes.  
- View the hierarchy and details of roles for better control.  
- CRUD operations for managing roles dynamically.  

**3. Dynamic Permission Handling**  
- Assign, modify, and display permissions for roles.  
- Real-time updates and clear visualization of assigned permissions.  

**4. Mock API Integration (Optional)**  
- Simulated API calls for handling users and roles via mock responses.  
- Perform CRUD operations to mimic real-world scenarios.  

**5. Responsive Design**  
- Fully responsive layout compatible with desktops, tablets, and mobile devices.  

**6. Enhanced User Experience (UX)**  
- Sorting, filtering, and search capabilities for large datasets.  
- Intuitive modals and in-line editing for seamless interaction.  

**Technology Stack**  

- **Frontend Framework**: React.js(Vite)

**Setup Instructions**  

**1. Clone the Repository**  
```bash  
git clone https://github.com/Manobhiramreddy/ROLE-BASED-ACCESS-CONTROL-VRV-SECURITY.git
cd Frontend
```  

**2. Install Dependencies**  
```bash  
npm install  
```  

**3. Run the Development Server**  
```bash  
npm start  
```  

**4. (Optional) Run Mock API**  
If you are using **JSON Server** for API simulation:  
```bash  
npx json-server --watch db.json --port 3001  
```  

**5. Access the Application**  
Open your browser and navigate to:  
```
http://localhost:3000  
```  

---

## **Project Structure**  

```
## Project Structure

Role Based Access Control VRV Security/
├── Frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Api/
│   │   │   │   └── MockDatas.js
│   │   │   ├── Common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── Dashboard/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Modal/
│   │   │   │   ├── AddModal/
│   │   │   │   │   ├── AddPermissionModal.jsx
│   │   │   │   │   ├── AddRoleModal.jsx
│   │   │   │   │   └── AddUserModal.jsx
│   │   │   │   ├── EditModal/
│   │   │   │   │   ├── EditPermissionModal.jsx
│   │   │   │   │   ├── EditRoleModal.jsx
│   │   │   │   │   └── EditUserModal.jsx
│   │   │   ├── Permissions/
│   │   │   │   └── Permissions.jsx
│   │   │   ├── Roles/
│   │   │   │   └── Role.jsx
│   │   │   ├── Users/
│   │   │   │   ├── User.jsx
│   │   │   │   └── NotFoundPage.jsx
│   │   ├── pages/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── PermissionPage.jsx
│   │   │   ├── RolePage.jsx
│   │   │   └── UserPage.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── vite.config.js
  
```  

---
**Screenshots**  

**Dashboard Overview**  
![Screenshot 2024-12-09 214915](https://github.com/user-attachments/assets/76e18aa0-46f3-4be5-a0b0-e62696c24168)
 
**User Management**  
![Screenshot 2024-12-09 214941](https://github.com/user-attachments/assets/d22d10e1-f55f-43e6-8ba5-4ba941940f38)
![Screenshot 2024-12-09 215033](https://github.com/user-attachments/assets/1d6b5276-12ab-44ca-b21a-a33471f7facb)

 
**Role Management**  
![Screenshot 2024-12-09 214959](https://github.com/user-attachments/assets/547e6c88-dadf-4380-9a1a-7742b0231063)
![Screenshot 2024-12-09 215046](https://github.com/user-attachments/assets/a440e595-0101-4fef-86d1-6f9c4fb5d182)


**Permission Management**
![Screenshot 2024-12-09 215011](https://github.com/user-attachments/assets/ea3b10cc-c9bb-4a63-ad41-88d0b7e402b6)
![Screenshot 2024-12-09 215120](https://github.com/user-attachments/assets/031a89fc-efc3-4893-8f9c-1b8fff867e73)


---

**Core Functionalities Explained**  

**1. User Management**  
Admins can:  
- Add users with attributes like name, email, and role.  
- Edit existing user details or reassign roles.  
- Toggle user status between Active and Inactive.  
- Remove users from the system as required.  

**2. Role Management**  
Admins can:  
- Define roles with a set of permissions (Read, Write, Delete).  
- Edit roles to update permissions.  
- Remove obsolete roles to maintain a clean structure.  

**3. Permission Management**  
Admins can:  
- Assign and modify permissions dynamically.  
- Visualize roles and their associated permissions for clarity.  

---

**Security Measures**  
- **Input Validation**: Ensures secure data handling.  
- **Error Handling**: Provides feedback for invalid actions.  
- **Client-Side Security**: Prevents unauthorized actions and protects against common vulnerabilities.  

---
**Contribution Guidelines**  
Feel free to fork the repository and submit pull requests. Contributions for additional features, bug fixes, or performance improvements are welcome!  

---
**Author**  
**[Manobhiram Reddy]**  
- GitHub: [Manobhiramreddy]((https://github.com/Manobhiramreddy) 
- LinkedIn: [Manobhiram Reddy](https://www.linkedin.com/in/bodapatla-manobhiramreddy/)  

---
**Acknowledgments**  
This project is part of the **VRV Security Frontend Developer Intern Assignment**. Special thanks to VRV Security for providing an opportunity to showcase RBAC concepts in practice.  
