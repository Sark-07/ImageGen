import {surpriseMePrompts} from '../constants/randomPromts'


const getRandomPromts = (promt) => {

    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    if (promt === surpriseMePrompts[randomIndex]) return getRandomPromts(promt)
    return surpriseMePrompts[randomIndex]
}


export default getRandomPromts