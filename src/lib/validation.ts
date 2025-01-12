/**
 * Validation class
 */
export default class Validation {
    sucess: boolean;
    message: string;

    /**
     * 
     * @param sucess if the validation was sucessful
     * @param message the validation message, if validation failed
     */
    constructor(sucess: boolean = true, message: string = "") {
        this.sucess = sucess;
        this.message = message;
    }
}