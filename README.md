# GraphQL API

A GraphQL API that allows users to retrieve and add data to a Postgresql database using a GrahQL schema and execute queries and mutations using associated resolvers via Prisma ORM.

#### Queries:
- `courses(limit, sortOrder)`: Returns a list of courses in the database. It accepts optional parameters such as limit (integer) and sortOrder (enum: ASC | DESC).
- `course(id)`: Returns the course with the specified id.
- `collections`: Returns a list of all course collections (categories).
- `collection(id)`: Returns a specific collection with all its courses.

#### Mutations:
- `addCourse(input)`: Adds a new course to the database.
- `updateCourse(id, input)`: Updates a course's details based on its ID.
- `deleteCourse(id)`: Deletes a course from the database by its ID.

# Requirments

Postgresql database connection credentials must be setup in `.env` file.

```
DATABASE_URL="postgresql://user:password@localhost:5432/yourdatabase"
```

# Instructions

1. Run `npm run dev` to start graphql server.
2. Go to `http://localhost:4000/` to execute queries against the server.
