import { defineStore } from 'pinia'

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        currentDate: 1996,
        currentDatePage: 1,
        timeline: {
            1996: {
                name: 1996,
                pages: {
                    1: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    2: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    3: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
            2015: {
                name: 2015,
                pages: {
                    1: {
                        title: "Naissance 2015",
                        description: "description Naissance 2015",
                        img: '/test.png'
                    },
                    2: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
            2016: {
                name: 2016,
                pages: {
                    1: {
                        title: "Naissance 2016",
                        description: "description Naissance 2016",
                        img: '/test.png'
                    },
                    2: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    3: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    4: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
            2017: {
                name: 2017,
                pages: {
                    1: {
                        title: "Naissance 2017",
                        description: "description Naissance 2017",
                        img: '/test.png'
                    },
                    2: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    3: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    4: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    5: {
                        title: "Naissance",
                        description: "description Naissance 2017",
                        img: '/test.png'
                    },
                    6: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    7: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    8: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
            2018: {
                name: 2018,
                pages: {
                    1: {
                        title: "Naissance 2018",
                        description: "description Naissance 2018",
                        img: '/test.png'
                    },
                    2: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    3: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    4: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    5: {
                        title: "Naissance",
                        description: "description Naissance 2017",
                        img: '/test.png'
                    },
                    6: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    7: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    8: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
            2019: {
                name: 2019,
                pages: {
                    1: {
                        title: "Naissance 2019",
                        description: "description Naissance 2019",
                        img: '/test.png'
                    },
                    2: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    3: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    4: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    5: {
                        title: "Naissance",
                        description: "description Naissance 2017",
                        img: '/test.png'
                    },
                    6: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    7: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                    8: {
                        title: "Naissance",
                        description: "description Naissance",
                        img: '/test.png'
                    },
                },
            },
        }
    }),
    getters: {
        // GET
        getTimeline: (state) => {
            return state.timeline;
        },
        getCurrentDateData: (state) => {
            return state.timeline[state.currentDate];
        },
        getCurrentDatePageData: (state) => {
            return state.timeline[state.currentDate].pages[state.currentDatePage];
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