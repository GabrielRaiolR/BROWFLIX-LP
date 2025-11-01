/**
 * Plataforma Browflix - Landing Page Estática
 * Sistema de carregamento dinâmico de conteúdo
 */

class BrowflixLanding {
  constructor() {
    this.config = null;
    this.init();
  }

  async init() {
    try {
      // Carregar configuração
      await this.loadConfig();

      // Aplicar configuração na página
      this.applyConfig();

      // Inicializar funcionalidades
      this.initSmoothScroll();
      this.initFormHandling();
      this.initTestimonialCarousel();
      this.initResponsiveHandling();

      console.log("✅ Plataforma Browflix carregada com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao carregar a página:", error);
      // Forçar uso da configuração padrão em caso de erro
      this.config = this.getDefaultConfig();
      this.applyConfig();
    }
  }

  async loadConfig() {
    try {
      // Detecta o caminho base automaticamente
      const basePath =
        document
          .querySelector('script[src*="main.js"]')
          ?.src.split("/assets/")[0] || "";
      // Adiciona cache bust para forçar reload
      const cacheBust = `?v=${Date.now()}`;
      const configPath = basePath
        ? `${basePath}/config/config.json${cacheBust}`
        : `./config/config.json${cacheBust}`;

      console.log("🔍 Tentando carregar config de:", configPath);
      const response = await fetch(configPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.config = await response.json();
      console.log("✅ Configuração carregada com sucesso:", this.config);
    } catch (error) {
      console.error("❌ Erro ao carregar configuração:", error);
      console.log("🔄 Usando configuração padrão...");
      // Fallback para configuração padrão
      this.config = this.getDefaultConfig();
    }
  }

  getDefaultConfig() {
    return {
      site: {
        title: "Plataforma Browflix - Intensivo Medicina ENEM",
        description:
          "Didática mágica, resultados garantidos. A única plataforma do Brasil que GARANTE seu aprendizado.",
        logo: {
          text: "PRÉ-ENEM",
          subtitle: "MATEMÁTICA BROW",
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
          url: "#contato",
        },
      },
      approvedStudents: {
        title:
          'Seja um <span class="text-accent">aprovado</span><br />em Medicina',
        description:
          'Nos próximos meses você vai ser um dos primeiros a entrar na faculdade de <span class="text-accent font-semibold">Medicina</span>, sem precisar ficar ansioso com notas de corte e classificações.',
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
        title: "Didática mágica,<br />resultados<br />garantidos!",
        description1:
          "O maior diferencial da Plataforma Browflix é a didática especial e mágica do professor Pedro Assaad no caso real.",
        description2:
          "O aluno tem a garantia total de que vai conseguir aprender e absorver as oportunidades, de modo que consegue aplicar na prova do ENEM de forma eficaz desde que o aluno clique nas aulas e se assista.",
        banner: "",
        button: {
          text: "Quero me matricular",
          url: "#planos",
        },
      },
      learningObjectives: {
        title:
          'O que você vai aprender no<br /><span class="text-blue-600">Intensivo da Plataforma Browflix?</span>',
        objectives: [
          {
            number: 1,
            text: "Dominar todas as<br />matérias do ENEM",
          },
          {
            number: 2,
            text: "Resolver questões complexas<br />com facilidade e rapidez",
          },
          {
            number: 3,
            text: "Gestão do tempo e produtividade<br />com técnicas específicas para<br />preparação para o ENEM",
          },
          {
            number: 4,
            text: "Estratégias de estudo<br />validadas por centenas de<br />aprovados em Medicina",
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
          },
          {
            icon: "🎬",
            title: "Aulas ultradidáticas com qualidade de cinema",
            gradient: "from-pink-500 to-red-500",
          },
          {
            icon: "📱",
            title:
              "Aplicativo que permite você baixar as aulas para assistir offline sem gastar seu pacote de dados",
            gradient: "from-cyan-500 to-blue-500",
          },
          {
            icon: "📝",
            title:
              "Listas de questões selecionadas e resolvidas com uma didática impecável",
            gradient: "from-green-500 to-teal-500",
          },
          {
            icon: "📡",
            title: "Aulas Ao Vivo até o ENEM 2025",
            gradient: "from-pink-500 to-yellow-500",
          },
          {
            icon: "🎓",
            title: "Monitorias e tutorias com aprovados em Medicina",
            gradient: "from-teal-500 to-purple-500",
          },
        ],
        button: {
          text: "Quero ter acesso a tudo isso",
          url: "#contato",
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
          },
          {
            title: "Matemática Básica para o ENEM",
            subtitle: "The last of Brow",
            banner: "assets/images/banners/Matematica Basica Para o ENEM.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "Funções e Financeira",
            subtitle: "Matemática Financeira",
            banner: "assets/images/banners/Funções e Financeira.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "Análise Combinatória",
            subtitle: "e Probabilidade",
            banner:
              "assets/images/banners/Análise Combinatória e Probabilidade.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "Geometria Plana",
            subtitle: "e Espacial",
            banner: "assets/images/banners/Geometria Plana e Espacial.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "Curso de Revisão",
            subtitle: "Ringue do Brow",
            banner: "assets/images/banners/Curso de Revisão.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "Curso nas Férias do Brow",
            subtitle: "Curtindo o Verão",
            banner: "assets/images/banners/Curso de Ferias.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "Projeto Iniciante",
            subtitle: "Mentoria Guerra",
            banner: "assets/images/banners/Projeto Iniciante.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "Projeto Elite",
            subtitle: "Esquedrão especial do brow",
            banner: "assets/images/banners/Projeto Elite.png", // Adicione aqui o caminho do banner (320x240px)
          },
          {
            title: "H.E.C.B",
            subtitle: "(Habilidades ENEM com o Brow)",
            banner: "assets/images/banners/HECB.png", // Adicione aqui o caminho do banner (320x240px)
          },
        ],
        button: {
          text: "Quero ter acesso aos cursos agora",
          url: "#contato",
        },
      },
      testimonials: {
        title:
          'Veja <span class="text-green-500">o que dizem</span> os alunos<br />da Plataforma Browflix.',
        subtitle:
          'A <span class="text-blue-600">opinião</span> de quem já está vivendo <span class="text-blue-600">o que você ainda sonha</span>.',
        testimonials: [
          {
            icon: "🎓",
            gradient: "from-blue-500 to-purple-600",
            tags: ["960 na redação do ENEM", "Mudança de mentalidade"],
          },
          {
            icon: "🎓",
            gradient: "from-pink-500 to-red-500",
            tags: ["960 na redação do ENEM", "39/45 em Matemática"],
          },
          {
            icon: "🎓",
            gradient: "from-cyan-500 to-blue-500",
            tags: [
              "+150 acertos em menos de 1 ano",
              "Aprendi a gostar das matérias",
            ],
          },
        ],
        button: {
          text: "Quero ser o próximo aprovado!",
          url: "#contato",
        },
      },
      bonus: {
        title:
          'Inscreva-se nessa turma e<br /><span class="text-green-500">garanta</span><br /><span class="text-green-500">mais 3 presentes exclusivos</span>',
        bonuses: [
          {
            title: "Bônus 02 - 3 melhores de correção de redação",
            description:
              "Aprenda com os melhores exemplos de redação corrigidos por especialistas. Material exclusivo que vai elevar seu nível de escrita para o ENEM.",
            icon: "✍️",
            gradient: "from-blue-500 to-purple-600",
            price: "GRÁTIS",
          },
          {
            title: "Bônus 03 - Gramática para Redação",
            description:
              "Domine a gramática essencial para uma redação nota 1000. Conteúdo focado nas principais dificuldades dos estudantes.",
            icon: "📖",
            gradient: "from-pink-500 to-red-500",
            price: "GRÁTIS",
          },
          {
            title: "Bônus 04 - Masterclass: Como estudar com Mira Sargent",
            description:
              "Metodologia exclusiva de uma das maiores especialistas em técnicas de estudo do Brasil. Transforme sua forma de aprender.",
            icon: "🎯",
            gradient: "from-cyan-500 to-blue-500",
            price: "GRÁTIS",
          },
        ],
        footerText:
          "Tudo isso <strong>grátis</strong> para você,<br />porque é um <strong>presente!</strong>",
        button: {
          text: "Quero garantir meus bônus agora",
          url: "#contato",
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
              name: "profissao",
              placeholder: "Profissão/Área de atuação",
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
            name: "Plataforma Browflix",
            subtitle: "Acesso até o ENEM 2026",
            icon: "PB",
            color: "blue",
            price: "R$ 3.000,00",
            installments: "ou 12x de R$ 299,41",
            features: [
              "Curso de Matemática",
              "Curso de Física",
              "Curso de Biologia",
              "Curso de Química",
              "Curso de Humanas",
              "Curso de Redação",
              "Curso de História",
              "Curso de Sociologia",
              "Curso de Filosofia",
              "Curso de Geografia",
            ],
            bonuses: [
              "Garantia 7 dias",
              "Concentração e Foco",
              "Blindagem Emocional",
              "Rotina de Campeão",
              "4 Créditos de correção de redação por mês até o ENEM 2025",
            ],
            button: {
              text: "Quero me matricular agora",
              style: "outline",
            },
          },
          {
            name: "INTENSIVO Medicina ENEM",
            subtitle: "PLATAFORMA BROWFLIX",
            icon: "IM",
            color: "blue",
            highlighted: true,
            badge: "INTENSIVO MEDICINA ENEM 2025",
            originalPrice: "De R$ 3.000,00 por:",
            price: "12x R$ 119,76",
            installments: "ou R$ 1200 à vista",
            features: [
              "Curso de Matemática",
              "Curso de Física",
              "Curso de Biologia",
              "Curso de Química",
              "Curso de Humanas",
              "Curso de Redação",
              "Curso de História",
              "Curso de Sociologia",
              "Curso de Filosofia",
              "Curso de Geografia",
            ],
            bonuses: [
              "Garantia 7 dias",
              "Concentração e Foco",
              "Blindagem Emocional",
              "Rotina de Campeão",
              "4 Créditos de correção de redação por mês até o ENEM 2025",
              "Material Didático",
              "Mapa de progresso competitivo",
              "Plataforma de Redação",
              "Masterclass: Como estudar em Alta Performance",
              "Curso de Redação com Milla Borges",
              "Curso de Gramática para Redação",
            ],
            button: {
              text: "Quero me matricular agora",
              style: "primary",
            },
          },
          {
            name: "Plataforma Browflix PREMIUM",
            subtitle: "Acesso até o ENEM 2027",
            icon: "PP",
            color: "blue",
            price: "R$ 4.500,00",
            installments: "ou 12x de R$ 449,11",
            features: [
              "Curso de Matemática",
              "Curso de Física",
              "Curso de Biologia",
              "Curso de Química",
              "Curso de Humanas",
              "Curso de Redação",
              "Curso de História",
              "Curso de Sociologia",
              "Curso de Filosofia",
              "Curso de Geografia",
            ],
            bonuses: [
              "Garantia 7 dias",
              "Concentração e Foco",
              "Blindagem Emocional",
              "Rotina de Campeão",
              "6 Créditos de correção de redação por mês até o ENEM 2027",
              "Material Didático Premium",
              "Mentorias individuais",
            ],
            button: {
              text: "Quero me matricular agora",
              style: "outline",
            },
          },
        ],
      },
      miniCourses: {
        title: "Cursos Complementares",
        subtitle: "Expanda ainda mais seus conhecimentos",
        courses: [
          {
            title: "Curso Básico de Matemática",
            icon: "📊",
            price: "R$ 199,00",
            gradient: "blue-dark",
          },
          {
            title: "Física para Iniciantes",
            icon: "⚛️",
            price: "R$ 179,00",
            gradient: "blue-medium",
          },
          {
            title: "Química Orgânica",
            icon: "🧪",
            price: "R$ 189,00",
            gradient: "blue-light",
          },
          {
            title: "Biologia Celular",
            icon: "🦠",
            price: "R$ 169,00",
            gradient: "blue-dark",
          },
          {
            title: "Redação Nota 1000",
            icon: "✍️",
            price: "R$ 249,00",
            gradient: "yellow",
          },
          {
            title: "História do Brasil",
            icon: "📚",
            price: "R$ 159,00",
            gradient: "blue-medium",
          },
          {
            title: "Geografia Mundial",
            icon: "🌍",
            price: "R$ 159,00",
            gradient: "blue-light",
          },
          {
            title: "Inglês Instrumental",
            icon: "🗣️",
            price: "R$ 199,00",
            gradient: "yellow",
          },
        ],
      },
      pedroAssaad: {
        title:
          "Quem é<br /><span style=\"color:rgb(243, 201, 62)\">Victor'Brow'?</span>",
        description: [
          "<strong>Victor'Brow'</strong> é Diretor e Fundador do curso Matemática Brow, empresa que já aprovou mais de <strong>5.000 alunos</strong> em universidades públicas e privadas.",
          "Especialista em <strong>DIDÁTICA MÁGICA</strong> há mais de 15 anos e desenvolvedor do método que já transformou a vida de milhares de estudantes em todo o Brasil.",
          "Autor de diversos livros sobre técnicas de estudo e metodologias de ensino, Brow é reconhecido nacionalmente por sua capacidade única de simplificar conteúdos complexos.",
          "<strong>Missão:</strong> Democratizar o acesso ao ensino superior de qualidade através de uma didática revolucionária que garante resultados.",
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

    // Aplicar outras seções
    this.renderApprovedStudents();
    this.renderDidatica();
    this.renderLearningObjectives();
    this.renderPlatformFeatures();
    this.renderCourses();
    this.renderTestimonials();
    this.renderBonus();
    this.renderContact();
    this.renderPricing();
    this.renderMiniCourses();
    this.renderPedroAssaad();
    this.renderFooter();
  }

  updateElement(id, content) {
    const element = document.getElementById(id);
    if (element && content) {
      element.innerHTML = content;
    }
  }

  renderApprovedStudents() {
    const config = this.config.approvedStudents;
    if (!config) return;

    this.updateElement("students-title", config.title);
    this.updateElement("students-description", config.description);
    this.updateElement("students-subtitle", config.subtitle);

    const carousel = document.getElementById("students-carousel");
    if (!carousel || !config.students) return;

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
                            ? `<img src="${student.image}" alt="${student.name}" class="w-full h-full object-cover rounded-lg">`
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

  renderPlatformFeatures() {
    const config = this.config.platformFeatures;
    if (!config) return;

    this.updateElement("features-title", config.title);
    this.updateElement("features-button", config.button?.text);

    const container = document.getElementById("features-container");
    if (!container || !config.features) return;

    const featuresHTML = config.features
      .map(
        (feature) => `
            <div class="feature-card">
                <div class="feature-image ${
                  feature.banner ? "" : "bg-gray-100"
                }">
                    ${
                      feature.banner
                        ? `<img src="${feature.banner}" alt="${feature.title}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<div class=\\'text-gray-400 text-center p-4\\'>400x400px<br/><span class=\\'text-sm\\'>Banner não disponível</span></div>';" />`
                        : `<div class="text-gray-400 text-center p-4"><div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem;">400×400px</div><span class="text-sm">Banner não disponível</span></div>`
                    }
                </div>
                <div class="feature-content">
                    <h3 class="feature-title">${feature.title}</h3>
                </div>
            </div>
        `
      )
      .join("");

    container.innerHTML = featuresHTML;
  }

  renderCourses() {
    const config = this.config.courses;
    if (!config) return;

    this.updateElement("courses-title", config.title);
    this.updateElement("courses-subtitle", config.subtitle);
    this.updateElement("courses-button", config.button?.text);

    const container = document.getElementById("courses-container");
    if (!container || !config.courses) return;

    const coursesHTML = config.courses
      .map(
        (course, index) => `
            <div class="course-card w-80 h-96 flex-shrink-0 overflow-hidden rounded-lg bg-white" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;">
                <div class="h-full flex flex-col">
                    <div class="w-full h-60 overflow-hidden bg-gray-100 flex items-center justify-center">
                        ${
                          course.banner
                            ? `<img src="${course.banner}" alt="${course.title}" class="w-full h-full object-cover" style="width: 320px; height: 240px;" onerror="this.parentElement.innerHTML='<div class=\\'text-gray-400 text-center p-4\\'>Banner não disponível<br/><span class=\\'text-sm\\'>320x240px</span></div>';" />`
                            : `<div class="text-gray-400 text-center p-4">Banner não disponível<br/><span class="text-sm">Dimensões: 320x240px</span></div>`
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
        `
      )
      .join("");

    container.innerHTML = coursesHTML;
  }

  renderTestimonials() {
    const config = this.config.testimonials;
    if (!config) return;

    this.updateElement("testimonials-title", config.title);
    this.updateElement("testimonials-subtitle", config.subtitle);
    this.updateElement("testimonials-button", config.button?.text);

    const container = document.getElementById("testimonials-container");
    if (!container || !config.testimonials) return;

    const testimonialsHTML = config.testimonials
      .map(
        (testimonial) => `
            <div class="testimonial-card">
                <div class="testimonial-image gradient-${
                  testimonial.gradient || "blue-purple"
                }">
                    ${testimonial.icon}
                    <div class="testimonial-overlay">
                        <div class="testimonial-play">
                            <svg class="w-8 h-8 text-gray-800 fill-current" viewBox="0 0 24 24">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>
                    </div>
                    <div class="testimonial-tags">
                        ${testimonial.tags
                          .map(
                            (tag) => `
                            <div class="testimonial-tag ${
                              tag.includes("960")
                                ? "bg-blue-600 text-white"
                                : "bg-orange-500 text-white"
                            }">
                                ${tag}
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `
      )
      .join("");

    container.innerHTML = testimonialsHTML;
  }

  renderBonus() {
    const config = this.config.bonus;
    if (!config) return;

    this.updateElement("bonus-title", config.title);
    this.updateElement("bonus-footer", config.footerText);
    this.updateElement("bonus-button", config.button?.text);

    const container = document.getElementById("bonus-container");
    if (!container || !config.bonuses) return;

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
    if (!config || !config.plans) return;

    const container = document.getElementById("pricing-container");
    if (!container) return;

    const pricingHTML = config.plans
      .map(
        (plan) => `
            <div class="pricing-card id ${
              plan.highlighted ? "highlighted" : ""
            }">
                ${
                  plan.badge
                    ? `<div class="pricing-badge">${plan.badge}</div>`
                    : ""
                }
                
                <div class="text-center mb-8 ${plan.highlighted ? "mt-8" : ""}">
                    <div class="pricing-icon">${plan.icon}</div>
                    <h3 class="pricing-title">${plan.name}</h3>
                    <p class="pricing-subtitle">${plan.subtitle}</p>
                </div>

                <div class="pricing-features">
                    ${plan.features
                      .map(
                        (feature) => `
                        <div class="pricing-feature">
                            <svg class="pricing-feature-icon ${
                              plan.highlighted
                                ? "text-green-400"
                                : "text-green-500"
                            }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
                            </svg>
                            <span class="pricing-feature-text">${feature}</span>
                        </div>
                    `
                      )
                      .join("")}
                    
                    ${plan.bonuses
                      .map(
                        (bonus) => `
                        <div class="pricing-bonus">
                            <div class="pricing-bonus-icon">🎁</div>
                            <span class="pricing-feature-text">${bonus}</span>
                        </div>
                    `
                      )
                      .join("")}
                </div>

                <div class="pricing-price">
                    ${
                      plan.originalPrice
                        ? `<p class="pricing-original">${plan.originalPrice}</p>`
                        : ""
                    }
                    <div class="pricing-amount">${plan.price}</div>
                    <p class="pricing-installments">${plan.installments}</p>
                </div>

                <a href="#planos" class="pricing-button ${
                  plan.button?.style || "outline"
                }">
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
  new BrowflixLanding();
});

// Exportar para uso global se necessário
window.BrowflixLanding = BrowflixLanding;
