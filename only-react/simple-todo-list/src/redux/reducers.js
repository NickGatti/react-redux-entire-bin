import addTodo from './actions'

const initialState = [
    {
        author: 'Nick',
        title: 'All the things',
        content: 'Be the example, sacrifice myself to show others the truth.'
    },
    {
        author: 'John',
        title: 'The ultimate way to explain things',
        content: 'Show that when you believe in yourself and other people anything is possible.'
    },
    {
        author: 'Maria',
        title: 'The best possible fix for things',
        content: 'Paint the picture, a big picture in a big way.'
    },
    {
        author: 'Troy',
        title: 'The best possible ways to explore life',
        content: 'The proof, what happens when just one thing can go right'
    },
    {
        author: 'Jeff',
        title: 'The ultimate process for diplomacy',
        content: 'All seeing, sees the verge of conflict'
    },
    {
        author: 'David',
        title: 'The way to stand tall in high winds',
        content: 'Knocks shit down when it looks like shit, smashes it. Even at his own risk.'
    },
    {
        author: 'Vaga',
        title: 'The way to believe in the right things',
        content: 'Feels the way around until he loses himself'
    },
    {
        author: 'Amiee',
        title: 'The way to love through trust',
        content: 'Getting good at running away'
    },
    {
        author: 'Amy',
        title: 'The best way to make time',
        content: 'Learning the art of scheduling for real now'
    },
    {
        author: 'Grant',
        title: 'The ultimate way to get it all done',
        content: 'Learning the art of being in multiple places at the same time'
    },
    {
        author: 'Eric',
        title: 'The best way to sacrifice',
        content: 'Learning how to learn'
    },
    {
        author: 'Chris',
        title: 'The ultimate way to get loud, loud as fuck',
        content: 'Trying to configure his voice right so it doesnt blow shit up'
    },
    {
        author: 'Lara',
        title: 'Going crazy',
        content: 'Learning she better believe it before she sears someone into a charred brick'
    },
    {
        author: 'Meryl',
        title: 'The best way to let go',
        content: 'Learning its not just him, its her also'
    },
    {
        author: 'Jesus',
        title: 'Taking credit, teaching',
        content: 'Chillin\''
    },
    {
        author: 'God',
        title: 'Willed it',
        content: 'What now? Everything is built.'
    },
    {
        author: 'Sam',
        title: 'The best way to get rid of cats',
        content: 'Loves LOVES dogs.'
    },
    {
        author: 'Katie',
        title: 'The best way to cook home meals',
        content: 'Hungry hungry mouths'
    },
    {
        author: 'Nmuta',
        title: 'The best way to put his feet up',
        content: 'Cuz that way just wasnt comfortable enough, maybe this way is a lil better, been there seen that'
    },
    {
        author: 'Courtney',
        title: 'The best way to just absorb it for now',
        content: 'Really liking it, loving it in fact, this is the best'
    },
    {
        author: 'Bryce',
        title: 'The best way to spend a good night',
        content: 'Realizing hes been there so much, no one bothers to think he isnt'
    },
    {
        author: 'Diana',
        title: 'The best way to hold a pen',
        content: 'Its going to come and its not gonna stop'
    },
    {
        author: 'Leslie',
        title: 'The best way to get it across',
        content: 'Because I never actually lost it'
    },
    {
        author: 'Shelby',
        title: 'The best way to dial it in',
        content: 'Because being wrong was the best thing that ever happened'
    },
    {
        author: 'Donny',
        title: 'The besy way to spend time with mommy',
        content: 'Things change buddy, Ill be around'
    },
    {
        author: 'Jorden',
        title: 'The best way to stop being a student',
        content: 'Woz U... how cool, learn how to hack'
    }
]

export const addTodoReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case ( 'ADD_TODO' ):
        return state.concat( action.payload )
    default:
        return state
    }
}