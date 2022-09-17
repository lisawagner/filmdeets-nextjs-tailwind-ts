
type StorageType = 'session' | 'local'

type StorageResponse = {
  getItem: (key: string, type?: StorageType) => string
  setItem: (key: string, value: string, type?: StorageType) => boolean
  removeItem: (key: string, type?: StorageType) => void;
}


const useStorage = (): StorageResponse => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' => `${type ?? 'session'}Storage`
  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')()

  // accept 2 params and returns the value from localStorage (or empty if undefined)
  const getItem = (key: string, type?: StorageType): string => {
    return isBrowser ? window[storageType(type)][key] : ''
  }

  const setItem = (key: string, value: string, type?: StorageType): boolean => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value)
      return true
    }
    return false
  }

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem,
  }
}
export default useStorage
 