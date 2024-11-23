export interface DeleteById {
    deleteById(id: string): Promise<void>
}