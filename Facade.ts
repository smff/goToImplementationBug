import Repository from "./Repository";
import {IRepository} from "./IRepository";


export default class Facade {
    private repository: IRepository;

    construct() {
        this.repository = new Repository();
    }

    facadeMagic() {
        /*
            тыкаем cmd + b на some()
            ожидаем: попасть в фаил Repository.ts line 9
            реальность: фаил IRepository.ts line 3
           ~~больно до слез~~
            тыкаем cmd + alt + b на some()
            ожидаем: попасть в фаил Repository.ts line 9
            реальность: фаил IRepository.ts line 3
         */
        return this.repository.some();
    }

}
