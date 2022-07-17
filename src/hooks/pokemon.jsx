import { useContext, createContext } from "react"

export const featuredContext = createContext({
    value: undefined,
    setValue: () => {}
});

