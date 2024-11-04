"use server"

import { redirect } from "next/navigation"

export const registerUser = async (formData:FormData) => {
	console.log(">>> firstName: ",formData.get("firstName"))
	console.log(">>> lastName: ",formData.get("lastName"))
	console.log(">>> email: ",formData.get("email"))
	console.log(">>> username: ",formData.get("username"))
	console.log(">>> password: ",formData.get("password"))

	redirect("/login")
}

