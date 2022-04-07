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
import sys
import pandas as pd
Threshold= 0.4;

from pyJoules.energy_meter import measure_energy




plaintext = b'be with failur you with failure success will follows'
key= b't'

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
def salm():
    
    memorys1=ct
    memorys= sys.getsizeof(memorys1)
    print("memory used by salsa : " + str(memorys))
    mins=min(memorys1)
    mins1=max(memorys1)
    treshs= mins+mins1
    ress = ''.join(format(ord(i), '08b') for i in treshs)
    salsath=int(ress,2)/2
    print("threshold value of salsa is : ",salsath)

    


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
def cham():
    
    memoryc1=ct
    memoryc= sys.getsizeof(memoryc1)
    print("the memory used by chacha: " + str(memoryc))
    minc=min(memoryc1)
    minc1=max(memoryc1)
##    print("min value of chacha is :", minc)
##    print("max value of chacha is :", minc1)
    tresh= minc+minc1
    #print("threshold of chacha is: ", tresh)
    resc = ''.join(format(ord(i), '08b') for i in tresh)
    chachamom=int(resc,2)/2
    print("threshold vlaue of chacha is : ",chachamom)

print("\n---ChaCha20 Decrypt")
cipher = ChaCha20.new(key=secret.digest(), nonce=cipher.nonce)
plainoutctext= cipher.decrypt(ciphertext)
print(" Decrypted:\t",plainoutctext)

@measure_energy
def sal():
    byteData1 = plainoutstext
    s1= codecs.decode(byteData1, 'UTF-8')
    print(s1)

    # initializing string
    test_str1 = s1

    # printing original string
    #print("The original string is : " + str(test_str1))

    # using join() + ord() + format()
    # Converting String to binary
    res1 = ''.join(format(ord(i), '08b') for i in test_str1)

    # printing result
    #print("The string after binary conversion : " + str(res))
    b1=0.4*int(res1,2)
    print("through out put for salsa: ",b1)
    
    
def cha():
        
    byteData = plainoutctext
    s= codecs.decode(byteData, 'UTF-8')
    print(s)

    # initializing string
    test_str = s

    # printing original string
    #print("The original string is : " + str(test_str))

    # using join() + ord() + format()
    # Converting String to binary
    res = ''.join(format(ord(i), '08b') for i in test_str)

    # printing result
    #print("The string after binary conversion : " + str(res))
    b=0.4*int(res,2)
    print("through out put for chacha: ",b)
##def data():
##    data = dict([(t, np.ones(shape=5000, dtype=int).astype(t))
##             for t in plainoutctext])
##    df = pd.DataFrame(data)
##    df.head()
    
sal()
cha()
salm()
cham()
##data()



##c=np.mean((plainoutctext)*(Threshold));
##print("c21: ", c);
