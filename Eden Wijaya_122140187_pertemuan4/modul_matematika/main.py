import math_operations
from math_operations import celsius_to_fahrenheit, celsius_to_kelvin
from math_operations import hitung_luas_persegi, hitung_keliling_persegi, hitung_luas_persegi_panjang, hitung_keliling_persegi_panjang, hitung_luas_lingkaran, hitung_keliling_lingkaran

print("\n=== luas dan keliling ===")
s = float(input("Masukkan sisi persegi: "))
p = float(input("Masukkan panjang persegi panjang: "))
lebar = float(input("Masukkan lebar persegi panjang: "))
r = float(input("Masukkan jari jari lingkaran: "))

print (f"\nluas persegi = {hitung_luas_persegi(s)}")
print (f"keliling persegi = {hitung_keliling_persegi(s)}")
print (f"luas persegi panjang = {hitung_luas_persegi_panjang(p, lebar)}")
print (f"keliling persegi panjang = {hitung_keliling_persegi_panjang(p, lebar)}")
print (f"luas lingkaran = {hitung_luas_lingkaran(r)}")
print (f"keliling lingkaran = {hitung_keliling_lingkaran(r)}")

print("\n=== Konversi Suhu ===")
celsius = float(input("Masukkan suhu dalam Celsius: "))
print (f"\ncelsius to fahrenheit = {celsius_to_fahrenheit(celsius)}")
print (f"celsius to kelvin = {celsius_to_kelvin(celsius)}")