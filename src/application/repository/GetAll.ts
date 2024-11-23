export interface GetAll<Output> {
    getAll(): Promise<Output[] | undefined>
}