import React from 'react'
import { LoginForm } from '@/components/screens/auth/login-form';

const Login = async () => {
	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='flex-1'>
				<LoginForm />
			</div>
		</div>
	)
}

export default Login
