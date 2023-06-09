import  { useState } from 'react';

export const Form = () => {
	const defaultFormData = {
		name : '',
		email : '',
		password : ''
	}
	const [ formData, setFormData ] = useState(defaultFormData)

	function handleChange(e){
		e.preventDefault()
		setFormData({ ...formData, [e.target.name] : e.target.value})
	}

	function handleSubmit(e){
		e.preventDefault();
		console.log(formData);

		setFormData(defaultFormData);
	}

	return (
		<form className='grid w-1/2 items-center gap-8' onSubmit={(e) => handleSubmit(e)}>
					<label className="block text-left align-middle gap-6 w-full">
							<span> Username </span>
							<input
							name="name"
							type="text"
							placeholder="Example: John Doe"
							className="form-input w-full block border rounded-lg text-black"
							value={formData.name}
							onChange={(e) => handleChange(e)}/>
						</label>

						<label className="block text-left align-middle gap-6 w-full">
							<span>Email</span>
							<input
							name="email"
							type="email"
							placeholder="Example: johnDoe@gmail.com"
							className="form-input w-full block border rounded-lg text-black"
							value={formData.email}
							onChange={(e) => handleChange(e)}/>
						</label>

						<label className="block text-left align-middle gap-6 w-full">
							<span>Password</span>
							<input
							name="password"
							type="password"
							className="form-password w-full block border rounded-lg text-black"
							value={formData.password}
							onChange={(e) => handleChange(e)}/>
						</label>
						<input
							type='submit'
							className='form-input block w-full bg-blue-500 hover:bg-green-300
							text-white hover:text-zinc-800 rounded-lg text-2xl'/>
		</form>
	)
}