import client from "../client"
export default {
    Mutation: {
        createAccount: async (_, { name, username, email, password }) => {
            const existingUser = await client.user.findFirst({
                where: {
                    OR: [
                        {
                            username,
                        },
                        {
                            email,
                        },
                    ],
                },
            })
            console.log(existingUser)
            const uglyPassword = await bcrypt.hash(password, 10)
            return client.user.create({
                data: {
                    username,
                    email,
                    name,
                    password: uglyPassword,
                },
            })
        },
    },
}
