import {createClient} from 'contentful'

export default createClient({
    //space: 'wj67o1t33en1',
    //accessToken: 'YKSAIw8nOAVcrC8IyXicbTJ6epxGuCHaRQUL4kkekwA'
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_API_TOKEN
})