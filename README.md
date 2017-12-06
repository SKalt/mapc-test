# MAPC-test
A technical challenge for the MAPC full-stack developer position.

## Intent
There are three major components making up this project: a geographic poll, a
geoserver and PostGIS database to store the poll results, and a viewer to
explore the results.  The poll is intended to give voters a way to express their
preferences to our client, a presidential candidate. The viewer is intended to
allow authorized personnel, such as our client's campaign manager, a way to
visualize and understand the results.  The server is intended to scale to
handle potentially millions of responses.

## Architecture
This repo is divided into [frontend/](./frontend/) and [backend/](./backend/)
directories.  The frontend directory contains a self-contained
directory for each pagie it contains. The backend directory is flat, containing
init scripts and other code needed for initializing the server and database.

Overall, here's the project architecture:
```
(users) --[fill out]-> (poll) --[posts to]-> (geoserver) --[stores]-> (PostGIS)
(geoserver) -[serves tiles to]->(viewer)
```
Please see any directory for a more in-depth explanation.