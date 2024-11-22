export default interface IObserver {
    subscribe(listener: Listener): void
    unsubscribe(listener: Listener): void
    notify(data: Data): void
}

export type Listener = (data?: Data) => void
type Data = Record<string, unknown>