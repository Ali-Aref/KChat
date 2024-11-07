import React from 'react'
import { RegisterForm } from '@/components/screens/auth/register-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Register = async () => {
	const session = await auth()
	if (session) redirect("/dashboard")

	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='flex-1'>
				<RegisterForm />
			</div>
		</div>
	)
}

export default Register;
