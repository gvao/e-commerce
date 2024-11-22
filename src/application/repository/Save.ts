export default interface Save<Input> {
    save(input: Input): Promise<void>
}