import { createContext } from "react";
import { IInitialState } from "./books-state";


export const BooksContext = createContext<IInitialState | null>(null);
