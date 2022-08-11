import SWFReader from "@gizeta/swf-reader";
import fs from "fs";
import Jimp from "jimp";
import zlib from "zlib";
import {Buffer} from "buffer";
import {execSync} from "child_process";

export class SWFDataExtractor {

    public extract(assetName: string, inputPath: string, outputPath: string): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            try {
                fs.mkdirSync(`${outputPath}/${assetName}`, {recursive: true});
                execSync(`php "src/binaries/HabboAssetExtractor/Holo5Extractor.php" "${inputPath}/${assetName}.swf" "${outputPath}/${assetName}"`);
                /*console.log(`php "../binaries/HabboAssetExtractor/Holo5Extractor.php" "../../../${inputPath}/${assetName}.swf" "../../../${outputPath}/${assetName}.swf"`);
                const swf = SWFReader.readSync(`${inputPath}/${assetName}.swf`);
                const symbolMap: [] = swf.tags.find((tag: any) => tag.header.code === 76).symbols.map((symbol: any) => {
                    symbol.name = symbol.name.substr(assetName.length + 1);
                    return symbol;
                });
                for (const tag of swf.tags) {

                    if (tag.header.code === 87) {
                        const symbol: any = symbolMap.find((symbol: any) => symbol.id === tag.data.readUInt16LE());
                        if (!symbol) continue;

                        await fs.promises.writeFile(`${outputPath}/${assetName}/${symbol.name}.xml`, tag.data.slice(6));

                    }

                    if (tag.header.code === 36) {
                        const symbol: any = symbolMap.find((symbol: any) => symbol.id === tag.characterId);
                        if (!symbol) continue;
                        const image = new Jimp(tag.bitmapWidth, tag.bitmapHeight);
                        const bitmap = zlib.unzipSync(Buffer.from(tag.zlibBitmapData, 'hex'));

                        let pos = 0;

                        for (let y = 0; y < tag.bitmapHeight; y++) {
                            for (let x = 0; x < tag.bitmapWidth; x++) {
                                const a = bitmap.readUInt8(pos++);
                                const r = bitmap.readUInt8(pos++);
                                const g = bitmap.readUInt8(pos++);
                                const b = bitmap.readUInt8(pos++);

                                image.setPixelColor(Jimp.rgbaToInt(r, g, b, a), x, y);
                            }
                        }


                        const splittedName: string[] = symbol.name.split("_");
                        if (splittedName[splittedName.length - 4] !== "32") {
                            await image.writeAsync(`${outputPath}/${assetName}/sprites/${symbol.name}.png`);
                        }

                    }
                }*/
                fs.readdir(`${outputPath}/${assetName}/sprites`, function(err, files) {
                    if (err) {
                        resolve(false);
                    } else {
                        if (!files.length ||files.length === 0) {
                            resolve(false);
                        } else {
                            resolve(true);
                        }
                    }
                });
            } catch (e) {
                resolve(false);
            }
        });
    }

}