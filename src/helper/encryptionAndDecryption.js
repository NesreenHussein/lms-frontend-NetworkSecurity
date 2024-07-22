import CryptoJS from 'crypto-js';
const key = CryptoJS.enc.Hex.parse('00112233445566778899AABBCCDDEEFF');

export const decryptData = (encryptedData, iv) => {
    try {
        const decrypted = CryptoJS.TripleDES.decrypt(
            { ciphertext: CryptoJS.enc.Base64.parse(encryptedData) },
            key,
            { iv: CryptoJS.enc.Hex.parse(iv) }
        );
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Decryption error:", error);
        return null; // or throw an error, depending on your application's logic
    }
};
