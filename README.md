<<<<<<< HEAD
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
=======

# MINDHARMONY   API 

## Overview
This documentation provides an overview of the endpoints available in the MINDHARMONY  API. The API includes functionality for user registration, login, profile management, and session management.

## Endpoints

### User Endpoints

#### Register
- **URL:** `/register/`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Response:**
  ```json
  {
    "user": {
      "id": "integer",
      "username": "string",
      "email": "string",
      "profile": {
        "id": "integer",
        "bio": "string",
        "location": "string"
      }
    },
    "token": "string"
  }
  ```

#### Login
- **URL:** `/login/`
- **Method:** `POST`
- **Description:** Login a user and return a token.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string",
    "user": {
      "id": "integer",
      "username": "string",
      "email": "string",
      "profile": {
        "id": "integer",
        "bio": "string",
        "location": "string"
      }
    }
  }
  ```

#### User Details
- **URL:** `/user-details/`
- **Method:** `GET`
- **Description:** Retrieve the details of the authenticated user.
- **Headers:**
  ```http
  Authorization: Token your_token_here
  ```
- **Response:**
  ```json
  {
    "id": "integer",
    "username": "string",
    "email": "string",
    "profile": {
      "id": "integer",
      "bio": "string",
      "location": "string"
    }
  }
  ```

#### Profile
- **URL:** `/profile/<int:pk>/`
- **Methods:** `GET`, `PUT`
- **Description:** Retrieve or update a user's profile.
- **Headers:**
  ```http
  Authorization: Token your_token_here
  ```
- **GET Response:**
  ```json
  {
    "id": "integer",
    "bio": "string",
    "location": "string",
    "user": {
      "id": "integer",
      "username": "string",
      "email": "string"
    }
  }
  ```
- **PUT Request Body:**
  ```json
  {
    "bio": "string",
    "location": "string"
  }
  ```
- **PUT Response:**
  ```json
  {
    "id": "integer",
    "bio": "string",
    "location": "string",
    "user": {
      "id": "integer",
      "username": "string",
      "email": "string"
    }
  }
  ```

### Session Endpoints

#### Session List
- **URL:** `/session/`
- **Methods:** `GET`, `POST`
- **Description:** Retrieve a list of sessions or create a new session.
- **Headers:**
  ```http
  Authorization: Token your_token_here
  ```
- **GET Response:**
  ```json
  [
    {
      "id": "integer",
      "name": "string",
      "date": "string",
      "duration": "integer"
    }
  ]
  ```
- **POST Request Body:**
  ```json
  {
    "name": "string",
    "date": "string",
    "duration": "integer"
  }
  ```
- **POST Response:**
  ```json
  {
    "id": "integer",
    "name": "string",
    "date": "string",
    "duration": "integer"
  }
  ```

#### Session Detail
- **URL:** `/session/<int:pk>/`
- **Methods:** `GET`, `PUT`, `DELETE`
- **Description:** Retrieve, update, or delete a session.
- **Headers:**
  ```http
  Authorization: Token your_token_here
  ```
- **GET Response:**
  ```json
  {
    "id": "integer",
    "name": "string",
    "date": "string",
    "duration": "integer"
  }
  ```
- **PUT Request Body:**
  ```json
  {
    "name": "string",
    "date": "string",
    "duration": "integer"
  }
  ```
- **PUT Response:**
  ```json
  {
    "id": "integer",
    "name": "string",
    "date": "string",
    "duration": "integer"
  }
  ```
- **DELETE Response:**
  ```http
  HTTP 204 No Content
  ```

## Authentication
- **Token Authentication:** Add the token in the `Authorization` header as shown below:
  ```http
  Authorization: Token your_token_here
  ```

## Error Handling
- **400 Bad Request:** The request was invalid or cannot be served. Check the request parameters.
- **401 Unauthorized:** Authentication credentials were missing or incorrect.
- **403 Forbidden:** The request is understood, but it has been refused or access is not allowed.
- **404 Not Found:** The requested resource could not be found.

## Example Curl Commands

### Register a new user
```sh
curl -X POST http://your_domain.com/register/   -H "Content-Type: application/json"   -d '{
        "username": "exampleuser",
        "password": "examplepassword",
        "email": "user@example.com"
      }'
```

### Login
```sh
curl -X POST http://your_domain.com/login/   -H "Content-Type: application/json"   -d '{
        "username": "exampleuser",
        "password": "examplepassword"
      }'
```

### Get User Details
```sh
curl -X GET http://your_domain.com/user-details/   -H "Authorization: Token your_token_here"
```

### Get All Sessions
```sh
curl -X GET http://your_domain.com/session/   -H "Authorization: Token your_token_here"
```

### Create a Session
```sh
curl -X POST http://your_domain.com/session/   -H "Authorization: Token your_token_here"   -H "Content-Type: application/json"   -d '{
        "name": "Session 1",
        "date": "2024-07-06",
        "duration": 60
      }'
```

### Get Session Detail
```sh
curl -X GET http://your_domain.com/session/1/   -H "Authorization: Token your_token_here"
```

### Update Session
```sh
curl -X PUT http://your_domain.com/session/1/   -H "Authorization: Token your_token_here"   -H "Content-Type: application/json"   -d '{
        "name": "Updated Session",
        "date": "2024-07-07",
        "duration": 90
      }'
```

### Delete Session
```sh
curl -X DELETE http://your_domain.com/session/1/   -H "Authorization: Token your_token_here"
```
>>>>>>> 9b04c71a5597394ebd2cd6b967e5808264e69117
