import { expect } from 'chai';
import {
  encrypt,
  decrypt,
  encryptWithHmac,
  decryptWithHmac,
  encryptWithTSValidation,
  decryptWithTSValidation,
} from '../src/index';

describe('Crypto', () => {

  it('encrypt', () => {
    let data = 'kernel-js', key = '82ed4765d8fe4c41de2491d32125b019';
    let encrypted = encrypt(data, key);

    expect(decrypt(encrypted, key)).to.equal(data);
  });

  it('encryptWithHmac', () => {
    let data = 'kernel-js', key = '82ed4765d8fe4c41de2491d32125b019', hmac = {};
    let encrypted = encryptWithHmac(data, key, hmac);

    expect(decryptWithHmac(encrypted, key, hmac)).to.equal(data);
  });

  it('encryptWithTSValidation', () => {
    let data = 'kernel-js', key = '82ed4765d8fe4c41de2491d32125b019', hmac = {};
    let encrypted = encryptWithTSValidation(data, key, hmac);

    expect(decryptWithTSValidation(encrypted, key, hmac)).to.equal(data);
  });

});
