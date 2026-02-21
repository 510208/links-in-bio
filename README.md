<center>
  <h1>SHLinks</h1>
</center>

SHLinks 是一個簡單的個人連結頁面，類似於 Linktree，你可以在這裡集中展示你的社交媒體和其他重要連結。這個專案使用 Vue 3 和 Tailwind CSS 開發，並且完全開源，歡迎大家參考和使用！

## 功能特色

- **簡潔美觀的設計**：使用 Tailwind CSS 打造現代化的外觀，讓你的連結頁面看起來專業又吸引人。
- **響應式布局**：無論是在桌面還是手機上，SHLinks 都能完美適配，提供最佳的使用體驗。
- **易於配置**：只需修改 `shlinks.config.ts` 文件，就可以輕鬆添加或修改你的連結，無需編輯任何 HTML 或 Vue 組件。
- **開源免費**：SHLinks 是一個完全開源的專案，你可以自由使用、修改和分發。

## 如何使用

1. 克隆這個倉庫到你的本地：

```bash
$ git clone https://github.com/yourusername/shlinks.git
```

2. 編輯專案目錄下的 `shlinks.config.ts` 文件，根據你的需求添加或修改連結（詳情請參閱該文件內的註解）

3. 安裝依賴並啟動開發伺服器：

```bash
$ cd links-in-bio
$ pnpm install
$ pnpm dev
```

4. 打開瀏覽器訪問 `http://localhost:5173`，即可看到你的個人連結頁面。

## 部署

你可以將生成的靜態文件部署到任何靜態網站托管服務，如 GitHub Pages、Netlify 或 Vercel。只需運行以下命令來生成靜態文件：

```bash
$ pnpm build
```

將生成的 `dist` 文件夾中的內容上傳到你的托管服務即可。如果你使用 GitHub Pages，這個專案已經配置好 CI/CD 流程，當你將更改推送到 `main` 分支時，GitHub Actions 會自動構建並部署你的網站。

## 貢獻

如果你有任何建議或想要貢獻代碼，歡迎提交 Pull Request 或在 Issues 中提出你的想法！

詳情請參閱 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 授權

SHLinks 的原始碼採用 GNU/GPLv3 授權，歡迎自由使用和修改！詳情請參閱 [LICENSE 文件](LICENSE)。

SHLinks 的設計稿已在 Figma 上公開，任何人都可以參考和使用這些設計元素來創建自己的連結頁面。你可以在 [Figma 設計稿](https://www.figma.com/design/OyXbq2eCQKw90BCcKr34Ro/SamHacker-Works?node-id=412-2062) 中查看和使用這些設計資源。

專案內附的圖片僅供參考，請勿用於商業用途。建議你根據需要替換這些圖片，或者使用自己的設計，而非使用預設提供的圖片。

如果你喜歡這個專案，請給我一個 `⭐ Star`，謝謝！

---

<center>
  <p>
    © 2025 SamHacker. All rights reserved.
  </p>
</center>
