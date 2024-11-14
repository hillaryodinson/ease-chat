export const authenticateUser = async ({
	email,
	hashedPassword,
}: {
	email: string;
	hashedPassword: string;
}) => {
	console.log(email, hashedPassword);
	return true;
};
