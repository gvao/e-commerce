export default interface GetAll<Output> {
    getAll(): Promise<Output[] | undefined>
}