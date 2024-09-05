# TransferService-API

A RESTful API for handling fund transfers between accounts using Express.js. 


## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Error Handling](#error-handling)

## Technology Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.

## Features
- **Transaction Processing**: Transfer funds between accounts with proper validation checks.

- **Failsafe Operations**: Handles errors such as insufficient funds, invalid amounts, and non-existent accounts gracefully.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Senal-Punsara/TransferService-API.git
   ```
2. Navigate into the project directory:
   ```bash
   cd TransferService-API/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```


## Usage
### Starting the Server
To start the API server, run:
```bash
nodemon .
```
The server will start on `http://localhost:5000`.

## API Endpoints

### 1. Transfer Funds

**Endpoint**: `http://localhost:5000/api/transfer`  
**Method**: `POST`

**Description**: Transfers funds between two accounts.

**Request Body**:

```json
{
  "sourceAccNum": "1",
  "destAccNum": "2",
  "amount": 200
}
```

**Response**:
* **200 OK**: If the transfer is successful.

```json
{
    "message": "Transfer Successful",
    "transaction": [
        {
            "sourceAccNum": "1",
            "desAccNum": "2",
            "amount": 200,
            "date": "2024-09-05T11:36:35.041Z"
        }
    ]
}
```
* **400 Bad Request**: If the request is invalid or an error occurs.

```json
{
  "error": "Error message describing the failure"
}
```

## Data Models


The API uses simple in-memory data models to represent accounts and transactions, allowing for easy testing and demonstration without a persistent database.

### Account Model

- **Account Number**: A unique string identifier for each account (e.g., `"1"`).
- **Balance**: A number representing the current balance of the account (e.g., `1000`).

### Transaction Model

- **Source Account Number**: The account number from which funds are being transferred.
- **Destination Account Number**: The account number to which funds are being transferred.
- **Amount**: The numeric amount of funds being transferred.
- **Date**: The timestamp of when the transaction occurred.

### Example of Data Models

- **Accounts**:

  ```json
  [
    {
      "accNumber": "123456",
      "balance": 1000
    },
    {
      "accNumber": "654321",
      "balance": 500
    }
  ]
  ```
- **Transactions**:

  ```json
   "transaction": [
        {
            "sourceAccNum": "1",
            "desAccNum": "2",
            "amount": 200,
            "date": "2024-09-05T11:36:35.041Z"
        }
    ]
  ```

## Error Handling


### 1. Insufficient Funds

Occurs when the source account does not have enough balance to cover the transfer amount.

- **Error Condition**: The balance of the source account is less than the requested transfer amount.
- **Response**: `400 Bad Request`
  
  **Example Response**:
  
  ```json
  {
    "error": "Insufficient balance in the source account."
  }
  ```
### 2. Account Not Found

Occurs when either the source or the destination account does not exist in the system.

- **Error Condition**: The source or destination account number provided in the request does not match any existing accounts.
- **Response**: `400 Bad Request`
  
  **Example Response**:
  
  ```json
  {
    "error": "Account not found."
  }
  ```


### 3. Invalid Transfer Amount

Occurs when the transfer amount is zero or negative, which is not allowed.

- **Error Condition**: The amount specified in the transfer request is less than or equal to zero.
- **Response**: `400 Bad Request`
  
  **Example Response**:
  
  ```json
  {
    "error": "Amount must be greater than zero."
  }
  ```



