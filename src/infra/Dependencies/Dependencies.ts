export default class Dependencies {
    static readonly dependencies: Map<string, any> = new Map()

    getDependency<T>(dependencyName: string): T {
        if (!Dependencies.dependencies.has(dependencyName)) throw new Error(`dependency ${dependencyName} not found`)
        return Dependencies.dependencies.get(dependencyName)
    }

    cadasterDependency(dependencyName: string, dependency: unknown) {
        Dependencies.dependencies.set(dependencyName, dependency)
    }
}

