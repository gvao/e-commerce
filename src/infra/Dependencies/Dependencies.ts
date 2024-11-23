export default class Dependencies {
    static readonly dependencies: Record<string, unknown> = {}

    getDependency<T>(dependencyName: keyof typeof Dependencies.dependencies) {
        return Dependencies.dependencies[dependencyName] as T
    }

    cadasterDependency(dependencyName: string, dependency: unknown) {
        Dependencies.dependencies[dependencyName] = dependency
    }
}