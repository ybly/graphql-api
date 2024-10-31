import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const resolvers = {
	Query: {
		courses: async (
			_: any,
			{ limit, sortOrder }: { limit?: number; sortOrder?: 'ASC' | 'DESC' }
		) => {
			return prisma.course.findMany({
				take: limit,
				orderBy: { title: sortOrder === 'ASC' ? 'asc' : 'desc' },
			});
		},
		course: async (_: any, { id }: { id: number }) =>
			prisma.course.findUnique({
				where: {
					id,
				},
			}),
		collections: async () => prisma.collection.findMany(),
		collection: async (_: any, { id }: { id: number }) =>
			prisma.collection.findUnique({
				where: {
					id,
				},
				include: {
					courses: true,
				},
			}),
	},
	Mutation: {
		addCollection: async (_: any, { name }: { name: string }) => {
			return prisma.collection.create({
				data: {
					name,
				},
			});
		},
		addCourse: async (_: any, { input }: { input: any }) => {
			return prisma.course.create({
				data: {
					title: input.title,
					description: input.description,
					duration: input.duration,
					outcome: input.outcome,
					collectionId: input.collectionId,
				},
			});
		},
		updateCourse: async (_: any, { id, input }: { id: number; input: any }) =>
			prisma.course.update({
				where: {
					id,
				},
				data: input,
			}),
		deleteCourse: async (_: any, { id }: { id: number }) => {
			await prisma.course.delete({
				where: {
					id,
				},
			});
			return true;
		},
	},
};
