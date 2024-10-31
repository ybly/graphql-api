A GraphQL API that allows internal users to retrieve and add data to a database of distance learning courses.

Queries:
courses(limit, sortOrder): Returns a list of courses in the database. Accepts optional parameters limit (integer) and sortOrder (enum: ASC | DESC).
course(id): Returns the course with the specified id.
collections: Returns a list of all course collections (categories).
collection(id): Returns a specific collection along with all contained courses.

Mutations:
addCourse(input): Adds a new course to the database.
updateCourse(id, input): Updates a course's details based on its ID.
deleteCourse(id): Deletes a course from the database by its ID.
