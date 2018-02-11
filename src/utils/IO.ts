import * as fs from "fs";

/**
 * class for simple IO
 * @export
 * @class IO
 */
export class IO {

    /**
     * Wrap fs.writeFile for promise-based calling
     * @static
     * @param {string} path - place to write to
     * @param {*} data - content to write
     * @returns {Promise<void>} - when write is complete
     * @memberof IO
     */
    public static writeFile(path: string, data: any): Promise<void> {
        return new Promise<void>( (resolve, reject) => {
            fs.writeFile(path, data, (error) => {
                if (error) {
                    reject(error);
                }
                resolve();
            });
        });
    }

    /**
     * Make directory
     * @static
     * @param {string} dir - directory to make
     * @memberof IO
     */
    public static mkdirSync(dir: string) {
        if (!IO.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }

    /**
     * Read file and return to caller
     * @static
     * @param {string} path - path to read file
     * @returns - file contents
     * @memberof IO
     */
    public static readFileSync(path: string) {
        return fs.readFileSync(path).toString();
    }

    /**
     * Return whether a given file already exists
     * @static
     * @param {string} path - path of file to check
     * @returns - true if file exists, false otherwise
     * @memberof IO
     */
    public static existsSync(path: string) {
        return fs.existsSync(path);
    }
}