import React, {useEffect, useState} from 'react';


export default function useDebounce(value: string, delay: number){
    const [debauncedValue, setDebauncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebauncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    },
        [value]
        )
    return debauncedValue
}
