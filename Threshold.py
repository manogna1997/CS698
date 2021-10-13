from Crypto.Cipher import Salsa20
import hashlib
from base64 import b64encode
from Crypto.Cipher import ChaCha20
import numpy as np
from sklearn.metrics import mean_squared_error
from math import sqrt,log10
import numpy as np
import struct
import codecs 
Threshold= 0.4;

plaintext = b'A short story is a piece of prose fiction that typically can be'
key= b'mohan sai is great'

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
plainoutstext = cipher.decrypt(enc)
print(" Decrypted:\t",plainoutstext)



cipher = ChaCha20.new(key=secret.digest())
ciphertext = cipher.encrypt(plaintext)

nonce = b64encode(cipher.nonce).decode('utf-8')
ct = b64encode(ciphertext).decode('utf-8')
print("\n---ChaCha20 Encrypt")
print(" Nonce:",nonce)
print(" Cipher:",ct)

print("\n---ChaCha20 Decrypt")
cipher = ChaCha20.new(key=secret.digest(), nonce=cipher.nonce)
plainoutctext= cipher.decrypt(ciphertext)
print(" Decrypted:\t",plainoutctext)


byteData1 = plainoutstext
s1= codecs.decode(byteData1, 'UTF-8')
print(s1)

# initializing string
test_str1 = s1

# printing original string
print("The original string is : " + str(test_str1))

# using join() + ord() + format()
# Converting String to binary
res1 = ''.join(format(ord(i), '08b') for i in test_str1)

# printing result
#print("The string after binary conversion : " + str(res))
b1=0.4*int(res1,2)
print("through out put for salsa: ",b1)

byteData = plainoutctext
s= codecs.decode(byteData, 'UTF-8')
print(s)

# initializing string
test_str = s

# printing original string
print("The original string is : " + str(test_str))

# using join() + ord() + format()
# Converting String to binary
res = ''.join(format(ord(i), '08b') for i in test_str)

# printing result
#print("The string after binary conversion : " + str(res))
b=0.4*int(res,2)
print("through output for chacha: ",b)

##c=np.mean((plainoutctext)*(Threshold));
##print("c21: ", c);
