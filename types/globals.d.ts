export{}
import { User } from "./types"
declare global {
    interface CustomJwtSessionClains extends User{}
}