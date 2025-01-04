# Simple Cache

A lightweight TypeScript cache implementation.

## Usage

```typescript
// Create a cache instance
const cache = new SimpleCache<string, number>();

// Set a value
cache.set('key1', 123);

// Get a value
const value = cache.get('key1'); // 123

// Delete a value
cache.delete('key1');

// Clear all values
cache.clear();

// Get cache size
const size = cache.size(); // 0
```
