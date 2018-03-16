# MISGLB

ASPNET CORE REACT Application for MISGLB Database Interface

## Dependencies

Install <a href="https://www.microsoft.com/net/learn/get-started/windows">ASP.NET CORE</a>
Install <a href="https://nodejs.org/en/download/">Node/NPM</a>
Install <a href="https://dev.mysql.com/downloads/mysql/">MySQL Server</a>

## Installation

Clone Repo
```
  git clone https://github.com/victor-jr/misglb.git
```

NPM Install
```
npm install
```

### Database Configuration
Edit Startup.cs for the database settings:
Currently the database is set to look for a MySQL Database 'misglb' on localhost with credentials:
user: root
password: root

Change this to whatever database you have set up in MySQL

### Authentication Service
This app currently uses <a href="https://auth0.com/">Auth0</a> for its authentication service. Currently api is set to victor's test account.

## Start App
```
dotnet run
```
