import { defineStore } from 'pinia'

export const useTemplateStore = defineStore({
    id: 'template',
    state: () => ({
        currentSection: null,
        currentSectionPage: null,
        title: 'Projet Professionnel',
        sections: {
            1: {
                title: 'Layout',
                description: '',
                img: '',
                pages: {
                    1: {
                        title: "Page 1",
                        
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
            2: {
                title: 'Text',
                pages: {
                    1: {
                        title: "Page 1",
                        description: "description Naissance 2015",
                        img: '/test.png'
                    },
                    2: {
                        title: "Page 2",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
        }
    }),
    getters: {
        // GET
        getTitle: (state) => {
            return state.title;
        },
        getSections: (state) => {
            return state.sections;
        },
        getCurrentSection: (state) => {
            let index = state.currentSection || 0;
            return state.sections[index];
        },
        getCurrentDatePageData: (state) => {
            let indexSection = state.currentSection || 0;
            let indexSectionPage = state.currentSection || 0;
            return state.sections[indexSection].pages[indexSectionPage];
        },

        // HAS
        hasNextDate: (state) => {
            return true;
        },
        hasNextDatePage: (state) => {
            return true;
        }
    },
    actions: {

    }
})