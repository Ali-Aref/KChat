import React from 'react'
import { LoginForm } from '@/components/screens/auth/login-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Login = async () => {
	const session = await auth()
	if (session) redirect("/dashboard")

	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='flex-1'>
				<LoginForm />
			</div>
		</div>
	)
}

export default Login
