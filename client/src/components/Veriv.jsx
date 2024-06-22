import React from "react";

const Veriv = () => {
  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column", // Mengatur urutan menjadi vertikal
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  }}
>
  <h1 style={{ color: 'orange', fontSize: '24px' }}>
    Pendaftaran anda berhasil
  </h1>
  
  <br /> {/* Tambahkan garis baru di antara setiap teks */}
  
  <h1 style={{ color: 'orange', fontSize: '24px' }}>
    Silahkan tunggu konfirmasi
  </h1>
  
  <br />
  
  <h1 style={{ color: 'orange', fontSize: '24px' }}>
    selanjutnya
  </h1>
</div>

  );
};

export default Veriv;
