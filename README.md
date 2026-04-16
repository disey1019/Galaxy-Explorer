# Galaxy Explorer 🚀

這是一個以 Vite + React + TypeScript 建置的專案。

## 功能與特色

- **React 19**
- **Vite 6** (極速的開發伺服器)
- **Tailwind CSS 4** (極簡、高效的樣式系統)
- 身歷其境的動態設計與流暢動畫

---

## 🚀 快速開始

### 1. 安裝對應套件

專案已配置好 `package.json`，請在終端機中執行以下指令進行安裝：

```bash
npm install
```

### 2. 本地開發啟動

安裝完成後，可以使用以下指令啟動開發伺服器：

```bash
npm run dev
```

伺服器將預設運行於 `http://localhost:3000` (或可用的埠號)。

### 3. 建置與預覽 (選項)

確認生產環境建置是否正常：

```bash
npm run build
npm run preview
```

---

## 🛠 部署指南 (GitHub Actions)

專案中已經配置了完整的 `.github/workflows/deploy.yml`，可以直接透過 GitHub Actions 將靜態資源自動部署到 **GitHub Pages**。

### 部署步驟

1. 將專案推送到 GitHub。
2. 進入你的 Repository 頁面，點選頂部的 **Settings**。
3. 進入左側選單的 **Pages**。
4. 在 **Build and deployment** > **Source** 下拉選單中，選擇 **GitHub Actions**。
5. 接著每次你將程式碼推送到 `main` 或 `master` 分支，GitHub Action 就會自動幫你打包並將專案部署上線。

---

## 🛡️ 設定檔說明

### `.gitignore`

已設計完整的忽略清單，確保：
- `node_modules/` 等龐大的依賴不會上傳。
- `dist/` 等前端編譯產物交由 GitHub Action 處理，不在本地版控。
- `.env`、系統日誌檔案與 IDE 的垃圾設定皆被過濾，確保隱私檔不外洩。

### `package.json` 指令大全

- `npm run dev`: 啟動開發伺服器。
- `npm run build`: 使用 Vite 進行網站打包最佳化。
- `npm run preview`: 在本地預覽打包完成的檔案 (`dist` 資料夾)。
- `npm run clean`: 清除現有的前端產量檔案。
- `npm run lint`: 執行 TypeScript 型別檢查。
