import {Module} from "@nestjs/common";
import {FileService} from "./file.service";


@Module({
    exports: [],
    controllers: [],
    imports: [],
    providers: [FileService]
})

export class FileModule {}