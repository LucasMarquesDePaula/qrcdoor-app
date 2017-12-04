import { BigInteger, BigIntegerStatic } from "big-integer";
import * as bigInt from "big-integer";

export class RsaService {
  private static ONE: BigInteger = bigInt.one;

  private privateKey: any;
  private publicKey: any;
  private modulus: any;

  public constructor() {
    const p = bigInt("a85124be030ed7ba94a0d192369bcaef", 16);
    const q = bigInt("8c6a6237c35f5479e7e6c0905a8b1b77", 16);
    const phi = p.subtract(RsaService.ONE).multiply(q.subtract(RsaService.ONE));

    this.modulus = p.multiply(q);
    this.publicKey = bigInt("65537");
    this.privateKey = this.publicKey.modInv(phi);
  }

  public encrypt(message: string): BigInteger {
    const bytes: Array<string> = RsaService.stringToByteArray(message);
    const msg: BigInteger = bigInt(bytes.join(""), 16);
    return msg.modPow(this.publicKey, this.modulus);
  }

  public decrypt(encrypted: BigInteger) {
    const message = encrypted.modPow(this.privateKey, this.modulus);
    return RsaService.intToCharArray(message).join("");
  }

  private static stringToByteArray(text: string) {
    const bytes: Array<string> = [];
    for (let i = 0, l = text.length; i < l; i++) {
      const code = text.charCodeAt(i);
      bytes.push(code.toString(16));
    }
    return bytes;
  }

  private static intToCharArray(value: BigInteger) {
    const bytes: Array<string> = [];
    const text: string = value.toString(16);

    for (let i = 0, l = text.length; i < l; i += 2) {
      const code = String.fromCharCode(Number.parseInt(text.substr(i, 2), 16));
      bytes.push(code);
    }
    return bytes;
  }

  public static main() {
    const rsa: RsaService = new RsaService();
    console.log(rsa);

    // create random message, encrypt and decrypt
    const message: BigInteger = bigInt("Message");

    const encrypt: BigInteger = rsa.encrypt(message);
    const decrypt: BigInteger = rsa.decrypt(encrypt);
    console.log("message   = " + new String(message));
    console.log("encrypted = " + encrypt.toString(16));
    console.log("decrypted = " + new String(decrypt));
  }
}
