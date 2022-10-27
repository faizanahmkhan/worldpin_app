# World Pin

A unique photo sharing website for friends/family that allows you to not only view their pictures, but see exactly where they were taken. When logged in you can click the find me button and create a new pin where you can upload pictures from your exact location- which can instantly be seen by friends and family.

Meet the team:

Ben: [LinkedIn](https://www.linkedin.com/in/ben-de-sousa-13a669217/)
[email](bdsousa069@gmail.com)

Faizan: [LinkedIn](https://www.linkedin.com/in/fkhan38/)
[email](faizanahmkhan@gmail.com)

Hasmeet: [LinkedIn](https://www.linkedin.com/in/hasmeet-k-30680759/)
[email](hasmeetkaur.hk@gmail.com)

Kai: [email](Owenkaic@gmail.com)

Ravi: [LinkedIn](https://www.linkedin.com/in/ravihussein-patel/)
[email](ravihusseinpatel@gmail.com)


## Table of Contents

- Summary
- Set-up
- Requests
- Project Structure 
- Extensions


## Summary

Bright Network Technology Academy has tasked us with producing an API using Spring, which is connected to a website/application where user infromation (in our case their pins containing images, description, date and location) is stored in a Database. Our team have used this opportunity to come up with something creative and original- an app that is the only of it's kind.


## Set-up

(Note: Java 17 is required to run the backend of this app. PostgreSQL is required for the database.) 

1.Clone this repository by clicking the green 'code' sign on top of this page. Click the SSH key and type in your terminal the following: git clone "https://github.com/bendesousa/bnta_capstone_project".

3. Create a database with the name world_pin.

4. Open the react app and run the command npm install (you may be required to add --force flag due to version control issues). 

5. To start up the app, first get the backend running in your IDE of choice (this project was built using IntelliJ). Then run the frontend with the npm start command.

##Requests

The following are the lists of requests that are available to be run to the backend. 

| `…/pins ` | `GET` | Get all Pins |

| `…/pins/{date} ` | `GET` | Get Pins by date |

| `…/pins/{location} `| `GET`| Get Pins by location |

| `…/pins/{name}` | `GET` | Get Pins by name |

| `…/name` | `GET` | Get Username |

| `…/pin ` | `POST` | Save pin |

| `…/{userId}/{pinId} ` | `POST` | Save pin to user |

| `…/pin ` | `DELETE` | Remove pin |



## Project Structure

### Wireframe
![alt text](https://github.com/bendesousa/bnta_capstone_project/blob/main/pic_wireframe.png)

### UML
![alt text](https://github.com/bendesousa/bnta_capstone_project/blob/main/UML.png)

### ERD
![alt text](https://github.com/bendesousa/bnta_capstone_project/blob/main/Capstone_ERD.svg)

### Dataflow
![alt text](https://github.com/bendesousa/bnta_capstone_project/blob/main/capstone_dataflow.png)


## Extensions

-Add filter Pins by : Location(country) & Year(images were taken)
-Add search by User.
-Add security to authentication so only certain users can 

