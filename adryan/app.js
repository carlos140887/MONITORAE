document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');
    const backButtons = document.querySelectorAll('.back-button');
    const solutionCards = document.querySelectorAll('.solution-card');
    const feedTabs = document.querySelectorAll('.feed-tab');
    const feedItems = document.querySelectorAll('.feed-item');
    const mapFilters = document.querySelectorAll('.map-filter');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const floatingButton = document.querySelector('.btn-floating');

    // Dados dos recursos
    const features = {
        leakDetection: {
            title: "Sensores de Vazamentos",
            image: "https://images.unsplash.com/photo-1581093196277-1c6dd0a9cc5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            content: `
                <h2>Monitoramento Inteligente</h2>
                <p>Sistema de sensores instalados na rede de abastecimento que detectam vazamentos em tempo real, reduzindo perdas e custos de reparo.</p>
                <p><strong>Status:</strong> Ativo em 72% da rede</p>
                <p><strong>Última detecção:</strong> 15/06/2023 - Rua da Aurora</p>
                <div class="example-gallery">
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1581093196277-1c6dd0a9cc5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Sensor instalado">
                        <div class="example-caption">Sensor em operação</div>
                    </div>
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Mapa de vazamentos">
                        <div class="example-caption">Mapa de ocorrências</div>
                    </div>
                </div>
            `
        },
        rainHarvest: {
            title: "Captação de Água da Chuva",
            image: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            content: `
                <h2>Sistema Automatizado</h2>
                <p>Tecnologia de captação pluvial com sensores que automatizam o armazenamento e distribuição para usos não potáveis.</p>
                <p><strong>Capacidade atual:</strong> 1.200 litros/m²</p>
                <p><strong>Áreas atendidas:</strong> 12 bairros</p>
                <div class="example-gallery">
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Coletor pluvial">
                        <div class="example-caption">Coletor instalado</div>
                    </div>
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1581093057305-409e0ff73a0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Sistema de filtragem">
                        <div class="example-caption">Filtragem da água</div>
                    </div>
                </div>
            `
        },
        communityApp: {
            title: "Gestão Comunitária",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            content: `
                <h2>App Colaborativo</h2>
                <p>Plataforma que permite aos cidadãos reportar problemas, receber alertas e acompanhar o status do abastecimento em sua região.</p>
                <p><strong>Lançamento previsto:</strong> Agosto/2023</p>
                <div class="example-gallery">
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Tela do aplicativo">
                        <div class="example-caption">Interface do app</div>
                    </div>
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Reporte de problema">
                        <div class="example-caption">Tela de reportes</div>
                    </div>
                </div>
            `
        },
        predictiveAnalysis: {
            title: "Análise Preditiva",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            content: `
                <h2>IA e Big Data</h2>
                <p>Sistema inteligente que prevê crises hídricas com base em dados históricos, consumo atual e previsões climáticas.</p>
                <p><strong>Precisão atual:</strong> 89%</p>
                <p><strong>Próxima análise:</strong> 20/06/2023</p>
                <div class="example-gallery">
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Dashboard analítico">
                        <div class="example-caption">Painel de controle</div>
                    </div>
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Gráficos de previsão">
                        <div class="example-caption">Gráficos preditivos</div>
                    </div>
                </div>
            `
        },
        waterReuse: {
            title: "Reaproveitamento",
            image: "https://images.unsplash.com/photo-1601645191164-3fc6d5e2c3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            content: `
                <h2>Águas Cinzas</h2>
                <p>Sistema de tratamento e reutilização de águas servidas para irrigação, limpeza e outros usos não potáveis.</p>
                <p><strong>Em implantação:</strong> 3 unidades piloto</p>
                <div class="example-gallery">
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1601645191164-3fc6d5e2c3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Sistema de tratamento">
                        <div class="example-caption">Estação de tratamento</div>
                    </div>
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1601645191050-9af64d1bcc48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Água sendo reutilizada">
                        <div class="example-caption">Reuso para irrigação</div>
                    </div>
                </div>
            `
        }
    };

    // Função para alternar entre telas
    function showScreen(screenId) {
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // Navegação principal
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetScreen = this.getAttribute('data-screen');
            
            // Atualiza navegação
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Mostra tela correspondente
            if (targetScreen) {
                showScreen(targetScreen);
            }
        });
    });

    // Botões voltar
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            showScreen('homeScreen');
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-screen="homeScreen"]').classList.add('active');
        });
    });

    // Abrir detalhes do recurso
    solutionCards.forEach(card => {
        card.addEventListener('click', function() {
            const feature = this.getAttribute('data-feature');
            const featureData = features[feature];
            
            // Atualiza tela de detalhes
            document.getElementById('featureTitle').textContent = featureData.title;
            document.getElementById('featureImage').src = featureData.image;
            document.getElementById('featureImage').alt = featureData.title;
            document.getElementById('featureContent').innerHTML = featureData.content;
            
            // Navega para tela de detalhes
            showScreen('featureScreen');
        });
    });

    // Controle das abas da comunidade
    feedTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const feedType = this.getAttribute('data-feed');
            
            // Atualiza aba ativa
            feedTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Mostra conteúdo correspondente
            feedItems.forEach(item => {
                item.classList.add('hidden');
            });
            
            if (feedType === 'reports') {
                document.querySelector('.feed-item:first-child').classList.remove('hidden');
            } else {
                document.querySelector(`.feed-item[data-feed="${feedType}"]`).classList.remove('hidden');
            }
        });
    });

    // Filtros do mapa
    mapFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const layer = this.getAttribute('data-layer');
            
            // Atualiza filtro ativo
            mapFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Simula mudança de camada (em produção seria integração com API de mapas)
            const mapView = document.querySelector('.map-view');
            mapView.innerHTML = `
                <div class="map-placeholder">
                    <i class="fas fa-map-marked-alt text-4xl text-primary mb-3"></i>
                    <p>Mostrando: ${layer === 'all' ? 'Todos os recursos' : layer === 'leaks' ? 'Vazamentos' : 'Pontos de captação'}</p>
                </div>
            `;
        });
    });

    // Toggle do tema escuro
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
        // Salva preferência no localStorage
        localStorage.setItem('darkMode', this.checked);
    });

    // Verifica preferência de tema ao carregar
    if (localStorage.getItem('darkMode') === 'true') {
        darkModeToggle.checked = true;
        document.body.classList.add('dark-mode');
    }

    // Botão flutuante da comunidade
    if (floatingButton) {
        floatingButton.addEventListener('click', function() {
            alert('Funcionalidade de novo post será implementada aqui!');
        });
    }

    // Simular status dinâmico dos sensores
    setInterval(() => {
        const indicators = document.querySelectorAll('.status-indicator');
        indicators.forEach(indicator => {
            // 20% de chance de mudar o status
            if (Math.random() < 0.2) {
                indicator.classList.toggle('active');
            }
        });
    }, 10000);

    // Animações ao rolar a página
    const animateElements = document.querySelectorAll('.solution-card, .community-alert');
    animateElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('animate-mobile');
    });
});