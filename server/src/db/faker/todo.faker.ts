import { faker } from "@faker-js/faker";
import { db } from "..";
import { todo, TODO_PRIORITY, TODO_STATUS } from "../schema/todo";

export const FakerTodo = async (count: number) => {
	const fakeTodos: typeof todo.$inferInsert[]= []
	for (let i = 0; i < count; i++) {
		fakeTodos.push({
			title: faker.lorem.sentence(),
			description: faker.lorem.paragraph(),
			projectId: faker.helpers.arrayElement([1,2]),
			status: faker.helpers.arrayElement(TODO_STATUS),
			priority: faker.helpers.arrayElement(TODO_PRIORITY),
		})
	}
	await db.insert(todo).values(fakeTodos)
	console.log(`✅ ${count} fake todos created.`)
}
