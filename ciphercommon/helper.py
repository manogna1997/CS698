'''
# Author: Manogna Podishetty
# Created at: 3/3/22
# Script Name: helper.py
# Year: 2022
# Description: TO-DO
'''
import json

import struct
import sys

import datetime
import traceback
from decimal import Decimal, ROUND_DOWN

from base64 import b64encode
from Crypto.Cipher import ChaCha20
from Crypto.Cipher import Salsa20
from Crypto.Cipher import ARC4
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

import codecs
import scrypt
from codecs import decode
import struct

key = b'*Thirty-two byte (256 bits) key*'
aes_ctr_key = '*Thirty-two byte (256 bits) key*'
countN = 1
average_power = 0.33


def run_cipher_logic(data, name):
    # print(data)
    cipher_stats = []
    parsed_data = []

    if isinstance(data, str):
        cipher_stats.append(en_salsa_str(str.encode(data), name))
        cipher_stats.append(en_chacha20_bytes(str.encode(data), name))
        cipher_stats.append(en_aes_ctr_bytes(str.encode(data), name))
        cipher_stats.append(en_arc4_bytes(str.encode(data), name))
        cipher_stats.append(en_aes_bytes(str.encode(data), name))
    if isinstance(data, int):
        cipher_stats.append(en_salsa_str(data.to_bytes(5, 'little'), name))
        cipher_stats.append(en_chacha20_bytes(data.to_bytes(5, 'little'), name))
        cipher_stats.append(en_arc4_bytes(data.to_bytes(5, 'little'), name))
        cipher_stats.append(en_aes_bytes(data.to_bytes(5, 'little'), name))
    if isinstance(data, float):
        cipher_stats.append(en_salsa_str(struct.pack('>f', data), name))
        cipher_stats.append(en_chacha20_bytes(struct.pack('>f', data), name))
        cipher_stats.append(en_arc4_bytes(struct.pack('>f', data), name))
        cipher_stats.append(en_aes_bytes(struct.pack('>f', data), name))
        # cipher_stats.append(en_aes_ctr_bytes(struct.pack('!f', data), name))
        # en_aes_ctr_bytes(data.to_bytes(5, 'little'),name)

    for stats in cipher_stats:
        d = {
            stats['cipher_name']: {
                'memory_diff': [],
                'time_diff': []
            }
        }
        memory = []
        time = []
        for sam in stats['sampling_data']:
            memory.append(sam['memory_diff'])
            time.append(sam['time_diff'])
        d[stats['cipher_name']]['memory_diff'] = memory
        d[stats['cipher_name']]['time_diff'] = time

        parsed_data.append(d)

    buildchart(cipher_stats, 'memory_diff', name)
    buildchart(cipher_stats, 'time_diff', name)
    buildchart(cipher_stats, 'memory_after_encryption', name)
    buildchart(cipher_stats, 'power_consumption', name)
    buildchart(cipher_stats, 'throughput', name)

    json_object = json.dumps(parsed_data, indent=4)

    with open(name + ".json", "w") as outfile:
        outfile.write(json_object)
    return cipher_stats


# @pyRAPL.measure
def en_salsa_str(data, name):
    stats = {
        'test_name': name,
        'cipher_name': 'Salsa20',
        'start_time_stamp': str(datetime.datetime.now()),
        'en_end_time_stamp': None,
        'end_time_stamp': None,
        'sampling_data': [],
    }
    for i in range(countN):
        s_data = build_sample_data(i, data)
        cipher = Salsa20.new(key=key)
        enc = cipher.nonce + cipher.encrypt(data)
        s_data['en_end_time_stamp'] = datetime.datetime.now()
        passed, end_time, k = dy_salsa_str(enc, data)
        s_data = buildRes(s_data, enc, passed, end_time)
        stats['sampling_data'].append(s_data)

    stats['end_time_stamp'] = str(datetime.datetime.now())
    print(stats)
    return stats


#
def dy_salsa_str(msg, data):
    msg_nonce = msg[:8]
    ciphertext = msg[8:]
    cipher = Salsa20.new(key=key, nonce=msg_nonce)
    plaintext = cipher.decrypt(ciphertext)
    end = datetime.datetime.now()
    tr = generate_throughput(ciphertext)
    if plaintext == data:
        return True, end, tr
    return False, end, tr


def en_chacha20_bytes(data, name):
    stats = {
        'test_name': name,
        'cipher_name': 'ChaCha20',
        'start_time_stamp': str(datetime.datetime.now()),
        'en_end_time_stamp': None,
        'end_time_stamp': None,
        'sampling_data': [],
    }
    for i in range(countN):
        s_data = build_sample_data(i, data)
        key = get_random_bytes(32)
        cipher = ChaCha20.new(key=key)
        ciphertext = cipher.encrypt(data)
        s_data['en_end_time_stamp'] = datetime.datetime.now()
        passed, end_time, k = dy_chacha20_bytes(key, cipher.nonce, ciphertext, data)
        s_data = buildRes(s_data, ciphertext, passed, end_time)
        stats['sampling_data'].append(s_data)

    stats['end_time_stamp'] = str(datetime.datetime.now())
    print(stats)
    return stats


#
def dy_chacha20_bytes(key, nonce, msg, data):
    cipher = ChaCha20.new(key=key, nonce=nonce)
    plaintext = cipher.decrypt(msg)
    end = datetime.datetime.now()
    tr = generate_throughput(msg)
    if plaintext == data:
        return True, end, tr
    return False, end, tr


# https://stackoverflow.com/questions/3154998/pycrypto-problem-using-aesctr
def en_aes_ctr_bytes(data, name):
    stats = {
        'test_name': name,
        'cipher_name': 'AES-CTR',
        'start_time_stamp': str(datetime.datetime.now()),
        'en_end_time_stamp': None,
        'end_time_stamp': None,
        'sampling_data': [],
    }
    for i in range(countN):
        s_data = build_sample_data(i, data)
        ciphertext = scrypt.encrypt(data, aes_ctr_key)
        s_data['en_end_time_stamp'] = datetime.datetime.now()
        passed, end_time, k = dy_aes_ctr_bytes(aes_ctr_key, ciphertext, data)
        s_data = buildRes(s_data, ciphertext, passed, end_time)
        stats['sampling_data'].append(s_data)

    stats['end_time_stamp'] = str(datetime.datetime.now())
    print(stats)
    return stats


#
def dy_aes_ctr_bytes(key, msg, data):
    plaintext = scrypt.decrypt(msg, key)
    end = datetime.datetime.now()
    tr = generate_throughput(msg)
    if plaintext == data.decode('utf-8'):
        return True, end, tr
    return False, end, tr


# rc4 OR arc4
def en_arc4_bytes(data, name):
    stats = {
        'test_name': name,
        'cipher_name': 'ARC4',
        'start_time_stamp': str(datetime.datetime.now()),
        'end_time_stamp': None,
        'sampling_data': []
    }
    for i in range(countN):
        s_data = build_sample_data(i, data)
        cipher = ARC4.new(key)
        ciphertext = cipher.encrypt(data)
        s_data['en_end_time_stamp'] = datetime.datetime.now()
        passed, end_time, k = dy_arc4_bytes(key, ciphertext, data)
        s_data = buildRes(s_data, ciphertext, passed, end_time)
        stats['sampling_data'].append(s_data)

    stats['end_time_stamp'] = str(datetime.datetime.now())
    print(stats)
    return stats


#
def dy_arc4_bytes(key, msg, data):
    cipher = ARC4.new(key)
    plaintext = cipher.decrypt(msg)
    end = datetime.datetime.now()
    tr = generate_throughput(msg)
    if plaintext == data:
        return True, end, tr
    return False, end, tr


# AES BLOCK CIPHER
def en_aes_bytes(data, name):
    stats = {
        'test_name': name,
        'cipher_name': 'AES',
        'start_time_stamp': str(datetime.datetime.now()),
        'en_end_time_stamp': None,
        'end_time_stamp': None,
        'sampling_data': []
    }
    for i in range(countN):
        s_data = build_sample_data(i, data)
        cipher = AES.new(key, AES.MODE_EAX)
        ciphertext = cipher.encrypt(data)
        s_data['en_end_time_stamp'] = datetime.datetime.now()
        passed, end_time, k = dy_aes_bytes(key, cipher.nonce, ciphertext, data)
        s_data = buildRes(s_data, ciphertext, passed, end_time)
        stats['sampling_data'].append(s_data)

    stats['end_time_stamp'] = str(datetime.datetime.now())
    print(stats)
    return stats


#
def dy_aes_bytes(key, nonce, msg, data):
    cipher = AES.new(key, AES.MODE_EAX, nonce=nonce)
    plaintext = cipher.decrypt(msg)
    end = datetime.datetime.now()
    tr = generate_throughput(msg)
    if plaintext == data:
        return True, end, tr
    return False, end, tr


def build_sample_data(i, data):
    s_data = {
        'count': i,
        'memory_before_encryption': sys.getsizeof(data),
        'memory_after_encryption': None,
        'memory_diff': '',
        'start_time_stamp': datetime.datetime.now(),
        'en_end_time_stamp': None,
        'end_time_stamp': None,
        'power_consumption': None,
        'throughput_en': None,
        'throughput_dy': None,
        'throughput': None,
        'time_diff': None,
        'assert_result': False,
    }
    return s_data


def buildRes(s_data: dict, ciphertext, passed, end_time):
    s_data['memory_after_encryption'] = sys.getsizeof(b64encode(ciphertext).decode('utf-8'))
    s_data['memory_diff'] = s_data['memory_after_encryption'] - s_data['memory_before_encryption']
    s_data['assert_result'] = passed
    s_data['end_time_stamp'] = str(end_time)
    diff = (end_time - s_data['start_time_stamp'])
    s_data['time_diff'] = str(Decimal(diff.total_seconds()).quantize(Decimal('.0000001'), rounding=ROUND_DOWN))
    # print(s_data['time_diff'])
    en_diff_time = (s_data['en_end_time_stamp'] - s_data['start_time_stamp'])
    dy_diff_time = (end_time - s_data['en_end_time_stamp'])
    s_data['start_time_stamp'] = str(s_data['start_time_stamp'])
    s_data['en_end_time_stamp'] = str(s_data['en_end_time_stamp'])
    s_data['throughput_en'] = str(s_data['memory_before_encryption'] / Decimal(en_diff_time.total_seconds()).quantize(Decimal('.00001'), rounding=ROUND_DOWN))
    s_data['throughput_dy'] = str(s_data['memory_after_encryption'] / Decimal(dy_diff_time.total_seconds()).quantize(Decimal('.00001'), rounding=ROUND_DOWN))
    s_data['throughput'] = str(round((s_data['memory_after_encryption'] / Decimal(diff.total_seconds()).quantize(Decimal('.00001'), rounding=ROUND_DOWN)),6))
    s_data['power_consumption'] = str(round((average_power * float(Decimal(diff.total_seconds()).quantize(Decimal('.0000001'), rounding=ROUND_DOWN))),6))
    return s_data


def buildchart(cipher_stats: list, key: str, name: str):
    responce = []
    for i in range(countN):
        dataM = {
            "data": []
        }
        for stats in cipher_stats:
            sam = stats['sampling_data'][i]
            node = {
                "x": stats['cipher_name'],
                "value": sam[key]
            }
            dataM['data'].append(node)

        responce.append(dataM)
    json_object = json.dumps(responce, separators=(',', ":"))

    with open("result/" + name + "_" + key + ".json", "w") as outfile:
        outfile.write(json_object)
    return responce


def generate_throughput(cipherD, ):
    b1 = 0
    for i in 'unicode_escape', 'utf-8', 'ISO-8859-1':
        try:
            #  small_int = unicode_escape
            s1 = codecs.decode(cipherD, i)
            test_str1 = s1
            res1 = ''.join(format(ord(i), '08b') for i in test_str1)
            b1 = 0.4 * bin_to_float(res1)
            return b1
        except Exception as e:
            s = str(e)
            # print(traceback.format_exc())
    return b1


def bin_to_float(b):
    """ Convert binary string to a float. """
    bf = int_to_bytes(int(b, 2), 8)  # 8 bytes needed for IEEE 754 binary64.
    return struct.unpack('>d', bf)[0]


def int_to_bytes(n, length):  # Helper function
    """ Int/long to byte string.

        Python 3.2+ has a built-in int.to_bytes() method that could be used
        instead, but the following works in earlier versions including 2.x.
    """
    return decode('%%0%dx' % (length << 1) % n, 'hex')[-length:]


def float_to_bin(value):  # For testing.
    """ Convert float to 64-bit binary string. """
    [d] = struct.unpack(">Q", struct.pack(">d", value))
    return '{:064b}'.format(d)
