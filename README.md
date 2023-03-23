# Project Name

Fulltime Force Project
This project is a proof of concept for fetching data from GitHub using Nest and React.
## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

-  Clone the repository to your local machine.
```
Navigate to the server directory and run npm install to install the server dependencies.
Navigate to the client directory and run npm install to install the client dependencies.
Running the Project
```
### Setup

-  Open two terminal windows, one for the server and one for the client.
```
In the first terminal window, navigate to the server directory and run npm run server-dev to start the server in development mode.
In the second terminal window, navigate to the client directory and run npm run client-dev to start the client in development mode.
Open a web browser and navigate to `{http://localhost:3000}` to view the application.
```
-  Create .env file in both folders client and server
For Client should be this 
```
GITHUB_USER="Rcalix"
GITHUB_REPO="full-poc"
```
For Server
```
GITHUB_ACCESS_TOKEN=""
GITHUB_USER="Rcalix"
GITHUB_REPO="full-poc"

```
`Github access will be attached in the email with the repo url`
## Usage

-  Scripts
This project includes the following scripts:
```
 npm run install-server : Installs the server dependencies.
 npm run install-client : Installs the client dependencies.
 npm run server-dev : Starts the server in development mode.
 npm run client-dev : Starts the client in development mode.
```
## License


License
This project is licensed under the MIT License.
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
