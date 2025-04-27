berat_badan = float(input("Masukkan berat badan (kg): "))
tinggi_badan = float(input("Masukkan tinggi badan (cm): "))

BMI = berat_badan / ((tinggi_badan / 100) ** 2)

if BMI < 18.5:
    kategori = "Berat badan kurang"
elif 18.5 <= BMI < 25:
    kategori = "Berat badan normal"
elif 25 <= BMI < 30:
    kategori = "Berat badan berlebih"
else: 
    kategori = "Obesitas"

print (f"BMI anda adalah {int (BMI)}")
print (f"Kategori BMI anda adalah {kategori}")