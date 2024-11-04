import React from 'react'
import { RegisterForm } from '@/components/screens/auth/register-form';

const Register = async () => {
	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='flex-1'>
				<RegisterForm />
			</div>
		</div>
	)
}

export default Register;
