# 🔗 Como Conectar ao GitHub e Fazer Deploy

## 📋 Situação Atual

✅ **Commit feito com sucesso localmente!**
```
[main c896f67] Fix: Corrigir carregamento de config.json no GitHub Pages e adicionar banners
4 files changed, 191 insertions(+), 52 deletions(-)
```

❌ **Problema:** O repositório local não está conectado ao GitHub ainda.

---

## 🚀 Solução - Conectar ao GitHub

### Opção 1: Via GitHub Desktop (MAIS FÁCIL) ⭐

1. **Baixe o GitHub Desktop** (se ainda não tem):
   - https://desktop.github.com/

2. **Abra o GitHub Desktop**

3. **Adicione o repositório:**
   - File → Add Local Repository
   - Escolha a pasta: `D:\Users\gabri\Downloads\LANDING-PAGE BROW`

4. **Publique no GitHub:**
   - Clique em **"Publish repository"**
   - Nome: `BROWFLIX-LP` (ou o nome que preferir)
   - Desmarque "Keep this code private" se quiser público
   - Clique em **"Publish Repository"**

5. **Pronto!** Seu código está no GitHub 🎉

6. **Configurar GitHub Pages:**
   - No navegador, vá em: `https://github.com/seu-usuario/BROWFLIX-LP`
   - Settings → Pages
   - Source: **main** branch, **/ (root)** folder
   - Save

---

### Opção 2: Via Terminal/Git Bash

#### Passo 1: Criar repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `BROWFLIX-LP`
3. **NÃO** marque "Initialize with README"
4. Clique em **"Create repository"**

#### Passo 2: Conectar o repositório local

Copie e cole estes comandos no terminal (substitua `SEU-USUARIO`):

```bash
# Conectar ao repositório GitHub
git remote add origin https://github.com/SEU-USUARIO/BROWFLIX-LP.git

# Verificar se conectou
git remote -v

# Enviar o código
git push -u origin main
```

**Exemplo:**
```bash
git remote add origin https://github.com/gabrielraiolr/BROWFLIX-LP.git
git push -u origin main
```

#### Passo 3: Configurar GitHub Pages

1. Acesse: `https://github.com/SEU-USUARIO/BROWFLIX-LP/settings/pages`
2. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
3. Clique em **Save**
4. Aguarde 2-5 minutos
5. Acesse: `https://SEU-USUARIO.github.io/BROWFLIX-LP/landing-page-estatica/`

---

### Opção 3: Via Visual Studio Code

1. **Abra o projeto no VS Code:**
   - Arquivo → Abrir Pasta
   - Selecione: `D:\Users\gabri\Downloads\LANDING-PAGE BROW`

2. **Conecte ao GitHub:**
   - Abra o Source Control (Ctrl + Shift + G)
   - Clique no ícone "..." → Remote → Add Remote
   - Cole a URL: `https://github.com/SEU-USUARIO/BROWFLIX-LP.git`
   - Nome: `origin`

3. **Faça Push:**
   - Clique no ícone "..." → Push
   - Se pedir login, use suas credenciais do GitHub

---

## 🔑 Autenticação no GitHub

Se pedir senha ao fazer push, você tem 2 opções:

### 1. Personal Access Token (Recomendado)

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Marque as permissões:
   - ✅ `repo` (controle total de repositórios privados)
4. Clique em **"Generate token"**
5. **COPIE O TOKEN** (você não verá novamente!)
6. Use o token como senha quando o Git pedir

### 2. SSH Key

Se preferir SSH:

```bash
# Gerar chave SSH
ssh-keygen -t ed25519 -C "seu-email@example.com"

# Copiar a chave pública
cat ~/.ssh/id_ed25519.pub
```

Depois adicione em: https://github.com/settings/keys

---

## 📂 Estrutura no GitHub

Quando subir, a estrutura deve ficar assim:

```
BROWFLIX-LP/ (repositório)
│
├── landing-page-estatica/
│   ├── index.html                    ✅
│   ├── config/
│   │   └── config.json               ✅
│   └── assets/
│       ├── js/
│       │   └── main.js               ✅ (CORRIGIDO)
│       ├── css/
│       │   └── styles.css            ✅
│       └── images/
│           ├── banners/              ✅
│           │   ├── Fundador.png      ✅ (NOVO)
│           │   └── Plataforma-home.png ✅ (NOVO)
│           └── APROVADOS/            ✅
│
└── Material de Documentação/         ⚠️ (opcional)
```

---

## 🌐 URL Final do Site

### Se publicar a raiz do repositório:
```
https://SEU-USUARIO.github.io/BROWFLIX-LP/landing-page-estatica/
```

### Se configurar para publicar apenas `landing-page-estatica/`:
```
https://SEU-USUARIO.github.io/BROWFLIX-LP/
```

Para configurar a segunda opção:
1. Settings → Pages
2. Source: **main** branch, **/landing-page-estatica** folder
3. Save

---

## ✅ Checklist de Verificação

Após fazer o push:

- [ ] Repositório aparece no GitHub
- [ ] Todos os arquivos essenciais estão lá
- [ ] GitHub Pages está habilitado (Settings → Pages)
- [ ] Aguardou 2-5 minutos
- [ ] Site abre no navegador
- [ ] DevTools mostra "Configuração carregada com sucesso"
- [ ] Imagens e banners aparecem

---

## 🐛 Problemas Comuns

### "Support for password authentication was removed"

**Solução:** Use Personal Access Token em vez de senha.

### "Permission denied (publickey)"

**Solução:** Configure uma chave SSH ou use HTTPS com token.

### "Repository not found"

**Solução:** Verifique se o repositório foi criado no GitHub e se o nome está correto.

### Site não carrega após push

**Solução:** 
1. Aguarde 5 minutos
2. Limpe o cache do navegador (Ctrl + Shift + Delete)
3. Verifique Settings → Pages se está ativo

---

## 💡 Dica Importante

Se você já tem o repositório `BROWFLIX-LP` no GitHub:

```bash
# Verificar a URL correta
# Acesse: https://github.com/gabrielraiolr/BROWFLIX-LP

# Depois conecte:
git remote add origin https://github.com/gabrielraiolr/BROWFLIX-LP.git
git push -u origin main
```

---

## 📞 Próximos Passos

1. ✅ Escolha uma das opções acima para conectar ao GitHub
2. ✅ Faça o push do código
3. ✅ Configure o GitHub Pages
4. ✅ Aguarde 2-5 minutos
5. ✅ Teste o site
6. ✅ Abra o DevTools e verifique se tudo carregou
7. ✅ Comemore! 🎉

---

**Lembre-se:** O commit já foi feito localmente com sucesso! Agora só falta enviar para o GitHub.

**Commit atual:**
```
c896f67 - Fix: Corrigir carregamento de config.json no GitHub Pages e adicionar banners
```

