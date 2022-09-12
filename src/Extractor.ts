import nodePackage from '../package.json';
import {FurnitureTask} from "./tasks/FurnitureTask";
import {EffectTask} from "./tasks/EffectTask";
import {GamedataTask} from "./tasks/GamedataTask";

export class Extractor {

    private _furnitureTask: FurnitureTask;
    private _effectTask: EffectTask;
    private _gamedataTask: GamedataTask;

    public async initialise(): Promise<void> {
        console.log("\x1b[33m", "   _____            _   _                      \n" +
            "  / ____|          | | (_)                     \n" +
            " | (___   ___ _   _| |_ _                      \n" +
            "  \\___ \\ / __| | | | __| |                     \n" +
            "  ____) | (__| |_| | |_| |                     \n" +
            " |_____/ \\___|\\__,_|\\__|_|       _             \n" +
            " |  ____|    | |                | |            \n" +
            " | |__  __  _| |_ _ __ __ _  ___| |_ ___  _ __ \n" +
            " |  __| \\ \\/ / __| '__/ _` |/ __| __/ _ \\| '__|\n" +
            " | |____ >  <| |_| | | (_| | (__| || (_) | |   \n" +
            " |______/_/\\_\\\\__|_|  \\__,_|\\___|\\__\\___/|_|   \n" +
            "                                               ");
        console.log("\x1b[0m", ">", "\x1b[32m", `Version ${nodePackage.version}`);
        console.log("\x1b[0m", "\n");

        /*this._furnitureTask = new FurnitureTask();
        await this._furnitureTask.initialise();
        this._furnitureTask.run();*/
        /*this._effectTask = new EffectTask();
        await this._effectTask.initialise();
        this._effectTask.run();*/
        this._gamedataTask = new GamedataTask();
        await this._gamedataTask.initialise();
        this._gamedataTask.run();
    }

}