import { ExportToCsv } from 'export-to-csv';
import config from './config';

import * as fs from 'fs';


const CSVoptions = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Channel wrongly named',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};


class ExportToCSV {

    CSVExporter: ExportToCsv;

    constructor() {
        this.CSVExporter = new ExportToCsv(CSVoptions);
    }

    public generateCSV(table: any) {
        let csv = this.CSVExporter.generateCsv(table, true);
        fs.writeFile('export.csv', csv,  function(err:any) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }
};

const exportToCSV = new ExportToCSV();
export { exportToCSV };
