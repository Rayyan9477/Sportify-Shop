# Sportify Shop

## Project Summary
Sportify Shop is a comprehensive online shopping web application dedicated to sports items. It offers a wide range of products, from sports apparel to equipment, ensuring a seamless and enjoyable shopping experience for sports enthusiasts. The application is built using a robust tech stack to ensure scalability, performance, and security.

## Technologies and Techniques Used
- **Frontend:**
  - TypeScript
  - JavaScript
  - HTML/CSS
- **Backend:**
  - Java
  - Spring Boot
  - Hibernate
- **Database:**
  - MongoDB
- **Other Tools:**
  - Node.js
  - npm (Node Package Manager)

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)
- Java Development Kit (JDK)
- MongoDB

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/Rayyan9477/sportify-shop.git
    cd sportify-shop
    ```

2. **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    ```

3. **Install backend dependencies:**
    ```bash
    cd ../backend
    ./mvnw install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Start the backend server:**
    ```bash
    cd backend
    ./mvnw spring-boot:run
    ```

6. **Start the frontend development server:**
    ```bash
    cd ../frontend
    npm start
    ```

## Usage
1. Open your web browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Browse through the sports items and add desired products to your cart.
4. Proceed to checkout to complete your purchase.

## Contribution Guidelines
We welcome contributions to Sportify Shop! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Contact Information
For any inquiries or feedback, please contact us at:
- **Email:** rayyanahmed265@yahoo.com
- **LinkedIn:** [Rayyan Ahmed](https://www.linkedin.com/in/rayyan-ahmed9477/)

## FAQ
**Q: How can I reset my password?**
A: Click on the "Forgot Password" link on the login page and follow the instructions.

**Q: Can I track my order?**
A: Yes, you can track your order from the "Order History" section in your account.

**Q: How can I contact customer support?**
A: You can reach out to our customer support team at rayyanahmed265@yahoo.com.
