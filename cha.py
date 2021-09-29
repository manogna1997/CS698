
from Crypto.Cipher import Salsa20
import hashlib
from base64 import b64encode
from Crypto.Cipher import ChaCha20

plaintext = b'Manogna Podishetty'
key= b'Test'

print("Plain key:\t",plaintext)
print("Secret key:\t",key)

secret = hashlib.sha256()

secret.update(key)

print("Key used:\t",b64encode(secret.digest()))

cipher = Salsa20.new(key=secret.digest())
enc=cipher.encrypt(plaintext)


ct = b64encode(enc).decode('utf-8')
nonce = b64encode(cipher.nonce).decode('utf-8')
print("\n---Salsa20 Encrypt")
print(" Nonce:",nonce)
print(" Cipher:",ct)


print("\n---Salsa20 Decrypt")
cipher = Salsa20.new(key=secret.digest(), nonce=cipher.nonce)
plaintext = cipher.decrypt(enc)
print(" Decrypted:\t",plaintext)



cipher = ChaCha20.new(key=secret.digest())
ciphertext = cipher.encrypt(plaintext)

nonce = b64encode(cipher.nonce).decode('utf-8')
ct = b64encode(ciphertext).decode('utf-8')
print("\n---ChaCha20 Encrypt")
print(" Nonce:",nonce)
print(" Cipher:",ct)

print("\n---ChaCha20 Decrypt")
cipher = ChaCha20.new(key=secret.digest(), nonce=cipher.nonce)
plaintext = cipher.decrypt(ciphertext)
print(" Decrypted:\t",plaintext)
