import {IRepository} from "./IRepository";

export default class Repository implements IRepository {

    public do() {
        console.log('do');
    }

    public some() {
        console.log('some');
    }
}
