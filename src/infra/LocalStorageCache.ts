import { Cache } from '@/domain/ports/Cache';

export class LocalStorageCache implements Cache {
  constructor(private ttl?: number) {}

  private isExpired(item: string) {
    if (!this.ttl) {
      return false;
    }
    // eslint-disable-next-line
    const { value, timestamp } = JSON.parse(item);
    return Date.now() - timestamp > this.ttl;
  }

  async get<T>(key: string): Promise<T | null> {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    if (item && this.isExpired(item)) {
      this.delete(key);
      return null;
    }
    return JSON.parse(item).value as T;
  }

  async set<T>(key: string, value: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify({ value, timestamp: Date.now() }));
  }

  async delete(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}
