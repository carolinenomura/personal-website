"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const translations = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", info: "Contact" },
    hero: {
      title: (
        <>
          Hey, I’m <span className="font-medium">Caroline</span>, Computer Science undergraduate developing software and data-driven solutions.
        </>
      ),
      p1: "I am a software developer and data enthusiast passionate about building technology that makes an impact. With a strong foundation in both software engineering and data science, I specialize in creating scalable web applications and transforming complex datasets into actionable insights.",
      p2: "Currently, I work on the institutional web infrastructure as an Extension Scholar at UFRJ and participate in machine learning and data analysis challenges with the student-led organization UFRJ Analytica. Whether I am architecting interactive dashboards or developing AI-driven solutions, my focus is always on delivering efficient and user-centric results."
    },
    experience: {
      title: "Experience",
      resumeBtn: "View full resume",
      items: [
        {
          date: "Aug 2026 — Present",
          role: "Extension Scholar | UFRJ (PR-5)",
          desc: "Develop and maintain the infrastructure for institutional web portals. Provide technological support and ensure the stability of platforms for major academic events, such as SIAC.",
          tags: ["WordPress", "HTML", "CSS", "JavaScript", "MySQL", "PHP"]
        },
        {
          date: "Sep 2025 — Dec 2025",
          role: "Competitive Team Member | UFRJ Analytica - Data League",
          desc: "Participate in practical projects, hackathons, and competitions focused on Data Science, Analytics, Machine Learning, and AI. Apply exploratory data analysis (EDA) and data wrangling techniques to clean and process complex datasets using Python",
          tags: ["Python", "SQLite", "Google Cloud", "API"]
        },
        {
          date: "Sep 2025 — Dec 2025",
          role: "IT Intern | Super Centro Carioca de Saúde",
          desc: "Developed Vue.js interfaces for the institutional healthcare system. Built KPI dashboards integrated with PostgreSQL to support operational decisions and data governance.",
          tags: ["Vue.js", "PostgreSQL", "JavaScript", "Python"]
        },
        {
          date: "Jan 2023 — Jun 2023",
          role: "Extensionist |  UFRRJ (Census Project)",
          desc: "Processed and cleaned health monitoring datasets using Python (Pandas) and REDCap. Automated data transfers to MySQL, optimizing research workflows.",
          tags: ["Python", "MySQL", "REDCap"]
        }
      ]
    },
    projects: {
      title: "Projects",
      moreBtn: "View more",
      items: [
        {
          title: "Rio de Janeiro Urban Analytics Dashboard",
          desc: "Interactive urban metrics and mobility dashboard utilizing public datasets from Data.Rio. Built data pipelines with Python, implemented relational storage in PostgreSQL, and integrated with Power BI for visualization.",
          tags: ["Python", "PostgreSQL", "Power BI", "React", "TypeScript"]
        },
        {
          title: "AI-Powered Movie Recommender",
          desc: "Recommendation engine leveraging Graph Theory and AI. Constructs similarity networks based on TMDB database API metadata and integrates with Google Gemini to translate mathematical logic into a modern web interface.",
          tags: ["TypeScript", "React", "AI", "Graphs", "API"]
        }
      ]
    },
    info: {
      title: "Contact",
      desc: (
        <>
          You can reach me via email at <span className="underline underline-offset-4 hover:text-foreground transition-colors">carolineynomura@gmail.com</span> or see my code on <a href="https://github.com/carolinenomura" target="_blank" className="underline underline-offset-4 hover:text-foreground transition-colors">Github</a>.
        </>
      ),
      footer: "Built with Next.js and shadcn/ui © 2026"
    }
  },
  pt: {
    nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", info: "Contato" },
    hero: {
      title: (
        <>
          Olá, sou a <span className="font-medium">Caroline</span>, graduanda em Ciência da Computação desenvolvendo softwares e soluções orientadas a dados.
        </>
      ),
      p1: "Sou uma desenvolvedora de software apaixonada por construir tecnologia que gera impacto. Com uma base sólida tanto em engenharia de software quanto em ciência de dados, meu foco é criar aplicações web escaláveis e transformar conjuntos de dados complexos em insights acionáveis.",
      p2: "Atualmente, atuo na infraestrutura web institucional como Bolsista Extensionista pela COPPETEC na UFRJ e participo de desafios de machine learning e análise de dados na liga acadêmica UFRJ Analytica. Seja arquitetando dashboards interativos ou desenvolvendo soluções baseadas em Inteligência Artificial, meu objetivo é sempre entregar resultados eficientes e centrados no usuário."
    },
    experience: {
      title: "Experiência",
      resumeBtn: "Ver currículo completo",
      items: [
        {
          date: "Ago 2026 — Presente",
          role: "Bolsista Extensionista | UFRJ (PR-5)",
          desc: "Desenvolvimento e manutenção da infraestrutura de portais web institucionais. Suporte tecnológico e garantia de estabilidade para grandes eventos acadêmicos, como a SIAC.",
          tags: ["WordPress", "HTML", "CSS", "JavaScript", "MySQL","PHP"]
        },
        {
          date: "Mar 2024 — Mai 2024",
          role: "Membro de Competição | UFRJ Analytica - Liga de Dados",
          desc: "Atuação em projetos práticos e hackathons com foco em Ciência de Dados, Analytics, Machine Learning e IA. Aplicação de análise exploratória (EDA) e tratamento de datasets complexos utilizando Python.",
          tags: ["Python", "SQLite", "Google Cloud", "API"]
        },
        {
          date: "Set 2025 — Dez 2025",
          role: "Estagiária de TI | Super Centro Carioca de Saúde",
          desc: "Desenvolvimento de interfaces em Vue.js para o sistema de saúde institucional. Construção de dashboards de KPIs integrados a PostgreSQL para apoiar decisões operacionais e governança de dados.",
          tags: ["Vue.js", "PostgreSQL", "JavaScript", "Python"]
        },
        {
          date: "Jan 2023 - Jun 2023",
          role: "Extensionista | Projeto Censo - UFRRJ",
          desc: "Processamento e limpeza de datasets de monitoramento de saúde utilizando Python (Pandas) e REDCap. Automatização de transferências de dados para MySQL, otimizando os fluxos de trabalho da pesquisa.",
          tags: ["Python", "MySQL", "REDCap"]
        },
      ]
    },
    projects: {
      title: "Projetos",
      moreBtn: "Ver mais",
      items: [
        {
          title: "Dashboard Analítico Urbano do Rio",
          desc: "Painel interativo de métricas urbanas e mobilidade que utiliza datasets públicos do Data.Rio. Envolve processamento de dados com Python, armazenamento em PostgreSQL e integração com Power BI.",
          tags: ["Python", "PostgreSQL", "Power BI", "React", "TypeScript"]
        },
        {
          title: "Recomendador de Filmes com IA",
          desc: "Aplicação que utiliza Grafos e IA para recomendação de filmes. Constrói redes de similaridade baseadas nos metadados da API do banco TMDB e integra com o Google Gemini para traduzir a lógica matemática na interface.",
          tags: ["TypeScript", "React", "AI", "Graphs", "API"]
        }
      ]
    },
    info: {
      title: "Contato",
      desc: (
        <>
          Você pode me contatar por email via <span className="underline underline-offset-4 hover:text-foreground transition-colors">carolineynomura@gmail.com</span> ou ver meus códigos no <a href="https://github.com/carolinenomura" target="_blank" className="underline underline-offset-4 hover:text-foreground transition-colors">Github</a>.
        </>
      ),
      footer: "Construído com Next.js e shadcn/ui © 2026"
    }
  }
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [lang, setLang] = useState<"en" | "pt">("en");
  
  const t = translations[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `transition-colors font-medium ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Previne o comportamento padrão (que é pular seco pro id)
    e.preventDefault(); 
    
    // Procura a seção pelo ID
    const element = document.getElementById(targetId);
    
    if (element) {
      // Força a rolagem suave até o topo do elemento
      element.scrollIntoView({ behavior: "smooth" });
      
      // Atualiza a URL lá em cima (opcional, mas recomendado)
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12 lg:py-24 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-8 animate-in fade-in duration-1000">
      
      {/* LATERAL ESQUERDA (FIXA) */}
      <div className="lg:sticky lg:top-24 flex flex-col justify-between lg:h-[calc(100vh-12rem)]">
        <nav className="flex flex-col items-start gap-4 text-md hidden lg:flex">
          <Link href="#about" className={getLinkClasses("about")} onClick={(e) => handleScroll(e, "about")}>
            {t.nav.about}
          </Link>
          <Link href="#experience" className={getLinkClasses("experience")} onClick={(e) => handleScroll(e, "experience")}>
            {t.nav.experience}
          </Link>
          <Link href="#projects" className={getLinkClasses("projects")} onClick={(e) => handleScroll(e, "projects")}>
            {t.nav.projects}
          </Link>
          <Link href="#info" className={getLinkClasses("info")} onClick={(e) => handleScroll(e, "info")}>
            {t.nav.info}
          </Link>
        </nav>

        {/* Seção inferior da barra lateral (Idioma + Redes Sociais) */}
        <div className="mt-12 lg:mt-0 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-8 lg:gap-6">
          
          {/* Seletor de Idioma */}
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <button 
              onClick={() => setLang("en")} 
              className={`hover:text-foreground transition-colors cursor-pointer ${lang === "en" ? "text-foreground" : ""}`}
            >
              EN
            </button>
            <span>/</span>
            <button 
              onClick={() => setLang("pt")} 
              className={`hover:text-foreground transition-colors cursor-pointer ${lang === "pt" ? "text-foreground" : ""}`}
            >
              PT
            </button>
          </div>

          {/* Ícones Sociais */}
          <div className="flex gap-5 text-muted-foreground">
            <Link href="https://linkedin.com/in/carolinenomura" target="_blank" className="hover:text-foreground transition-transform hover:-translate-y-1">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/carolinenomura" target="_blank" className="hover:text-foreground transition-transform hover:-translate-y-1">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com/caroldoestech" target="_blank" className="hover:text-foreground transition-transform hover:-translate-y-1">
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>

        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL (DIREITA) */}
      <div className="flex flex-col gap-24">
        
        {/* SEÇÃO: ABOUT */}
        <section id="about" className="flex flex-col gap-6 scroll-mt-32">
          

          <h1 className="text-3xl md:text-[40px] leading-tight text-foreground">
            {t.hero.title}
          </h1>
          {/* Elemento Decorativo */}
          <div className="flex gap-4 mb-2">
            
            {/* 1. Quadrado Vermelho / Estrela Amarela */}
            <div className="w-8 h-8 bg-red-500 flex items-center justify-center">
              {/* A classe abaixo faz girar 1 vez por 1 segundo e para */}
              <div className="animate-[spin_1s_ease-out_1]">
                
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_57_5)">
                    <path d="M12.5001 24.2708L9.0105 20.8333H4.16675V15.9896L0.729248 12.5L4.16675 9.01041V4.16666H9.0105L12.5001 0.729164L15.9897 4.16666H20.8334V9.01041L24.2709 12.5L20.8334 15.9896V20.8333H15.9897L12.5001 24.2708Z" fill="#FFCC00"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_5">
                      <rect width="25" height="25" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

                
              </div>
            </div>

            {/* 2. Estrela Azul Solta */}
            <div className="w-8 h-8 flex items-center justify-center">
              {/* A classe abaixo faz girar de trás pra frente por 1.5s e para */}
              <div className="animate-[spin_1.5s_ease-in-out_1_reverse]">
                
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_57_5)">
                <path d="M12.5001 24.2708L9.0105 20.8333H4.16675V15.9896L0.729248 12.5L4.16675 9.01041V4.16666H9.0105L12.5001 0.729164L15.9897 4.16666H20.8334V9.01041L24.2709 12.5L20.8334 15.9896V20.8333H15.9897L12.5001 24.2708Z" fill="#0047FF"/>
                </g>
                <defs>
                <clipPath id="clip0_57_5">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                
              </div>
            </div>

            {/* 3. Quadrado Azul / Estrela Vermelha */}
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
              {/* A classe abaixo faz girar com um efeito elástico no final */}
              <div className="animate-[spin_1.2s_cubic-bezier(0.34,1.56,0.64,1)_1]">
                
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_57_5)">
                <path d="M12.5001 24.2708L9.0105 20.8333H4.16675V15.9896L0.729248 12.5L4.16675 9.01041V4.16666H9.0105L12.5001 0.729164L15.9897 4.16666H20.8334V9.01041L24.2709 12.5L20.8334 15.9896V20.8333H15.9897L12.5001 24.2708Z" fill="#FF0004"/>
                </g>
                <defs>
                <clipPath id="clip0_57_5">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                
              </div>
            </div>
            
          </div>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>{t.hero.p1}</p>
            <p>{t.hero.p2}</p>
          </div>
          
        </section>

        {/* SEÇÃO: EXPERIENCE (Sem Hover na imagem/fundo) */}
        <section id="experience" className="flex flex-col gap-8 scroll-mt-32">
          <h2 className="font-medium text-lg">{t.experience.title}</h2>
          
          <div className="flex flex-col gap-12">
            {t.experience.items.map((item, index) => (
              <div key={index} className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
                <span className="text-sm text-muted-foreground whitespace-nowrap">{item.date}</span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium text-foreground">{item.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-slate-100 hover:bg-slate-200 text-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href={lang === "pt" ? "/carolinenomura.pdf" : "/carolinenomura.pdf"} target="_blank" className="group flex items-center gap-1 text-sm font-medium hover:text-slate-600 transition-colors w-fit self-end mt-4">
            {t.experience.resumeBtn}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
        </section>

        {/* SEÇÃO: PROJECTS (Com seta animada e imagem estática) */}
        <section id="projects" className="flex flex-col gap-8 scroll-mt-32">
          <h2 className="font-medium text-lg">{t.projects.title}</h2>

          <div className="flex flex-col gap-12">
            {t.projects.items.map((item, index) => (
              <div 
                key={index} 
                // Mudamos para flex no mobile e grid no desktop (md)
                className="group transition-all hover:bg-slate-50/50 hover:shadow-sm rounded-lg p-4 -m-4 flex flex-col md:grid md:grid-cols-[120px_1fr] gap-6 items-start cursor-pointer"
              >
                
                {/* IMAGEM: Vai para o final no mobile (order-last) e volta para o topo/esquerda no desktop (md:order-first) */}
                {/* TAMANHO: w-48 (menor) no mobile, e volta a preencher a coluna no desktop (md:w-full) */}
                <div className="order-last md:order-first w-48 md:w-full aspect-video md:aspect-square bg-slate-200 rounded-lg flex-shrink-0 mt-2 md:mt-0"></div>
                
                {/* CONTEÚDO (Títulos, Descrição e Tags) */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium text-foreground group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-slate-100 hover:bg-slate-200 text-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          <Link href="/projects" className="group flex items-center gap-1 text-sm font-medium hover:text-slate-600 transition-colors w-fit self-end mt-4">
            {t.projects.moreBtn} 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </section>

        {/* SEÇÃO: INFO / CONTATO */}
        <section id="info" className="flex flex-col gap-24 pt-8 scroll-mt-32">
          <div>
            <h2 className="font-medium text-lg mb-4">{t.info.title}</h2>
            <p className="text-muted-foreground text-sm">
              {t.info.desc}
            </p>
          </div>

          <footer className="text-sm text-muted-foreground pb-8">
            {t.info.footer}
          </footer>
        </section>

      </div>
    </main>
  );
}