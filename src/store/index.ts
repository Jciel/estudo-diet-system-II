import { createStore } from "vuex"

export default createStore({
    state: {
        user: {
            id: "2b26c20e-63c0-4146-a626-1f3035065d77",
            name: "Maria",
            profilePhoto: "http://s2.glbimg.com/9rCR6Mw-TJvqbROUP3fTLwfXXOg=/e.glbimg.com/og/ed/f/original/2017/11/08/screenshot_22.jpg",
        },

        records: [
            {
                id: "47f34c13-69ae-4457-a481-1af76d2eaff8",
                title: "Almoço",
                date: new Date(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                image: "https://receitanatureba.com/wp-content/uploads/2018/05/sanduiche-natural-para-vender-10-receitas-faceis.png",
                comments: [
                    {
                        id: "2de9ae5e-3e71-409f-be15-4fd74aa1368f",
                        comment: "Comentário de algum registro"
                    },
                    {
                        id: "02d0a2d0-5992-4364-b106-edf415264631",
                        comment: "Outro comentário de algum registro"
                    }
                ]
            },
            {
                id: "ba7cf7af-bfe3-4873-85f1-f8e1ab8e1e08",
                title: "Café da manhã",
                date: new Date(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                image: "https://receitanatureba.com/wp-content/uploads/2018/05/sanduiche-natural-para-vender-10-receitas-faceis.png",
                comments: []
            },
            {
                id: "fefaca48-5a2e-4f45-bb01-9a598e123da7",
                title: "Jantar",
                date: new Date(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                image: "https://receitanatureba.com/wp-content/uploads/2018/05/sanduiche-natural-para-vender-10-receitas-faceis.png",
                comments: []
            }
        ]
    },

    mutations: {
        saveRegister (state, register) {
            state.records.push(register)
        },

        saveComment (state, {idRegister, comment}) {
            state.records.forEach(record => {
                if (record.id === idRegister) {
                    record.comments.push(comment)
                }
            })
        }
    },

    actions: {
        saveNewRegister ({ commit }, register) {
            commit('saveRegister', register)
        },

        saveComment ({ commit }, newComment) {
            commit('saveComment', newComment)
        }
    },

    getters: {
      user: state => state.user,
      records: state => state.records,
      recordsByDate: (state) => (date: Date) => {
          return state.records.filter(record => {
              return record.date.toLocaleDateString('pt-BR') === date.toLocaleDateString('pt-BR')
          })
      }
    },

    modules: {}
})
