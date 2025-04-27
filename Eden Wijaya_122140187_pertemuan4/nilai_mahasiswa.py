data_mahasiswa = []

for i in range(5):
    print(f"\nData Mahasiswa ke-{i+1}")
    nama = input("Masukkan nama mahasiswa: ")
    nim = input("Masukkan NIM mahasiswa: ")
    nilai_uts = int(input("Masukkan nilai UTS mahasiswa: "))
    nilai_uas = int(input("Masukkan nilai UAS mahasiswa: "))
    nilai_tugas = int(input("Masukkan nilai Tugas mahasiswa: "))
    data_mahasiswa.append((nama, nim, nilai_uts, nilai_uas, nilai_tugas))

# Proses hitung nilai akhir dan grade
hasil_mahasiswa = []

for data in data_mahasiswa:
    nama, nim, nilai_uts, nilai_uas, nilai_tugas = data
    nilai_akhir = (0.3 * nilai_uts) + (0.4 * nilai_uas) + (0.3 * nilai_tugas)
    
    if nilai_akhir >= 8.0:
        grade = "A"
    elif 7.0 <= nilai_akhir < 8.0:
        grade = "B"
    elif 6.0 <= nilai_akhir < 7.0:
        grade = "C"
    elif 5.0 <= nilai_akhir < 6.0:
        grade = "D"
    else:
        grade = "E"
    
    hasil_mahasiswa.append((nama, nim, nilai_akhir, grade))

# Tampilkan tabel
print("\nData Mahasiswa:")
print(f"{'Nama':<15} {'NIM':<10} {'Nilai Akhir':<15} {'Grade'}")
print("-" * 50)
for nama, nim, nilai_akhir, grade in hasil_mahasiswa:
    print(f"{nama:<15} {nim:<10} {nilai_akhir:<15.2f} {grade}")

# Cari mahasiswa nilai tertinggi dan terendah
tertinggi = max(hasil_mahasiswa, key=lambda x: x[2])
terendah = min(hasil_mahasiswa, key=lambda x: x[2])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"Nama: {tertinggi[0]}, NIM: {tertinggi[1]}, Nilai Akhir: {tertinggi[2]:.2f}, Grade: {tertinggi[3]}")

print("\nMahasiswa dengan nilai terendah:")
print(f"Nama: {terendah[0]}, NIM: {terendah[1]}, Nilai Akhir: {terendah[2]:.2f}, Grade: {terendah[3]}")
