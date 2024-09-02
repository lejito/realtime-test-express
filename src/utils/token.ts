import { sign, verify } from "jsonwebtoken";


const SECRET = process.env.secret ?? "4j8k2m1n9b7v5x3z6q0w4r2t8y1u5i7o3p9l6e";
const expirationTime = process.env.expTime ?? "3h";

export const createToken = (payload: any) => {
    delete payload.password;
    return sign(payload, SECRET, { expiresIn: expirationTime });
};

export const verifyToken = (token: string) => {
    try {
        return verify(token, SECRET);
    } catch (error) {
        throw { ok: false, info: error };
    }
};

