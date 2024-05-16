

const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
    }
]

const App = new Vue({
    el: '#app',
    data:{
        title: 'Star Wars Lego',
        userName: 'Alex Oliveira',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            // alert(`O personagem ${userName} recebeu um like!`)
            const modal = document.getElementById('myModal')
            const messageElement = document.getElementById('modalMessage')
            messageElement.textContent = `O personagem ${userName} recebeu um like!`
            
            // Exibe a modal
            modal.style.display = 'block'
        
            // Fecha a modal ao clicar no botão de fechar
            const closeButton = document.getElementsByClassName('close')[0]
            closeButton.onclick = function() {
                modal.style.display = 'none'
            }
        
            // Fecha a modal após 2 segundos, a menos que o cursor esteja sobre a modal
            let timeoutID = setTimeout(() => {
                closeModal();
            }, 2000)

            // Cancela o fechamento automático se o cursor estiver sobre a modal
            modal.addEventListener('mouseover', () => {
                clearTimeout(timeoutID)
            })

            // Reinicia o timer de fechamento automático quando o cursor sair da modal
            modal.addEventListener('mouseleave', () => {
                timeoutID = setTimeout(() => {
                    closeModal();
                }, 2000)
            })
            // Fecha a modal ao clicar fora dela
            window.onclick = function(event) {
                const modal = document.getElementById('myModal');
                if (event.target == modal) {
                    closeModal();
                }
            };
            
            function closeModal() {
                const modal = document.getElementById('myModal');
                modal.style.display = 'none';
            }
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id                    
            })

            this.characters = result    

            // if (list.length !== result.length) {
            //     // Aguarda 100 milissegundos antes de exibir o alerta
            //     setTimeout(() => {
            //         alert('Personagem removido com sucesso!');
            //     }, 100)}
            if (list.length !== result.length) {
                const modal = document.getElementById('myModal');
                const messageElement = document.getElementById('modalMessage');
                messageElement.textContent = 'Personagem removido com sucesso!';
                
                // Exibe a modal
                modal.style.display = 'block';
            
                // Fecha a modal ao clicar no botão de fechar
                const closeButton = document.getElementsByClassName('close')[0];
                closeButton.onclick = function() {
                    modal.style.display = 'none';
                };
            
                // Fecha a modal após 2 segundos, a menos que o cursor esteja sobre a modal
                let timeoutID = setTimeout(() => {
                    closeModal();
                }, 2000);
            
                // Cancela o fechamento automático se o cursor estiver sobre a modal
                modal.addEventListener('mouseover', () => {
                    clearTimeout(timeoutID);
                });
            
                // Reinicia o timer de fechamento automático quando o cursor sair da modal
                modal.addEventListener('mouseleave', () => {
                    timeoutID = setTimeout(() => {
                        closeModal();
                    }, 2000);
                });
            }
            
            // Fecha a modal ao clicar fora dela
            window.onclick = function(event) {
                const modal = document.getElementById('myModal');
                if (event.target == modal) {
                    closeModal();
                }
            };
            
            function closeModal() {
                const modal = document.getElementById('myModal');
                modal.style.display = 'none';
            }
            
        },
        search() {

            if (this.searchName === '') {
                //return alert('O campo de busca é obrigatório!')
                const modal = document.getElementById('myModal')
                const messageElement = document.getElementById('modalMessage')
                messageElement.textContent = 'O campo de busca é obrigatório!'
                
                // Exibe a modal
                modal.style.display = 'block'
            
                // Fecha a modal ao clicar no botão de fechar
                const closeButton = document.getElementsByClassName('close')[0]
                closeButton.onclick = function() {
                    modal.style.display = 'none'
                }
            
                // Fecha a modal após 2 segundos, a menos que o cursor esteja sobre a modal
                let timeoutID = setTimeout(() => {
                    closeModal();
                }, 2000)

                // Cancela o fechamento automático se o cursor estiver sobre a modal
                modal.addEventListener('mouseover', () => {
                    clearTimeout(timeoutID)
                })

                // Reinicia o timer de fechamento automático quando o cursor sair da modal
                modal.addEventListener('mouseleave', () => {
                    timeoutID = setTimeout(() => {
                        closeModal();
                    }, 2000)
                })
                // Fecha a modal ao clicar fora dela
                window.onclick = function(event) {
                    const modal = document.getElementById('myModal');
                    if (event.target == modal) {
                        closeModal();
                    }
                };
                
                function closeModal() {
                    const modal = document.getElementById('myModal');
                    modal.style.display = 'none';
                }
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome.toLowerCase().includes(this.searchName.toLowerCase())
                //return item.nome === this.searchName
            })

            if (result.length <= 0) {
                //alert('Nenhum registro encontrado.')
                const modal = document.getElementById('myModal')
                const messageElement = document.getElementById('modalMessage')
                messageElement.textContent = 'Nenhum registro encontrado!'
                
                // Exibe a modal
                modal.style.display = 'block'
            
                // Fecha a modal ao clicar no botão de fechar
                const closeButton = document.getElementsByClassName('close')[0]
                closeButton.onclick = function() {
                    modal.style.display = 'none'
                }
            
                // Fecha a modal após 2 segundos, a menos que o cursor esteja sobre a modal
                let timeoutID = setTimeout(() => {
                    closeModal();
                }, 2000)

                // Cancela o fechamento automático se o cursor estiver sobre a modal
                modal.addEventListener('mouseover', () => {
                    clearTimeout(timeoutID)
                })

                // Reinicia o timer de fechamento automático quando o cursor sair da modal
                modal.addEventListener('mouseleave', () => {
                    timeoutID = setTimeout(() => {
                        closeModal();
                    }, 2000)
                })
                // Fecha a modal ao clicar fora dela
                window.onclick = function(event) {
                    const modal = document.getElementById('myModal');
                    if (event.target == modal) {
                        closeModal();
                    }
                };
                
                function closeModal() {
                    const modal = document.getElementById('myModal');
                    modal.style.display = 'none';
                }
            } else {
                this.characters = result
            }

        }
    }
})
