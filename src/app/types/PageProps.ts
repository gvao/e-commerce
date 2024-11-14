export type PageProps<P, S> = {
    params?: Promise<P>,
    searchParams?: Promise<S>,
}