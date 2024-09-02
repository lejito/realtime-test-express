import bcrypt from "bcrypt";

const saltRounds = 10;

export const generateHash = async (password: string) => {
    return await bcrypt.hash(password, saltRounds);
};

export const compareHash = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
};

