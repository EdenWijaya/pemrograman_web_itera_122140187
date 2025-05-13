from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from .meta import Base

# Membuat tabel matakuliah
class Matkul(Base):
    __tablename__ = 'matakuliah'
    id = Column(Integer, primary_key=True)
    kode_mk = Column(Text)
    nama_mk = Column(Text)
    sks = Column(Integer)
    semester = Column(Integer)
   
    def to_dict(self):
       return {
           'id': self.id,
           'kode_mk': self.kode_mk,
           'nama_mk': self.nama_mk,
           'sks': self.sks,
           'semester': self.semester,
       }