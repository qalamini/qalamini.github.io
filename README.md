# Qalamini Official Website

Situs web resmi untuk Qalamini - aplikasi game edukasi untuk belajar menulis huruf hijaiyah dengan cara yang menyenangkan.

## Tentang Qalamini

Qalamini adalah aplikasi game edukasi yang dirancang untuk membantu anak-anak belajar menulis huruf hijaiyah dengan cara yang menyenangkan. Fitur utama dari aplikasi ini adalah writing detection, yang memungkinkan sistem mengoreksi apakah tulisan anak sesuai dengan huruf yang muncul di layar.

### Fitur Utama:
- **Writing Detection**: Sistem canggih yang mendeteksi dan mengoreksi tulisan secara real-time
- **Multiple Level**: Level mudah, sedang, dan sulit
- **Sistem Poin & Nyawa**: Gamifikasi yang menarik untuk motivasi belajar
- **Pembelajaran Interaktif**: Belajar huruf hijaiyah satu per satu
- **Ramah Anak**: Antarmuka yang dirancang khusus untuk anak-anak

## Download

- **Android**: [Download APK](https://github.com/qalamini/Qalamini/releases/download/Android/QalaminiAndroid-V0.2.apk)
- **iOS/iPadOS**: [TestFlight Beta](https://testflight.apple.com/join/4rsDJv6F)

## Teknologi

Website ini dibangun menggunakan:
- HTML5
- CSS3 dengan responsive design
- Vanilla JavaScript
- GitHub Pages untuk hosting

## GitHub Pages Deployment

Website ini secara otomatis di-deploy ke GitHub Pages ketika ada perubahan di branch `main`.

### URL Deployment:
- **Production**: https://qalamini.github.io

### Setup GitHub Pages:

1. **Pastikan GitHub Pages aktif**:
   - Pergi ke Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Save

2. **Custom Domain (opsional)**:
   - Jika ingin menggunakan domain custom, tambahkan file `CNAME` dengan domain Anda
   - Atau atur di Settings → Pages → Custom domain

3. **HTTPS**:
   - Pastikan "Enforce HTTPS" dicentang di Settings → Pages

### Development

Untuk development lokal:

```bash
# Clone repository
git clone https://github.com/qalamini/qalamini.github.io.git
cd qalamini.github.io

# Buka dengan live server atau langsung buka index.html di browser
# Untuk VS Code dengan Live Server extension:
# Klik kanan pada index.html → Open with Live Server
```

### File Structure

```
qalamini.github.io/
├── index.html          # Halaman utama
├── style.css           # Styling dan responsive design
├── script.js           # Interactive functionality
└── README.md           # Dokumentasi ini
```

### Browser Support

Website ini mendukung:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance

Website ini dioptimalkan untuk:
- Loading time yang cepat
- Mobile-first responsive design
- SEO-friendly structure
- Accessibility standards

## Contributing

Untuk berkontribusi pada website ini:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/nama-fitur`)
3. Commit perubahan (`git commit -am 'Tambah fitur'`)
4. Push ke branch (`git push origin feature/nama-fitur`)
5. Buat Pull Request

## License

© 2024 Qalamini. Dengan Pena, Makin Dekat Dengan AlQuran.
