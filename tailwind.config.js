// สร้าง styles.css ใหม่หลังแก้ index.html:
//   npx tailwindcss@3 -c tailwind.config.js -i tailwind.input.css -o styles.css --minify
module.exports = {
  content: ['./index.html', './*.js'],
  ...({ theme: { extend: {
      colors: {
        brand: { 50:'#fbf3f2', 100:'#f5e1df', 200:'#e9c2be', 600:'#9a2a2c', 700:'#7d1f22', 800:'#621719', 900:'#45100f' },
        gold:  { 50:'#fbf6ea', 100:'#f6ecd6', 300:'#e2c27f', 400:'#d4a84b', 600:'#a97c22', 700:'#8a6418' },
        paper:'#f6f3ee', line:'#e6dfd5', ink:'#221c18', muted:'#6e655d'
      },
      fontFamily: { sans: ['"IBM Plex Sans Thai"', 'Sarabun', 'sans-serif'] }
    } } })
};
