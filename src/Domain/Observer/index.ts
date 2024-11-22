import IObserver, { Listener } from "./interface";

export default class Observer implements IObserver {
    private listeners: Listener[] = []
    notify(data?: { [x: string]: unknown; }): void {
        for(const listener of this.listeners) listener(data)
    }
    subscribe(listener: Listener): void {
        this.listeners.push(listener)
    }
    unsubscribe(listener: Listener): void {
        this.listeners = this.listeners.filter(listenerItem => listenerItem !== listener)
    }
    
}