import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [ storedValue, setStoredValue ] = useState(() => {
        const localValue = localStorage.getItem(key);
        if(localValue) {
            return JSON.parse(localValue);
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
