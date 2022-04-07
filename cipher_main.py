'''
# Author: Manogna Podishetty
# Created at: 3/3/22
# Script Name: cipher_main.py
# Year: 2022
# Description: TO-DO
# other ciphers: RC4, A5/1, A5/2, Chameleon, FISH,
# Helix, ISAAC, MUGI, Panama, Phelix, Pike, Salsa20,
# SEAL, SOBER, SOBER-128, and WAKE.

# https://en.wikipedia.org/wiki/Stream_cipher/

# block vs stream cipher
# https://www.thesslstore.com/blog/block-cipher-vs-stream-cipher/
'''
import json

import ciphercommon.helper as helper

string_small = 'small_data_str' #14B
string_big = '''
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
'''
#1.02KB
file_small = '../CS698/data/small_file.txt' #250KB
file_big = '/Users/abhilash.keerthi/Desktop/my_work_space/manu_workspace/cs/data/large_file.txt'
very_large_file_data = '/Users/abhilash.keerthi/Desktop/my_work_space/manu_workspace/cs/data/very_large_file_data.txt'

small_int = 12456789
flot_int = 1245678912456789124567891245.678912456789124567891245678912456789
big_int = 1245678912456789124567891245678912456789124567891245678912456789


def main():

    # a1 = helper.run_cipher_logic(small_int, 'small_int')
    # a2 = helper.run_cipher_logic(big_int, 'big_int')
    # a3 = helper.run_cipher_logic(flot_int, 'flot_int')
    a7 = helper.run_cipher_logic(open(very_large_file_data).read(), 'very_large_file_data')
    a4 = helper.run_cipher_logic(string_small, 'string_small')
    a5 = helper.run_cipher_logic(string_big, 'string_big')
    a7 = helper.run_cipher_logic(open(file_small).read(), 'file_small')
    a6 = helper.run_cipher_logic(open(file_big).read(), 'file_big') # 50 MB
    a7 = helper.run_cipher_logic(open(very_large_file_data).read(), 'very_large_file_data') # 500 MB






if __name__ == "__main__":
    print(main())
