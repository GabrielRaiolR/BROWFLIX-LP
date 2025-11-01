# 🚀 Guia de Deploy no GitHub Pages

## 🔧 Correção Aplicada

O problema estava no caminho relativo do `config.json` no arquivo `main.js`. Quando o site está hospedado em um subdiretório do GitHub Pages (como `/BROWFLIX-LP/`), os caminhos relativos simples não funcionam corretamente.

### O que foi corrigido:
✅ **Detecção automática do caminho base** - O JavaScript agora detecta automaticamente onde está sendo executado
✅ **Fallback inteligente** - Se o config.json falhar ao carregar, usa configuração padrão embutida
✅ **Logs de debug** - Adicionado log para mostrar de onde está tentando carregar o config
✅ **Cache atualizado** - Versão do JavaScript atualizada para `v=20241220-019`

---

## 📁 Estrutura de Arquivos para GitHub Pages

### Arquivos Essenciais (DEVEM estar no repositório):

```
landing-page-estatica/
├── index.html                          ✅ Página principal
├── config/
│   └── config.json                     ✅ Configurações dinâmicas
├── assets/
│   ├── css/
│   │   └── styles.css                  ✅ Estilos customizados
│   ├── js/
│   │   └── main.js                     ✅ JavaScript principal (CORRIGIDO)
│   └── images/
│       ├── favicon.ico                 ✅ Ícone do site
│       ├── APROVADOS/                  ✅ Fotos dos aprovados
│       │   ├── UFPA/ (61 imagens)
│       │   ├── UEPA/ (72 imagens)
│       │   ├── UFOPA/ (5 imagens)
│       │   └── SISU/ (30 imagens)
│       └── banners/                    ✅ Banners dos cursos
│           ├── Fundador.png
│           ├── Plataforma-home.png
│           └── [outros 11 banners]
```

### Arquivos que PODEM ser removidos do repositório:

```
❌ DEPLOY-GITHUB-PAGES.md (este arquivo - documentação apenas)
❌ TEMPLATE-BANNER-FUNDADOR.html (template de referência)
❌ Material de Documentação/ (pasta inteira de docs)
❌ *.bat (arquivos de servidor local - apenas para desenvolvimento)
❌ README.md específicos de banners (se existirem)
```

---

## 🎯 Passo a Passo para Deploy

### 1️⃣ Verificar os Arquivos Atualizados

Os arquivos que foram modificados e precisam ser commitados:
- ✅ `landing-page-estatica/assets/js/main.js` (correção de caminho)
- ✅ `landing-page-estatica/index.html` (atualização de versão do cache)

### 2️⃣ Fazer Commit e Push

Abra o terminal na pasta do projeto e execute:

```bash
# Adicionar os arquivos modificados
git add landing-page-estatica/assets/js/main.js
git add landing-page-estatica/index.html

# Fazer commit com mensagem descritiva
git commit -m "Fix: Corrigir carregamento de config.json no GitHub Pages"

# Enviar para o GitHub
git push origin main
```

**Nota:** Se sua branch principal for `master`, use `git push origin master` em vez de `main`.

### 3️⃣ Configurar GitHub Pages (se ainda não estiver configurado)

1. Acesse seu repositório no GitHub: `https://github.com/gabrielraiolr/BROWFLIX-LP`
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source** (Fonte), selecione:
   - **Branch:** `main` (ou `master`)
   - **Folder:** `/` (raiz) ou `/landing-page-estatica` se quiser apenas essa pasta
5. Clique em **Save**

### 4️⃣ Aguardar Deploy

- ⏱️ O GitHub Pages pode levar **2-5 minutos** para atualizar
- 🔄 Você receberá uma notificação quando o deploy estiver completo
- 🌐 O site ficará disponível em: `https://gabrielraiolr.github.io/BROWFLIX-LP/`

### 5️⃣ Verificar se Funcionou

1. Abra o site no navegador
2. Pressione **Ctrl + Shift + I** (ou F12) para abrir o DevTools
3. Vá na aba **Console**
4. Você deve ver:
   ```
   🔍 Tentando carregar config de: [URL do config.json]
   ✅ Configuração carregada com sucesso: [objeto config]
   ✅ Plataforma Browflix carregada com sucesso!
   ```

### 6️⃣ Limpar Cache do Navegador (se necessário)

Se mesmo após o deploy as mudanças não aparecerem:

**Chrome/Edge:**
- Pressione `Ctrl + Shift + Delete`
- Selecione "Imagens e arquivos em cache"
- Clique em "Limpar dados"

**Ou simplesmente:**
- Abra o DevTools (F12)
- Clique com botão direito no ícone de atualizar
- Selecione "Esvaziar cache e atualizar forçadamente"

---

## 🐛 Solução de Problemas

### Problema: Config.json ainda não carrega

**Verifique:**
1. ✅ A pasta `config/` está na raiz do projeto GitHub (mesmo nível do `index.html`)
2. ✅ O arquivo `config.json` está dentro da pasta `config/`
3. ✅ O nome do arquivo está correto (case-sensitive)

**Console mostra erro 404:**
- Verifique se o `config.json` foi commitado e enviado para o GitHub
- Execute: `git ls-files | grep config.json` para confirmar

### Problema: Imagens não aparecem

**Verifique:**
1. ✅ A pasta `assets/images/` está completa no GitHub
2. ✅ Os caminhos no `config.json` estão corretos
3. ✅ As imagens foram commitadas (arquivos grandes podem ser ignorados pelo git)

**Para verificar imagens no repositório:**
```bash
git ls-files | grep "assets/images"
```

### Problema: Site carrega mas sem estilos

**Verifique:**
1. ✅ O arquivo `assets/css/styles.css` existe no GitHub
2. ✅ O Tailwind CDN está sendo carregado (linha 14 do index.html)
3. ✅ Não há erro de CORS no console

---

## 📊 Checklist Final

Antes de considerar o deploy completo, verifique:

- [ ] ✅ Config.json está carregando (veja no console)
- [ ] ✅ Banners dos cursos aparecem
- [ ] ✅ Banner do Fundador aparece
- [ ] ✅ Banner da Didática aparece
- [ ] ✅ Fotos dos aprovados carregam
- [ ] ✅ Links de navegação funcionam
- [ ] ✅ Formulário de contato aparece
- [ ] ✅ Footer com links sociais funciona
- [ ] ✅ Site é responsivo (teste em mobile)

---

## 🎨 Próximos Passos (Opcional)

### Otimizar para Produção

1. **Minificar CSS e JS**
   - Use ferramentas como `cssnano` e `terser`
   - Reduz o tamanho dos arquivos em ~40%

2. **Comprimir Imagens**
   - Use `tinypng.com` ou `squoosh.app`
   - Imagens PNG podem ser reduzidas em 60-80% sem perda visual

3. **Adicionar Meta Tags**
   - Open Graph para compartilhamento em redes sociais
   - Meta tags para SEO

4. **Configurar Domínio Customizado**
   - Comprar domínio (ex: `browflix.com.br`)
   - Configurar DNS no GitHub Pages

---

## 📞 Suporte

Se após seguir todos os passos o problema persistir:

1. **Verifique o Console do Navegador:**
   - Copie todas as mensagens de erro
   - Isso ajudará a identificar o problema específico

2. **Verifique a Aba Network:**
   - Veja se o `config.json` está retornando 200 (sucesso) ou 404 (não encontrado)
   - Verifique se as imagens estão carregando

3. **Teste em Modo Anônimo:**
   - Abre uma janela anônima/privada
   - Acesse o site
   - Isso elimina problemas de cache

---

## ✅ Resumo da Correção

**Antes:**
```javascript
const response = await fetch("config/config.json"); // ❌ Caminho relativo simples
```

**Depois:**
```javascript
// ✅ Detecta automaticamente o caminho base
const basePath = document.querySelector('script[src*="main.js"]')?.src.split('/assets/')[0] || '';
const configPath = basePath ? `${basePath}/config/config.json` : './config/config.json';
const response = await fetch(configPath);
```

**Resultado:** Funciona tanto localmente quanto no GitHub Pages, independentemente do subdiretório! 🎉

---

**Data da Correção:** 01/11/2025  
**Versão do Script:** v=20241220-019

