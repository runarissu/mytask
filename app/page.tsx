import { Button, Input, Select, Checkbox, CardHeader } from "@heroui/react";

export default function Home() {
	return (
		<div className="max-w-2xl mx-auto p-6">
			<CardHeader className="flex justify-center">
				<h1 className="text-2xl font-bold">User Registration Form</h1>
			</CardHeader>

			<form className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input placeholder="Enter your first name" required />
					<Input placeholder="Enter your last name" />
				</div>

				<Input type="email" placeholder="Enter your email" required />

				<Input type="tel" placeholder="Enter your phone number" />

				<Checkbox isSelected={false}>
					I agree to the terms and conditions
				</Checkbox>

				<div className="flex gap-4 justify-end">
					<Button variant="danger">Cancel</Button>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
}
