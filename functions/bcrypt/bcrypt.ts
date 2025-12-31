import bcrypt from 'bcrypt';

export const encryptionFunctions = {
    encrypt: async (password: string) => {
        return await bcrypt.hash(password, 10);
    },
    compare: async (password: string, hash: string) => {
        return await bcrypt.compare(password, hash);
    },
    decrypt: async (hash: string) => {
        return await bcrypt.hash(hash, 10);
    }
}