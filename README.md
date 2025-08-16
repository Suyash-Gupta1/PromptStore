# 🧠 PromptStore

PromptStore is an open-source platform to **discover, create, share, and explore AI prompts**.  
Built with **Next.js 13, MongoDB, and Tailwind CSS**, it provides a simple yet powerful interface for managing creative prompts for AI tools.

---

## 🚀 Features
- 🔍 **Discover Prompts** – Search and filter prompts by tag or username.
- ✏️ **Create & Edit Prompts** – Add your own prompts and modify them later.
- 🗑️ **Delete Prompts** – Remove prompts you no longer need.
- 🧾 **Profile Pages** – View prompts by specific users.
- 🌐 **Responsive UI** – Fully optimized for desktop and mobile.
- 🔐 **Authentication** – Google OAuth login with NextAuth.js.
- 📦 **MongoDB Integration** – Store and manage prompt data securely.


---

## 🛠️ Tech Stack
- **Frontend:** Next.js 13 (App Router), Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB Atlas
- **Authentication:** NextAuth.js (Google OAuth)
- **Deployment:** Vercel

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/promptstore.git
   cd promptstore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open **http://localhost:3000** in your browser.

---

## 📂 Project Structure
```
promptstore/
│── app/
│   ├── api/            # API routes for CRUD operations
│   ├── profile/        # User profile pages
│   ├── update-prompt/  # Edit prompt page
│   ├── create-prompt/  # Create prompt page
│   └── page.js         # Home page
│
│── components/
│   ├── Form.jsx        # Form for create/edit prompt
│   ├── Feed.jsx        # Prompt feed
│   ├── Profile.jsx     # Profile component
│   └── PromptCard.jsx  # Individual prompt card
│
│── models/
│   └── prompt.js       # MongoDB schema
│
│── public/             # Static assets
│── styles/             # Global styles
│── .env.local          # Environment variables
│── package.json
│── README.md
```

---

## 🧑‍💻 Author
**Suyash Gupta**  
📧 suyash1978gupta@gmail.com  

---

## 📜 License
This project is licensed under the MIT License.
