export interface GetById<T> {
    getById(id: string): Promise<T | undefined>
}