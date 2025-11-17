/**
 * Plataforma Browflix - Landing Page Estática
 * Sistema de carregamento dinâmico de conteúdo
 */

class BrowflixLanding {
  constructor() {
    this.config = null;
    this.cacheBustVersion = "2024110201"; // Versão para cache bust de imagens
    this.init();
  }

  async init() {
    try {
      console.log("🚀 Iniciando Plataforma Browflix...");

      // Carregar configuração
      await this.loadConfig();

      // Aplicar configuração na página
      this.applyConfig();

      // Inicializar funcionalidades
      this.initSmoothScroll();
      this.initFormHandling();
      this.initTestimonialCarousel();
      this.initResponsiveHandling();

      // Marcar como carregado
      document.body.classList.add("js-loaded");

      console.log("✅ Plataforma Browflix carregada com sucesso!");
      console.log("📦 Versão:", this.cacheBustVersion);
    } catch (error) {
      console.error("❌ Erro ao carregar a página:", error);
      // Forçar uso da configuração padrão em caso de erro
      this.config = this.getDefaultConfig();
      this.applyConfig();

      // Marcar como carregado mesmo com erro
      document.body.classList.add("js-loaded");
    }
  }

  async loadConfig() {
    try {
      // Detecta o caminho base automaticamente
      const basePath =
        document
          .querySelector('script[src*="main.js"]')
          ?.src.split("/assets/")[0] || "";

      // Usar a mesma versão do cache bust para consistência
      const cacheBust = `?v=${this.cacheBustVersion}`;
      const configPath = basePath
        ? `${basePath}/config/config.json${cacheBust}`
        : `./config/config.json${cacheBust}`;

      console.log("🔍 Tentando carregar config de:", configPath);
      console.log("🔖 Versão do cache bust:", this.cacheBustVersion);

      // Forçar requisição sem cache
      const response = await fetch(configPath, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const loadedConfig = await response.json();

      // Verificar se o config carregado tem a versão correta
      const configVersion = loadedConfig._version || "0";
      const expectedVersion = this.cacheBustVersion;

      console.log("🔍 Versão do config carregado:", configVersion);
      console.log("🔍 Versão esperada:", expectedVersion);

      // Se não tiver a versão correta ou não tiver o badge, usar config padrão
      if (configVersion !== expectedVersion || !loadedConfig.hero?.badge) {
        console.warn(
          "⚠️ Config antigo ou inválido detectado! Usando configuração padrão atualizada."
        );
        console.warn("   Config carregado tem versão:", configVersion);
        console.warn("   Versão esperada:", expectedVersion);
        this.config = this.getDefaultConfig();
      } else {
        this.config = loadedConfig;
        console.log(
          "✅ Configuração carregada com sucesso! Versão:",
          configVersion
        );
      }

      console.log(
        "📊 Total de aprovados configurados:",
        this.config.approvedStudents?.students?.length
      );
    } catch (error) {
      console.error("❌ Erro ao carregar configuração:", error);
      console.log("🔄 Usando configuração padrão...");
      // Fallback para configuração padrão
      this.config = this.getDefaultConfig();
    }
  }

  getDefaultConfig() {
    return {
      _version: this.cacheBustVersion,
      _lastUpdate: new Date().toISOString(),
      site: {
        title: "Plataforma Browflix - Intensivo Medicina ENEM",
        description:
          "Brow é polêmico? Sim! Mas não tem melhor que ele em sala de aula.",
        logo: {
          text: "MATEMÁTICA BROW",
          subtitle: "Preparatório para o ENEM",
          tagline: "PLATAFORMA BROWFLIX",
        },
      },
      header: {
        loginButton: {
          text: "Já sou aluno",
          url: "https://www.cursomatematicabrow.com/homepage",
        },
        matriculateButton: {
          text: "Quero me matricular",
          url: "#planos",
        },
      },
      hero: {
        badge: "A sua História com o Brow",
        title:
          "Do sonho impossível à <span class='text-blue-600'>Medicina</span>:<br />A jornada que <span class='text-blue-600'>centenas</span> já percorreram 🏆",
        description:
          "Victor Brow transformou sua paixão por ensinar em uma metodologia que já aprovou <strong>mais de 500 alunos</strong> em Medicina. Agora é a <strong>sua vez</strong> de fazer parte dessa história.",
        button: {
          text: "Quero ser o proximo aprovado em Medicina",
          url: "#planos",
        },
      },
      approvedStudents: {
        title:
          'Seja um <span class="text-accent">aprovado</span><br />em Medicina',
        description:
          'Nos próximos meses você vai ser um dos primeiros a entrar na faculdade de <span class="font-semibold text-accent">Medicina</span>, sem precisar ficar ansioso com notas de corte e classificações.',
        subtitle: "Assim como nossos alunos:",
        students: [
          // UFPA
          {
            name: "Adryel",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Adryel.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Alexandre Rebelo",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Alexandre Rebelo.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Anna Laís",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Anna Laís.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Arley Guilherme",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Arley Guilherme.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Arthur Pinheiro",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Arthur Pinheiro.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Beatriz Miranda",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Beatriz Miranda.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Bruno Caíres",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Bruno Caíres.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Caio Borges",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Caio Borges.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Carlos Fabrício",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Carlos Fabrício.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Carlos Júnior",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Carlos Júnior.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Eduardo Martins",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Eduardo Martins.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Emerson José",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Emerson José.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Erycksson R",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Erycksson R.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Evelyn",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Evelyn.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Gabrielle Mouzinho",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Gabrielle Mouzinho.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Giorgio Corrêa",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Giorgio Corrêa.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Giorgio Neto",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Giorgio Neto.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Giovanna Lima",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Giovanna Lima.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Gustavo Monteiro",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Gustavo Monteiro.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Iago Broni",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Iago Broni.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Iara Pamela",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Iara Pamela.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Igor Rian",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Igor Rian.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Isabela Alves",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Isabela Alves.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Ismael Abreu",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Ismael Abreu.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Izabelle Duarte",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Izabelle Duarte.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Jaffter Gustavo",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Jaffter Gustavo.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Jamily Castilho",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Jamily Castilho.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "João Canto",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/João Canto.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "João Martins",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/João Martins.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "João Pedro",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/João Pedro.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Juliana Almeida",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Juliana Almeida.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Kayky",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/KAYKY.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Kenzo Pereira",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Kenzo pereira.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Keveni Leal",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Keveni Leal.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Leonardo Bacelar",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/LEONARDO BACELAR.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Lizandra Valente",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Lizandra Valente.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Lucas Dias",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Lucas dias.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Lyssa Abreu",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Lyssa Abreu.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Maria Clara",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Maria Clara.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Maria Mamed",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Maria Mamed.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Matheus Enge",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Matheus Enge.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Melqui Costa",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Melqui Costa.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Mirna Van Berger",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Mirna Van Berger.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Mylena Gemaque",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Mylena Gemaque.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Otávio Coutinho",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Otávio Coutinho.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Patrick Souza",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/PATRICK SOUZA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Paulo Gabriel",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Paulo Gabriel.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Pedro Medeiros",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Pedro Medeiros.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Reinildo Oliveira",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/REINILDO Oliveira.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Renato Mattar",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Renato Mattar.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Thaina Fontel",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Thaina Fontel.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Tiago Santos",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/TIAGO-SANTOS.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Veronica Machado",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Veronica Machado.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Victor Menezes",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Victor Menezes.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Victor Sagres",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Victor Sagres.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Victor Wesley",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Victor Wesley.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Vitória Sotão",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Vitória Sotão.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Weliton Quaresma",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Weliton Quaresma.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Yan Maues",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/Yan maues.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Yuji de Oliveira",
            university: "UFPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFPA/YUJI de Oliveira.png",
            gradient: "from-pink-500 to-red-500",
          },

          // UFOPA
          {
            name: "Arthur Moraes",
            university: "UFOPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFOPA/Arthur Moraes UFOPA.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Júlia Portela",
            university: "UFOPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFOPA/Júlia Portela UFOPA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Maria Clara",
            university: "UFOPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFOPA/Maria Clara UFOPA.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Rogério Pessoa",
            university: "UFOPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFOPA/Rogério Pessoa UFOPA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Yan Maues",
            university: "UFOPA",
            secondary: "",
            image: "assets/images/APROVADOS/UFOPA/Yan Maues UFOPA.png",
            gradient: "from-blue-500 to-purple-600",
          },

          // SISU (diversas universidades)
          {
            name: "Anna Lais",
            university: "UFRJ",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Anna Lais - UFRJ.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Arthur Pinheiro",
            university: "UFRJ",
            secondary: "5º colocado",
            image: "assets/images/APROVADOS/SISU/Arthur Pinheiro - 5º UFRJ.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Dodie Moreira",
            university: "UFDPAR",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Dodie Moreira - UFDPAR.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Dodie Moreira",
            university: "USP",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Dodie Moreira USP.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Eduarda Narciso",
            university: "UFMA",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Eduarda Narciso - UFMA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Emerson José",
            university: "UFRJ",
            secondary: "3º colocado",
            image: "assets/images/APROVADOS/SISU/Emerson José - 3º UFRJ.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Eryckson Rodrigues",
            university: "UNDF",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Eryckson Rodrigues - UNDF.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Gustavo Monteiro",
            university: "UFG",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Gustavo Monteiro - UFG.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Iara Pâmela",
            university: "UFMA",
            secondary: "3º colocado",
            image: "assets/images/APROVADOS/SISU/Iara Pâmela - 3º UFMA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Ismael Abreu",
            university: "UFSM",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Ismael Abreu - UFSM.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Ismael Victor",
            university: "UNIG",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Ismael Victor - UNIG.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Jaellyni Mamed",
            university: "UFC",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Jaellyni  Mamed - UFC.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Jaffter G.",
            university: "UFMT",
            secondary: "1º colocado",
            image: "assets/images/APROVADOS/SISU/Jaffter G. - 1º UFMT.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Jessica Cruz",
            university: "UFTM",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/JESSICA CRUZ - UFTM.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "João Martins",
            university: "UFAM",
            secondary: "3º colocado",
            image: "assets/images/APROVADOS/SISU/João Martins - 3º UFAM.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "João Pedro",
            university: "UFMA",
            secondary: "12º colocado",
            image: "assets/images/APROVADOS/SISU/João Pedro - 12º UFMA.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Jordanna Eduarda",
            university: "UNIR",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Jordanna Eduarda - UNIR.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Juliana Almeida",
            university: "UFMA",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Juliana Almeida - UFMA.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Kenzo Pereira",
            university: "UNIPAMPA",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Kenzo Pereira -UNIPAMPA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Maria Clara Lima",
            university: "UFSM",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Maria Clara Lima - UFSM.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Mateus",
            university: "UFMA",
            secondary: "1º colocado",
            image: "assets/images/APROVADOS/SISU/Mateus - 1º UFMA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Melqui Costa",
            university: "UFMA",
            secondary: "2º colocado",
            image: "assets/images/APROVADOS/SISU/Melqui Costa - 2º UFMA.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Mylena Gemaque",
            university: "UFSB",
            secondary: "2º colocado",
            image: "assets/images/APROVADOS/SISU/Mylena Gemaque - 2º UFSB.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Otávio Coutinho",
            university: "UNIOSTE",
            secondary: "10º colocado",
            image:
              "assets/images/APROVADOS/SISU/Otávio Coutinho - 10º UNIOSTE.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Paulo Gabriel",
            university: "UFAM",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Paulo Gabriel  - UFAM.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Reinildo Oliveira",
            university: "UFBA",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Reinildo Oliveira - UFBA.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Tiago Santos",
            university: "UFMG",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Tiago Santos - UFMG.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Victor Alencar",
            university: "UFRJ",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Victor Alencar - UFRJ.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Vinicius Verás",
            university: "UFSCPA",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/VINICIUS VERÁS - UFSCPA.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Yuji Yoshioka",
            university: "UFMG",
            secondary: "",
            image: "assets/images/APROVADOS/SISU/Yuji Yoshioka - UFMG.png",
            gradient: "from-blue-500 to-purple-600",
          },

          // UEPA
          {
            name: "Adryel Lucas",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Adryel Lucas.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Alanis Abreu",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Alanis Abreu.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Alexandre Rebelo",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Alexandre Rebelo.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Anna Laís",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Anna Laís.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Antony",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Antony.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Arley Guilherme",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Arley Guilherme.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Arthur Zevs",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Arthur Zevs.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Bruno Caires",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Bruno Caires.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Caio Borges",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Caio Borges.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Carlos Fabrício",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Carlos Fabrício.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Carlos Júnior",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Carlos Júnior.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Debora Rayomara",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Debora rayomara.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Derwin Machado",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Derwin Machado.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Eduarda Mamede",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Eduarda Mamede.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Eduarda Narciso",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Eduarda Narciso.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Gabriele Campos",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Gabriele Campos.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Giorgi Brelaz",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Giorgi Brelaz.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Giorgio Neto",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Giorgio Neto.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Giovana Letícia",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Giovana Letícia.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Gustavo Monteiro",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/GUSTAVO MONTEIRO.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Iago Broni",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Iago Broni.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Igor Rian",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Igor Rian.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Igor Vinicius",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Igor Vinicius.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Isabela Alves",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Isabela Alves.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Ismael Abreu",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Ismael Abreu.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Izabelle Duarte",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Izabelle Duarte.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Jaffter Silva",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Jaffter Silva.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Jamili Castilho",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Jamili Castilho.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Jessica Cruz",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/JESSICA CRUZ.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "João Gabriel",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/João Gabriel.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "João Pedro",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/João Pedro.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "João Victor",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/João Victor.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "João Vitor",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/João Vitor.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Juliana Almeida",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Juliana Almeida.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Kenzo Telles",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Kenzo Telles.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Lizandra Valente",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Lizandra Valente.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Lucas Dias",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Lucas dias.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Luís Moura",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Luís Moura.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Maria Clara",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Maria Clara.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Maria Mamed",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Maria Mamed.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Mariane Fernandes",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Mariane Fernandes.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Mateus Enge",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Mateus Enge.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Mylena Gemaque",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Mylena Gemaque.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Paulo Gabriel",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Paulo Gabriel.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Pedro Medeiros",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Pedro Medeiros.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Reinildo Oliveira",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Reinildo Oliveira.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Renato Mattar",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Renato Mattar.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Thaina Fontel",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Thaina Fontel.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Veronica Machado",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Veronica Machado.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Victor Alencar",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Victor Alencar.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Victor Sagres",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Victor Sagres.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Victor Wesley",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Victor Wesley.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Vitória Sotão",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Vitória Sotão.png",
            gradient: "from-pink-500 to-red-500",
          },
          {
            name: "Wabio Junior",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/Wabio Junior.png",
            gradient: "from-blue-500 to-purple-600",
          },
          {
            name: "Yuji de Oliveira",
            university: "UEPA",
            secondary: "",
            image: "assets/images/APROVADOS/UEPA/YUJI de Oliveira.png",
            gradient: "from-pink-500 to-red-500",
          },
        ],
      },
      didatica: {
        title:
          "Brow é polêmico?<br />Sim! Mas não tem melhor que ele em sala de aula.✨",
        description1:
          "O maior diferencial (além de questões autorais, projetos individuais e monitoria 24h) é a super didática do Brow",
        description2:
          "O aluno tem a garantia total de que vai conseguir aprender e absorver as oportunidades, aplicando na prova do ENEM de forma eficaz.",
        banner: "assets/images/banners/Plataforma-home.png",
        button: {
          text: "Quero me matricular →",
          url: "#planos",
        },
      },
      learningObjectives: {
        title:
          'O que você terá ao Adquirir a<br /><span class="text-blue-600">Plataforma Browflix?</span>',
        objectives: [
          {
            number: 1,
            text: "📚 Domínio de toda a Matemática pro Enem",
            description:
              "Você deve estudar de forma direcionada pra prova, e saber o que vai e como cai!! E o Brow mastiga isso pra você!",
          },
          {
            number: 2,
            text: "⚡ Resolução Rápida e Eficiente",
            description:
              "Aprenda com o Brow a destrinchar questões complexas de forma simples e veloz, usando técnicas exclusivas que deixam você sempre um passo à frente da prova.",
          },
          {
            number: 3,
            text: "⏱️ Gestão de Tempo Inteligente",
            description:
              "Domine, com o Brow, os métodos de produtividade e organização que realmente funcionam para quem quer resultado de verdade no ENEM — sem enrolação, sem desgaste desnecessário.",
          },
          {
            number: 4,
            text: "🎯 Estratégias Validadas",
            description:
              "Métodos de estudo comprovados por centenas de estudantes aprovados em Medicina",
          },
        ],
        button: {
          text: "Quero me matricular",
          url: "#planos",
        },
      },
      platformFeatures: {
        title: "O que você encontra<br />na plataforma?",
        features: [
          {
            icon: "👤",
            title: "Área do aluno exclusiva",
            gradient: "from-blue-500 to-purple-600",
            videoUrl:
              "https://vimeo.com/1137227684/9bd3505f5d?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
            thumbnail: "assets/images/thumbnails/vimeo-thumbnail.png", // Exemplo: "assets/images/thumbnails/vimeo-thumbnail.jpg" - Adicione o caminho da sua imagem aqui
          },
          {
            icon: "🎬",
            title: "Aulas ultradidáticas com qualidade de cinema",
            gradient: "from-pink-500 to-red-500",
            videoUrl:
              "https://www.youtube.com/live/qtFCv-yk8-Y?si=K6S6LH8V9VXzohYW", // Exemplo: "https://www.youtube.com/watch?v=abc123xyz"
            videoType: "youtube", // "vimeo" ou "youtube"
          },
          {
            icon: "📱",
            title:
              "Aplicativo que permite você baixar as aulas para assistir offline sem gastar seu pacote de dados",
            gradient: "from-cyan-500 to-blue-500",
            banner: "assets/images/thumbnails/aplicativo-thumbnail.png",
          },
          {
            icon: "📝",
            title:
              "Listas de questões selecionadas e resolvidas com uma didática impecável",
            gradient: "from-green-500 to-teal-500",
            videoUrl:
              "https://vimeo.com/1137227684/9bd3505f5d?share=copy&fl=sv&fe=ci#t=579", // Exemplo: "https://vimeo.com/123456789" ou "https://www.youtube.com/watch?v=abc123"
            videoType: "vimeo", // "vimeo" ou "youtube"
            thumbnail: "assets/images/thumbnails/vimeo-material-didatico.png", // Exemplo: "assets/images/thumbnails/questoes-thumbnail.png"
          },
          {
            icon: "📡",
            title: "Aulas Ao Vivo até o ENEM 2025",
            gradient: "from-pink-500 to-yellow-500",
            videoUrl:
              "https://vimeo.com/1137235655/4ffd953c03?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789" ou "https://www.youtube.com/watch?v=abc123"
            videoType: "vimeo", // "vimeo" ou "youtube"
            thumbnail: "assets/images/thumbnails/vimeo-aulas-ao-vivo.png", // Exemplo: "assets/images/thumbnails/aulas-vivo-thumbnail.png"
          },
          {
            icon: "🎓",
            title: "Monitorias e tutorias com aprovados em Medicina",
            gradient: "from-teal-500 to-purple-500",
            videoUrl:
              "https://vimeo.com/1137236691/7955cab6f5?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789" ou "https://www.youtube.com/watch?v=abc123"
            videoType: "vimeo", // "vimeo" ou "youtube"
            thumbnail: "assets/images/thumbnails/vimeo-grupo-de-duvidas.png", // Exemplo: "assets/images/thumbnails/monitorias-thumbnail.png"
          },
        ],
        button: {
          text: "Quero ter acesso a tudo isso",
          url: "#planos",
        },
      },
      courses: {
        title: "Nossos cursos:",
        subtitle: "Conheça a Plataforma Browflix por dentro:",
        courses: [
          {
            title: "Matemática Básica",
            subtitle: "Brow Kai",
            banner: "assets/images/banners/Matematica Básica.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl:
              "https://vimeo.com/1137237488/787b47b855?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Matemática Básica para o ENEM",
            subtitle: "The last of Brow",
            banner: "assets/images/banners/Matematica Basica Para o ENEM.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl:
              "https://vimeo.com/1137237717/2fecb40056?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Funções e Financeira",
            subtitle: "Matemática Financeira",
            banner: "assets/images/banners/Funções e Financeira.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl: "", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Análise Combinatória",
            subtitle: "e Probabilidade",
            banner:
              "assets/images/banners/Análise Combinatória e Probabilidade.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl: "", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Geometria Plana",
            subtitle: "e Espacial",
            banner: "assets/images/banners/Geometria Plana e Espacial.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl: "", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Curso de Revisão",
            subtitle: "Ringue do Brow",
            banner: "assets/images/banners/Curso de Revisão.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl:
              "https://vimeo.com/1137227684/9bd3505f5d?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Curso nas Férias do Brow",
            subtitle: "Curtindo o Verão",
            banner: "assets/images/banners/Curso de Ferias.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl:
              "https://vimeo.com/1137239390/b1ef83bdfb?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Projeto Iniciante",
            subtitle: "Mentoria Guerra",
            banner: "assets/images/banners/Projeto Iniciante.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl:
              "https://vimeo.com/1137240623/1963e408f3?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "Projeto Elite",
            subtitle: "Esquedrão especial do brow",
            banner: "assets/images/banners/Projeto Elite.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl:
              "https://vimeo.com/1137240623/1963e408f3?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
          {
            title: "H.E.C.B",
            subtitle: "(Habilidades ENEM com o Brow)",
            banner: "assets/images/banners/HECB.png", // Adicione aqui o caminho do banner (320x240px)
            videoUrl:
              "https://vimeo.com/1137240623/1963e408f3?share=copy&fl=sv&fe=ci", // Exemplo: "https://vimeo.com/123456789"
            videoType: "vimeo", // "vimeo" ou "youtube"
          },
        ],
        button: {
          text: "Quero ter acesso aos cursos agora",
          url: "#planos",
        },
      },
      testimonials: {
        title:
          'Veja <span class="text-accent">o que dizem</span> os alunos da Plataforma Browflix.',
        subtitle:
          'A <span class="text-blue-600">opinião</span> de quem já está vivendo <span class="text-blue-600">o que você ainda sonha</span>.',
        testimonials: [
          {
            avatar: "assets/images/testemunhos/arthur-zvez-avatar.png", // Dimensões: 80x80px (quadrado)
            name: "Arthur Zvez",
            rating: 5, // Número de estrelas (1 a 5)
            comment:
              "Posso afirmar que o Brow NUNCA me deixou na mão. Sem ele meu resultado não seria possivel.",
          },
          {
            avatar: "assets/images/testemunhos/tiago-santos-avatar.png", // Dimensões: 80x80px (quadrado)
            name: "Tiago Santos",
            rating: 5, // Número de estrelas (1 a 5)
            comment:
              "Fui o 2º aprovado no ENEM 2025 na UFPA e UEPA, e o Brow foi fundamental para isso! Hoje estou cursando Medicina e posso afirmar que o Brow é o melhor investimento que fiz.",
          },
          {
            avatar: "assets/images/testemunhos/arthur-pinheiro-avatar.png", // Dimensões: 80x80px (quadrado)
            name: "Arthur Pinheiro",
            rating: 5, // Número de estrelas (1 a 5)
            comment:
              "Fui o 5º aprovado no ENEM 2025 na UEPA, e o Brow foi fundamental para isso! Hoje estou cursando Medicina e posso afirmar que o Brow é o melhor investimento que fiz.",
          },
        ],
        button: {
          text: "Quero ser o próximo aprovado!",
          url: "#planos",
        },
      },
      bonus: {
        title:
          'Inscreva-se nessa turma e<br /><span class="text-accent">garanta</span><br /><span class="text-accent">mais 3 presentes exclusivos</span>',
        bonuses: [
          {
            title: "Bônus 01 - Curso Gravado de CN",
            description:
              "Curso de Ciencias da Natureza Completo Gravado com aulas de Física, Química e Biologia.",
            icon: "🔬",
            gradient: "from-blue-500 to-purple-600",
            price: "GRÁTIS",
          },
          {
            title: "Bônus 02 - Curso das férias Gravado",
            description:
              "Ganhe meu curso de completo de todas as matérias gravado para você aproveitar as férias.",
            icon: "🎓",
            gradient: "from-pink-500 to-red-500",
            price: "GRÁTIS",
          },
          {
            title:
              "Bônus 03 -  50% De desconto no Desumanidades (curso de humanas que mais aprova no Norte do Brasil)",
            description:
              "Nosso carro chefe dos cursos do Brow! Aproveite 50% de desconto para você aproveitar o melhor curso de humanas que mais aprova no Norte do Brasil.",
            icon: "🎯",
            gradient: "from-cyan-500 to-blue-500",
            price: "GRÁTIS",
          },
        ],
        footerText:
          "Tudo isso <strong>grátis</strong> para você,<br />porque é um <strong>presente!</strong>",
        button: {
          text: "Quero garantir meus bônus agora",
          url: "#planos",
        },
      },
      contact: {
        title:
          "<strong>2025</strong> foi seu ano de estudar.<br /><strong>2026</strong> será seu ano de passar no ENEM.",
        subtitle: "Preencha seus dados e receba uma proposta personalizada",
        form: {
          fields: [
            {
              type: "text",
              name: "nome",
              placeholder: "Nome completo",
              required: true,
            },
            {
              type: "email",
              name: "email",
              placeholder: "E-mail",
              required: true,
            },
            {
              type: "tel",
              name: "telefone",
              placeholder: "Telefone",
              required: true,
            },
            {
              type: "text",
              name: "cidade",
              placeholder: "Cidade",
              required: true,
            },
            {
              type: "text",
              name: "Curso que deseja fazer",
              placeholder: "Matemática, Física, Química, Biologia, etc.",
              required: true,
            },
          ],
          button: {
            text: "QUERO FAZER PARTE",
          },
          disclaimer:
            'Ao clicar em "QUERO FAZER PARTE", você concorda com nossos termos de uso e política de privacidade.',
        },
      },
      pricing: {
        plans: [
          {
            name: "Plataforma Browflix <br>PLANO ANUAL <span class='text-red-500'>GRAVADO!!</span>",
            subtitle: "",
            icon: "PB",
            color: "green",
            highlighted: false,
            originalPrice: "De R$ 1.500,00 por:",
            price: "12x R$ 67,34",
            installments: "ou R$ 700 à vista",

            features: [
              "Curso de Matemática Básica",
              "Curso de Matemática básica Pro Enem",
              "Curso de Funções e financeira",
              "Curso de Análise combinatória",
              "Curso de Probabilidade",
              "Curso de Geometria Plana e espacial",
              "Projeto Iniciante (para alunos com menos de 30 acertos)",
              "Projeto Elite (para alunos 35+ em matemática)",
              "Curso de HABILIDADES ENEM COM BROW",
              "Curso de Revisão Espaçada Garantida",
            ],

            bonuses: [
              "Garantia 7 dias",
              "Curso de Linguagens Gravado",
              "Curso nas Férias (revisão geral)",
              "Desconto de 50% no curso Desumanidades",
              "50% de Desconto no Curso de CN gravado",
            ],
            button: {
              text: "Quero me matricular agora",
              style: "outline",
              url: "https://chk.eduzz.com/E9OO463K9B", // Exemplo: "https://checkout.exemplo.com/plano-anual-gravado"
            },
          },
          {
            name: "Plataforma Browflix <br> PLANO ANUAL AO VIVO",
            subtitle: "Acesso até o ENEM 2026",
            icon: "PB",
            color: "blue",
            highlighted: true,
            badge: "O PLANO MAIS ESCOLHIDO",
            originalPrice: "De R$ 3.000,00 por:",
            price: "12x R$ 106,48",
            installments: "ou R$ 1100 à vista",
            features: [
              "Curso de Matemática Básica",
              "Curso de Matemática básica Pro Enem",
              "Curso de Funções e financeira",
              "Curso de Análise combinatória",
              "Curso de Probabilidade",
              "Curso de Geometria Plana e Espacial",
              "Projeto Iniciante (para alunos com menos de 30 acertos)",
              "Projeto Elite (para alunos 35+ em matemática)",
              "Curso de Habilidades ENEM com Brow",
              "Curso de Revisão Espaçada Garantida",
              "Curso de Ferias do Brow",
            ],
            bonuses: [
              "Garantia 7 dias",
              "Curso de Linguagens Gravado",
              "Curso nas Férias (revisão geral)",
              "Desconto de 50% no curso Desumanidades",
              "50% de Desconto no Curso de CN gravado",
              "Aulas Gravadas de 2025",
              "Simulados mensais com relatórios",
              "Grupo de dúvidas com 25 acadêmicos de Medicina",
              "Desconto no material físico",
            ],
            button: {
              text: "Quero me matricular agora",
              style: "primary",
              url: "https://chk.eduzz.com/801EKVZ6W7", // Exemplo: "https://checkout.exemplo.com/plano-anual-ao-vivo"
            },
          },
          {
            name: "CURSO DESUMANIDADES",
            subtitle: "Acesso até o ENEM 2026",
            icon: "DH",
            color: "blue",
            highlighted: false,
            originalPrice: "De R$ 1.200,00 por:",
            price: "12x R$ 57,72",
            installments: "ou R$ 600 à vista",

            features: [
              "Aulas ao vivo (quarta e quinta à noite)",
              "Curso de Humanas",
              "Curso de História",
              "Curso de Sociologia",
              "Curso de Filosofia",
              "Curso de Geografia",
            ],

            bonuses: [
              "Garantia 7 dias",
              "Curso de Linguagens gravado",
              "Aulas Gravadas de 2025",
              "Simulados corrigidos por mês até o ENEM 2025",
            ],
            button: {
              text: "Quero me matricular agora",
              style: "outline",
              url: "https://chk.eduzz.com/6W48N3OO0Z", // Exemplo: "https://checkout.exemplo.com/desumanidades"
            },
          },
          {
            name: "PLANO MENSAL",
            subtitle: "<span class='text-green-500'>Recorrente</span>",
            icon: "PM",
            color: "blue",
            isRecurring: true,
            isCompact: true, // Plano menor/compacto
            price: "R$ 210,00",
            installments: "por mês",
            features: [
              "Curso de Matemática Básica",
              "Matemática básica Pro Enem",
              "Funções e financeira",
              "Análise combinatória",
              "Probabilidade",
              "Geometria Plana e Espacial",
              "Projeto Iniciante (alunos com menos de 30 acertos)",
              "Projeto Elite (alunos 35+ em matemática)",
              "Habilidades ENEM com Brow",
              "Revisão espaçada garantida",
              "Garantia de 7 dias",
            ],
            bonuses: [
              "Cobrança mensal automática",
              "Cancele quando quiser",
              "Curso de Linguagens Gravado",
              "Curso nas Férias (revisão geral)",
              "50% de Desconto no curso Desumanidades",
              "50% de Desconto no Curso de CN Gravado",
            ],
            button: {
              text: "Assinar agora",
              style: "outline",
              url: "https://chk.eduzz.com/R9JJ4QDE9X", // Exemplo: "https://checkout.exemplo.com/plano-mensal"
            },
          },
        ],
      },
      miniCourses: {
        title: "COMBO DE CURSOS",
        subtitle: "Expanda ainda mais seus conhecimentos",
        courses: [
          {
            title: "COMBO",
            icon: "📊",
            price: "aguarde",
            gradient: "blue-dark",
          },
          {
            title: "COMBO",
            icon: "⚛️",
            price: "aguarde",
            gradient: "blue-medium",
          },
          {
            title: "COMBO",
            icon: "🧪",
            price: "aguarde",
            gradient: "blue-light",
          },
          {
            title: "COMBO",
            icon: "🦠",
            price: "aguarde",
            gradient: "blue-dark",
          },
          {
            title: "COMBO",
            icon: "✍️",
            price: "aguarde",
            gradient: "yellow",
          },
          {
            title: "COMBO",
            icon: "📚",
            price: "aguarde",
            gradient: "blue-medium",
          },
          {
            title: "COMBO",
            icon: "🌍",
            price: "aguarde",
            gradient: "blue-light",
          },
        ],
      },
      pedroAssaad: {
        title:
          'Quem é<br /><span class="text-blue-footer">Victor "Brow"?</span>',
        description: [
          '<strong>Victor "Brow"</strong> é educador, estrategista e comunicador — tudo ao mesmo tempo. Não é o professor tradicional: é o mentor que senta ao lado, conecta conteúdo com vida real e transforma estudo em propósito.',

          "Domina <strong>combinatória, probabilidade e geometria</strong> como quem respira; explica <strong>funções, assíntotas, logaritmos e trigonometria</strong> como quem conta história. Leva o aluno ao <strong>800+</strong> não pelo decorar, mas pelo entender de verdade.",

          "Já foram mais de <strong>1000 aprovações em Medicina</strong> e mais de <strong>800 notas acima de 800</strong> em Matemática. Uma cultura que virou referência nacional entre cursos independentes.",

          'Brow não vende aula — vende <strong>transformação de identidade</strong>:<br>"Quem aprende com o Brow não é qualquer aluno. Quem aprende com o Brow vira alguém que raciocina."',

          "Revolucionador da didática do ENEM, criou método, linguagem, comunidade e um estilo próprio de ensino que mudou a vida de milhares de estudantes.",

          "É o ponto onde <strong>a matemática encontra o sonho</strong> e onde <strong>resultado encontra sentido</strong>.",

          "Assim nasceu a <strong>Browlândia</strong> — um ecossistema de confiança, ritmo, pertencimento e alta performance.<br><strong>Espero que você seja o próximo.</strong>",
        ],
        image: "assets/images/banners/Fundador.png",
      },
      footer: {
        company: {
          name: "Plataforma Browflix",
          description:
            "Transformando vidas através da educação de qualidade e preparação para o ENEM.",
        },
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100067189491908",
          instagram: "https://www.instagram.com/matematicabrow/",
          youtube: "https://www.youtube.com/@matematicabrow",
        },
        links: {
          cursos: [
            "Matemática Brow",
            "Desumanidades",
            "Redação - Rafael Bittencourt",
            "CN Brow",
            "Torre De Babrow - Curso de Linguagens",
          ],
          sobre: [
            "Sobre Nós",
            "Nossa Equipe",
            "Trabalhe Conosco",
            "Plataforma Browflix",
          ],
          suporte: [
            "Central de Ajuda",
            "Contato",
            "Termos de Uso",
            "Política de Privacidade",
          ],
        },
        copyright: "© 2024 Plataforma Browflix. Todos os direitos reservados.",
      },
      whatsapp: {
        number: "5511987654321",
        message:
          "Olá! Gostaria de saber mais sobre o Intensivo Medicina ENEM da Plataforma Browflix.",
      },
    };
  }

  applyConfig() {
    if (!this.config) return;

    // Aplicar configurações básicas
    this.updateElement("page-title", this.config.site?.title);
    this.updateElement("page-description", this.config.site?.description);

    // Aplicar configurações do header
    this.updateElement("logo-text", this.config.site?.logo?.text);
    this.updateElement("logo-subtitle", this.config.site?.logo?.subtitle);
    this.updateElement("logo-tagline", this.config.site?.logo?.tagline);
    this.updateElement("login-button", this.config.header?.loginButton?.text);
    this.updateElement(
      "matriculate-button",
      this.config.header?.matriculateButton?.text
    );

    // Aplicar configurações do hero
    this.updateElement("hero-badge", this.config.hero?.badge);
    this.updateElement("hero-title", this.config.hero?.title);
    this.updateElement("hero-description", this.config.hero?.description);
    this.updateElement("hero-highlight", this.config.hero?.highlight);
    this.updateElement("hero-button", this.config.hero?.button?.text);
    this.updateElement(
      "hero-secondary-button",
      this.config.hero?.secondaryButton?.text
    );

    // Aplicar outras seções com proteção contra erros
    try {
      this.renderApprovedStudents();
      console.log("✅ Seção Aprovados renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Aprovados:", e);
    }

    try {
      this.renderDidatica();
      console.log("✅ Seção Didática renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Didática:", e);
    }

    try {
      this.renderLearningObjectives();
      console.log("✅ Seção Objetivos renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Objetivos:", e);
    }

    try {
      this.renderPlatformFeatures();
      console.log("✅ Seção Features renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Features:", e);
    }

    try {
      this.renderCourses();
      console.log("✅ Seção Cursos renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Cursos:", e);
    }

    try {
      this.renderTestimonials();
      console.log("✅ Seção Depoimentos renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Depoimentos:", e);
    }

    try {
      this.renderBonus();
      console.log("✅ Seção Bônus renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Bônus:", e);
    }

    try {
      this.renderContact();
      console.log("✅ Seção Contato renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Contato:", e);
    }

    try {
      this.renderPricing();
      console.log("✅ Seção Preços renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Preços:", e);
    }

    try {
      this.renderMiniCourses();
      console.log("✅ Seção Mini Cursos renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Mini Cursos:", e);
    }

    try {
      this.renderPedroAssaad();
      console.log("✅ Seção Victor Brow renderizada");
    } catch (e) {
      console.error("❌ Erro ao renderizar Victor Brow:", e);
    }

    try {
      this.renderFooter();
      console.log("✅ Footer renderizado");
    } catch (e) {
      console.error("❌ Erro ao renderizar Footer:", e);
    }
  }

  updateElement(id, content) {
    const element = document.getElementById(id);
    if (element && content) {
      element.innerHTML = content;
    }
  }

  renderApprovedStudents() {
    const config = this.config.approvedStudents;
    if (!config) {
      console.warn("⚠️ Config approvedStudents não encontrado");
      return;
    }

    this.updateElement("students-title", config.title);
    this.updateElement("students-description", config.description);
    this.updateElement("students-subtitle", config.subtitle);

    const carousel = document.getElementById("students-carousel");
    if (!carousel) {
      console.error("❌ Container students-carousel não encontrado");
      return;
    }

    if (!config.students || !Array.isArray(config.students)) {
      console.error("❌ students não é um array válido");
      return;
    }

    if (config.students.length === 0) {
      console.warn("⚠️ Nenhum aluno aprovado configurado");
      return;
    }

    // Criar duas linhas de carrossel
    // Dividir os alunos em duas linhas (pegar todos os alunos)
    const midPoint = Math.floor(config.students.length / 2);
    const leftRow = this.createStudentCarousel(
      config.students.slice(0, midPoint),
      "left"
    );
    const rightRow = this.createStudentCarousel(
      config.students.slice(midPoint),
      "right"
    );

    carousel.innerHTML = `
            <div class="relative mb-8">
                ${leftRow}
            </div>
            <div class="relative">
                ${rightRow}
            </div>
        `;
  }

  createStudentCarousel(students, direction) {
    const duplicatedStudents = [...students, ...students]; // Duplicar para animação infinita

    const studentsHTML = duplicatedStudents
      .map(
        (student) => `
            <div class="student-card">
                <div class="relative mb-4">
                    <div class="student-image gradient-${
                      student.gradient || "blue-purple"
                    }">
                        ${
                          student.image
                            ? `<img src="${student.image}?v=${this.cacheBustVersion}" alt="${student.name}" class="w-full h-full object-cover rounded-lg">`
                            : "🎓"
                        }
                    </div>
                    <div class="student-badge">MEDICINA</div>
                </div>
                <h3 class="student-name">${student.name}</h3>
                <div class="student-universities">
                    <span class="university-tag">${student.university}</span>
                    ${
                      student.secondary
                        ? `<span class="university-tag">${student.secondary}</span>`
                        : ""
                    }
                </div>
                <p class="student-status">Aprovado em MEDICINA</p>
            </div>
        `
      )
      .join("");

    return `
            <div class="students-carousel-${direction}" style="display: flex; gap: 1.5rem; animation: scroll${
      direction === "left" ? "Left" : "Right"
    } 60s linear infinite; width: fit-content;">
                ${studentsHTML}
            </div>
        `;
  }

  renderDidatica() {
    const config = this.config.didatica;
    if (!config) return;

    this.updateElement("didatica-title", config.title);
    this.updateElement("didatica-description1", config.description1);
    this.updateElement("didatica-description2", config.description2);
    this.updateElement("didatica-button", config.button?.text);

    // Renderizar banner se disponível
    const bannerContainer = document.querySelector(".didatica-image-error");
    if (bannerContainer && config.banner) {
      const fallbackDiv = bannerContainer.querySelector(
        ".image-error-fallback"
      );
      if (fallbackDiv) {
        // Criar elemento de imagem
        const img = document.createElement("img");
        img.src = config.banner;
        img.alt = "Didática Browflix";
        img.className = "absolute inset-0 w-full h-full object-cover";
        img.onerror = function () {
          fallbackDiv.innerHTML = "📐✨";
          fallbackDiv.classList.add("flex", "items-center", "justify-center");
        };
        img.onload = function () {
          fallbackDiv.innerHTML = "";
          fallbackDiv.appendChild(img);
        };
      }
    }
  }

  renderLearningObjectives() {
    const config = this.config.learningObjectives;
    if (!config) return;

    // Atualizar apenas título e botão - o HTML estático já tem o layout novo
    this.updateElement("objectives-title", config.title);
    this.updateElement("objectives-button", config.button?.text);

    // NÃO sobrescrever o container - o layout de steps está no HTML
    // O novo layout vertical está definido estaticamente no index.html
    console.log(
      "✅ Learning Objectives: usando layout estático (steps vertical)"
    );
  }

  // Funções auxiliares para vídeos
  extractVimeoId(url) {
    if (!url) return null;
    // Suporta vários formatos:
    // https://vimeo.com/123456789
    // https://vimeo.com/123456789/abc123def
    // https://vimeo.com/123456789?share=copy
    // https://vimeo.com/1137227684/9bd3505f5d?share=copy
    // Procura pelo primeiro número após vimeo.com/
    const match = url.match(/vimeo\.com\/(\d+)/);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }

  extractYoutubeId(url) {
    if (!url) return null;
    // Suporta vários formatos:
    // https://www.youtube.com/watch?v=abc123
    // https://youtu.be/abc123
    // https://www.youtube.com/embed/abc123
    // https://www.youtube.com/live/abc123 (live streams)
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/live\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  getVimeoThumbnail(videoId) {
    if (!videoId) return null;
    // Usar vumbnail.com como serviço de thumbnail do Vimeo
    // Este serviço funciona bem para a maioria dos vídeos públicos
    return `https://vumbnail.com/${videoId}.jpg`;
  }

  // Função para obter thumbnail alternativa do Vimeo via oEmbed
  async getVimeoThumbnailFromAPI(videoId) {
    if (!videoId) return null;
    try {
      const response = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`
      );
      if (response.ok) {
        const data = await response.json();
        return data.thumbnail_url || null;
      }
    } catch (error) {
      console.warn(
        "⚠️ Não foi possível obter thumbnail do Vimeo via API:",
        error
      );
    }
    return null;
  }

  getYoutubeThumbnail(videoId) {
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  getVimeoEmbedUrl(videoId) {
    if (!videoId) return null;
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }

  getYoutubeEmbedUrl(videoId, isLive = false) {
    if (!videoId) return null;
    // Para live streams, adicionar parâmetros específicos
    if (isLive) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  }

  openVideoModal(videoUrl, videoType) {
    let embedUrl = null;
    let videoId = null;

    console.log("🎬 Abrindo modal de vídeo:", { videoUrl, videoType });

    if (videoType === "vimeo") {
      videoId = this.extractVimeoId(videoUrl);
      console.log("📹 ID do Vimeo extraído:", videoId);
      if (!videoId) {
        console.error(
          "❌ Não foi possível extrair o ID do Vimeo da URL:",
          videoUrl
        );
        alert(
          "Desculpe, não foi possível carregar o vídeo. Verifique se a URL do Vimeo está correta."
        );
        return;
      }
      embedUrl = this.getVimeoEmbedUrl(videoId);
    } else if (videoType === "youtube") {
      videoId = this.extractYoutubeId(videoUrl);
      console.log("📹 ID do YouTube extraído:", videoId);
      if (!videoId) {
        console.error(
          "❌ Não foi possível extrair o ID do YouTube da URL:",
          videoUrl
        );
        alert(
          "Desculpe, não foi possível carregar o vídeo. Verifique se a URL do YouTube está correta."
        );
        return;
      }
      // Verificar se é uma live stream
      const isLive = videoUrl.includes("/live/");
      embedUrl = this.getYoutubeEmbedUrl(videoId, isLive);
    } else {
      console.error("❌ Tipo de vídeo inválido:", videoType);
      return;
    }

    if (!embedUrl) {
      console.error("❌ URL de embed inválida:", {
        videoUrl,
        videoType,
        videoId,
      });
      alert("Desculpe, não foi possível carregar o vídeo.");
      return;
    }

    console.log("🔗 URL de embed gerada:", embedUrl);

    // Criar modal
    const modal = document.createElement("div");
    modal.id = "video-modal";
    modal.className =
      "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75";
    modal.style.display = "flex";
    modal.innerHTML = `
      <div class="relative w-full max-w-4xl mx-4">
        <button id="close-video-modal" class="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors" style="z-index: 60;">
          ✕
        </button>
        <div class="relative" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
          <iframe 
            id="video-iframe"
            src="${embedUrl}" 
            class="absolute top-0 left-0 w-full h-full"
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <div id="video-error" class="absolute inset-0 bg-black text-white flex items-center justify-center flex-col" style="display: none;">
            <div class="text-center px-4">
              <p class="text-xl mb-2">Desculpe</p>
              <p class="text-base mb-4">Este vídeo não pode ser reproduzido aqui.</p>
              <a id="video-external-link" href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors mt-4">
                Assistir o vídeo no ${
                  videoType === "vimeo" ? "Vimeo" : "YouTube"
                }
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Detectar erros no iframe (limitado devido a políticas CORS, mas tentamos)
    const iframe = modal.querySelector("#video-iframe");
    const errorDiv = modal.querySelector("#video-error");
    const externalLink = modal.querySelector("#video-external-link");

    // Função para fechar o modal e fazer cleanup
    let cleanupFunctions = [];

    // Para YouTube, especialmente live streams, adicionar botão de fallback visível
    if (videoType === "youtube") {
      // Se for live stream, mostrar botão de fallback após alguns segundos
      const isLive = videoUrl.includes("/live/");
      if (isLive) {
        // Para live streams, adicionar um botão de fallback visível
        const fallbackButton = document.createElement("div");
        fallbackButton.className = "absolute bottom-4 right-4 z-10";
        fallbackButton.innerHTML = `
          <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" 
             class="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors shadow-lg">
            Abrir no YouTube
          </a>
        `;
        const videoContainer = modal.querySelector(".relative");
        videoContainer.appendChild(fallbackButton);
      }

      // Timeout para detectar se o YouTube mostra erro (como erro 153)
      const errorCheckTimeout = setTimeout(() => {
        // Tentar detectar erro do YouTube através de mensagens postMessage
        // Como não podemos acessar o conteúdo do iframe por CORS,
        // vamos adicionar um listener para mensagens do YouTube
        console.log("🔍 Verificando se há erros no player do YouTube...");
      }, 3000);

      // Listener para mensagens do YouTube (pode indicar erros)
      const messageListener = (event) => {
        // YouTube pode enviar mensagens sobre erros
        if (event.data && typeof event.data === "string") {
          try {
            const data = JSON.parse(event.data);
            if (data && data.event === "error") {
              console.error("❌ Erro detectado no player do YouTube:", data);
              clearTimeout(errorCheckTimeout);
              if (errorDiv) {
                errorDiv.style.display = "flex";
                iframe.style.display = "none";
              }
            }
          } catch (e) {
            // Não é JSON, ignorar
          }
        }
      };
      window.addEventListener("message", messageListener);

      // Adicionar cleanup
      cleanupFunctions.push(() => {
        clearTimeout(errorCheckTimeout);
        window.removeEventListener("message", messageListener);
      });
    }

    // Função para fechar modal com cleanup
    const closeModal = () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
    };

    // Tentar detectar se o iframe carregou com sucesso
    iframe.addEventListener("load", () => {
      console.log("✅ Iframe carregado com sucesso");
      // Verificar se o conteúdo do iframe está acessível (pode falhar por CORS)
      try {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        // Se chegou aqui, o iframe carregou
      } catch (e) {
        // CORS bloqueia, mas isso é normal - não significa erro
        console.log("ℹ️ Acesso ao iframe bloqueado por CORS (normal)");
      }
    });

    iframe.addEventListener("error", () => {
      console.error("❌ Erro ao carregar iframe");
      if (errorDiv) {
        errorDiv.style.display = "flex";
        iframe.style.display = "none";
      }
    });

    // Fechar modal ao clicar no botão
    const closeBtn = modal.querySelector("#close-video-modal");
    closeBtn.addEventListener("click", closeModal);

    // Fechar modal ao clicar fora do vídeo
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Fechar modal com ESC
    const handleEsc = (e) => {
      if (e.key === "Escape" && document.getElementById("video-modal")) {
        closeModal();
        document.removeEventListener("keydown", handleEsc);
      }
    };
    document.addEventListener("keydown", handleEsc);
  }

  renderPlatformFeatures() {
    const config = this.config.platformFeatures;
    if (!config) {
      console.warn("⚠️ Config platformFeatures não encontrado");
      return;
    }

    this.updateElement("features-title", config.title);
    this.updateElement("features-button", config.button?.text);

    const container = document.getElementById("features-container");
    if (!container) {
      console.error("❌ Container features-container não encontrado");
      return;
    }

    if (!config.features || !Array.isArray(config.features)) {
      console.error("❌ features não é um array válido");
      return;
    }

    const featuresHTML = config.features
      .map((feature, index) => {
        let imageContent = "";
        let dataAttributes = "";
        let cursorClass = "";

        // Verificar se tem vídeo
        if (feature.videoUrl && feature.videoType) {
          let videoId = null;
          let thumbnailUrl = null;

          // Se tiver thumbnail customizada, usar ela
          if (feature.thumbnail || feature.image) {
            thumbnailUrl = feature.thumbnail || feature.image;
          } else {
            // Caso contrário, tentar buscar automaticamente
            if (feature.videoType === "vimeo") {
              videoId = this.extractVimeoId(feature.videoUrl);
              thumbnailUrl = this.getVimeoThumbnail(videoId);
            } else if (feature.videoType === "youtube") {
              videoId = this.extractYoutubeId(feature.videoUrl);
              thumbnailUrl = this.getYoutubeThumbnail(videoId);
            }
          }

          if (thumbnailUrl) {
            // Escapar aspas na URL para uso em data attributes
            const escapedVideoUrl = feature.videoUrl
              .replace(/'/g, "&#39;")
              .replace(/"/g, "&quot;");
            const isCustomThumbnail = !!(feature.thumbnail || feature.image);
            dataAttributes = `data-video-url="${escapedVideoUrl}" data-video-type="${
              feature.videoType
            }" ${isCustomThumbnail ? 'data-custom-thumbnail="true"' : ""}`;
            cursorClass = "cursor-pointer video-thumbnail";

            // Adicionar cache bust se for imagem customizada
            const imageUrl =
              feature.thumbnail || feature.image
                ? `${thumbnailUrl}?v=${this.cacheBustVersion}`
                : thumbnailUrl;

            imageContent = `
                <img 
                  src="${imageUrl}" 
                  alt="${feature.title}" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                  ${isCustomThumbnail ? 'data-custom-thumbnail="true"' : ""}
                />
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity">
                  <div class="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all transform hover:scale-110">
                    <svg class="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              `;
          } else {
            imageContent = `<div class="text-gray-400 text-center p-4"><div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem;">400×400px</div><span class="text-sm">Vídeo não disponível</span></div>`;
          }
        } else if (feature.banner) {
          imageContent = `<img src="${feature.banner}?v=${this.cacheBustVersion}" alt="${feature.title}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<div class=\\'text-gray-400 text-center p-4\\'>400x400px<br/><span class=\\'text-sm\\'>Banner não disponível</span></div>';" />`;
        } else {
          imageContent = `<div class="text-gray-400 text-center p-4"><div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem;">400×400px</div><span class="text-sm">Banner não disponível</span></div>`;
        }

        return `
            <div class="feature-card">
                <div class="feature-image ${
                  feature.banner || (feature.videoUrl && feature.videoType)
                    ? ""
                    : "bg-gray-100"
                } ${cursorClass}" style="position: relative; ${
          feature.videoUrl && feature.videoType ? "overflow: hidden;" : ""
        }" ${dataAttributes}>
                    ${imageContent}
                </div>
                <div class="feature-content">
                    <h3 class="feature-title">${feature.title}</h3>
                </div>
            </div>
        `;
      })
      .join("");

    container.innerHTML = featuresHTML;

    // Adicionar event listeners para vídeos
    container.querySelectorAll(".video-thumbnail").forEach((element) => {
      element.addEventListener("click", () => {
        const videoUrl = element.getAttribute("data-video-url");
        const videoType = element.getAttribute("data-video-type");
        if (videoUrl && videoType) {
          // Abrir vídeo em nova aba (tanto Vimeo quanto YouTube)
          window.open(videoUrl, "_blank", "noopener,noreferrer");
        }
      });
    });

    // Tentar carregar thumbnails do Vimeo via API se a primeira tentativa falhar
    // APENAS se não for uma thumbnail customizada
    container.querySelectorAll(".video-thumbnail").forEach(async (element) => {
      const videoType = element.getAttribute("data-video-type");
      const isCustomThumbnail =
        element.hasAttribute("data-custom-thumbnail") ||
        element.querySelector("img")?.hasAttribute("data-custom-thumbnail");

      // Não tentar API se for thumbnail customizada
      if (isCustomThumbnail) {
        const img = element.querySelector("img");
        if (img) {
          // Para thumbnails customizadas, apenas mostrar erro se não carregar
          img.addEventListener(
            "error",
            function () {
              console.warn(
                "⚠️ Thumbnail customizada não pôde ser carregada:",
                img.src
              );
              this.onerror = null; // Prevenir loop
              this.parentElement.innerHTML =
                '<div class="text-gray-400 text-center p-4">400x400px<br/><span class="text-sm">Thumbnail não disponível</span></div>';
            },
            { once: true }
          ); // once: true garante que o listener só executa uma vez
        }
        return; // Não continuar com a lógica de API
      }

      if (videoType === "vimeo") {
        const videoUrl = element.getAttribute("data-video-url");
        const videoId = this.extractVimeoId(videoUrl);
        if (videoId) {
          const img = element.querySelector("img");
          if (img) {
            let errorHandled = false; // Flag para evitar múltiplas tentativas
            // Se a imagem falhar ao carregar, tentar API do Vimeo
            img.addEventListener(
              "error",
              async () => {
                if (errorHandled) return; // Evitar múltiplas execuções
                errorHandled = true;

                console.log("🔄 Tentando obter thumbnail do Vimeo via API...");
                const apiThumbnail = await this.getVimeoThumbnailFromAPI(
                  videoId
                );
                if (apiThumbnail) {
                  img.src = apiThumbnail;
                  img.onerror = null; // Remover handler de erro para evitar loop
                  console.log("✅ Thumbnail do Vimeo carregada via API");
                } else {
                  // Se a API também falhar, mostrar mensagem de erro
                  console.warn(
                    "⚠️ Não foi possível carregar thumbnail do Vimeo"
                  );
                  img.onerror = null; // Remover handler para evitar loop
                  img.parentElement.innerHTML =
                    '<div class="text-gray-400 text-center p-4">400x400px<br/><span class="text-sm">Thumbnail não disponível</span></div>';
                }
              },
              { once: true }
            ); // once: true garante que o listener só executa uma vez
          }
        }
      }
    });
  }

  renderCourses() {
    const config = this.config.courses;
    if (!config) {
      console.warn("⚠️ Config courses não encontrado");
      return;
    }

    this.updateElement("courses-title", config.title);
    this.updateElement("courses-subtitle", config.subtitle);
    this.updateElement("courses-button", config.button?.text);

    const container = document.getElementById("courses-container");
    if (!container) {
      console.error("❌ Container courses-container não encontrado");
      return;
    }

    if (!config.courses || !Array.isArray(config.courses)) {
      console.error("❌ courses não é um array válido");
      return;
    }

    const coursesHTML = config.courses
      .map((course, index) => {
        const hasVideo = !!(course.videoUrl && course.videoType);
        const escapedVideoUrl = hasVideo
          ? course.videoUrl.replace(/'/g, "&#39;").replace(/"/g, "&quot;")
          : "";
        const bannerContainerClass = hasVideo
          ? "w-full h-60 overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer course-video-banner relative"
          : "w-full h-60 overflow-hidden bg-gray-100 flex items-center justify-center";
        const bannerDataAttributes = hasVideo
          ? `data-video-url="${escapedVideoUrl}" data-video-type="${course.videoType}"`
          : "";

        return `
            <div class="course-card w-80 h-96 flex-shrink-0 overflow-hidden rounded-lg bg-white" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;">
                <div class="h-full flex flex-col">
                    <div class="${bannerContainerClass}" ${bannerDataAttributes}>
                        ${
                          course.banner
                            ? `<img src="${course.banner}?v=${this.cacheBustVersion}" alt="${course.title}" class="w-full h-full object-cover" style="width: 320px; height: 240px;" onerror="this.parentElement.innerHTML='<div class=\\'text-gray-400 text-center p-4\\'>Banner não disponível<br/><span class=\\'text-sm\\'>320x240px</span></div>';" />`
                            : `<div class="text-gray-400 text-center p-4">Banner não disponível<br/><span class="text-sm">Dimensões: 320x240px</span></div>`
                        }
                        ${
                          hasVideo
                            ? `<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity">
                                <div class="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all transform hover:scale-110">
                                  <svg class="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                </div>
                              </div>`
                            : ""
                        }
                    </div>
                    <div class="flex-1 p-4 flex flex-col justify-center text-center bg-white">
                        <h3 class="font-bold text-lg text-gray-800">${
                          course.title
                        }</h3>
                        ${
                          course.subtitle
                            ? `<p class="text-sm text-gray-600 mt-1">${course.subtitle}</p>`
                            : ""
                        }
                    </div>
                </div>
            </div>
        `;
      })
      .join("");

    container.innerHTML = coursesHTML;

    // Adicionar event listeners para banners com vídeo
    container.querySelectorAll(".course-video-banner").forEach((element) => {
      element.addEventListener("click", () => {
        const videoUrl = element.getAttribute("data-video-url");
        const videoType = element.getAttribute("data-video-type");
        if (videoUrl && videoType) {
          // Abrir vídeo em nova aba (tanto Vimeo quanto YouTube)
          window.open(videoUrl, "_blank", "noopener,noreferrer");
        }
      });
    });
  }

  renderTestimonials() {
    const config = this.config.testimonials;
    if (!config) {
      console.warn("⚠️ Config testimonials não encontrado");
      return;
    }

    this.updateElement("testimonials-title", config.title);
    this.updateElement("testimonials-subtitle", config.subtitle);
    this.updateElement("testimonials-button", config.button?.text);

    const container = document.getElementById("testimonials-container");
    if (!container) {
      console.error("❌ Container testimonials-container não encontrado");
      return;
    }

    if (!config.testimonials || !Array.isArray(config.testimonials)) {
      console.error("❌ testimonials não é um array válido");
      return;
    }

    const testimonialsHTML = config.testimonials
      .map((testimonial) => {
        // Gerar estrelas baseado no rating (pequenas)
        const stars = Array.from({ length: 5 }, (_, i) => {
          const filled = i < testimonial.rating;
          return `<svg class="w-3.5 h-3.5 ${
            filled ? "text-yellow-400" : "text-gray-300"
          }" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>`;
        }).join("");

        // Avatar ou placeholder
        const avatarContent = testimonial.avatar
          ? `<img src="${testimonial.avatar}?v=${this.cacheBustVersion}" alt="${testimonial.name}" class="w-20 h-20 rounded-full object-cover" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'80\\' height=\\'80\\'%3E%3Crect width=\\'80\\' height=\\'80\\' fill=\\'%23e5e7eb\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' fill=\\'%239ca3af\\' font-size=\\'12\\'%3E80x80px%3C/text%3E%3C/svg%3E';" />`
          : `<div class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-xs text-gray-500 font-semibold">80x80px</div>
                  <div class="text-xs text-gray-400">Avatar</div>
                        </div>
              </div>`;

        return `
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-start space-x-4">
                <!-- Avatar -->
                <div class="flex-shrink-0">
                  ${avatarContent}
                    </div>
                
                <!-- Conteúdo -->
                <div class="flex-1 min-w-0">
                  <!-- Nome -->
                  <h3 class="text-xl font-semibold text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">${
                    testimonial.name || "Aluno"
                  }</h3>
                  
                  <!-- Estrelas -->
                  <div class="flex items-center space-x-0.5 mb-3">
                    ${stars}
                            </div>
                  
                  <!-- Comentário -->
                  <p class="text-gray-700 text-sm leading-relaxed">
                    "${testimonial.comment || "Sem comentário disponível."}"
                  </p>
                    </div>
                </div>
            </div>
          `;
      })
      .join("");

    container.innerHTML = testimonialsHTML;
  }

  renderBonus() {
    const config = this.config.bonus;
    if (!config) {
      console.warn("⚠️ Config bonus não encontrado");
      return;
    }

    this.updateElement("bonus-title", config.title);
    this.updateElement("bonus-footer", config.footerText);
    this.updateElement("bonus-button", config.button?.text);

    const container = document.getElementById("bonus-container");
    if (!container) {
      console.error("❌ Container bonus-container não encontrado");
      return;
    }

    if (!config.bonuses || !Array.isArray(config.bonuses)) {
      console.error("❌ bonuses não é um array válido");
      return;
    }

    const bonusHTML = config.bonuses
      .map(
        (bonus) => `
            <div class="bonus-card">
                <div class="bonus-image gradient-${
                  bonus.gradient || "blue-purple"
                }">
                    ${bonus.icon}
                </div>
                <div class="bonus-content">
                    <h3 class="bonus-title">${bonus.title}</h3>
                    <p class="bonus-description">${bonus.description}</p>
                    <p class="bonus-price">Por: ${bonus.price}</p>
                </div>
            </div>
        `
      )
      .join("");

    container.innerHTML = bonusHTML;
  }

  renderContact() {
    const config = this.config.contact;
    if (!config) return;

    this.updateElement("contact-title", config.title);
    this.updateElement("contact-subtitle", config.subtitle);
    this.updateElement("contact-button", config.form?.button?.text);
    this.updateElement("contact-disclaimer", config.form?.disclaimer);

    const container = document.getElementById("contact-fields");
    if (!container || !config.form?.fields) return;

    const fieldsHTML = config.form.fields
      .map(
        (field) => `
            <div>
                <input
                    type="${field.type}"
                    name="${field.name}"
                    placeholder="${field.placeholder}"
                    class="form-field"
                    ${field.required ? "required" : ""}
                />
            </div>
        `
      )
      .join("");

    container.innerHTML = fieldsHTML;
  }

  renderPricing() {
    const config = this.config.pricing;
    if (!config) {
      console.warn("⚠️ Config pricing não encontrado");
      return;
    }

    if (!config.plans || !Array.isArray(config.plans)) {
      console.error("❌ plans não é um array válido");
      return;
    }

    const container = document.getElementById("pricing-container");
    if (!container) {
      console.error("❌ Container pricing-container não encontrado");
      return;
    }

    const pricingHTML = config.plans
      .map(
        (plan) => `
            <div class="pricing-card ${plan.highlighted ? "highlighted" : ""} ${
          plan.isCompact ? "pricing-card-compact" : ""
        }">
                ${
                  plan.badge
                    ? `<div class="pricing-badge">${plan.badge}</div>`
                    : ""
                }
                
                <div class="text-center ${plan.isCompact ? "mb-4" : "mb-8"} ${
          plan.highlighted ? "mt-8" : ""
        }">
                    <div class="pricing-icon" ${
                      !plan.highlighted && plan.color
                        ? `style="background: ${
                            plan.color === "blue"
                              ? "var(--color-primary)"
                              : plan.color === "green"
                              ? "#10b981"
                              : plan.color === "purple"
                              ? "#8b5cf6"
                              : "#2563eb"
                          }; color: var(--text-white);"`
                        : ""
                    }>${plan.icon}</div>
                    <h3 class="pricing-title ${
                      plan.isCompact ? "text-lg" : ""
                    }">${plan.name}</h3>
                    <p class="pricing-subtitle ${
                      plan.isCompact ? "text-sm" : ""
                    }">${plan.subtitle}</p>
                </div>

                <div class="pricing-features ${
                  plan.isCompact ? "space-y-2" : ""
                }">
                    ${plan.features
                      .map(
                        (feature) => `
                        <div class="pricing-feature">
                            <svg class="pricing-feature-icon ${
                              plan.highlighted
                                ? "text-green-400"
                                : "text-green-500"
                            } ${
                          plan.isCompact ? "w-4 h-4" : ""
                        }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
                            </svg>
                            <span class="pricing-feature-text ${
                              plan.isCompact ? "text-xs" : ""
                            }">${feature}</span>
                        </div>
                    `
                      )
                      .join("")}
                    
                    ${plan.bonuses
                      .map(
                        (bonus) => `
                        <div class="pricing-bonus">
                            <div class="pricing-bonus-icon ${
                              plan.isCompact ? "text-sm" : ""
                            }">🎁</div>
                            <span class="pricing-feature-text ${
                              plan.isCompact ? "text-xs" : ""
                            }">${bonus}</span>
                        </div>
                    `
                      )
                      .join("")}
                </div>

                <div class="pricing-price">
                    ${
                      plan.originalPrice
                        ? `<p class="pricing-original ${
                            plan.highlighted ? "" : "pricing-original-light"
                          }">${plan.originalPrice}</p>`
                        : ""
                    }
                    <div class="pricing-amount">${plan.price}</div>
                    <p class="pricing-installments">${plan.installments}</p>
                </div>

                <a href="${
                  plan.button?.url || plan.button?.checkoutUrl || "#planos"
                }" 
                   ${
                     plan.button?.url || plan.button?.checkoutUrl
                       ? 'target="_blank" rel="noopener noreferrer"'
                       : ""
                   }
                   class="pricing-button ${plan.button?.style || "outline"}">
                    ${plan.button?.text}
                </a>
            </div>
        `
      )
      .join("");

    container.innerHTML = pricingHTML;
  }

  renderMiniCourses() {
    const config = this.config.miniCourses;
    if (!config) return;

    this.updateElement("mini-courses-title", config.title);
    this.updateElement("mini-courses-subtitle", config.subtitle);

    const container = document.getElementById("mini-courses-container");
    if (!container || !config.courses) return;

    const coursesHTML = config.courses
      .map(
        (course) => `
          <div class="mini-course-card">
            <div class="mini-course-icon gradient-${
              course.gradient || "blue-purple"
            }">
              ${course.icon}
            </div>
            <h4 class="mini-course-title">${course.title}</h4>
            <p class="mini-course-price">${course.price}</p>
          </div>
        `
      )
      .join("");

    container.innerHTML = coursesHTML;
  }

  renderPedroAssaad() {
    const config = this.config.pedroAssaad;
    if (!config) return;

    this.updateElement("pedro-title", config.title);

    const container = document.getElementById("pedro-description");
    if (!container || !config.description) return;

    const descriptionHTML = config.description
      .map(
        (paragraph) => `
            <p style="color: #ffffff">${paragraph}</p>
        `
      )
      .join("");

    container.innerHTML = descriptionHTML;
  }

  renderFooter() {
    const config = this.config.footer;
    if (!config) return;

    this.updateElement("footer-company", config.company?.name);
    this.updateElement("footer-description", config.company?.description);
    this.updateElement("footer-copyright", config.copyright);

    // Renderizar links de cursos
    const coursesContainer = document.getElementById("footer-courses");
    if (coursesContainer && config.links?.cursos) {
      coursesContainer.innerHTML = config.links.cursos
        .map(
          (link) => `
                <li><a href="#" class="hover:text-blue-300 transition-colors">${link}</a></li>
            `
        )
        .join("");
    }

    // Renderizar links sobre
    const aboutContainer = document.getElementById("footer-about");
    if (aboutContainer && config.links?.sobre) {
      aboutContainer.innerHTML = config.links.sobre
        .map(
          (link) => `
                <li><a href="#" class="hover:text-blue-300 transition-colors">${link}</a></li>
            `
        )
        .join("");
    }

    // Renderizar links de suporte
    const supportContainer = document.getElementById("footer-support");
    if (supportContainer && config.links?.suporte) {
      supportContainer.innerHTML = config.links.suporte
        .map(
          (link) => `
                <li><a href="#" class="hover:text-blue-300 transition-colors">${link}</a></li>
            `
        )
        .join("");
    }

    // Renderizar redes sociais
    const socialContainer = document.getElementById("footer-social");
    if (socialContainer && config.social) {
      socialContainer.innerHTML = `
                <a href="${config.social.facebook}" class="h-5 w-5 hover:text-blue-300 cursor-pointer transition-colors">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                </a>
                <a href="${config.social.instagram}" class="h-5 w-5 hover:text-blue-300 cursor-pointer transition-colors">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2"/>
                        <circle cx="12" cy="12" r="3.5" stroke-width="2"/>
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                    </svg>
                </a>
                <a href="${config.social.linkedin}" class="h-5 w-5 hover:text-blue-300 cursor-pointer transition-colors">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke-width="2"/>
                        <rect x="2" y="9" width="4" height="12" fill="currentColor"/>
                        <circle cx="4" cy="4" r="2" fill="currentColor"/>
                    </svg>
                </a>
                <a href="${config.social.youtube}" class="h-5 w-5 hover:text-blue-300 cursor-pointer transition-colors">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
                    </svg>
                </a>
            `;
    }
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  initFormHandling() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit(form);
    });
  }

  handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validar dados
    if (!this.validateForm(data)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Preparar mensagem para WhatsApp
    const whatsappNumber = this.config?.whatsapp?.number || "5511987654321";
    const message = this.prepareWhatsAppMessage(data);

    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }

  validateForm(data) {
    const requiredFields = ["nome", "email", "telefone", "cidade", "profissao"];
    return requiredFields.every(
      (field) => data[field] && data[field].trim() !== ""
    );
  }

  prepareWhatsAppMessage(data) {
    const config = this.config?.whatsapp;
    const baseMessage =
      config?.message ||
      "Olá! Gostaria de saber mais sobre o Intensivo Medicina ENEM da Plataforma Browflix.";

    return `${baseMessage}

📋 *Dados do Interessado:*
• Nome: ${data.nome}
• E-mail: ${data.email}
• Telefone: ${data.telefone}
• Cidade: ${data.cidade}
• Profissão/Área: ${data.profissao}

Gostaria de receber mais informações sobre os planos e valores.`;
  }

  initTestimonialCarousel() {
    // Implementar carrossel de depoimentos se necessário
    const prevBtn = document.getElementById("testimonials-prev");
    const nextBtn = document.getElementById("testimonials-next");

    if (prevBtn && nextBtn) {
      // Implementar lógica do carrossel aqui
      console.log("Carrossel de depoimentos inicializado");
    }
  }

  initResponsiveHandling() {
    // Listener para redimensionamento da janela (se necessário no futuro)
    window.addEventListener("resize", () => {
      // Layout de objectives agora é estático e responsivo por CSS
      console.log("✅ Janela redimensionada");
    });
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  window.browflixLanding = new BrowflixLanding();
});

// Exportar para uso global se necessário
window.BrowflixLanding = BrowflixLanding;
