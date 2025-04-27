import math_operations
from math_operations import (
    celsius_to_fahrenheit, 
    celsius_to_kelvin, 
    hitung_luas_persegi, 
    hitung_keliling_persegi, 
    hitung_luas_persegi_panjang, 
    hitung_keliling_persegi_panjang, 
    hitung_luas_lingkaran, 
    hitung_keliling_lingkaran
)

print("\n" + "="*40)
print("=== MENGHITUNG LUAS DAN KELILING ===")
print("="*40)
s = float(input("Masukkan sisi persegi (cm): "))
p = float(input("Masukkan panjang persegi panjang (cm): "))
lebar = float(input("Masukkan lebar persegi panjang (cm): "))
r = float(input("Masukkan jari-jari lingkaran (cm): "))

print("-"*40)
print(f"Luas Persegi             : {hitung_luas_persegi(s):.2f} cm²")
print(f"Keliling Persegi         : {hitung_keliling_persegi(s):.2f} cm")
print(f"Luas Persegi Panjang     : {hitung_luas_persegi_panjang(p, lebar):.2f} cm²")
print(f"Keliling Persegi Panjang : {hitung_keliling_persegi_panjang(p, lebar):.2f} cm")
print(f"Luas Lingkaran           : {hitung_luas_lingkaran(r):.2f} cm²")
print(f"Keliling Lingkaran       : {hitung_keliling_lingkaran(r):.2f} cm")
print("-"*40)

print("\n" + "="*40)
print("=== KONVERSI SUHU ===")
print("="*40)
celsius = float(input("Masukkan suhu dalam Celsius (°C): "))
print("-"*40)
print(f"Celsius ke Fahrenheit : {celsius_to_fahrenheit(celsius):.2f} °F")
print(f"Celsius ke Kelvin     : {celsius_to_kelvin(celsius):.2f} K")
print("-"*40)