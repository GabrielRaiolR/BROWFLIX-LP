@echo off
chcp 65001 >nul
echo.
echo ========================================
echo 🚀 ATUALIZAR GITHUB PAGES
echo ========================================
echo.

cd /d "%~dp0.."

echo 📋 Arquivos que serão enviados:
echo    ✅ assets/js/main.js (PROTEÇÃO CONTRA ERROS + LOGS)
echo    ✅ index.html (CSS inline + sistema anti-flash)
echo    ✅ config/config.json (campo _version adicionado)
echo    ✅ ATUALIZAR-GITHUB.bat (script atualizado)
echo    ✅ CORRECOES-CACHE.md (correções de cache)
echo    ✅ SOLUCAO-PISCAR.md (solução do piscar)
echo    ✅ ERROS-CORRIGIDOS-JS.md (10 erros corrigidos!)
echo    ✅ DIAGNOSTICO-SECOES.md (diagnóstico completo)
echo.
echo 🛡️  PROTEÇÕES ADICIONADAS:
echo    ✅ Try-catch em TODAS as renderizações
echo    ✅ Logs detalhados de sucesso/erro
echo    ✅ Validação completa de arrays
echo    ✅ Identificação exata de falhas
echo.
echo 🗑️  FALLBACK REMOVIDO:
echo    ❌ Fallback com dados ANTIGOS removido do HTML
echo    ✅ Agora só usa JavaScript principal (sempre atualizado)
echo.

echo 🔄 Adicionando arquivos ao Git...
git add landing-page-estatica/assets/js/main.js
git add landing-page-estatica/index.html
git add landing-page-estatica/config/config.json
git add landing-page-estatica/ATUALIZAR-GITHUB.bat
git add landing-page-estatica/CORRECOES-CACHE.md
git add landing-page-estatica/SOLUCAO-PISCAR.md
git add landing-page-estatica/ERROS-CORRIGIDOS-JS.md
git add landing-page-estatica/DIAGNOSTICO-SECOES.md
git add landing-page-estatica/COMO-TESTAR-SECOES.md
git add landing-page-estatica/RESUMO-FINAL.md
git add landing-page-estatica/PROBLEMA-FALLBACK-RESOLVIDO.md

echo.
echo 💾 Fazendo commit...
git commit -m "Fix: Remoção de fallback desatualizado + proteção completa v2024110201"

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
echo 💡 Dica: Limpe o cache do navegador (Ctrl+Shift+Del)
echo    ou abra em modo anônimo para ver as mudanças
echo    Versão atualizada: v2024110201
echo.
pause

