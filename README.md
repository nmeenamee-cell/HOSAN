# HOSAN

React + TypeScript + Vite asosidagi boshlang‘ich veb-loyiha. Moslashuvchan bosh
sahifa, yorug‘/tungi rejim va avtomatik build tekshiruvi mavjud. Bu boshlang‘ich
loyiha; server, ma’lumotlar bazasi va foydalanuvchi hisobi hali qo‘shilmagan.

## Ishga tushirish

Node.js 24 talab qilinadi (`.nvmrc`: 24.19.0). Repozitoriy ildizida:

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
```

Brauzerda Vite serverining 5173-portini oching. Maxfiy kalit yoki tashqi servis
talab qilinmaydi. npm keshi `.npm-cache/` katalogiga yoziladi va Git’ga kiritilmaydi.

## Tekshirish va build

```sh
npm run lint
npm run build
npm run preview -- --host 0.0.0.0 --port 4173 --strictPort
```

`build` TypeScript tekshiruvini ham bajaradi; tayyor statik fayllar `dist/`
katalogida bo‘ladi. `preview` build’ni mahalliy tekshirish uchun mo‘ljallangan.
Ommaviy hosting hali sozlanmagan.

GitHub Actions `main` tarmog‘iga push va pull request paytida `npm ci`, lint
va build buyruqlarini bajaradi. Brauzerda tekshirish uchun sahifa ochilishi,
tungi rejim tugmasi, yangilashdan keyin rejim saqlanishi va mobil ekran
joylashuvini tekshiring. Alohida avtomatik brauzer test to‘plami hali mavjud emas.

## Tuzilma

- `src/App.tsx` — bosh sahifa va mavzu tanlash.
- `src/App.css`, `src/index.css` — moslashuvchan uslublar.
- `public/favicon.svg` — HOSAN belgisi.
- `.github/workflows/ci.yml` — lint va build tekshiruvlari.

## Codex cloud

Mavjud `/workspace/HOSAN` checkout’idan foydalaning. Har bir cloud vazifa
allaqachon alohida muhitda ishlaydi; alohida so‘ralmasa Git worktree yaratmang.
Yangi muhitda saqlangan o‘rnatish ko‘rsatmalari bilan bog‘liqliklarni tayyorlang
va yuqoridagi `dev` buyrug‘i bilan serverni qayta ishga tushiring. Jarayonlar
muhit snapshot’i bilan saqlanmaydi. `.env`, keshlar va `dist/` Git’ga kiritilmaydi.
