import { gql } from 'apollo-server';

export const typeDefs = gql`
	type Query {
		courses(limit: Int, sortOrder: SortOrder): [Course]
		course(id: Int!): Course
		collections: [Collection]
		collection(id: Int!): Collection
	}

	type Mutation {
		addCollection(name: String!): Collection
		addCourse(input: CourseInput): Course
		updateCourse(id: Int!, input: CourseInput): Course
		deleteCourse(id: Int!): Boolean
	}

	enum SortOrder {
		ASC
		DESC
	}

	type Course {
		id: Int!
		title: String!
		description: String!
		duration: String!
		outcome: String!
	}

	input CourseInput {
		title: String!
		description: String!
		duration: String!
		outcome: String!
		collectionId: Int
	}

	type Collection {
		id: Int!
		name: String!
		courses: [Course]
	}
`;
