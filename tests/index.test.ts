import { expect, describe, it, beforeEach } from "bun:test";
import { SimpleCache } from "../index";

describe("SimpleCache", () => {
    let cache: SimpleCache<string, number>;

    beforeEach(() => {
        cache = new SimpleCache<string, number>();
    });

    it("should store and retrieve a value", () => {
        cache.set("age", 25);
        expect(cache.get("age")).toBe(25);
    });

    it("should return undefined for non-existent keys", () => {
        expect(cache.get("notfound")).toBeUndefined();
    });

    it("should correctly delete a value", () => {
        cache.set("score", 100);
        expect(cache.delete("score")).toBe(true);
        expect(cache.get("score")).toBeUndefined();
    });

    it("should return false when deleting non-existent key", () => {
        expect(cache.delete("notfound")).toBe(false);
    });

    it("should report correct size", () => {
        expect(cache.size()).toBe(0);
        cache.set("a", 1);
        cache.set("b", 2);
        expect(cache.size()).toBe(2);
    });

    it("should clear all values", () => {
        cache.set("a", 1);
        cache.set("b", 2);
        cache.clear();
        expect(cache.size()).toBe(0);
        expect(cache.get("a")).toBeUndefined();
        expect(cache.get("b")).toBeUndefined();
    });

    it("should update existing values", () => {
        cache.set("score", 100);
        cache.set("score", 200);
        expect(cache.get("score")).toBe(200);
        expect(cache.size()).toBe(1);
    });
});
