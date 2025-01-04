class SimpleCache<K, V> {
    private storage: Map<K, V>;

    constructor() {
        this.storage = new Map();
    }

    set(key: K, value: V): void {
        this.storage.set(key, value);
    }

    get(key: K): V | undefined {
        return this.storage.get(key);
    }

    delete(key: K): boolean {
        return this.storage.delete(key);
    }

    clear(): void {
        this.storage.clear();
    }

    size(): number {
        return this.storage.size;
    }
}
