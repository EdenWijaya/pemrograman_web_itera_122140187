import math_operations
from math_operations import celsius_to_fahrenheit, celsius_to_kelvin
from math_operations import hitung_luas_persegi, hitung_keliling_persegi, hitung_luas_persegi_panjang, hitung_keliling_persegi_panjang, hitung_luas_lingkaran, hitung_keliling_lingkaran

print ("\n--hitung luas dan keliling--")
s = 5
p = 10
lebar = 4
r = 7

print (f"luas persegi = {hitung_luas_persegi(s)}")
print (f"keliling persegi = {hitung_keliling_persegi(s)}")
print (f"\nluas persegi panjang = {hitung_luas_persegi_panjang(p, lebar)}")
print (f"keliling persegi panjang = {hitung_keliling_persegi_panjang(p, lebar)}")
print (f"\nluas lingkaran = {hitung_luas_lingkaran(r)}")
print (f"keliling lingkaran = {hitung_keliling_lingkaran(r)}")

print ("\n")

print ("\n--konversi suhu--")
celsius = 30
print (f"celsius to fahrenheit = {celsius_to_fahrenheit(celsius)}")
print (f"celsius to kelvin = {celsius_to_kelvin(celsius)}")