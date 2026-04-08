# Car-app

A full-stack application with a Spring Boot REST API backend and an Angular frontend for managing a MySQL database of cars classified by their ACRISS codes.

## Features

- Browse, add, update, and delete car records
- Car classification by ACRISS code (category, type, transmission, fuel)
- RESTful API with JSON responses
- Responsive Angular frontend

## Tech Stack

- **Backend:** Java, Spring Boot, Spring Data JPA, Lombok
- **Frontend:** Angular, TypeScript
- **Database:** MySQL
- **Build:** Maven, npm

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/car/main` | List all cars |
| GET | `/car/{id}` | Get car by ID |
| POST | `/car/edit` | Add a new car |
| POST | `/car/edit/{id}` | Update an existing car |
| DELETE | `/car/delete/{id}` | Delete a car |

## Setup

### Backend

1. Configure your MySQL connection in `Car-app-BE/src/main/resources/application.properties`
2. Run the Spring Boot app:
   ```
   cd Car-app-BE
   mvn spring-boot:run
   ```
   API will be available at `http://localhost:8080`

### Frontend

1. Install dependencies and start the dev server:
   ```
   cd Car-app-FE
   npm install
   ng serve
   ```
   App will be available at `http://localhost:4200`

## License

This software is all rights reserved. Use, copying, modification, or distribution requires prior written permission from the author. See the [LICENSE](LICENSE) file for full terms or contact [beslagicadin@gmail.com](mailto:beslagicadin@gmail.com) to request permission.
