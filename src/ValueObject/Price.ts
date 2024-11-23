export default class Price {
    value: number;
    constructor(value: number) {
        if(typeof value !== 'number') throw new Error('Invalid not a number')
        this.value = value
    }
}