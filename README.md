# GuildEvents_Backend
## Basic information about the product
- [General information](#general-information)
- [Build and deploy the project frontend](#build-and-deploy-the-project-frontend)
- [Backend part of the project](#backend-part-of-the-project)
- [Project deployment](#project-deployment)
## General information
 WhatsTheHaps? is a web service that combines the calendars of all Aalto guilds and shows a clear weekly calendar overview of all the different Guild events, showing the time of the event location as well as by which guild the event is organized.
 With our service we aim to provide a clear overview of all guild events to provide a better experience to both guild organizers and students when organizing and signing up for events, thus offering students a better-quality student life at Aalto University.

This is the frontend part of the project written in React.js.

## Build and deploy the project frontend 

```
# Clone the master branch from git
$ git clone https://github.com/AnastasiiaBurkova/GuildEvents_Backend.git
# Or clone a specific branch
$ git clone -b [branch_name] https://github.com/AnastasiiaBurkova/GuildEvents_Backend.git
# Modify the code and build the project locally
$ npm run build
# Perform the code push
$ git add .
$ git commit -m "commit_message"
$ git push
# Verify that the build was successful, all the tests pass and the project got deployed to Azure
```
## Backend part of the project 
The frontend part: https://github.com/AnastasiiaBurkova/GuildEvents_Backend

## Project deployment 
The project is deployed in Azure: https://app-events.azurewebsites.net/
