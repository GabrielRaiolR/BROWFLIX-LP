@echo off
chcp 65001 >nul
echo.
echo ========================================
echo 🚀 ATUALIZAR GITHUB PAGES
echo ========================================
echo.

cd /d "%~dp0.."

echo 📋 Arquivos que serão enviados:
echo    ✅ landing-page-estatica/assets/js/main.js (correção de caminho)
echo    ✅ landing-page-estatica/index.html (atualização de cache)
echo.

echo 🔄 Adicionando arquivos ao Git...
git add landing-page-estatica/assets/js/main.js
git add landing-page-estatica/index.html

echo.
echo 💾 Fazendo commit...
git commit -m "Fix: Corrigir carregamento de config.json no GitHub Pages"

echo.
echo 📤 Enviando para o GitHub...
git push origin main

IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo ⚠️ Erro ao fazer push para 'main', tentando 'master'...
    git push origin master
)

echo.
echo ========================================
echo ✅ ATUALIZAÇÃO CONCLUÍDA!
echo ========================================
echo.
echo ⏱️ Aguarde 2-5 minutos para o GitHub Pages atualizar
echo 🌐 Depois acesse: https://gabrielraiolr.github.io/BROWFLIX-LP/
echo.
echo 💡 Dica: Abra o DevTools (F12) e veja o Console
echo    Você deve ver: "✅ Configuração carregada com sucesso"
echo.
pause

